const prisma = require("../lib/prisma.js");
const { sendEmail } = require("./email.service.js");
const { generateRetardEmailHTML } = require("../utils/emailTemplate.js");

class EmpruntService {
    static async createEmprunt(data, userId) {
        const { dateRetourPrevu, usage, equipementId } = data;
        const equipId = parseInt(equipementId, 10);

        if (!equipId || equipId.length === 0) {
            throw new Error("Aucun équipement spécifié pour l'emprunt.");
        }

        if (new Date(dateRetourPrevu) <= new Date()) {
            throw new Error("La date de retour prévue doit être future.");
        }

        const equipement = await prisma.equipement.findUnique({
            where: {id: equipId }
        });

        if (!equipement) {
          throw new Error("Équipement introuvable.");
        }
        //vérifier disponnibilité équipement
        if (equipement.disponibilite !== "Disponible" && equipement.disponibilite == "EnMaintenance" && equipement.disponibilite == "Indisponible") {
          throw new Error(`L'équipement "${equipement.nom}" n'est pas disponible.`);
        }

        const transaction = await prisma.$transaction(async (tx) => {
            //création emprunt
            const emprunt = await prisma.emprunt.create({
                data: {
                    dateRetourPrevu: new Date(dateRetourPrevu),
                    usage: usage,
                    utilisateurId: userId,
                    equipementId: equipId,
                },
            });
            //mise à jour l'état de l'équipement
            await tx.equipement.update({
                where: { id: equipId },
                data: {
                    disponibilite: "Emprunte"
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
                equipement: {
                    select: { nom: true, marque: true, numeroDeSerie: true, etatMateriel: true } 
                },
            },
        });
    }

    static async getEmpruntById (id) {
        const empruntId = parseInt(id, 10);
        if(isNaN(empruntId)) throw new Error("ID invalide ou non trouvé");
        
        const emprunt = await prisma.emprunt.findUnique({
            where: { id: empruntId },
            include: { 
                utilisateur: { nom: true, prenom: true, email: true },
                equipement: { nom: true, marque: true, numeroDeSerie: true, etatMateriel: true },
            },
        });
        if(!emprunt) throw new Error("Emprunt non trouvé");
        
        return emprunt;
    }

    static async getAllEmprunts ({ page = 1, limit = 12 }) {
        const skip = (page - 1) * limit;

        const [emprunts, total] = await Promise.all([
            prisma.emprunt.findMany({
                orderBy: { dateEmprunt: "desc" },
                skip,
                take: limit,
                include: {
                    utilisateur: {
                        select: { nom: true, prenom: true, email: true }
                    },
                    equipement: {
                        select: { nom: true, marque: true, numeroDeSerie: true, etatMateriel: true },
                    },
                },
            }),
            prisma.emprunt.count()
        ]);

        return { emprunts, total, page, limit };
    }
    
    static async getUserEmprunts (userId, { page = 1, limit = 12 }) {
        const skip = (page - 1) * limit;
        
        const [emprunts, total] = await Promise.all([   
            prisma.emprunt.findMany({
                where: { utilisateurId: userId },
                orderBy: { dateEmprunt: "desc" },
                skip,
                take: limit,
                include: {
                    equipement: { 
                        select: { id: true, nom: true, marque: true, numeroDeSerie: true, etatMateriel: true }
                    }
                }
            }),
            prisma.emprunt.count({
                where: { utilisateurId: userId },
            })
        ]);
        
        return { emprunts, total, page, limit };
    }
    
    static async searchEmprunts(q, page = 1, limit = 12) {
        page = parseInt(page, 10) || 1;
        limit = parseInt(limit, 10) || 12;
        const skip = (page - 1) * limit;

        const where = {
            OR: [
                { utilisateur: { nom: { contains: q, mode: "insensitive" } } },
                { utilisateur: { prenom: { contains: q, mode: "insensitive" } } },

                { equipement: { nom: { contains: q, mode: "insensitive" } } },
                { equipement: { marque: { contains: q, mode: "insensitive" } } },
                { equipement: { numeroDeSerie: { contains: q, mode: "insensitive" } } },
            ]
        };

        const [emprunts, total] = await Promise.all([
            prisma.emprunt.findMany({
                where,
                skip,
                take: limit,
                orderBy: { dateEmprunt: "desc" },
                include: {
                    utilisateur: {
                        select: { nom: true, prenom: true, email: true }
                    },
                    equipement: {
                        select: { nom: true, marque: true, numeroDeSerie: true, etatMateriel: true }
                    }
                }
            }),
            prisma.emprunt.count({ where })
        ]);

        return { emprunts, total, page, limit };
    }

    static async searchUserEmprunts (userId, q, page = 1, limit = 10) {
        page = parseInt(page, 10) || 1;
        limit = parseInt(limit, 10) || 10;
        const skip = (page - 1) * limit;

        const where = {
            OR: [
                { equipement: { nom: { contains: q, mode: "insensitive" } } },
                { equipement: { marque: { contains: q, mode: "insensitive" } } },
                { equipement: { numeroDeSerie: { contains: q, mode: "insensitive" } } },
            ]
        };
        
        const [emprunts, total] = await Promise.all([   
            prisma.emprunt.findMany({
                where: { 
                    utilisateurId: userId,
                    ...where 
                },
                orderBy: { dateEmprunt: "desc" },
                skip,
                take: limit,
                include: {
                    equipement: { 
                        select: { id: true, nom: true, marque: true, numeroDeSerie: true, etatMateriel: true }
                    }
                }
            }),
            prisma.emprunt.count({
                where: { 
                    utilisateurId: userId,
                    ...where
                },
            })
        ]);
        
        return { emprunts, total, page, limit };
    }

    static async getUserEmpruntsInProgress(userId) {
        const emprunts = await prisma.emprunt.findMany({
            where: {
                utilisateurId: userId,
                statut: { in: ["EnCours", "EnRetard"] },
            },
            include: {
                equipement: { 
                    select: { id: true, nom: true, marque: true, numeroDeSerie: true, etatMateriel: true }
                }
            }
        });

        return emprunts;
    }

    static async getRecentEmprunts() {
        const emprunts = await prisma.emprunt.findMany({
            where: { statut: {in: ["EnCours", "EnRetard"]} },
            orderBy: { createdAt: 'desc' },
            take: 3,
            include: {
                utilisateur: {
                    select: { nom: true, prenom: true, email: true }
                },
                equipement: {
                    select: { id: true, nom: true, marque: true, numeroDeSerie: true, etatMateriel: true }
                }
            }
        });
        return emprunts;
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

        const equipementId = emprunt.equipement.id;

        const updateResult = await prisma.$transaction(async (tx) => {
            await tx.equipement.updateMany({
                where: { id: equipementId },
                data: {
                    disponibilite: "Disponible",
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
                equipement: true,
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

    static async checkRetardAndNotify() {
        const now = new Date();

        const empruntsEnRetard = await prisma.emprunt.findMany({
            where: {
                statut: "EnCours",
                dateRetourPrevu: { lt: now }
            },
            include: {
                utilisateur: {
                    select: { nom: true, email: true },
                },
                equipement: {
                    select: { nom: true }
                }
            }
        });

        if (empruntsEnRetard.length === 0) return;

        const { getIO } = require("../socket.js");
        const io = getIO();

        for (const emprunt of empruntsEnRetard) {

            await prisma.emprunt.update({
                where: { id: emprunt.id },
                data: { statut: "EnRetard" }
            });

            const notif = await prisma.notification.create({
                data: {
                    message: `L'équipement "${emprunt.equipement.nom}" doit être retourné.`,
                    type: "RappelRetour",
                    empruntId: emprunt.id,
                }
            });

            io.emit("notif_retard", notif);
            // EMAIL
            const subject = "⚠️ Rappel : Emprunt en retard";
            const html = generateRetardEmailHTML(emprunt.utilisateur.nom, emprunt.equipement.nom);
    
            if (emprunt.utilisateur.email) {
                await sendEmail(emprunt.utilisateur.email, subject, html);
            }
        }
    }
}

module.exports = EmpruntService;