import {
    MinLength,
    MaxLength,
    IsString,
    IsBoolean,
} from 'class-validator';

export class CreateLivroDTO {
    @IsString()
    @MinLength(1)
    titulo!: string;

    @IsString()
    @MinLength(1)
    autor!: string;

    @IsString()
    @MinLength(10)
    descricao!: string;

    @IsString()
    @MinLength(10)
    @MaxLength(13)
    isbn!: string;
}

export class UpdateLivroDTO {
    @IsBoolean()
    disponivel!: boolean;
}
