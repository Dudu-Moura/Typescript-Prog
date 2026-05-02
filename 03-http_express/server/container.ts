import { LivroRepository } from "./repository/livro.repository";
import { EmprestimoRepository } from "./repository/emprestimo.repository";
import { BibliotecaService } from "./service/biblioteca.service";

export const livroRepository = new LivroRepository();
export const emprestimoRepository = new EmprestimoRepository();
export const bibliotecaService = new BibliotecaService(livroRepository, emprestimoRepository);