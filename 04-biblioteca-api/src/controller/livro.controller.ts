import { BibliotecaService } from "../service/biblioteca.service";
import { NextFunction, Request, Response } from "express";
import { CreateLivro } from "../types/livro";

export class LivroController{
    constructor(private bibliotecaService: BibliotecaService){};


    listar = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try{
            const disponivel = req.query.disponivel === undefined ? undefined : req.query.disponivel === 'true';
            const livros = this.bibliotecaService.listarLivros(disponivel);
        
            res.json(livros);
        }
        catch(ex){
            next(ex);
        }
    }

    buscarPorId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try{
            const id = Number(req.params.id);
            const livro = this.bibliotecaService.buscarLivroPorId(id);

            if(!livro){
                res.status(404).json({ erro: "Livro não existente" });
                return;
            }  
            res.json(livro);
        }
        catch(ex){
            next(ex);
        }
    }

    criar = async (req: Request<{}, {}, CreateLivro >, res: Response): Promise<void> => {
        const livro = this.bibliotecaService.registrarLivro(req.body);
        res.status(201).json(livro);
    }

    delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
       try{ 
            const id = Number(req.params.id);
            const livro = this.bibliotecaService.buscarLivroPorId(id);
        
            if(!livro) {
                res.status(404).json({ erro: "Livro não existente" });
                return;
            }
        
            this.bibliotecaService.deletarLivro(id);
            res.status(200).json({ mensagem: 'Livro apagado', livro });
       }
       catch(ex) {
            next(ex);
       }
    }
}