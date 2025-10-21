-- CreateEnum
CREATE TYPE "Periode" AS ENUM ('Mensuel', 'Hebdo');

-- CreateEnum
CREATE TYPE "TypeRapport" AS ENUM ('Stock', 'Consommation', 'UtilisationEquipement');

-- CreateEnum
CREATE TYPE "TypeNotification" AS ENUM ('AlerteStock', 'RappelRetour');

-- CreateEnum
CREATE TYPE "Statut" AS ENUM ('EnCours', 'Retourner');

-- CreateEnum
CREATE TYPE "Etat" AS ENUM ('Disponible', 'Emprunter', 'EnMaintenance');

-- CreateEnum
CREATE TYPE "RoleUtilisateur" AS ENUM ('admin', 'responsableRH', 'utilisateurSimple');

-- CreateTable
CREATE TABLE "Utilisateur" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "prenom" VARCHAR(100) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "role" "RoleUtilisateur" NOT NULL DEFAULT 'utilisateurSimple',

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Emprunt" (
    "id" SERIAL NOT NULL,
    "dateEmprunt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateRetourPrevu" TIMESTAMP(3) NOT NULL,
    "dateRetourEffective" TIMESTAMP(3),
    "utilisateurId" INTEGER NOT NULL,
    "statut" "Statut" NOT NULL DEFAULT 'EnCours',

    CONSTRAINT "Emprunt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipement" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "type" VARCHAR(100) NOT NULL,
    "etat" "Etat" NOT NULL DEFAULT 'Disponible',
    "empruntId" INTEGER NOT NULL,

    CONSTRAINT "Equipement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "DateEnvoi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "TypeNotification" NOT NULL DEFAULT 'AlerteStock',
    "empruntId" INTEGER NOT NULL,
    "consommableId" INTEGER NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consommable" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "quantiteDisponible" INTEGER NOT NULL,
    "seuilCritique" INTEGER NOT NULL,

    CONSTRAINT "Consommable_pkey" PRIMARY KEY ("id")
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

-- CreateIndex
CREATE UNIQUE INDEX "Emprunt_utilisateurId_key" ON "Emprunt"("utilisateurId");

-- CreateIndex
CREATE UNIQUE INDEX "Equipement_empruntId_key" ON "Equipement"("empruntId");

-- CreateIndex
CREATE UNIQUE INDEX "Notification_empruntId_key" ON "Notification"("empruntId");

-- CreateIndex
CREATE UNIQUE INDEX "Notification_consommableId_key" ON "Notification"("consommableId");

-- AddForeignKey
ALTER TABLE "Emprunt" ADD CONSTRAINT "Emprunt_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equipement" ADD CONSTRAINT "Equipement_empruntId_fkey" FOREIGN KEY ("empruntId") REFERENCES "Emprunt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_empruntId_fkey" FOREIGN KEY ("empruntId") REFERENCES "Emprunt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_consommableId_fkey" FOREIGN KEY ("consommableId") REFERENCES "Consommable"("id") ON DELETE CASCADE ON UPDATE CASCADE;
