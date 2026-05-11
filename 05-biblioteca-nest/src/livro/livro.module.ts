import { Module } from '@nestjs/common';
import { LivroController } from './livro.controller';
import { LivroService } from './livro.service';

@Module({
  controllers: [LivroController],
  providers: [LivroService]
})
export class LivroModule {}
