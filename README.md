# Portofolio Candra Putra Pratama

Website portofolio pribadi saya, mahasiswa D4 Teknik Informatika PENS. Berisi proyek, keahlian, pengalaman, dan CV.

Live: https://website-portofolio-lac-pi.vercel.app

## Isi website

- **Beranda**: profil singkat, capaian, proyek pilihan (Jasdor Kopi Cima dan BudgEx), keahlian, pengalaman, dan kontak.
- **Arsip proyek** (`/work`): daftar semua proyek dengan filter kategori, plus galeri dokumentasi.
- **Command palette** (`Ctrl+K`): pencarian cepat untuk bagian, proyek, dan teknologi.
- **Tema terang/gelap**.
- **Formulir kontak**: pesan dikirim lewat API route ke Telegram atau webhook.
- **Unduh CV**: `public/resume.pdf`.

## Teknologi

- Next.js 14 (App Router), React 18
- Tailwind CSS 3 dan CSS kustom di `app/globals.css`
- TypeScript dan JavaScript (campuran)
- lucide-react untuk ikon
- Deploy di Vercel

## Menjalankan secara lokal

Butuh Node.js 18 atau lebih baru.

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

Perintah lain:

```bash
npm run build   # build produksi
npm run start   # jalankan hasil build
```

## Environment variable (opsional)

Dibutuhkan hanya untuk formulir kontak. Tanpa ini, situs tetap jalan tetapi pesan tidak terkirim.

| Variabel | Fungsi |
| --- | --- |
| `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` | Kirim pesan kontak ke Telegram |
| `CONTACT_WEBHOOK_URL` | Alternatif: kirim pesan kontak ke webhook |
| `GOOGLE_SHEET_WEBAPP_URL` | Penyimpanan penghitung di `/api/coffee-count` |

Simpan di `.env.local` (tidak ikut di-commit).

## Struktur folder

```text
app/            halaman (/ dan /work) dan API route (contact, coffee-count)
components/     komponen UI: section beranda, header, command palette, galeri
data/           konten: proyek, keahlian, metrik, afiliasi, konfigurasi situs
public/         gambar, logo teknologi, dan resume.pdf
resume-src/     sumber HTML untuk resume.pdf
```

Konten situs (proyek, keahlian, metrik) diatur dari folder `data/`, jadi mengubah teks tidak perlu menyentuh komponen.

## Memperbarui CV

Edit `resume-src/resume.html`, cetak ke PDF, lalu simpan hasilnya sebagai `public/resume.pdf`.

## Kontak

- Email: candraputrap46@gmail.com
- GitHub: https://github.com/CandraPutraPratama
- LinkedIn: https://linkedin.com/in/candra-putra-pratama
