import bcrypt from "bcryptjs";
import { env } from "../config/env";
import { CreateLogin } from "../dtos/auth.dto";
import { ConflictError } from "../errors/AppError";
import { Usuario } from "../generated/prisma/client";
import { UsuarioRepository } from "../repository/usuario.repository";
import * as jwt from 'jsonwebtoken';

export class AuthService{
    constructor(private UsuarioRepo: UsuarioRepository){};

    async criarLogin(dados: CreateLogin): Promise<{ token: string }>{

        const userEmail = await this.UsuarioRepo.findByEmail(dados.email);

        if(userEmail) throw new ConflictError('Usuário já existente');

        const senha = await bcrypt.hash(dados.senha, 10);

        const usuario =  await this.UsuarioRepo.create({...dados, senha});


        const payload = { id: usuario.id , nome: usuario.nome, email: usuario.email }
        const token = jwt.sign(payload , env.JWT_SECRET, { expiresIn: '7d' } );

        return { token };
    }
}