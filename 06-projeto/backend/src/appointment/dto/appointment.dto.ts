import { PartialType } from "@nestjs/mapped-types";
import { AppointmentStatus } from "@prisma/client";
import { IsDate, IsEnum, IsString, MinLength } from "class-validator";

//Input
export class CreateAppointmentDTO{
    @IsDate()
    scheduledAt!: Date

    @IsEnum(AppointmentStatus)
    status!: AppointmentStatus

    @IsString()
    @MinLength(5)
    notes!: string

    @IsString()
    crm!: string
}

export class UpdateAppointmentDTO extends PartialType(CreateAppointmentDTO){};

//Output
export type AppointmentSummary = {
    scheduledDate: number;
    scheduledHour: number;
    status: AppointmentStatus;
    medicName: string;
    medicSpecialty: string;
};