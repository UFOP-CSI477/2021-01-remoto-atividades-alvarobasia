/*
  Warnings:

  - You are about to drop the column `cpf` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `data_nascimento` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Registros" DROP CONSTRAINT "Registros_usersId_fkey";

-- AlterTable
ALTER TABLE "Registros" ADD COLUMN     "pessoasId" INTEGER;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "cpf",
DROP COLUMN "createdAt",
DROP COLUMN "data_nascimento",
DROP COLUMN "updatedAt",
ADD COLUMN     "email" VARCHAR(150) NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Pessoas" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "data_nascimento" DATE NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pessoas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Registros" ADD CONSTRAINT "Registros_pessoasId_fkey" FOREIGN KEY ("pessoasId") REFERENCES "Pessoas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
