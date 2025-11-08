-- CreateEnum
CREATE TYPE "StatutDemande" AS ENUM ('enAttente', 'approuver', 'refuser');

-- CreateTable
CREATE TABLE "DemandeEmprunt" (
    "id" SERIAL NOT NULL,
    "utilisateurId" INTEGER NOT NULL,
    "equipementId" INTEGER NOT NULL,
    "dateDemande" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateRetourPrevu" TIMESTAMP(3) NOT NULL,
    "satatut" "StatutDemande" NOT NULL DEFAULT 'enAttente',

    CONSTRAINT "DemandeEmprunt_pkey" PRIMARY KEY ("id")
);
