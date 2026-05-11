/*
  Warnings:

  - You are about to drop the column `nomeUsuario` on the `Emprestimo` table. All the data in the column will be lost.
  - Added the required column `usuarioId` to the `Emprestimo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Emprestimo" DROP COLUMN "nomeUsuario",
ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Emprestimo" ADD CONSTRAINT "Emprestimo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
