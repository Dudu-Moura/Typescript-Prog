import { PartialType } from "@nestjs/mapped-types";
import { AppointmentStatus } from "@prisma/client";
import { Type } from "class-transformer";
import { IsDate, IsEnum, IsString, MinLength } from "class-validator";

//Input
export class CreateAppointmentDTO{
    @IsDate()
    @Type(() => Date)
    scheduledAt!: Date

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