import { Emprestimo, CreateEmprestimo } from "../types/emprestimo";
import { prisma } from "../../lib/prisma";

export class EmprestimoRepository {

    async findAll(devolvido?: boolean): Promise<Emprestimo[]>{
        return prisma.emprestimo.findMany({
            where: devolvido !== undefined ? { devolvido } : undefined
        });
    }

    async findById(id: number): Promise<Emprestimo | null>{
        return prisma.emprestimo.findUnique({
            where: { id }
        });
    }

    async create(dados: CreateEmprestimo): Promise<Emprestimo>{
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