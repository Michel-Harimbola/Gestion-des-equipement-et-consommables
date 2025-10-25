const prisma = require("../lib/prisma.js");
const PasswordUtils = require("../utils/password.util.js");
const generateToken = require("../utils/jwt.util.js");
const { use } = require("react");

class AuthService {
    static async register({ nom, prenom, email, motdeDePasse, role }) {
        // Vérifier si l'user est déjà exister
        const existing = await prisma.utilisateur.findUnique({ where: { email }});
        if (existing) throw new Error("Email déjà existant");
        
        // Validation de la mdp
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(motdeDePasse)) {
            throw new Error("Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.");
        }

        const hashedPassord = await PasswordUtils.hashPassword(motdeDePasse);

        const user = await prisma.utilisateur.create({
            data: {
                nom,
                prenom,
                email,
                motdeDePasse: hashedPassord,
                role,
            },
        });

        return {
            id: user.id,
            email: user.email,
            token: generateToken({ id: user.id, role: user.role }),
        };
    }

    static async login({ email, motdeDePasse }) {
        const user = await prisma.utilisateur.findUnique({ where: { email } });
        if (!use) throw new Error("Email ou mot de passe invalide");

        const isValid = await PasswordUtils.verifyPassword(
            motdeDePasse,
            user.motDePasse,
        );

        if (!isValid) throw new Error("Email ou mot de passe invalide");

        return {
            id: user.id,
            email: user.email,
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

        const isValid = await PasswordUtils.verifyPassword(
            oldPassword,
            user.motdeDePasse,
        );
        if(!isValid) throw new Error("Mot de passe actuel invalide");

        const hashedPassord = await PasswordUtils.hashPassword(newPassword);

        await prisma.utilisateur.update({
            where: { id: userId },
            data: { motDePasse: hashedPassord },
        });

        return { message: "Mot de passe modifié avec succès" }; 
    }
}

module.exports = AuthService;