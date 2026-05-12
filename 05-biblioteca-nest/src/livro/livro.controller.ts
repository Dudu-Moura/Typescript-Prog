import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { LivroService } from './livro.service';
import { CreateLivroDTO, UpdateLivroDTO } from './dto/livro.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('livros')
export class LivroController {
    constructor(private LivroService: LivroService){}

    @Get()
    async listar(@Query('disponivel', new ParseBoolPipe( { optional: true })) disponivel: boolean) {
        return this.LivroService.listarLivros(disponivel);
    }

    @Get(':id')
    async listarPorId(@Param('id') id: string) {
        return this.LivroService.buscarLivroPorId(Number(id));
    }

    @Post()
    @UseGuards(JwtGuard)
    async criar(@Body() Livro: CreateLivroDTO) {
        return this.LivroService.registrarLivro(Livro);
    }

    @Delete(':id')
    @UseGuards(JwtGuard)
    async deletar(@Param('id') id: string) {
        return this.LivroService.deletarLivro(Number(id));
    }
}
