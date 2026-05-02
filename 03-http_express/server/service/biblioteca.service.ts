import { LivroRepository } from "../repository/livro.repository";
import { EmprestimoRepository } from "../repository/emprestimo.repository";
import { CreateLivroBody, Livro } from "../types/livro";
import { Emprestimo, EmprestimoCreate } from "../types/emprestimo";

export class BibliotecaService{
    constructor(
        private LivroRepo: LivroRepository,
        private EmprestimoRepo: EmprestimoRepository
    ) {}

    listarLivros(): Livro[]{
        return this.LivroRepo.listAll();
    }

    listarEmprestimos(): Emprestimo[]{
        return this.EmprestimoRepo.listAll();
    }

    registrarLivro(livro: CreateLivroBody): Livro{
        return this.LivroRepo.create(livro);
    }

    realizarEmprestimo(emprestimo: EmprestimoCreate): Emprestimo{
        const livro =  this.LivroRepo.listAll().find(l => l.id == emprestimo.livroId);

        if(livro?.disponivel == false) throw new Error("Livro não esta disponivel");

        return this.EmprestimoRepo.create(emprestimo);
    }

    devolverLivro(emprestimo: Emprestimo): Emprestimo{

        if(emprestimo.devolvido == true) throw new Error("Livro já devolvido");

        const livroEmprestado = this.LivroRepo.listAll().find(l => l.id == emprestimo.livroId);

        if(livroEmprestado?.disponivel == true) throw new Error("Livro não foi emprestado");

        livroEmprestado!.disponivel = true
        emprestimo.devolvido = true
        emprestimo.dataDevolucao = new Date();
        this.LivroRepo.update(livroEmprestado!.id, livroEmprestado!)
        this.EmprestimoRepo.update(emprestimo.id, emprestimo);
        return emprestimo;
    }

    deletarLivro(livroId: number): boolean{
        const livro = this.LivroRepo.findById(livroId);
        
        if(livro?.disponivel == false) throw new Error("Não é possivel deletar livro emprestado");

        return this.LivroRepo.delete(livroId);
    }
}