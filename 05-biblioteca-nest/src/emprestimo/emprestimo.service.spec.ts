import { Test, TestingModule } from '@nestjs/testing';
import { EmprestimoService } from './emprestimo.service';
import { EmprestimoRepository } from './emprestimo.repository';
import { LivroService } from 'src/livro/livro.service';

describe('EmprestimoService', () => {
  let service: EmprestimoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmprestimoService,
        { provide: EmprestimoRepository, useValue: {} },
        { provide: LivroService, useValue: {} },
      ],
    }).compile();

    service = module.get<EmprestimoService>(EmprestimoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
