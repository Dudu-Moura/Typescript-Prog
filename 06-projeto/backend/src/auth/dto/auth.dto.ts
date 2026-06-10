import { IsEmail, IsString, MinLength } from "class-validator"

export class LoginDTO {
    @IsEmail()
    email!: string
    
    @IsString()
    @MinLength(8, {message: 'Password must contain at least 8 characters'})
    password!: string
}