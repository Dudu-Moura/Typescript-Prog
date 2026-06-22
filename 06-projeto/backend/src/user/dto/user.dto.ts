import { IsEmail, IsString, Length, Matches, MinLength} from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'
import { User } from '@prisma/client'

export class CreateUserDTO {
    @IsString()
    @Length(3, 10)
    name!: string

    @IsString()
    @Matches(/^\d{11}$/, { message: 'CPF must contain 11 numeric digits'})
    cpf!: string

    @IsEmail()
    email!: string
    
    @IsString()
    @MinLength(8, {message: 'Password must contain at least 8 characters'})
    password!: string

}

export class UpdateUserDTO extends PartialType(CreateUserDTO){};

export type SafeUser = Omit<User, 'password'>