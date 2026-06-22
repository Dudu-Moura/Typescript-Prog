import { Type } from "class-transformer"
import { IsEmail, IsOptional, IsString, MinLength, ValidateNested } from "class-validator"
import { CreateMedicDTO } from "src/medic/dto/medic.dto"
import { CreateUserDTO } from "src/user/dto/user.dto"

export class LoginDTO {
    @IsEmail()
    email!: string
    
    @IsString()
    @MinLength(8, {message: 'Password must contain at least 8 characters'})
    password!: string
}

export class RegisterDTO{

    @ValidateNested()
    @Type(() => CreateUserDTO)
    user!: CreateUserDTO


    @IsOptional()
    @ValidateNested()
    @Type(() => CreateMedicDTO)
    medic?: CreateMedicDTO
}