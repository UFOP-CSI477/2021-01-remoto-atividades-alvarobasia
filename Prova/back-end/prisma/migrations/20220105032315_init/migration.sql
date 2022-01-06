-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "data_nascimento" DATE NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unidaddes" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "data_nascimento" DATE NOT NULL,
    "bairro" VARCHAR(150) NOT NULL,
    "cidade" VARCHAR(150) NOT NULL,
    "estado" VARCHAR(150) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Unidaddes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vacinas" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "fabricante" VARCHAR(150) NOT NULL,
    "pais" VARCHAR(150) NOT NULL,
    "doses" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vacinas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registros" (
    "id" SERIAL NOT NULL,
    "data" DATE NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "usersId" INTEGER,
    "unidaddesId" INTEGER,
    "vacinasId" INTEGER,

    CONSTRAINT "Registros_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Registros" ADD CONSTRAINT "Registros_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registros" ADD CONSTRAINT "Registros_unidaddesId_fkey" FOREIGN KEY ("unidaddesId") REFERENCES "Unidaddes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registros" ADD CONSTRAINT "Registros_vacinasId_fkey" FOREIGN KEY ("vacinasId") REFERENCES "Vacinas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
