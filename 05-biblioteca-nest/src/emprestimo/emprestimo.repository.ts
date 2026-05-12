import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Emprestimo } from "src/generated/prisma/client";
import { CreateEmprestimoDTO } from "./dto/emprestimo.dto";

export type CreateEmprestimoInterno = CreateEmprestimoDTO & { usuarioId: number };

@Injectable()
export class EmprestimoRepository{
    constructor(private prisma: PrismaService){}

    async findAll(userId: number, devolvido?: boolean): Promise<Emprestimo[]>{
        return this.prisma.emprestimo.findMany({
            where:{ 
                usuarioId: userId,
                devolvido 
            }
        });
    }

    async findById(id: number): Promise<Emprestimo | null>{
        return this.prisma.emprestimo.findUnique({
            where: { id }
        });
    }

    async create(dados: CreateEmprestimoInterno): Promise<Emprestimo>{
        return this.prisma.emprestimo.create({
            data: dados
        });
    }

    async update(id: number, dados: Partial<Emprestimo>): Promise<Emprestimo | null>{
        return this.prisma.emprestimo.update({
            where: { id },
            data: dados
        })
    }
}