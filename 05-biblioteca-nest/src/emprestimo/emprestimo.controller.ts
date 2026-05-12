import { Body, Controller, Get, Param, ParseBoolPipe, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';
import { EmprestimoService } from './emprestimo.service';
import { CreateEmprestimoDTO } from './dto/emprestimo.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

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
    async criar(@Body() Emprestimo: CreateEmprestimoDTO, @Req() request: any) {
        return this.EmprestimoService.realizarEmprestimo({ ...Emprestimo , usuarioId: request.user.id });
    }

    @Patch(':id/devolver')
    async devolver(@Req() request: any,@Param('id') id: string) {
        return this.EmprestimoService.devolverLivro(request.user.id , Number(id));
    }
}
