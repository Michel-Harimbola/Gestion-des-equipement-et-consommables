/*
  Warnings:

  - You are about to drop the column `createdAt` on the `DemandeEmprunt` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `DemandeEmprunt` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Consommable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usage` to the `DemandeEmprunt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usage` to the `Emprunt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prix` to the `Equipement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Equipement` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Obtention" AS ENUM ('Achat', 'Don');

-- AlterTable
ALTER TABLE "Consommable" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "donnateur" TEXT,
ADD COLUMN     "fournisseur" TEXT,
ADD COLUMN     "obtention" "Obtention" NOT NULL DEFAULT 'Achat',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "DemandeEmprunt" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "usage" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Emprunt" ADD COLUMN     "usage" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Equipement" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "donnateur" TEXT,
ADD COLUMN     "fournisseur" TEXT,
ADD COLUMN     "obtention" "Obtention" NOT NULL DEFAULT 'Achat',
ADD COLUMN     "prix" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
