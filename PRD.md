# Product Requirements Document (PRD) - Personal Portfolio Website

Dokumen ini berfungsi sebagai panduan utama (PRD) untuk AI (atau developer) dalam mengembangkan dan menyelesaikan website portofolio ini. Karena pengembangan menggunakan pendekatan "vibecoding", dokumen ini memuat aturan ketat, stack teknologi, struktur, dan daftar tugas yang harus diikuti agar website tetap konsisten dan bebas bug.

## 1. Ringkasan Proyek
Website ini adalah **Single-Page Portfolio** yang interaktif, modern, dan sangat mengandalkan animasi. Tujuannya adalah menampilkan profil, keahlian, pengalaman (journey), dan karya (projects) dari pemilik portofolio secara profesional.

## 2. Tech Stack & Library
Setiap kali AI menulis atau memodifikasi kode, WAJIB menggunakan stack berikut:
- **Framework:** Next.js 16 (App Router), React 19
- **Bahasa:** TypeScript (`.tsx`)
- **Styling:** Tailwind CSS v4
- **Animasi:** Framer Motion, GSAP, `tw-animate-css`
- **UI Components:** Radix UI, Shadcn UI
- **Icons:** Lucide React (`lucide-react`) & React Icons (`react-icons`)
- **Lain-lain:** Matter.js (untuk efek fisika jika diperlukan)

## 3. Fitur Utama (Core Features)
- **Tema Terang/Gelap (Dark/Light Mode):** Diatur secara global melalui `ThemeProvider`. Mode default dan transisi warna harus `duration-300`.
- **Multi-Bahasa (i18n):** Terdapat toggle bahasa (ID/EN) yang di-manage oleh state di `ThemeProvider`.
- **Responsif:** Mobile-first approach. UI harus terlihat sempurna di HP, Tablet, dan Desktop.
- **Animasi Halus:** Setiap section yang muncul saat di-scroll harus menggunakan Framer Motion (`whileInView`).

## 4. Struktur Halaman & Komponen
Seluruh konten berada di satu halaman utama (`src/app/page.tsx`). Halaman ini di-wrap oleh `ThemeProvider` dan memanggil komponen-komponen berikut secara berurutan:
1. **`<Navbar />`**: Sticky navbar dengan tombol toggle Dark Mode & Bahasa.
2. **`<Hero />`**: Tampilan awal (landing), nama besar, animasi teks (Typewriter/FallingText).
3. **`<About />`**: Bento grid layout untuk bio, pendidikan, dan tech stack.
4. **`<Projects />`**: Daftar karya terpilih. Data di-hardcode dalam array `projects`.
5. **`<Journey />`**: Timeline pengalaman kerja dan edukasi (bisa berupa tab switcher).
6. **`<Contact />`**: Form kontak, link sosial media, dan footer.

*Aturan Penambahan Komponen:* Jika ada section baru, buat file di `src/components/`, lalu import dan letakkan di dalam `<main>` pada `page.tsx`.

## 5. Pedoman "Vibecoding" untuk AI
Jika kamu (AI) diminta untuk mengedit atau menambahkan sesuatu, **PATUHI ATURAN INI**:
1. **Jangan Merusak ThemeProvider:** Pastikan kelas `dark:bg-black`, `dark:text-white` (dan variasinya) selalu ada di setiap elemen baru agar dark mode tidak rusak.
2. **Pertahankan Komentar:** Jangan menghapus komentar instruksional berbahasa Indonesia yang sudah ada di dalam kode (seperti `// ── HEADING ──`).
3. **Animasi Standar:** Untuk memunculkan elemen saat scroll, gunakan format ini:
   ```tsx
   <motion.div
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.5 }}
   >
   ```
4. **Gunakan Ikon Lucide:** Prioritaskan `import { NamaIcon } from "lucide-react"` sebelum mencari ikon custom.
5. **Data Dummy ke Data Asli:** Semua data (teks, link, array) berada di dalam file komponennya masing-masing. AI harus pintar mengganti placeholder text dengan data asli saat diminta.

## 6. Daftar Tugas (To-Do List)
Bagian ini adalah status saat ini dari apa yang perlu diselesaikan. Centang (ubah `[ ]` jadi `[x]`) jika sudah selesai.

- [x] **Projects Section**: Ganti placeholder gambar (kotak abu-abu) dengan gambar screenshot asli. Taruh gambar di `/public/projects/` dan panggil menggunakan `<Image />` dari Next.js.
- [x] **Hero Section**: Pastikan animasi teks (Typewriter/FallingText) berjalan mulus dan responsif di mobile.
- [x] **About Section**: Sesuaikan konten bio dan daftar keahlian (tech stack) dengan profil asli.
- [x] **Journey Section**: Lengkapi data riwayat pekerjaan dan edukasi.
- [x] **Contact Section**: Buat logika fungsional untuk form kontak (bisa arahkan ke `mailto:` atau pakai Web3Forms / Formspree / Resend).
- [x] **Review Animasi**: Tes seluruh halaman dari atas ke bawah untuk memastikan tidak ada animasi Framer Motion yang bentrok atau lag.
- [x] **SEO & Metadata**: Tambahkan title, deskripsi, dan open graph image di `src/app/layout.tsx`.

---
*Catatan untuk USER: File ini dirancang agar AI langsung paham konteks proyekmu. Cukup lampirkan file ini atau suruh AI membaca `PRD.md` setiap kali kamu memulai sesi chat baru.*
