import { Test, TestingModule } from '@nestjs/testing';
import { LivroService } from './livro.service';
import { LivroRepository } from './livro.repository';
import { boolean } from 'zod';

describe('LivroService', () => {
  let service: LivroService;
  let repository: jest.Mocked<LivroRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LivroService,
        { provide: LivroRepository, useValue: {
          findAll: jest.fn(),
          findById: jest.fn(),
          create: jest.fn(),
          delete: jest.fn()
        } },
      ],
    }).compile();

    service = module.get<LivroService>(LivroService);
    repository = module.get(LivroRepository);
  });

  it('deve retornar a lista de livros', async () => {
      const dadosEntrada = [{id: 1, titulo: 'Clean Code', disponivel: true}];
      repository.findAll.mockResolvedValue(dadosEntrada as any);

      const resultado = await service.listarLivros();

      expect(resultado).toEqual(dadosEntrada);
      expect(repository.findAll).toHaveBeenCalledWith(undefined);
  });

  it('deve retornar somente o livro com id correspondente', async () => {
    const livroAlvo = {id: 2, titulo: 'Senhor dos Anéis', disponivel: false}
    repository.findById.mockResolvedValue(livroAlvo as any);

    const resultado = await service.buscarLivroPorId(2);

    expect(resultado).toEqual(livroAlvo);
    expect(repository.findById).toHaveBeenCalledWith(2);
  });

  it('deve retornar erro ao não achar o livro', async () => {
      repository.findById.mockResolvedValue(null);

      await expect(service.buscarLivroPorId(999)).rejects.toThrow('Livro não encontrado');

      expect(repository.findById).toHaveBeenCalledWith(999);
  });

  it('deve criar um livro', async () => {
     const dadosEntrada = {titulo: 'Teste', autor: 'Autor Teste', descricao: 'Descrição do livro teste', isbn: '11111111111'};
     const livroCriado = {id: 1, ...dadosEntrada, disponivel: true, criadoEm: new Date()};
     repository.create.mockResolvedValue(livroCriado as any);

     const resultado = await service.registrarLivro(dadosEntrada);

     expect(resultado).toEqual(livroCriado);
     expect(repository.create).toHaveBeenCalledWith(dadosEntrada)
  });

  it('deve lançar erro ao tentar deletar livro não existente', async () => {
      repository.findById.mockResolvedValue(null);

      await expect(service.deletarLivro(999)).rejects.toThrow('Livro não encontrado');

      expect(repository.findById).toHaveBeenCalledWith(999);
  });

  it('deve lançar erro ao tentar deletar livro não disponível', async () => {
      const livroDeletar = {id: 1, titulo: 'Teste', disponivel: false};
      repository.findById.mockResolvedValue(livroDeletar as any);

      await expect(service.deletarLivro(livroDeletar.id)).rejects.toThrow('Não é possivel deletar livro emprestado');

      expect(repository.findById).toHaveBeenCalledWith(livroDeletar.id);
  });
});
