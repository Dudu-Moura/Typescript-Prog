import { Body, Controller, Get, Param, ParseBoolPipe, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';
import { EmprestimoService } from './emprestimo.service';
import { CreateEmprestimoDTO } from './dto/emprestimo.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { CurrentUser } from 'common/decorators/current_user.decorator';
import { Usuario } from '@prisma/client';
@Controller('emprestimos')
@UseGuards(JwtGuard)
export class EmprestimoController {
    constructor(private EmprestimoService: EmprestimoService){};

    @Get()
    async listar(@Req() request: any, @Query('devolvido', new ParseBoolPipe( { optional: true })) devolvido: boolean) {
        return this.EmprestimoService.listarEmprestimos(request.user.id, devolvido);
    }

    @Get(':id')
    async listarPorId(@Param('id') id: string) {
        return this.EmprestimoService.buscarEmprestimoPorId(Number(id));
    }

    @Post()
    async criar(@Body() Emprestimo: CreateEmprestimoDTO, @CurrentUser() usuario: Usuario) {
        return this.EmprestimoService.realizarEmprestimo({ ...Emprestimo , usuarioId: usuario.id });
    }

    @Patch(':id/devolver')
    async devolver(@CurrentUser() usuario: Usuario,@Param('id') id: string) {
        return this.EmprestimoService.devolverLivro(usuario.id , Number(id));
    }
}
