import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Usuario } from "src/generated/prisma/client";
import { RegisterDTO } from "./dto/auth.dto";

@Injectable()
export class UserRepository{
    constructor(private prisma: PrismaService){};

    async findByEmail(email: string): Promise<Usuario | null>{
        return this.prisma.usuario.findUnique({
            where: { email }
        })
    };

    async create(dados: RegisterDTO): Promise<Usuario>{
        return this.prisma.usuario.create({
            data: dados
        })
    }  
}