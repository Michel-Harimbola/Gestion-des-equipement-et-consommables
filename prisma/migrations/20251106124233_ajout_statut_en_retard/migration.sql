/*
  Warnings:

  - You are about to alter the column `nom` on the `Consommable` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(25)`.
  - You are about to alter the column `type` on the `Equipement` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(25)`.
  - You are about to alter the column `email` on the `Utilisateur` table. The data in that column could be lost. The data in that column will be cast from `VarChar(150)` to `VarChar(100)`.

*/
-- AlterEnum
ALTER TYPE "Statut" ADD VALUE 'EnRetard';

-- AlterTable
ALTER TABLE "Consommable" ALTER COLUMN "nom" SET DATA TYPE VARCHAR(25);

-- AlterTable
ALTER TABLE "Equipement" ALTER COLUMN "type" SET DATA TYPE VARCHAR(25);

-- AlterTable
ALTER TABLE "Utilisateur" ALTER COLUMN "email" SET DATA TYPE VARCHAR(100);
