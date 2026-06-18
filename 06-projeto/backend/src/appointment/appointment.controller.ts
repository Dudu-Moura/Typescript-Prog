import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDTO } from './dto/appointment.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/role.guard';

@Controller('appointment')
@UseGuards(JwtGuard, RolesGuard)
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {};

  @Get()
  async getAppointments(){
    
    return this.appointmentService.getAppointments();
  }

  @Get(':id')
  async getAppointmentById(@Param('id') id: string){
    return this.appointmentService.getAppointmentById(Number(id));
  }

  @Post()
  async createAppointment(@Body() appointment: CreateAppointmentDTO, email: string, crm: string){
    return this.appointmentService.createAppointment(appointment, email, crm);
  }
}
