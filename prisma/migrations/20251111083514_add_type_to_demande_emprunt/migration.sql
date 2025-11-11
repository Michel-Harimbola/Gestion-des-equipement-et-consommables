-- CreateEnum
CREATE TYPE "TypeDemande" AS ENUM ('EMPRUNT', 'RETOUR');

-- AlterTable
ALTER TABLE "DemandeEmprunt" ADD COLUMN     "type" "TypeDemande" NOT NULL DEFAULT 'EMPRUNT';
