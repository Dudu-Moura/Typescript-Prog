import { Test, TestingModule } from '@nestjs/testing';
import { LivroController } from './livro.controller';
import { LivroService } from './livro.service';

describe('LivroController', () => {
  let controller: LivroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LivroController],
      providers: [
        { provide: LivroService, useValue: {} },
      ],
    }).compile();

    controller = module.get<LivroController>(LivroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
