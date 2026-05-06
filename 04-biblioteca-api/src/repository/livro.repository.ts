import { CreateLivro, Livro, UpdateLivro } from "../types/livro";
import { prisma } from "../../lib/prisma";

export class LivroRepository{

    async findAll(disponivel?: boolean): Promise<Livro[]>{
        return prisma.livro.findMany(
            { where: disponivel !== undefined ? { disponivel } : undefined }
        );
    }

    async findById(id: number): Promise<Livro | null>{
        return prisma.livro.findUnique({
            where: { id }  
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

    async delete(id: number): Promise<boolean>{
        try{
            await prisma.livro.delete({
                where: { id }
            });
            return true;
        }
        catch(ex){
            return false;
        }
    }

}