import {
  IsBoolean,
  IsNumber,
  IsInt,
  IsPositive,
} from 'class-validator';


export class CreateEmprestimoDTO {
    @IsNumber()
    @IsInt()
    @IsPositive()
    livroId!: number
}

export class UpdateEmprestimoSchema {
    @IsBoolean()
    devolvido!: boolean
}