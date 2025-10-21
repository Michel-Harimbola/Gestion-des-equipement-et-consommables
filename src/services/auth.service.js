const prisma = require('../lib/prisma');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

// Inscription
async function registerUser({ nom, prenom, email, motDePasse }) {
    // Verifier si l'user existe
    const existingUser = await prisma.Utilisateur.findUnique({ where: { email } });
    if (existingUser) {
        throw new Error('Cet email est déjà utilisé.');
    }

    //Hacher le mdp
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(motDePasse, salt);

    // creer l'user 
    const utilisateur = await prisma.Utilisateur.create({
        data: {
            nom,
            prenom,
            email,
            motDePasse: hashedPassword,
        }
    });

    const token = jwt.sign({ userId: utilisateur.id, role: utilisateur.role }, JWT_SECRET, { expiresIn: '1d' });

    // Retourner les donnees sans le mdp
    return {
        token,
        Utilisateur: {
            id: utilisateur.id,
            nom: utilisateur.nom,
            prenom: utilisateur.prenom,
            email: utilisateur.email,
            role: utilisateur.role
        }
    };
}


// Connexion
async function loginUser({ email, motDePasse }) {
    // Chercher l'user
    const utilisateur = await prisma.Utilisateur.findUnique({ where: { email } });
    if (!utilisateur) {
        throw new Error('Identifiants invalides.');
    }

    // Comparer les mdp (avec le champ motDePasse)
    const isMatch = await bcrypt.compare(motDePasse, utilisateur.motDePasse);
    if (!isMatch) {
        throw new Error('Identifiants invalides.');
    }
    
    // Generer le jeton
    const token = jwt.sign({ userId: utilisateur.id, role: utilisateur.role }, JWT_SECRET, { expiresIn: '1d' });

    // Retourner les donnees
    return {
        token,
        Utilisateur: {
            id: utilisateur.id,
            nom: utilisateur.nom,
            prenom: utilisateur.prenom,
            email: utilisateur.email,
            role: utilisateur.role
        }
    };
}

module.exports = {
    registerUser,
    loginUser,
};