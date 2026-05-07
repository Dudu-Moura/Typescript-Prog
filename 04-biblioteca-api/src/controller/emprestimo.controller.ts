import { BibliotecaService } from "../service/biblioteca.service";
import { NextFunction, Request, Response } from "express";
import { CreateEmprestimo } from "../dtos/emprestimo.dto";
import { UpdateLivro } from "../dtos/livro.dto";

export class EmprestimoController{
    constructor(private bibliotecaService: BibliotecaService){};


    listar = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const devolvido = req.query.devolvido === undefined ? undefined : req.query.devolvido === 'true';
            const emprestimo = await this.bibliotecaService.listarEmprestimos(devolvido);
            res.json(emprestimo);
        } catch (ex) {
            next(ex);
        }
    }

    buscarPorId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id = Number(req.params.id);
            const emprestimo = await this.bibliotecaService.buscarEmprestimoPorId(id);
    
            if(!emprestimo){
                res.status(404).json({ erro: "Emprestimo não existente" });
                return;
            }  
            res.json(emprestimo);
        } catch (ex) {
            next(ex);
        }
    }

    criar = async (req: Request< {}, {}, CreateEmprestimo >, res: Response, next: NextFunction): Promise<void> => {
        try {
            const emprestimo = await this.bibliotecaService.realizarEmprestimo(req.body);
            res.status(201).json(emprestimo);
        } catch (ex) {
            next(ex);
        }
    }

    devolver = async (req: Request< { id: string }, {}, UpdateLivro >, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id = Number(req.params.id);
            await this.bibliotecaService.devolverLivro(id);
            res.status(200).json({ message: 'Empréstimo devolvido' })
        } catch (ex) {
            next(ex)
        }
    }

}