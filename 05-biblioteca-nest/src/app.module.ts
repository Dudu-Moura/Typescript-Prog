import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivroModule } from './livro/livro.module';
import { EmprestimoModule } from './emprestimo/emprestimo.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [LivroModule, EmprestimoModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
