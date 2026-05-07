import { CreateLivro, Livro, UpdateLivro } from "../types/livro";
import { prisma } from "../../lib/prisma";

export class LivroRepository{

    async findAll(disponivel?: boolean): Promise<Livro[]> {
        return prisma.livro.findMany({
            where: {
                ativo: true, // sempre filtra inativos
                disponivel: disponivel !== undefined ? disponivel : undefined
            }
        });
    }

    async findById(id: number): Promise<Livro | null>{
        return prisma.livro.findUnique({
            where: { id, ativo: true }  
        })
    }

    async create(dados: CreateLivro): Promise<Livro>{
        return prisma.livro.create({
            data: dados 
        })
    }

    async update(id:number, dados: Partial<Livro>): Promise<Livro | null>{
        return prisma.livro.update({
            where: { id },
            data: dados
        })
    }

    async delete(id: number): Promise<Livro | null>{
            return prisma.livro.update({
                where: { id },
                data : { ativo: false, deletadoEm: new Date(), disponivel: false }
            });
    }
}