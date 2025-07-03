
# 🌐 MBC Laboratory Landing Page

Website resmi MBC Laboratory, menampilkan informasi tentang laboratorium, layanan divisi, kontak, dan developer. Website ini dibangun menggunakan HTML, Tailwind CDN, dan Node.js sebagai backend ringan untuk form kontak.

---

## 📁 Struktur Proyek

```
landing-mbc/
├── public/
│   ├── index.html         → halaman utama (4 section)
│   ├── main.js            → script frontend (form kontak)
├── server/
│   └── index.js           → backend Express + Nodemailer
├── .env                   → konfigurasi email backend (RAHASIA)
├── package.json
└── README.md
```

---

## 🧰 Teknologi yang Digunakan

| Komponen     | Rincian                         |
|--------------|----------------------------------|
| Frontend     | HTML5, Tailwind CSS (via CDN)    |
| Backend      | Node.js + Express + Nodemailer   |
| Deployment   | Netlify (frontend), Railway/Vercel/Render (backend) |
| Keamanan     | HTTPS (auto dari Netlify/Vercel) |
| Form Kontak  | Menggunakan Nodemailer + Gmail   |
| IDS (opsional)| Simulasi Snort atau dummy log   |

---

## 🚀 Cara Menjalankan Lokal

1. **Clone repo**
   ```bash
   git clone https://github.com/username/landing-mbc.git
   cd landing-mbc
   ```

2. **Install dependency**
   ```bash
   npm install
   ```

3. **Buat file `.env`**
   ```env
   EMAIL_USER=youremail@gmail.com
   EMAIL_PASS=your_app_password
   ```

4. **Jalankan server**
   ```bash
   node server/index.js
   ```

5. **Akses di browser**
   ```
   http://localhost:3001
   ```

---

## 🔐 Konfigurasi SSL

- SSL diaktifkan otomatis saat dideploy ke **Netlify** atau **Vercel**
- Tidak perlu konfigurasi Certbot manual
- Jika menggunakan server VPS, bisa menggunakan Certbot untuk Let's Encrypt

---

## 📬 Alur Kerja Form Kontak

1. User mengisi form pada halaman #kontak
2. Frontend (`main.js`) menangkap submit event
3. Data dikirim via `fetch()` ke backend `/contact`
4. Server (`index.js`) mengirim email menggunakan Nodemailer
5. Jika sukses, user mendapat notifikasi langsung

---

## 🧱 Diagram Arsitektur (Deskriptif)

```
Frontend (index.html)
     ↓  (fetch /contact)
Express Server (Node.js)
     ↓
Nodemailer → Gmail SMTP → Email Masuk ke Admin
```

---

## 📸 Screenshot Tampilan

(*Tambahkan screenshot halaman utama, divisi, kontak, dan developer pada repo GitHub atau PDF dokumen.*)

---

## 👨‍💻 Developer

**Nama:** Jose Rehiary  
**Skill:** Web Development, Cybersecurity, Reverse Engineering  
**GitHub:** [github.com/yourusername](https://github.com/yourusername)  
**Sertifikasi:**  
- Software & Game Development  
- Junior Mobile Computing  

---

## 📦 Deployment

| Komponen | Platform     | Status |
|----------|--------------|--------|
| Frontend | Netlify      | ✅ Online |
| Backend  | Railway/Vercel | ✅ Online |
| Domain   | (opsional)   | - |

---

## 🛡 IDS (Opsional)

- Simulasi log IDS tersedia di folder `ids_logs/`
- Dummy alert dari Snort atau log koneksi mencurigakan

---

## 📌 Catatan

- Website ini dibuat sebagai tugas proyek untuk MBC Lab
- Semua data non-sensitif dan dummy digunakan untuk demo

---
