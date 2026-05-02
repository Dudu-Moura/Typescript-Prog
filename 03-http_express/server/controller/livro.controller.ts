import { BibliotecaService } from "../service/biblioteca.service";
import { Request, Response } from "express";
import { CreateLivro } from "../types/livro";

export class LivroController{
    constructor(private bibliotecaService: BibliotecaService){};


    listar = async (req: Request, res: Response): Promise<void> => {
        const disponivel = req.query.disponivel === undefined ? undefined : req.query.disponivel === 'true';
        const livros = this.bibliotecaService.listarLivros(disponivel);
        res.json(livros);
    }

    buscarPorId = async (req: Request, res: Response): Promise<void> => {
        const id = Number(req.params.id);
        const livro = this.bibliotecaService.buscarLivroPorId(id);

        if(!livro){
            res.status(404).json("Livro não existente");
            return;
        }  
        res.json(livro);
    }

    criar = async (req: Request<{}, {}, CreateLivro >, res: Response): Promise<void> => {
        const livro = this.bibliotecaService.registrarLivro(req.body);
        res.status(201).json(livro);
    }

    delete = async (req: Request, res: Response): Promise<void> => {
        const id = Number(req.params.id);
        const livro = this.bibliotecaService.buscarLivroPorId(id);
        
        if(!livro) {
            res.status(404).json("Livro não existente");
            return;
        }
        else if(livro.disponivel == false){
            res.status(400).json("Livro não disponivel");
            return;
        }
        
        this.bibliotecaService.deletarLivro(id);
        res.json(livro + "apagado");
    }

}