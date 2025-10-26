const prisma = require("../lib/prisma.js");

class EmpruntService {
    static async createEmprunt(data, userId) {
        const { dateRetourPrevu } = data;
        if (new Date(dateRetourPrevu) <= new Date()) {
            throw new Error("La date de retour prévue doit être future.");
        }

        const emprunt = await prisma.emprunt.create({
            data: {
                dateRetourPrevu: new Date(dateRetourPrevu),
                utilisateurId: userId,
            },

            include: {
                utilisateur: {
                    select: { nom: true, prenom: true, email: true }
                }
            }
        });

        return emprunt;
    }

    static async getEmpruntById (id) {
        const empruntId = parseInt(id, 10);
        if(isNaN(empruntId)) throw new Error("ID invalide ou non trouvé");
        
        const emprunt = await prisma.emprunt.findUnique({
            where: { id: empruntId },
            include: { utilisateur: true },
        });
        if(!emprunt) throw new Error("Emprunt non trouvé");
        
        return emprunt;
    }

    static async getAllEmprunts () {
        const emprunts = await prisma.emprunt.findMany({
            orderBy: { dateEmprunt: "desc" },
            include: {
                utilisateur: { nom: true, prenom: true, email: true }
            }
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

        const emprunt = await prisma.emprunt.findUnique({ where: { id: empruntId }});
        if(!emprunt) throw new Error("Emprunt non trouvé");

        if(emprunt.utilisateurId !== userId) {
            throw new Error("Accès refusé. Cet emprunt n'appartient pas à cet utilisateur.");
        }

        if (emprunt.statut === 'Retourner') {
            throw new Error("Cet emprunt est déjà marqué comme retourné.");
        }

        const updateEmprunt = await prisma.emprunt.update({
            where: { id: empruntId },
            data: {
                statut: "Retourner",
                dateRetourEffective: dateEffective,
            }
        });

        return updateEmprunt;

    }

    static async updateEmprunt (id, data) {
        const empruntId = parseInt(id, 10);
        if(isNaN(empruntId)) throw new Error("ID invalide");

        const emprunt = await prisma.emprunt.update({
            where: { id: empruntId },
            data,
            include: {
                utilisateur: { nom: true, prenom: true, email: true }
            }
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