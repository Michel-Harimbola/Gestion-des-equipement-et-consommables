/*
  Warnings:

  - You are about to drop the column `motdepasse` on the `Utilisateur` table. All the data in the column will be lost.
  - Added the required column `motdepasse` to the `Utilisateur` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Utilisateur" DROP COLUMN "motdepasse",
ADD COLUMN     "motdepasse" TEXT NOT NULL;
