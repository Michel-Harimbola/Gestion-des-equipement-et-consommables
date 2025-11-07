const prisma = require("../lib/prisma.js");
const PasswordUtils = require("../utils/password.util.js");

class UserService {
    static async createUser(nom, prenom, email, motDePasse, role) {
        const existing = await prisma.utilisateur.findUnique({ where: { email } });
        if(existing) throw new Error("Utilisateur déjà exister");

        const hashedPassword = await PasswordUtils.hashPassword(motDePasse);

        const user = await prisma.utilisateur.create({
            data:{
                nom,
                prenom,
                email,
                motDePasse: hashedPassword,
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
                createdAt: true,
                updateAt: true,
            },
        });
        if(!user) throw new Error("Utilisateur non trouvé");

        return user;
    }

    static async getAllUsers() {
        const users = await prisma.utilisateur.findMany({
            select: {
                id: true,
                nom: true,
                prenom: true,
                email: true,
                role: true,
                createdAt: true,
                updateAt: true,
            },
        });

        return users;
    }

    static async updateUser(id, data) {
        const userId = parseInt(id, 10);
        if(isNaN(userId)) throw new Error("ID invalide");

        const user = await prisma.utilisateur.update({
            where: {id: userId },
            data
        });

        return user;
    }

    static async deleteUser(id) {
        const userId = parseInt(id, 10);
        if(isNaN(userId)) throw new Error("ID invalide");

        await prisma.utilisateur.delete({
            where: { id: userId }
        });
    }
};


module.exports = UserService;