-- CreateTable
CREATE TABLE "UtilisationConsommable" (
    "id" SERIAL NOT NULL,
    "utilisateurId" INTEGER NOT NULL,
    "consommableId" INTEGER NOT NULL,
    "quantiteUtilise" INTEGER NOT NULL,
    "dateUtilisation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,

    CONSTRAINT "UtilisationConsommable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UtilisationConsommable" ADD CONSTRAINT "UtilisationConsommable_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UtilisationConsommable" ADD CONSTRAINT "UtilisationConsommable_consommableId_fkey" FOREIGN KEY ("consommableId") REFERENCES "Consommable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
