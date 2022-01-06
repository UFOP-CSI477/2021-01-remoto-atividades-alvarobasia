/*
  Warnings:

  - You are about to drop the column `unidaddesId` on the `Registros` table. All the data in the column will be lost.
  - You are about to drop the `Unidaddes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Registros" DROP CONSTRAINT "Registros_unidaddesId_fkey";

-- AlterTable
ALTER TABLE "Registros" DROP COLUMN "unidaddesId",
ADD COLUMN     "unidadesId" INTEGER;

-- DropTable
DROP TABLE "Unidaddes";

-- CreateTable
CREATE TABLE "Unidades" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "data_nascimento" DATE NOT NULL,
    "bairro" VARCHAR(150) NOT NULL,
    "cidade" VARCHAR(150) NOT NULL,
    "estado" VARCHAR(150) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Unidades_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Registros" ADD CONSTRAINT "Registros_unidadesId_fkey" FOREIGN KEY ("unidadesId") REFERENCES "Unidades"("id") ON DELETE SET NULL ON UPDATE CASCADE;
