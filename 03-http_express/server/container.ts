import { LivroRepository } from "./repository/livro.repository";
import { EmprestimoRepository } from "./repository/emprestimo.repository";
import { BibliotecaService } from "./service/biblioteca.service";
import { LivroController } from "./controller/livro.controller";
import { EmprestimoController } from "./controller/emprestimo.controller";

const livroRepository = new LivroRepository();
const emprestimoRepository = new EmprestimoRepository();
const bibliotecaService = new BibliotecaService(livroRepository, emprestimoRepository);

export const livroController = new LivroController(bibliotecaService);
export const emprestimoController = new EmprestimoController(bibliotecaService);