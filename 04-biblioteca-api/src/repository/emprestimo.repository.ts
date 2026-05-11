import { CreateEmprestimo } from "../dtos/emprestimo.dto";
import { Emprestimo } from "../generated/prisma/client";
import { prisma } from "../../lib/prisma";
import { CreateEmprestimoInterno } from "../service/biblioteca.service";

export class EmprestimoRepository {

    async findAll(userId: number, devolvido?: boolean): Promise<Emprestimo[]>{
        return prisma.emprestimo.findMany({
            where:{ 
                usuarioId: userId,
                devolvido 
            }
        });
    }

    async findById(id: number): Promise<Emprestimo | null>{
        return prisma.emprestimo.findUnique({
            where: { id }
        });
    }

    async create(dados: CreateEmprestimoInterno): Promise<Emprestimo>{
        return prisma.emprestimo.create({
            data: dados
        });
    }

    async update(id: number, dados: Partial<Emprestimo>): Promise<Emprestimo | null>{
        return prisma.emprestimo.update({
            where: { id },
            data: dados
        })
    }
}