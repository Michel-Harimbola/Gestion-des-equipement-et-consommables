const prisma = require("../lib/prisma.js");
const passwordUtils = require("../utils/password.util.js");
const generateToken = require("../utils/jwt.util.js");

class AuthService {
    static async register({ nom, prenom, email, motdepasse, role }) {
        // Vérifier si l'user est déjà exister
        const existing = await prisma.utilisateur.findUnique({ where: { email }});
        if (existing) throw new Error("Email déjà existant");
        
        // console.log("Mot de passe reçu :", motdepasse);

        // Validation de la mdp
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        if (!passwordRegex.test(motdepasse)) {
            throw new Error("Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.");
        }

        const hashedPassword = await passwordUtils.hashPassword(motdepasse);

        const user = await prisma.utilisateur.create({
            data: {
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
            token: generateToken({ id: user.id, role: user.role }),
        };
    }

    static async login({ email, motdepasse }) {
        const user = await prisma.utilisateur.findUnique({ where: { email } });
        if (!user) throw new Error("Email ou mot de passe invalide");

        const isValid = await passwordUtils.verifyPassword(
            motdepasse,
            user.motdepasse,
        );

        if (!isValid) throw new Error("Email ou mot de passe invalide");

        return {
            id: user.id,
            email: user.email,
            role: user.role,
            token: generateToken({ id: user.id, role: user.role }),
        };
    }

    static async changePassword(id, oldPassword, newPassword) {
        const userId = parseInt(id, 10);
        if (isNaN(userId)) throw new Error("ID invalide");

        const user = await prisma.utilisateur.findUnique({
            where: { id: userId },
        });
        if (!user) throw new Error("Utilisateur non trouvé");

        const isValid = await passwordUtils.verifyPassword(
            oldPassword,
            user.motdepasse,
        );
        if(!isValid) throw new Error("Mot de passe actuel invalide");

        const hashedPassword = await passwordUtils.hashPassword(newPassword);

        await prisma.utilisateur.update({
            where: { id: userId },
            data: { motdepasse: hashedPassword },
        });

        return { message: "Mot de passe modifié avec succès" }; 
    }
}

module.exports = AuthService;