import { PartialType } from "@nestjs/mapped-types";
import { Medic, User } from "@prisma/client";
import { IsInt, IsString, Length, Min, MinLength } from "class-validator";

export class CreateMedicDTO{
    @IsString()
    @MinLength(8)
    crm!: string

    @IsString()
    @MinLength(5)
    specialty!: string
}

export class UpdateMedicDTO extends PartialType(CreateMedicDTO){};

export type MedicList = Pick<User, 'name'> & Pick<Medic, 'crm' | 'specialty'>;