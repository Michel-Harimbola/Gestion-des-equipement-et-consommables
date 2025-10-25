const AuthService = require('../services/auth.service.js');

exports.register = async (req, res) => {
    try {
        const result = await AuthService.register(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.login = async (req, res) => {
    try {
        const result = await AuthService.login(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.changePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body;
        const result = await AuthService.changePassword(
            req.params.id,
            oldPassword,
            newPassword,
        );
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}