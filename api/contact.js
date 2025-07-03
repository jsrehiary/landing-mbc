const nodemailer = require("nodemailer");

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).send({ message: "Metode tidak didukung" });
    }

    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `Pesan dari ${name}`,
            text: message,
        });

        res.status(200).json({ message: "Email terkirim" });
    } catch (error) {
        console.error("Email gagal:", error);
        res.status(500).json({ message: "Gagal mengirim email" });
    }
}
