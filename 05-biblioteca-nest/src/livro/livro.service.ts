import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { LivroRepository } from './livro.repository';
import { Livro } from 'src/generated/prisma/client';
import { CreateLivroDTO } from './dto/livro.dto';
import { Logger } from '@nestjs/common';

@Injectable()
export class LivroService {
    constructor(private LivroRepo: LivroRepository){}
    private readonly logger = new Logger(LivroService.name);

    async listarLivros(disponivel?: boolean): Promise<Livro[]>{
        this.logger.debug(`Listagem de livros, filtro disponivel? ${disponivel}`);
        const livros = await this.LivroRepo.findAll(disponivel);

        this.logger.log(`Listagem realizada - ${livros.length}`);
        return livros;
    }

    async buscarLivroPorId(livroId: number): Promise<Livro | null>{
        this.logger.debug(`Listar livro por Id: Id do Livro ${livroId}`);

        const livro = await this.LivroRepo.findById(livroId);
        if(!livro) {
            this.logger.warn(`Livro não encontrado - ${livroId}`)
            throw new ConflictException('Livro não encontrado');
        };

        this.logger.log(`Livro Encontrado - ${JSON.stringify(livro)}`);
        return livro;
    }

    async registrarLivro(livro: CreateLivroDTO): Promise<Livro>{
        this.logger.debug(`Registrar livro - Dados: ${JSON.stringify(livro)}`);

        const livroCriado = await this.LivroRepo.create(livro);
        this.logger.log(`Livro Criado - ${JSON.stringify(livroCriado)}`);
        return livroCriado;
    }

    async atualizarLivro(livroId: number ,livro: Partial<Livro>): Promise<Livro | null>{
        this.logger.debug(`Atualizando livro - Dados: ${JSON.stringify(livro)}`);

        const livroAtualizado = await this.LivroRepo.update(livroId, livro);
        this.logger.log(`Livro Atualizado - ${JSON.stringify(livroAtualizado)}`);
        return livroAtualizado;
    }

    async deletarLivro(livroId: number): Promise<Boolean>{
        this.logger.debug(`Deletando livro - ${livroId}`);

        const livro = await this.LivroRepo.findById(livroId);

        if(!livro) {
            this.logger.warn(`Livro não foi encontrado - ${livroId}`);
            throw new NotFoundException("Livro não encontrado");
        };
        
        if(livro.ativo == false) {
            this.logger.warn(`O livro já foi deletado - ${livroId}`);
            throw new ConflictException("Livro já deletado");
        };
        
        if(livro!.disponivel == false) {
            this.logger.warn(`Livro esta emprestado - ${livroId}`);
            throw new ConflictException("Não é possivel deletar livro emprestado");
        };

        try{
            await this.LivroRepo.delete(livroId);
            this.logger.log(`Livro deletado - ${JSON.stringify(livro)}`);
            return true;
        }
        catch(ex){
            this.logger.error(`Erro ao deletar livro - ${JSON.stringify(livro)}`, ex instanceof Error ? ex.stack : '');
            return false;
        }
    }
}
