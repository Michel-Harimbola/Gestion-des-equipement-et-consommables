/*
  Warnings:

  - A unique constraint covering the columns `[equipementId]` on the table `DemandeEmprunt` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DemandeEmprunt_equipementId_key" ON "DemandeEmprunt"("equipementId");
