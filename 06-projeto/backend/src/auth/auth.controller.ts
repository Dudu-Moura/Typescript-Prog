import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(authService: AuthService){};
}