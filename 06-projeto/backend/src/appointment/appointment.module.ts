import { Module } from '@nestjs/common';
import { AppointmentController } from './appointment.controller';
import { AppointmentService } from './appointment.service';
import { AppointmentRepository } from './appointment.repository';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [AppointmentController],
  providers: [AppointmentService, AppointmentRepository],
  imports: [UserModule],
  exports: [AppointmentService],
})
export class AppointmentModule {}
