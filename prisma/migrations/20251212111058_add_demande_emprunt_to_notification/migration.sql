-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "demandeEmpruntId" INTEGER;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_demandeEmpruntId_fkey" FOREIGN KEY ("demandeEmpruntId") REFERENCES "DemandeEmprunt"("id") ON DELETE SET NULL ON UPDATE CASCADE;
