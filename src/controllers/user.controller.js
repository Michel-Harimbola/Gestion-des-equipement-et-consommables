const UserService = require("../services/user.service.js");

exports.createUser = async (req, res) => {
    try {
        const { nom, prenom, email, motdepasse, role } = req.body;
        const result = await UserService.createUser(nom, prenom, email, motdepasse, role);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getUserById = async (req, res) => {
    try {
        const result = await UserService.getUserById(req.user.id);
        if(!result) throw new Error("Utilisateur non trouvé");
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
        const result = await UserService.getAllUsers({ page, limit });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.searchUsers = async(req, res) => {
    try {
        const { q = "", page = 1, limit = 12 } = req.query;
        const resultat = await UserService.searchUsers(q, page, limit);
        res.json(resultat);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erreur lors de la recherche" });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const data = { ...req.body };
        if (req.file) {
            data.photo = `/uploads/users/${req.file.filename}`;
        }

        const result = await UserService.updateUser(req.params.id, data, req.user);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.updatePersoInformation = async (req, res) => {
    try {
        const result = await UserService.updatePersoInformation(req.params.id, req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const result = await UserService.deleteUser(req.params.id);
        res.status(204).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}