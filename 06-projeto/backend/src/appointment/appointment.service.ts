import { ConflictException, ForbiddenException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { AppointmentRepository } from './appointment.repository';
import { Appointment, AppointmentStatus, Role } from '@prisma/client';
import { CreateAppointmentDTO } from './dto/appointment.dto';
import { UserService } from 'src/user/user.service';
import { MedicService } from 'src/medic/medic.service';


const VALID_TRANSITIONS: Record<AppointmentStatus, AppointmentStatus[] | null> = {
    PENDING: ["CONFIRMED", "CANCELLED"],
    CONFIRMED: ["COMPLETED", "CANCELLED"],
    COMPLETED: null,
    CANCELLED: null
};

@Injectable()
export class AppointmentService {
    constructor(private appointmentRepository: AppointmentRepository, private userService: UserService, private medicService: MedicService){};
    private readonly logger = new Logger();

    private async assertOwnership(userRole: Role, userId: number, appointment: Appointment){
        if(userRole == 'ADMIN') return;

        if(userRole == 'PATIENT'){
            if(appointment.userId != userId){
                throw new ForbiddenException(`Appointment does not belong to ${userId}`)
            }
            return;
        }

        if(userRole == 'MEDIC'){
            const medic = await this.medicService.getMedicByUser(userId);
            if(appointment.medicId != medic?.id){
                throw new ForbiddenException(`Appointment does not belong to ${userId}`);
            }
            return;
        }
    }

    async getAllAppointments(){
        this.logger.debug(`Listing all appointments`);

        const appointments = await this.appointmentRepository.findAll();
        this.logger.log(`Appointments listed - ${appointments.length}`)
        return appointments;
    }

    async getPatientAppointments(userId: number){
        const patientAppointments = await this.appointmentRepository.findAll(userId);
        const medics = await this.medicService.getMedics();
        const medicMap = new Map(medics.map(medic => [medic.id, medic]));

        return patientAppointments.map(appointment => {
            const medic = medicMap.get(appointment.medicId);
            return {
                ...appointment,
                medicName: medic?.name,
                medicSpecialty: medic?.specialty
            };
        });
    }

    async getMedicAppointments(medicUserId: number){
        const medics = await this.medicService.getMedics();
        const medic = medics.find(medic => medic.userId == medicUserId);
        const medicAppointments = await this.appointmentRepository.findByMedic(medic!.id);

        const patients = await this.userService.getUsers();
        const patientMap = new Map(patients.map(patient => [patient.id, patient.name]));

        return medicAppointments.map(appointment => ({
            ...appointment,
            patientName: patientMap.get(appointment.userId)
        }));
    }

    async getAppointmentById(id: number, userId: number, userRole: Role){
        this.logger.debug(`Getting appointment - ${id}`);
        const appointment = await this.appointmentRepository.findById(id);

        if(!appointment){
            this.logger.warn(`Appointment not found - ${id}`);
            throw new NotFoundException(`Appointment not found`);
        }
        
        await this.assertOwnership(userRole, userId, appointment);
        
        const medic = await this.medicService.getMedicById(appointment.medicId);

        this.logger.log(`Appointment found - ${appointment.id}, ${appointment.status}`);
        return { ...appointment, name: medic.name, specialty: medic.specialty };
    }

    async createAppointment(appointmentData: CreateAppointmentDTO, userEmail: string, medicCRM: string): Promise<Appointment>{
        this.logger.debug(`Creating appointment - ${appointmentData.scheduledAt}`);

        const user = await this.userService.getUserByEmail(userEmail);
        const medic = await this.medicService.getMedicByCRM(medicCRM);

        const userId = user?.id;
        const medicId = medic?.id;

        if(medic?.userId == userId){
            this.logger.warn(`Cannot create an appointment to a doctor - ${userId} = ${medic?.userId}`);
            throw new ConflictException(`Cannot create an appontment to a doctor`);
        }

        if(appointmentData.scheduledAt.getTime() < Date.now() ){
            this.logger.warn(`Invalid date - ${appointmentData} has already passed`);
            throw new ConflictException(`Invalid date - Select a future date`);
        }

        const medicAppointments = await this.appointmentRepository.findByMedic(medicId!);

        const sameHourAppointment = medicAppointments.find(appointment =>
         appointment.status !== 'CANCELLED' &&
         Math.abs(appointmentData.scheduledAt.getTime() - appointment.scheduledAt.getTime()) < 30 * 60 * 1000
        );

        if(sameHourAppointment){
            this.logger.warn(`Appointment in the same date:time period - ${appointmentData.scheduledAt} - ${sameHourAppointment}`);
            throw new ConflictException(`There is already an appointment  at this time period`);
        }

        const appointment = await this.appointmentRepository.create(appointmentData, userId!, medicId!);
        return appointment;
    }

    async updateStatus(id: number, newStatus: AppointmentStatus, userRole: Role, userId: number): Promise<Appointment>{
        const appointment = await this.appointmentRepository.findById(id);

        if(!appointment){
            throw new NotFoundException(`Appointment not found`);
        }

        await this.assertOwnership(userRole, userId, appointment);

        const allowed = VALID_TRANSITIONS[appointment.status];
        if(!allowed || !allowed.includes(newStatus)){
            this.logger.warn(`Invalid transaction: ${appointment.status} -> ${newStatus}`);
            throw new ConflictException(`Cannot change status from ${appointment.status} to ${newStatus}`);
        }

        return this.appointmentRepository.updateStatus(id, newStatus);
    }

    async cancelAppointment(id: number, userRole: Role, userId: number): Promise<Appointment>{
        const appointment = await this.appointmentRepository.findById(id);

        if(!appointment){
            throw new NotFoundException(`Appointment not found`);
        }

        await this.assertOwnership(userRole, userId, appointment);

        const allowedTransaction = VALID_TRANSITIONS[appointment.status];
        if(!allowedTransaction){
            this.logger.warn(`Invalid transaction: ${appointment.status} -> CANCELLED`);
            throw new ConflictException(`Cannot change status from ${appointment.status} to CANCELLED`);
        }

        return this.appointmentRepository.cancelAppointment(id);
    }
}
