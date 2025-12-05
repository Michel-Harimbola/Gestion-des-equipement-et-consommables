-- CreateEnum
CREATE TYPE "Obtention" AS ENUM ('Achat', 'Don');

-- CreateEnum
CREATE TYPE "Periode" AS ENUM ('Mensuel', 'Hebdo');

-- CreateEnum
CREATE TYPE "TypeRapport" AS ENUM ('Stock', 'Consommation', 'UtilisationEquipement');

-- CreateEnum
CREATE TYPE "TypeNotification" AS ENUM ('AlerteStock', 'RappelRetour');

-- CreateEnum
CREATE TYPE "Statut" AS ENUM ('EnCours', 'EnRetard', 'Retourner');

-- CreateEnum
CREATE TYPE "Disponibilite" AS ENUM ('Disponible', 'Emprunte', 'EnMaintenance', 'Indisponible');

-- CreateEnum
CREATE TYPE "EtatMateriel" AS ENUM ('Neuf', 'BonEtat', 'EtatMoyen', 'MauvaisEtat', 'HorsUsage', 'EnReparation');

-- CreateEnum
CREATE TYPE "RoleUtilisateur" AS ENUM ('admin', 'regisseurEquipementInterne', 'client', 'partenaire', 'personnelInterne');

-- CreateEnum
CREATE TYPE "StatutDemande" AS ENUM ('enAttente', 'approuver', 'refuser');

-- CreateEnum
CREATE TYPE "TypeDemande" AS ENUM ('EMPRUNT', 'RETOUR');

-- CreateTable
CREATE TABLE "Utilisateur" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "prenom" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "motdepasse" TEXT NOT NULL,
    "role" "RoleUtilisateur" NOT NULL DEFAULT 'personnelInterne',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Emprunt" (
    "id" SERIAL NOT NULL,
    "utilisateurId" INTEGER NOT NULL,
    "dateEmprunt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateRetourPrevu" TIMESTAMP(3) NOT NULL,
    "dateRetourEffective" TIMESTAMP(3),
    "usage" TEXT NOT NULL,
    "statut" "Statut" NOT NULL DEFAULT 'EnCours',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Emprunt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DemandeEmprunt" (
    "id" SERIAL NOT NULL,
    "utilisateurId" INTEGER NOT NULL,
    "equipementId" INTEGER NOT NULL,
    "dateDemande" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateRetourPrevu" TIMESTAMP(3) NOT NULL,
    "usage" TEXT NOT NULL,
    "statut" "StatutDemande" NOT NULL DEFAULT 'enAttente',
    "type" "TypeDemande" NOT NULL DEFAULT 'EMPRUNT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DemandeEmprunt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipement" (
    "id" SERIAL NOT NULL,
    "empruntId" INTEGER,
    "nom" VARCHAR(30) NOT NULL,
    "numeroDeSerie" VARCHAR(30) NOT NULL,
    "marque" VARCHAR(30) NOT NULL,
    "disponibilite" "Disponibilite" NOT NULL DEFAULT 'Disponible',
    "etatMateriel" "EtatMateriel" NOT NULL DEFAULT 'BonEtat',
    "obtention" "Obtention" NOT NULL DEFAULT 'Achat',
    "prix" DOUBLE PRECISION NOT NULL,
    "fournisseur" TEXT,
    "donateur" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Equipement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "empruntId" INTEGER,
    "consommableId" INTEGER,
    "message" TEXT NOT NULL,
    "DateEnvoi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "TypeNotification" NOT NULL DEFAULT 'AlerteStock',
    "vu" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consommable" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(30) NOT NULL,
    "quantiteDisponible" INTEGER NOT NULL,
    "seuilCritique" INTEGER NOT NULL,
    "obtention" "Obtention" NOT NULL DEFAULT 'Achat',
    "fournisseur" TEXT,
    "donnateur" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Consommable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UtilisationConsommable" (
    "id" SERIAL NOT NULL,
    "utilisateurId" INTEGER NOT NULL,
    "consommableId" INTEGER NOT NULL,
    "quantiteUtilise" INTEGER NOT NULL,
    "dateUtilisation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UtilisationConsommable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rapport" (
    "id" SERIAL NOT NULL,
    "contenu" TEXT NOT NULL,
    "type" "TypeRapport" NOT NULL DEFAULT 'Stock',
    "periode" "Periode" NOT NULL DEFAULT 'Mensuel',

    CONSTRAINT "Rapport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");

-- AddForeignKey
ALTER TABLE "Emprunt" ADD CONSTRAINT "Emprunt_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DemandeEmprunt" ADD CONSTRAINT "DemandeEmprunt_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DemandeEmprunt" ADD CONSTRAINT "DemandeEmprunt_equipementId_fkey" FOREIGN KEY ("equipementId") REFERENCES "Equipement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equipement" ADD CONSTRAINT "Equipement_empruntId_fkey" FOREIGN KEY ("empruntId") REFERENCES "Emprunt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_empruntId_fkey" FOREIGN KEY ("empruntId") REFERENCES "Emprunt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_consommableId_fkey" FOREIGN KEY ("consommableId") REFERENCES "Consommable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UtilisationConsommable" ADD CONSTRAINT "UtilisationConsommable_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UtilisationConsommable" ADD CONSTRAINT "UtilisationConsommable_consommableId_fkey" FOREIGN KEY ("consommableId") REFERENCES "Consommable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
