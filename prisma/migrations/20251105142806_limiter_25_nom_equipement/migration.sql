/*
  Warnings:

  - You are about to alter the column `nom` on the `Equipement` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(25)`.

*/
-- AlterTable
ALTER TABLE "Equipement" ALTER COLUMN "nom" SET DATA TYPE VARCHAR(25);
