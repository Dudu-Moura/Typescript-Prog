import { Module } from '@nestjs/common';
import { LivroController } from './livro.controller';
import { LivroService } from './livro.service';
import { LivroRepository } from './livro.repository';
import { PrismaModule } from 'src/prisma/prisma.modules';

@Module({
  controllers: [LivroController],
  providers: [LivroService, LivroRepository],
  imports: [PrismaModule],
  exports: [LivroService]
})
export class LivroModule {}
