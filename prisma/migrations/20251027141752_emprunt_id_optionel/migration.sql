-- DropIndex
DROP INDEX "public"."Equipement_empruntId_key";

-- AlterTable
ALTER TABLE "Equipement" ALTER COLUMN "empruntId" DROP NOT NULL;
