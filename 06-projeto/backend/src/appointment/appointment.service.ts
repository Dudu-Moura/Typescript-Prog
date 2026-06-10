import { ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { AppointmentRepository } from './appointment.repository';
import { Appointment, AppointmentStatus, Medic, User } from '@prisma/client';
import { AppointmentSummary, CreateAppointmentDTO } from './dto/appointment.dto';
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

    async getAppointments(): Promise<Appointment[]>{
        this.logger.debug(`Listing all appointments: `);
        const appointments = await this.appointmentRepository.findAll();

        this.logger.log(`Appointments listed - ${appointments.length}`)
        return appointments;
    }

    async getAppointmentById(id: number): Promise<AppointmentSummary | null>{
        this.logger.debug(`Getting appointment - ${id}`);
        const appointment = await this.appointmentRepository.findById(id);

        if(!appointment){
            this.logger.warn(`Appointment not found - ${id}`);
            throw new NotFoundException(`Appointment not found`);
        }

        const medic = await this.medicService.getMedicById(appointment.medicId);
        const patient = await this.userService.getUserById(appointment.userId);

        this.logger.log(`Appointment found - ${appointment.id}, ${appointment.status}`);
        return {
            scheduledDate: appointment.scheduledAt.getDay(),
            scheduledHour: appointment.scheduledAt.getHours(),
            status: appointment.status,
            medicName: medic!.name,
            medicSpecialty: medic!.specialty
        };
    }

    async createAppointment(appointmentData: CreateAppointmentDTO, userCPF: string, medicCRM: string): Promise<Appointment>{
        this.logger.debug(`Creating appointment - ${appointmentData.scheduledAt}`);

        const user = await this.userService.getUserByCPF(userCPF);
        const medic = await this.medicService.getMedicByCRM(medicCRM);

        const userId = user?.id;
        const medicId = medic?.id;

        if(medicId == userId){
            this.logger.warn(`Cannot create an appointment to a doctor - ${userId} = ${medicId}`);
            throw new ConflictException(`Cannot create an appontment to a doctor`);
        }

        if(appointmentData.scheduledAt.getTime() < Date.now() ){
            this.logger.warn(`Invalid date - ${appointmentData} has already passed`);
            throw new ConflictException(`Invalid date - Select a future date`);
        }

        const appointment = await this.appointmentRepository.create(appointmentData, userId!, medicId!);
        return appointment;
    }

    async updateStatus(id: number, newStatus: AppointmentStatus): Promise<Appointment>{
        const appointment = await this.appointmentRepository.findById(id);

        if(!appointment){
            throw new NotFoundException(`Appointment not found`);
        }

        const allowed = VALID_TRANSITIONS[appointment.status];
        if(!allowed || !allowed.includes(newStatus)){
            this.logger.warn(`Invalid transaction: ${appointment.status} -> ${newStatus}`);
            throw new ConflictException(`Cannot change status from ${appointment.status} to ${newStatus}`);
        }

        return this.appointmentRepository.updateStatus(id, newStatus);
    }
}
