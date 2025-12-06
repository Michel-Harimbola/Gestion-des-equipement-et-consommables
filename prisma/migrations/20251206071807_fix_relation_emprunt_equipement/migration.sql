/*
  Warnings:

  - You are about to drop the column `empruntId` on the `Equipement` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[equipementId]` on the table `Emprunt` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `equipementId` to the `Emprunt` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Equipement" DROP CONSTRAINT "Equipement_empruntId_fkey";

-- AlterTable
ALTER TABLE "Emprunt" ADD COLUMN     "equipementId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Equipement" DROP COLUMN "empruntId";

-- CreateIndex
CREATE UNIQUE INDEX "Emprunt_equipementId_key" ON "Emprunt"("equipementId");

-- AddForeignKey
ALTER TABLE "Emprunt" ADD CONSTRAINT "Emprunt_equipementId_fkey" FOREIGN KEY ("equipementId") REFERENCES "Equipement"("id") ON DELETE CASCADE ON UPDATE CASCADE;
