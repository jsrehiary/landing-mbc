const nodemailer = require("nodemailer");

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Metode tidak didukung" });
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
            subject: `[MBC Website] Pesan Baru dari ${name} (${email})`,
            text: `
Anda menerima pesan baru dari form kontak MBC Laboratory:

Nama   : ${name}
Email  : ${email}
Pesan  :
${message}
      `,
        });

        res.status(200).json({ message: "Email terkirim" });
    } catch (err) {
        console.error("Gagal kirim email:", err);
        res.status(500).json({ message: "Gagal mengirim pesan" });
    }
}
