import { BibliotecaService } from "../service/biblioteca.service";
import { Request, Response } from "express";
import { CreateEmprestimo } from "../types/emprestimo";
import { UpdateLivro } from "../types/livro";

export class EmprestimoController{
    constructor(private bibliotecaService: BibliotecaService){};


    listar = async (req: Request, res: Response): Promise<void> => {
        const devolvido = req.query.devolvido === undefined ? undefined : req.query.devolvido === 'false';
        const emprestimo = this.bibliotecaService.listarEmprestimos(devolvido);
        res.json(emprestimo);
    }

    buscarPorId = async (req: Request, res: Response): Promise<void> => {
        const id = Number(req.params.id);
        const emprestimo = this.bibliotecaService.buscarEmprestimoPorId(id);

        if(!emprestimo){
            res.status(404).json("Emprestimo não existente");
            return;
        }  
        res.json(emprestimo);
    }

    criar = async (req: Request< {}, {}, CreateEmprestimo >, res: Response): Promise<void> => {
        const emprestimo = this.bibliotecaService.realizarEmprestimo(req.body);
        res.status(201).json(emprestimo);
    }

    devolver = async (req: Request< { id: number}, {}, UpdateLivro >, res: Response): Promise<void> => {
        const id = Number(req.params.id);
        this.bibliotecaService.devolverLivro(id);
    }

}