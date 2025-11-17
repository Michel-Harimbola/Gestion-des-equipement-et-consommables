/*
  Warnings:

  - The values [patenaire] on the enum `RoleUtilisateur` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "RoleUtilisateur_new" AS ENUM ('admin', 'regisseurEquipementInterne', 'client', 'partenaire', 'personnelInterne');
ALTER TABLE "public"."Utilisateur" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "Utilisateur" ALTER COLUMN "role" TYPE "RoleUtilisateur_new" USING ("role"::text::"RoleUtilisateur_new");
ALTER TYPE "RoleUtilisateur" RENAME TO "RoleUtilisateur_old";
ALTER TYPE "RoleUtilisateur_new" RENAME TO "RoleUtilisateur";
DROP TYPE "public"."RoleUtilisateur_old";
ALTER TABLE "Utilisateur" ALTER COLUMN "role" SET DEFAULT 'personnelInterne';
COMMIT;
