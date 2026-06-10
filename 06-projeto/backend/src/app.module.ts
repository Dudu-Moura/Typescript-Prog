import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { MedicModule } from './medic/medic.module';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports: [PrismaModule, UserModule, MedicModule, AppointmentModule],
})
export class AppModule {}
