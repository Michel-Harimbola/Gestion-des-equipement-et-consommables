/*
  Warnings:

  - The values [responsableRH,utilisateurSimple] on the enum `RoleUtilisateur` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `etat` on the `Equipement` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Equipement` table. All the data in the column will be lost.
  - Added the required column `marque` to the `Equipement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numeroDeSerie` to the `Equipement` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Disponibilite" AS ENUM ('Disponible', 'Emprunte', 'EnMaintenance', 'Indisponible');

-- CreateEnum
CREATE TYPE "EtatMateriel" AS ENUM ('Neuf', 'BonEtat', 'EtatMoyen', 'MauvaisEtat', 'HorsUsage', 'EnReparation');

-- AlterEnum
BEGIN;
CREATE TYPE "RoleUtilisateur_new" AS ENUM ('admin', 'regisseurEquipementInterne', 'client', 'patenaire', 'personnelInterne');
ALTER TABLE "public"."Utilisateur" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "Utilisateur" ALTER COLUMN "role" TYPE "RoleUtilisateur_new" USING ("role"::text::"RoleUtilisateur_new");
ALTER TYPE "RoleUtilisateur" RENAME TO "RoleUtilisateur_old";
ALTER TYPE "RoleUtilisateur_new" RENAME TO "RoleUtilisateur";
DROP TYPE "public"."RoleUtilisateur_old";
ALTER TABLE "Utilisateur" ALTER COLUMN "role" SET DEFAULT 'personnelInterne';
COMMIT;

-- AlterTable
ALTER TABLE "Consommable" ALTER COLUMN "nom" SET DATA TYPE VARCHAR(30);

-- AlterTable
ALTER TABLE "Equipement" DROP COLUMN "etat",
DROP COLUMN "type",
ADD COLUMN     "disponibilite" "Disponibilite" NOT NULL DEFAULT 'Disponible',
ADD COLUMN     "etatMateriel" "EtatMateriel" NOT NULL DEFAULT 'BonEtat',
ADD COLUMN     "marque" VARCHAR(30) NOT NULL,
ADD COLUMN     "numeroDeSerie" VARCHAR(30) NOT NULL,
ALTER COLUMN "nom" SET DATA TYPE VARCHAR(30);

-- AlterTable
ALTER TABLE "Utilisateur" ALTER COLUMN "role" SET DEFAULT 'personnelInterne';

-- DropEnum
DROP TYPE "public"."Etat";
