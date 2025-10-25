const AuthServie = require('../services/auth.service.js');

exports.register = async (req, res) => {
    try {
        const result = await AuthServie.register(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ error: err.mesage });
    }
}

exports.login = async (req, res) => {
    try {
        const result = await AuthServie.login(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ error: err.mesage });
    }
}

exports.changePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body;
        const result = await AuthServie.changePassword(
            req.params.id,
            oldPassword,
            newPassword,
        );
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}