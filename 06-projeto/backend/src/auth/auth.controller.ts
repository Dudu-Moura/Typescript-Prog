import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from 'src/user/dto/user.dto';
import { CreateMedicDTO } from 'src/medic/dto/medic.dto';
import { LoginDTO, RegisterDTO } from './dto/auth.dto';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){};

    @Post('register')
    async register(@Body() data: RegisterDTO){
        if(data.medic){
            return this.authService.registerMedic(data);
        }
        return this.authService.register(data);
    }

    @Post('login')
    async login(@Body() data: LoginDTO){
        return this.authService.login(data);
    }
}