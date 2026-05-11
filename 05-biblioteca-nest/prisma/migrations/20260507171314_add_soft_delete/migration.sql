-- AlterTable
ALTER TABLE "Livro" ADD COLUMN     "ativo" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "deletadoEm" TIMESTAMP(3);
