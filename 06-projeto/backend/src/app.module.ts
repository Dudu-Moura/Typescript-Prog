import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { MedicModule } from './medic/medic.module';
import { AppointmentModule } from './appointment/appointment.module';
import { AuthModule } from './auth/auth.modules';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UserModule,
    MedicModule,
    AppointmentModule,
    AuthModule,
  ],
})
export class AppModule {}
