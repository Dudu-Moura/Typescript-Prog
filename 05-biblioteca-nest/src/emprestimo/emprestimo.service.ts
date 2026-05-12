import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { EmprestimoRepository } from './emprestimo.repository';
import { Emprestimo } from 'src/generated/prisma/client';
import { LivroService } from 'src/livro/livro.service';
import { CreateEmprestimoInterno } from './emprestimo.repository';

@Injectable()
export class EmprestimoService {
    constructor(private EmprestimoRepo: EmprestimoRepository, private LivroService: LivroService){};

    async listarEmprestimos(userId: number, devolvido?: boolean): Promise<Emprestimo[]>{
        return this.EmprestimoRepo.findAll(userId, devolvido);
    }

    async buscarEmprestimoPorId(emprestimoId: number): Promise<Emprestimo | null>{
        return this.EmprestimoRepo.findById(emprestimoId);
    }

    async realizarEmprestimo(emprestimo: CreateEmprestimoInterno): Promise<Emprestimo>{
        const livro =  await this.LivroService.buscarLivroPorId(emprestimo.livroId);

        if(!livro) throw new NotFoundException("Livro não encontrado");

        if(livro.ativo == false) throw new ConflictException("Este livro não esta ativo");
        
        if(livro.disponivel == false) throw new ConflictException("Livro não esta disponivel");

        livro.disponivel = false;
        await this.LivroService.atualizarLivro(livro.id, livro);

        return this.EmprestimoRepo.create(emprestimo);
    }

    async devolverLivro(usuarioId: number, emprestimoId: number): Promise<Emprestimo>{
        const emprestimo = await this.EmprestimoRepo.findById(emprestimoId);

        if(!emprestimo) throw new NotFoundException("Empréstimo não encontrado");

        if(emprestimo.usuarioId != usuarioId) throw new UnauthorizedException('Sem permissão');

        if(emprestimo.devolvido == true) throw new ConflictException("Livro já devolvido");

        const livroEmprestado = await this.LivroService.buscarLivroPorId(emprestimo.livroId);

        if(livroEmprestado?.disponivel == true) throw new ConflictException("Livro não foi emprestado");

        await this.LivroService.atualizarLivro(emprestimo.livroId, { disponivel: true });
        await this.EmprestimoRepo.update(emprestimoId, {
            dataDevolucao: new Date(),
            devolvido: true
        });
        return await this.EmprestimoRepo.findById(emprestimoId) as Emprestimo;
    }
}
