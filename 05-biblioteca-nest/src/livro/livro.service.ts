import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { LivroRepository } from './livro.repository';
import { Livro } from 'src/generated/prisma/client';
import { CreateLivroDTO } from './dto/livro.dto';

@Injectable()
export class LivroService {
    constructor(private LivroRepo: LivroRepository){}

    async listarLivros(disponivel?: boolean): Promise<Livro[]>{
        return this.LivroRepo.findAll(disponivel);
    }

    async buscarLivroPorId(livroId: number): Promise<Livro | null>{
        return this.LivroRepo.findById(livroId);
    }

    async registrarLivro(livro: CreateLivroDTO): Promise<Livro>{
        return this.LivroRepo.create(livro);
    }

    async atualizarLivro(livroId: number ,livro: Partial<Livro>): Promise<Livro | null>{
        return this.LivroRepo.update(livroId, livro);
    }

    async deletarLivro(livroId: number): Promise<Boolean>{
        const livro = await this.LivroRepo.findById(livroId);

        if(!livro) throw new NotFoundException("Livro não encontrado");
        
        if(livro.ativo == false) throw new ConflictException("Livro já deletado");
        
        if(livro!.disponivel == false) throw new ConflictException("Não é possivel deletar livro emprestado");

        try{
            await this.LivroRepo.delete(livroId);
            return true;
        }
        catch(ex){
            return false;
        }
    }
}
