import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { MedicModule } from './medic/medic.module';
import { AppointmentModule } from './appointment/appointment.module';
import { AuthModule } from './auth/auth.modules';
import { SentryGlobalFilter, SentryModule } from '@sentry/nestjs/setup';
import { APP_FILTER } from '@nestjs/core';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        PrismaModule,
        UserModule,
        MedicModule,
        AppointmentModule,
        AuthModule,
        SentryModule.forRoot(),
    ],
    providers: [
        {
            provide: APP_FILTER,
            useClass: SentryGlobalFilter,
        },
    ],
})
export class AppModule {}
