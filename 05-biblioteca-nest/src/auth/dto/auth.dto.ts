import {
    MinLength,
    IsString,
    IsEmail,
} from 'class-validator';

export class RegisterDTO {
    @IsString()
    @MinLength(2)
    nome!: string;

    @IsEmail()
    email!: string;

    @IsString()
    @MinLength(8)
    senha!: string;
}

export class LoginDTO {
    @IsEmail()
    email!: string;

    @IsString()
    @MinLength(8)
    senha!: string;
}