import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO, RegisterDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private AuthService: AuthService){};

    @Post('registrar')
    async registrar(@Body() Usuario: RegisterDTO) {
        return this.AuthService.registrar(Usuario);
    }

    @Post('login')
    async login(@Body() Usuario: LoginDTO) {
        return this.AuthService.login(Usuario);
    }

}
