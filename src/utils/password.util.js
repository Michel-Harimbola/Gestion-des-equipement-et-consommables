const bcrypt = require("bcryptjs");

class PasswordUtils {
    static async hashPassword(plaintPassword) {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(plaintPassword, salt);
    }

    static async verifyPassword(plaintPassword, hashedPassword) {
        return bcrypt.compare(plaintPassword, hashedPassword);
    }
}

module.exports = PasswordUtils;