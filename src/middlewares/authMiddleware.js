const jwt = require('jsonwebtoken');
const prisma = require('../lib/prisma');

const JWT_SECRET = process.env.JWT_SECRET;

async function protect(req, res, next) {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Extraire le jeton (ex: "Bearer <token>")
            token = req.headers.authorization.split(' ')[1];

            // Verifier le jeton et obtenir l'ID de l'utilisateur
            const decoded = jwt.verify(token, JWT_SECRET);

            // Charger l'user dans l'objet req (sans le mdp)
            req.user = await prisma.utilisateur.findUnique({
                where: { id: decoded.id },
                select: { id: true, email: true, nom: true, prenom: true, role: true }
            });

            console.log(req.user);

            if (!req.user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé, jeton invalide.' });
            }

            // Continuer vers le contrôleur
            next();
        } catch (error) {
            res.status(401).json({ error: "Non autorisé, jeton invalide ou expiré." });
        }
    } else {
        res.status(401).json({ error: "Non autorisé, aucun jeton fourni." });
    }
}

module.exports = protect;