/*
  Warnings:

  - Added the required column `marque` to the `Consommable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Consommable" ADD COLUMN     "marque" VARCHAR(30) NOT NULL;
