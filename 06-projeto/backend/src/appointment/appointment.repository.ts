import { Injectable } from "@nestjs/common";
import { Appointment, AppointmentStatus } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateAppointmentDTO } from "./dto/appointment.dto";

@Injectable()
export class AppointmentRepository{
    constructor(private prisma: PrismaService){};

    async findAll(id?: number): Promise<Appointment[]>{
        return this.prisma.appointment.findMany({
            where: { id }
        });
    }

    async findById(id: number): Promise<Appointment | null>{
        return this.prisma.appointment.findUnique({
            where: { id }
        });
    }

    async findByMedic(medicId: number): Promise<Appointment[]>{
        return this.prisma.appointment.findMany({
            where: { medicId: medicId }
        })
    }

    async create(appointment: CreateAppointmentDTO, userId: number, medicId: number): Promise<Appointment>{
        return this.prisma.appointment.create({
            data: {...appointment, userId, medicId}
        });
    }

    async updateStatus(id: number, status: AppointmentStatus): Promise<Appointment>{
        return this.prisma.appointment.update({
            data: { status },
            where: { id }
        })
    }

    async cancelAppointment(id: number): Promise<Appointment>{
        return this.prisma.appointment.update({
            where: { id },
            data: { status: 'CANCELLED' }
        })
    }
}