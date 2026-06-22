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
  async getAppointmentById(@CurrentUser() user: User, @Param('id') id: string): Promise<AppointmentSummary>{
    const appointment = await this.appointmentService.getAppointmentById(Number(id), user.id, user.role);
    return {
      scheduledDate: appointment.scheduledAt.getDay(),
      scheduledHour: appointment.scheduledAt.getHours(),
      status: appointment.status,
      medicName: appointment.name,
      medicSpecialty: appointment.specialty
    }
  }

  @Post()
  async createAppointment(@Body() appointment: CreateAppointmentDTO, @CurrentUser() user: User){
    return this.appointmentService.createAppointment(appointment, user.email, appointment.crm);
  }

  @Patch(':id')
  async updateAppointmentStatus(@Param('id') id: string, @Body('status') status: AppointmentStatus, @CurrentUser() user: User){
    return this.appointmentService.updateStatus(Number(id), status, user.role, user.id);
  }

  @Patch(':id/cancel')
  async cancelAppointment(@Param('id') id: string, @CurrentUser() user: User){
    return this.appointmentService.cancelAppointment(Number(id), user.role, user.id);
  }
}
