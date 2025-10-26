const UserService = require("../services/user.service.js");

exports.createUser = async (req, res) => {
    try {
        const user = await UserService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getUserById = async (req, res) => {
    try {
        const user = await UserService.getUserById(req.params.id);
        if(!user) throw new Error("Utilisateur non trouvé");
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getAllusers = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await UserService.updateUser(req.params.id, req,body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await UserService.deleteUser(req.params.id);
        res.status(204).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}