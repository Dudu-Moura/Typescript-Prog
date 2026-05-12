import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { LoginDTO, RegisterDTO } from './dto/auth.dto';
import bcrypt from "bcryptjs";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private UserRepository: UserRepository, private JWTService: JwtService){};

    async registrar(dados: RegisterDTO): Promise<{ token: string }>{

        const userEmail = await this.UserRepository.findByEmail(dados.email);

        if(userEmail) throw new ConflictException('Usuário já existente');

        const senha = await bcrypt.hash(dados.senha, 10);

        const usuario =  await this.UserRepository.create({...dados, senha});

        const payload = { id: usuario.id , nome: usuario.nome, email: usuario.email };

        const token = await this.JWTService.sign(payload);

        return { token };
    }

    async login(dados: LoginDTO): Promise<{ token: string }>{
        const user = await this.UserRepository.findByEmail(dados.email);
        if(!user) throw new UnauthorizedException('Email ou senha incorreto(s)');
        
        const userPassword = await bcrypt.compare(dados.senha, user!.senha)
        if(!userPassword) throw new UnauthorizedException('Email ou senha incorreto(s)');

        
        const payload = { id: user.id , nome: user.nome, email: user.email }
        const token = await this.JWTService.sign(payload);

        return { token };
    }
}
