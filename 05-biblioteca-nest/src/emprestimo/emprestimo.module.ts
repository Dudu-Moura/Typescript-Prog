import { Module } from '@nestjs/common';
import { EmprestimoController } from './emprestimo.controller';
import { EmprestimoService } from './emprestimo.service';
import { PrismaModule } from 'src/prisma/prisma.modules';
import { LivroModule } from 'src/livro/livro.module';
import { EmprestimoRepository } from './emprestimo.repository';

@Module({
  controllers: [EmprestimoController],
  providers: [EmprestimoService, EmprestimoRepository],
  imports: [PrismaModule, LivroModule],
  exports: [EmprestimoService]
})
export class EmprestimoModule {}
