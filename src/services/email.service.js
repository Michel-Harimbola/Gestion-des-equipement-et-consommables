const nodemailer = require("nodemailer");
const path = require("path");

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false, // IMPORTANT → false pour port 587
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false, // évite les erreurs Linux SSL
    }
});

module.exports.sendEmail = async (to, subject, html) => {
    try {
        await transporter.sendMail({
            from: `"Service Emprunt" <${process.env.MAIL_USER}>`,
            to,
            subject,
            html,
            attachments: [
                {
                    filename: 'YouthComputing.png',
                    path: path.join(__dirname, '../assets/YouthComputing.png'),
                    cid: 'YouthComputing'
                }
            ]
        });

        console.log("Email envoyé à", to);
    } catch (err) {
        console.error("Erreur envoi email :", err);
    }
};
