const authService = require('../services/auth.service');

// Contrôleur pour l'inscription
async function register(req, res) {
    // Récupération des champs selon le modèle Utilisateur
    const { nom, prenom, email, motDePasse } = req.body;

    if (!email || !motDePasse || !nom || !prenom) {
        return res.status(400).json({ error: 'Tous les champs (nom, prenom, email, motDePasse) sont requis.' });
    }

    try {
        const result = await authService.registerUser({ nom, prenom, email, motDePasse });
        res.status(201).json(result);
    } catch (error) {
        if (error.message === 'Cet email est déjà utilisé.') {
            return res.status(409).json({ error: error.message });
        }
        console.error(error);
        res.status(500).json({ error: 'Échec de l\'inscription.' });
    }
}

// Contrôleur pour la connexion
async function login(req, res) {
    // Récupération de l'email et du mot de passe
    const { email, motDePasse } = req.body;

    if (!email || !motDePasse) {
        return res.status(400).json({ error: 'Email et motDePasse sont requis.' });
    }

    try {
        const result = await authService.loginUser({ email, motDePasse });
        res.status(200).json(result);
    } catch (error) {
        if (error.message === 'Identifiants invalides.') {
            return res.status(401).json({ error: error.message }); 
        }
        console.error(error);
        res.status(500).json({ error: 'Échec de la connexion.' });
    }
}

module.exports = {
    register,
    login,
};