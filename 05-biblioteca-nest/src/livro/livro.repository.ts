import { CreateLivroDTO } from "../livro/dto/livro.dto";
import { Livro } from "../generated/prisma/client"
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class LivroRepository{
    constructor(private prisma: PrismaService){}

    async findAll(disponivel?: boolean): Promise<Livro[]> {
        return this.prisma.livro.findMany({
            where: {
                ativo: true,
                disponivel: disponivel !== undefined ? disponivel : undefined
            }
        });
    }

    async findById(id: number): Promise<Livro | null>{
        return this.prisma.livro.findUnique({
            where: { id, ativo: true }  
        })
    }

    async create(dados: CreateLivroDTO): Promise<Livro>{
        return this.prisma.livro.create({
            data: dados 
        })
    }

    async update(id:number, dados: Partial<Livro>): Promise<Livro | null>{
        return this.prisma.livro.update({
            where: { id },
            data: dados
        })
    }

    async delete(id: number): Promise<Livro | null>{
            return this.prisma.livro.update({
                where: { id },
                data : { ativo: false, deletadoEm: new Date(), disponivel: false }
            });
    }
}