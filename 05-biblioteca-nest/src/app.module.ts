import { Module } from '@nestjs/common';
import { LivroModule } from './livro/livro.module';
import { EmprestimoModule } from './emprestimo/emprestimo.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [LivroModule, EmprestimoModule, AuthModule],
})
export class AppModule {}
