import { Test, TestingModule } from '@nestjs/testing';
import { LivroService } from './livro.service';

describe('LivroService', () => {
  let service: LivroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LivroService],
    }).compile();

    service = module.get<LivroService>(LivroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
