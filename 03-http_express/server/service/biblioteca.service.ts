import { LivroRepository } from "../repository/livro.repository";
import { EmprestimoRepository } from "../repository/emprestimo.repository";
import { CreateLivro, Livro } from "../types/livro";
import { Emprestimo, CreateEmprestimo } from "../types/emprestimo";

export class BibliotecaService{
    constructor(
        private LivroRepo: LivroRepository,
        private EmprestimoRepo: EmprestimoRepository
    ) {}

    listarLivros(disponivel?: boolean): Livro[]{
        const livros = this.LivroRepo.listAll();

        if(disponivel == undefined) return livros;
        
        return livros.filter(l => l.disponivel == true);
    }

    listarEmprestimos(devolvido?: boolean): Emprestimo[]{
        const emprestimos = this.EmprestimoRepo.listAll();

        if(devolvido == undefined) return emprestimos;

        return emprestimos.filter(e => e.devolvido == false);
    }

    buscarLivroPorId(livroId: number): Livro | undefined{
        return this.LivroRepo.findById(livroId);
    }

    buscarEmprestimoPorId(emprestimoId: number): Emprestimo | undefined{
        return this.EmprestimoRepo.findById(emprestimoId);
    }

    registrarLivro(livro: CreateLivro): Livro{
        return this.LivroRepo.create(livro);
    }

    realizarEmprestimo(emprestimo: CreateEmprestimo): Emprestimo{
        const livro =  this.LivroRepo.listAll().find(l => l.id == emprestimo.livroId);

        if(!livro) throw new Error("Este livro não esta registrado");

        if(livro?.disponivel == false) throw new Error("Livro não esta disponivel");

        livro!.disponivel = false;
        this.LivroRepo.update(livro.id, livro);

        return this.EmprestimoRepo.create(emprestimo);
    }

    devolverLivro(emprestimoId: number): Emprestimo{
        const emprestimo = this.EmprestimoRepo.findById(emprestimoId);

        if(!emprestimo) throw new Error("Empréstimo não existente");

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