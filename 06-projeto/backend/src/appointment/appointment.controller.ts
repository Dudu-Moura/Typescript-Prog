import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentSummary, CreateAppointmentDTO } from './dto/appointment.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { CurrentUser } from 'src/decorators/current_user.decorator';
import type { AppointmentStatus, User } from '@prisma/client';

@Controller('appointment')
@UseGuards(JwtGuard, RolesGuard)
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {};

  @Get()
  async getAppointments(@CurrentUser() user: User){
    
    if(user.role == 'PATIENT'){ 
      const patientAppointments = await this.appointmentService.getPatientAppointments(user.id);
      return patientAppointments.map(appointment => ({
        scheduledDate: appointment.scheduledAt.getDay(),
        scheduledHour: appointment.scheduledAt.getHours(),
        status: appointment.status,
        medicName: appointment.medicName,
        medicSpecialty: appointment.medicSpecialty
      }));
    } 
     
    if(user.role == 'MEDIC') {
      const medicAppointments = await this.appointmentService.getMedicAppointments(user.id);
      return medicAppointments.map(appointment => ({
        scheduledDate: appointment.scheduledAt.getDay(),
        scheduledHour: appointment.scheduledAt.getHours(),
        status: appointment.status,
        patientName: appointment.patientName
      }))
    };

    return this.appointmentService.getAllAppointments();
  }

  @Get(':id')
  async getAppointmentById(@Param('id') id: string): Promise<AppointmentSummary>{
    const appointment = await this.appointmentService.getAppointmentById(Number(id));
    return {
      scheduledDate: appointment.scheduledAt.getDay(),
      scheduledHour: appointment.scheduledAt.getHours(),
      status: appointment.status,
      medicName: appointment.name,
      medicSpecialty: appointment.specialty
    }
  }

  @Post()
  async createAppointment(@Body() appointment: CreateAppointmentDTO, @CurrentUser() user: User, @Body('crm') crm: string){
    return this.appointmentService.createAppointment(appointment, user.email, crm);
  }

  @Patch(':id')
  async updateAppointmentStatus(@Param('id') id: string, @Body('status') status: AppointmentStatus){
    return this.appointmentService.updateStatus(Number(id), status);
  }

  @Patch(':id')
  async cancelAppointment(@Param('id') id: string){
    return this.appointmentService.cancelAppointment(Number(id));
  }
}
