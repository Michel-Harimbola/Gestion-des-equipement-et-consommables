/*
  Warnings:

  - You are about to drop the column `type` on the `Rapport` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Rapport" DROP COLUMN "type";

-- DropEnum
DROP TYPE "TypeRapport";
