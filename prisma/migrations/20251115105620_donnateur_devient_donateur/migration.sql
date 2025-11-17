/*
  Warnings:

  - You are about to drop the column `donnateur` on the `Equipement` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Equipement" DROP COLUMN "donnateur",
ADD COLUMN     "donateur" TEXT;
