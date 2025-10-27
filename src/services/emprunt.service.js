const prisma = require("../lib/prisma.js");

class EmpruntService {
    static async createEmprunt(data, userId) {
        const { dateRetourPrevu, equipementIds } = data;

        if (!equipementIds || equipementIds.length === 0) {
            throw new Error("Aucun équipement spécifié pour l'emprunt.");
        }

        if (new Date(dateRetourPrevu) <= new Date()) {
            throw new Error("La date de retour prévue doit être future.");
        }

        const equipements = await prisma.equipement.findMany({
            where: {
                id: { in: equipementIds }
            }
        });

        const indisponible = equipements.filter(e => e.etat !== 'Disponible');
        if (indisponible.length > 0) {
            const noms = indisponible.map(e => e.nom).join(', ');
            throw new Error(`Les équipements suivants ne sont pas disponibles (État actuel: ${indisponible[0].etat}): ${noms}`);
        }

        const transaction = await prisma.$transaction(async (tx) => {
            const emprunt = await prisma.emprunt.create({
                data: {
                    dateRetourPrevu: new Date(dateRetourPrevu),
                    utilisateurId: userId,
                },
            });

            await tx.equipement.updateMany({
                where: { id: { in: equipementIds } },
                data: {
                    etat: "Emprunter",
                    empruntId: emprunt.id,
                },
            });

            return emprunt;
        });

        return prisma.emprunt.findUnique({
            where: { id: transaction.id },
            include: {
                utilisateur: {
                    select: { nom: true, prenom: true, email: true }
                },
                equipement: true,
            },
        });
    }

    static async getEmpruntById (id) {
        const empruntId = parseInt(id, 10);
        if(isNaN(empruntId)) throw new Error("ID invalide ou non trouvé");
        
        const emprunt = await prisma.emprunt.findUnique({
            where: { id: empruntId },
            include: { 
                utilisateur: true,
                equipement: true,
            },
        });
        if(!emprunt) throw new Error("Emprunt non trouvé");
        
        return emprunt;
    }

    static async getAllEmprunts () {
        const emprunts = await prisma.emprunt.findMany({
            orderBy: { dateEmprunt: "desc" },
            include: {
                utilisateur: {
                    select: { nom: true, prenom: true, email: true },
                    equipement: true,
                }
            },
        });

        return emprunts
    }

    static async getUserEmprunts (userId) {
        const emprunts = await prisma.emprunt.findMany({
            where: { utilisateurId: userId },
            orderBy: { dateEmprunt: "desc" }
        });
    }

    static async returnEmprunt (id, userId) {
        const empruntId = parseInt(id, 10);
        const dateEffective = new Date();

        const emprunt = await prisma.emprunt.findUnique({ 
            where: { id: empruntId },
            include: { equipement: true }
        });

        if(!emprunt) throw new Error("Emprunt non trouvé");

        if(emprunt.utilisateurId !== userId) {
            throw new Error("Accès refusé. Cet emprunt n'appartient pas à cet utilisateur.");
        }

        if (emprunt.statut === 'Retourner') {
            throw new Error("Cet emprunt est déjà marqué comme retourné.");
        }

        const equipementIds = emprunt.equipement.map(e => e.id);

        const updateResult = await prisma.$transaction(async (tx) => {
            await tx.equipement.updateMany({
                where: { id: { in: equipementIds } },
                data: {
                    etat: "Disponible",
                    empruntId: null,
                } 
            });

            const updateEmprunt = await prisma.emprunt.update({
                where: { id: empruntId },
                data: {
                    statut: "Retourner",
                    dateRetourEffective: dateEffective,
                },
                include: { equipement: true }
            });

            return updateEmprunt;
        });

        return updateResult;
    }

    static async updateEmprunt (id, data) {
        const empruntId = parseInt(id, 10);
        if(isNaN(empruntId)) throw new Error("ID invalide");

        const emprunt = await prisma.emprunt.update({
            where: { id: empruntId },
            data,
            include: {
                utilisateur: { 
                    select: { nom: true, prenom: true, email: true },
                 },
            },
        });

        return emprunt;
    }

    static async deleteEmprunt (id) {
        const empruntId = parseInt(id, 10);
        if(isNaN(empruntId)) throw new Error("ID invalide");

        await prisma.emprunt.delete({
            where: { id: empruntId },
        });
    }
}

module.exports = EmpruntService;