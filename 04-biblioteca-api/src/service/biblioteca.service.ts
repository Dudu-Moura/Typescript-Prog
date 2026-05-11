import { LivroRepository } from "../repository/livro.repository";
import { EmprestimoRepository } from "../repository/emprestimo.repository";
import { CreateLivro, UpdateLivro } from "../dtos/livro.dto";
import { Livro } from "../generated/prisma/client";
import { CreateEmprestimo } from "../dtos/emprestimo.dto";
import { Emprestimo } from "../generated/prisma/client";
import { ConflictError, NotFoundError, UnauthorizedError } from "../errors/AppError";
import { config } from "dotenv";

type CreateEmprestimoInterno = CreateEmprestimo & { usuarioId: number }; // livroId + usuarioId

export class BibliotecaService{
    constructor(
        private LivroRepo: LivroRepository,
        private EmprestimoRepo: EmprestimoRepository
    ) {}

    async listarLivros(disponivel?: boolean): Promise<Livro[]>{
        return this.LivroRepo.findAll(disponivel);
    }

    async listarEmprestimos(userId: number, devolvido?: boolean): Promise<Emprestimo[]>{
        return this.EmprestimoRepo.findAll(userId, devolvido);
    }

    async buscarLivroPorId(livroId: number): Promise<Livro | null>{
        return this.LivroRepo.findById(livroId);
    }

    async buscarEmprestimoPorId(emprestimoId: number): Promise<Emprestimo | null>{
        return this.EmprestimoRepo.findById(emprestimoId);
    }

    async registrarLivro(livro: CreateLivro): Promise<Livro>{
        return this.LivroRepo.create(livro);
    }

    async realizarEmprestimo(emprestimo: CreateEmprestimoInterno): Promise<Emprestimo>{
        const livro =  await this.LivroRepo.findById(emprestimo.livroId);

        if(!livro) throw new NotFoundError("Livro");

        if(livro.ativo == false) throw new ConflictError("Este livro não esta ativo");
        
        if(livro.disponivel == false) throw new ConflictError("Livro não esta disponivel");

        livro.disponivel = false;
        await this.LivroRepo.update(livro.id, livro);

        return this.EmprestimoRepo.create(emprestimo);
    }

    async devolverLivro(usuarioId: number, emprestimoId: number): Promise<Emprestimo>{
        const emprestimo = await this.EmprestimoRepo.findById(emprestimoId);

        if(!emprestimo) throw new NotFoundError("Empréstimo");

        if(emprestimo.usuarioId != usuarioId) throw new UnauthorizedError('Sem permissão');

        if(emprestimo.devolvido == true) throw new ConflictError("Livro já devolvido");

        const livroEmprestado = await this.LivroRepo.findById(emprestimo.livroId);

        if(livroEmprestado?.disponivel == true) throw new ConflictError("Livro não foi emprestado");

        await this.LivroRepo.update(emprestimo.livroId, { disponivel: true });
        await this.EmprestimoRepo.update(emprestimoId, {
            dataDevolucao: new Date(),
            devolvido: true
        });
        return await this.EmprestimoRepo.findById(emprestimoId) as Emprestimo;
    }

    async deletarLivro(livroId: number): Promise<Boolean>{
        const livro = await this.LivroRepo.findById(livroId);

        if(!livro) throw new NotFoundError("Livro");
        
        if(livro.ativo == false) throw new ConflictError("Livro já deletado");
        
        if(livro!.disponivel == false) throw new ConflictError("Não é possivel deletar livro emprestado");

        try{
            await this.LivroRepo.delete(livroId);
            return true;
        }
        catch(ex){
            return false;
        }
    }
}