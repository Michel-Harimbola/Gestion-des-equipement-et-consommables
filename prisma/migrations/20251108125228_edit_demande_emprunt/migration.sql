/*
  Warnings:

  - You are about to drop the column `satatut` on the `DemandeEmprunt` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `DemandeEmprunt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DemandeEmprunt" DROP COLUMN "satatut",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "statut" "StatutDemande" NOT NULL DEFAULT 'enAttente',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "DemandeEmprunt" ADD CONSTRAINT "DemandeEmprunt_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DemandeEmprunt" ADD CONSTRAINT "DemandeEmprunt_equipementId_fkey" FOREIGN KEY ("equipementId") REFERENCES "Equipement"("id") ON DELETE CASCADE ON UPDATE CASCADE;
