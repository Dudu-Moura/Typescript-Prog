import { prisma } from "../../lib/prisma";
import { CreateLogin } from "../dtos/auth.dto";
import { Usuario } from "../generated/prisma/client";
import { z, ZodEmail } from 'zod'

export class UsuarioRepository{


    async findByEmail(email: string): Promise<Usuario | null>{
        return prisma.usuario.findUnique({
            where: { email }
        })
    };

    async create(dados: CreateLogin): Promise<Usuario>{
        return prisma.usuario.create({
            data: dados
        })
    }
}