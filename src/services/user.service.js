const prisma = require("../lib/prisma.js");
const PasswordUtils = require("../utils/password.util.js");

class UserService {
    static async createUser(nom, prenom, email, motdepasse, role) {
        const existing = await prisma.utilisateur.findUnique({ where: { email } });
        if(existing) throw new Error("Utilisateur déjà exister");

        const hashedPassword = await PasswordUtils.hashPassword(motdepasse);

        const user = await prisma.utilisateur.create({
            data:{
                nom,
                prenom,
                email,
                motdepasse: hashedPassword,
                role,
            },
        });

        return {
            id: user.id,
            email: user.email,
            role: user.role,
        };
    }

    static async getUserById(id) {
        const userId = parseInt(id, 10);
        if(isNaN(userId)) throw new Error("ID invalide");

        const user = await prisma.utilisateur.findUnique({
            where: { id: userId },
            select: {
                id: true,
                nom: true,
                prenom: true,
                email: true,
                role: true,
                photo: true,
                createdAt: true,
                updateAt: true,
            },
        });
        if(!user) throw new Error("Utilisateur non trouvé");

        return user;
    }

    static async getAllUsers({ page = 1, limit = 12 }) {
        const skip = (page - 1) * limit;
        
        const [users, total] = await Promise.all([
            prisma.utilisateur.findMany({
                select: {
                    id: true,
                    nom: true,
                    prenom: true,
                    email: true,
                    role: true,
                    photo: true,
                    createdAt: true,
                    updateAt: true,
                },
                orderBy: { createdAt: "desc" },
                skip,
                take: limit,
            }),
            prisma.utilisateur.count()
        ]);

        return { users, total, page, limit };
    }

    static async searchUsers(q, page = 1, limit = 12 ) {
        page = parseInt(page, 10) || 1;
        limit = parseInt(limit, 10) || 12;
        const skip = (page - 1) * limit;

        const where = {
            OR: [
                { nom: { contains: q, mode: "insensitive" } },
                { prenom: { contains: q, mode: "insensitive" } },
                { email: { contains: q, mode: "insensitive" } }
            ]
        };
        
        const [users, total] = await Promise.all([
            prisma.utilisateur.findMany({
                where,
                select: {
                    id: true,
                    nom: true,
                    prenom: true,
                    email: true,
                    role: true,
                    photo: true,
                    createdAt: true,
                    updateAt: true,
                },
                orderBy: { createdAt: "desc" },
                skip,
                take: limit,
            }),
            prisma.utilisateur.count({ where })
        ]);

        return { users, total, page, limit };
    }

    static async updateUser(id, data, currentUser) {
        const userId = parseInt(id, 10);
        if(isNaN(userId)) throw new Error("ID invalide");

        const targetUser = await prisma.utilisateur.findUnique({
            where: { id: userId },
        });

        if (!targetUser) throw new Error("Utilisateur introuvable");

        if (targetUser.role === "admin") {
            if (currentUser.id !== targetUser.id) {
            throw new Error("Vous ne pouvez pas modifier l'administrateur");
            }

            if (data.role || data.email) {
                throw new Error("Modification de champs système interdite");
            }
        }

        if (
            targetUser.role === "admin" &&
            data.role &&
            data.role !== "admin"
        ) {
            throw new Error("Le rôle admin est immuable");
        }

        const user = await prisma.utilisateur.update({
            where: {id: userId },
            data
        });

        return user;
    }

    static async deleteUser(id) {
        const userId = parseInt(id, 10);
        if(isNaN(userId)) throw new Error("ID invalide");

        const targetUser = await prisma.utilisateur.findUnique({
            where: { id: userId },
        });

        if (!targetUser) throw new Error("Utilisateur introuvable");

        if (targetUser.role === "admin") {
            throw new Error("Impossible de supprimer l'administrateur");
        }

        await prisma.utilisateur.delete({
            where: { id: userId }
        });
    }
};


module.exports = UserService;