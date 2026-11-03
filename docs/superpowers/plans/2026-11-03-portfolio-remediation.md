# Rencana Pembenahan Portofolio Magang Candra Putra (Full Remediation Plan)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Merombak dan memperbaiki seluruh website portofolio Candra Putra agar 100% siap produksi, bebas dari link localhost/.test, memiliki value proposition peran magang yang tajam, fitur bilingual (ID/EN) yang benar-benar berfungsi, performa bebas memory leak, tema yang konsisten, dan siap dilampirkan di CV untuk melamar magang.

**Architecture:** 
- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.
- Centralized bilingual dictionary `src/lib/translations.ts` terhubung langsung ke `ThemeProvider` context (`lang: "ID" | "US"`).
- Pemisahan link `demo` dan `github` di `Projects.tsx` dengan penambahan proyek portofolio Next.js 16 sebagai bukti kapabilitas modern frontend.
- Normalisasi tema warna (`bg-white dark:bg-black`) di seluruh section tanpa efek flashbang di Dark Mode.

**Tech Stack:** Next.js 16.2.6, React 19.2.4, TypeScript, Tailwind CSS v4, Framer Motion, Matter.js, Lucide React, React Icons.

**Spec:** Dokumen Audit & Rekomendasi `f096b866-d6bd-4579-8c67-97caf57b84cf`.

## Global Constraints
- Tetap gunakan App Router dan pertahankan kompatibilitas Tailwind CSS v4 dan TypeScript tanpa type-error (`npm run build` harus 100% PASS).
- Jaga integrasi Cloudflare Turnstile dan route handler Resend di `src/app/api/contact/route.ts`.
- Pertahankan reputasi akademik: D4 Teknik Informatika PENS Surabaya, IPK 3.76/4.00.

## Review Focus
- Tautan proyek tidak boleh ada yang mengarah ke `localhost` atau `.test`.
- Tombol bendera 🇺🇸 / 🇮🇩 di Navbar harus benar-benar menerjemahkan teks halaman saat diklik.
- Layar pertama (Hero) harus langsung menampilkan nama, peran magang, kampus, tombol "Unduh CV", dan tombol "Lihat Proyek".
- Tidak boleh ada memory leak `requestAnimationFrame` di Matter.js `FallingText`.
- Gambar tidak boleh 404 di sistem Linux (case-sensitive filename `.jpg`).

---

### Task 1: Perbaikan Link Proyek, Tombol Demo & GitHub, serta Penambahan Proyek Portofolio

**Files:**
- Modify: `src/components/Projects.tsx`

**Interfaces:**
- `ProjectItem`: Pastikan `links: { demo: string | null; github: string | null; caseStudy: string | null; }`.
- Render: Tombol terpisah untuk `[Demo / Kunjungi Situs]` dan `[Repositori GitHub]`.

- [ ] **Step 1: Update data proyek di `src/components/Projects.tsx`**
  - Proyek 1 (Data Pegawai): `demo: null`, `github: "https://github.com/CandraPutraPratama/sistem-manajemen-data-pegawai"`.
  - Proyek 2 (Inventaris Barang): `demo: null`, `github: "https://github.com/CandraPutraPratama/sistem-inventaris-barang"`.
  - Proyek 3 (Kasir): `demo: null`, `github: "https://github.com/CandraPutraPratama"`.
  - Proyek 4 (Keuangan Pribadi): `demo: null`, `github: "https://github.com/CandraPutraPratama"`.
  - Proyek 5 (RoomBook): `demo: null`, `github: "https://github.com/CandraPutraPratama"`.
  - Tambahkan Proyek 0 / Unggulan: **Modern Interactive Portfolio** (Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, Turnstile, Resend API Route) dengan `demo: "https://candraputra.vercel.app"` dan `github: "https://github.com/CandraPutraPratama"`.
  - Ganti metrik dummy `>90% Efisiensi` dan `Skor 95/100` dengan metrik riil (arsitektur database, modul CRUD, validasi).

- [ ] **Step 2: Render 2 tombol aksi mandiri di kartu proyek dan modal**
  - Tampilkan tombol `[Lihat Kode di GitHub]` jika `project.links.github` ada.
  - Tampilkan tombol `[Kunjungi Demo]` hanya jika `project.links.demo` ada (bukan null).
  - Tampilkan tombol `[Baca Studi Kasus]`.

- [ ] **Step 3: Aksesibilitas Modal Studi Kasus**
  - Tambahkan listener tombol `Escape` untuk menutup modal.
  - Tambahkan atribut `role="dialog"`, `aria-modal="true"`, dan `aria-label`.
  - Tambahkan `aria-label="Tutup studi kasus"` pada tombol close.

- [ ] **Step 4: Verifikasi build**
  - Jalankan `npm run build` untuk memastikan tidak ada error TypeScript.

---

### Task 2: Perbaikan Bug Gambar Case-Sensitive di Linux & Normalisasi Aset

**Files:**
- Rename: `public/profil hero.png` -> `public/profil-hero.png`
- Modify: `src/components/Journey.tsx:41,55`
- Modify: `src/components/About.tsx`
- Modify: `src/components/ProfileCard.tsx`

- [ ] **Step 1: Samakan ekstensi gambar di `src/components/Journey.tsx`**
  - Ubah `/journey/jf12025.JPG` -> `/journey/jf12025.jpg`
  - Ubah `/journey/jf22025.JPG` -> `/journey/jf22025.jpg`
  - Ubah `/journey/jf32024.JPG` -> `/journey/jf32024.jpg`

- [ ] **Step 2: Rename file dengan spasi**
  - Rename `public/profil hero.png` menjadi `public/profil-hero.png`.
  - Perbarui referensi avatar di `src/components/About.tsx` menjadi `/profil-hero.png`.

- [ ] **Step 3: Verifikasi keberadaan file di disk**
  - Pastikan semua path gambar di `Journey.tsx` dan `About.tsx` valid.

---

### Task 3: Transformasi Hero Section untuk Konversi Recruiter

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Tambahkan Sub-Headline Peran & Institusi di Atas/Bawah Nama**
  - Badge Peran: `WEB & FRONTEND DEVELOPER INTERN`
  - Subtitle: `Mahasiswa D4 Teknik Informatika • Politeknik Elektronika Negeri Surabaya (PENS)`

- [ ] **Step 2: Tambahkan Call-To-Action (CTA) Utama di Viewport Hero**
  - Tombol Primer: `[Unduh CV (PDF)]` dengan ikon download dan link langsung ke `/cv.pdf`.
  - Tombol Sekunder: `[Lihat Proyek]` mengarah ke `#projects`.
  - Tombol Tersier: `[Hubungi Saya]` mengarah ke `#contact`.

- [ ] **Step 3: Ganti Typewriter Kode 8px Semu dengan Elevator Pitch Profesional**
  - Tampilkan deskripsi profesional yang jelas dan terbaca:
    *"Mengembangkan aplikasi web modern dan sistem informasi terstruktur dengan fokus pada kerapian kode, efisiensi database relasional, dan kenyamanan pengguna."*

- [ ] **Step 4: Format Tanggal Indonesia & Responsivitas Mobile**
  - Pastikan tanggal berformat Indonesia jika bahasa ID (`3 NOVEMBER 2026`).
  - Pastikan teks dan tombol CTA tetap tampil proporsional di layar HP (lebar 360px - 414px).

---

### Task 4: Implementasi Fitur Bilingual (ID / EN) Nyata

**Files:**
- Create: `src/lib/translations.ts`
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/About.tsx`
- Modify: `src/components/Projects.tsx`
- Modify: `src/components/Journey.tsx`
- Modify: `src/components/Contact.tsx`

- [ ] **Step 1: Buat dictionary terjemahan di `src/lib/translations.ts`**
  - Definisikan teks untuk ID (Bahasa Indonesia) dan EN (Bahasa Inggris) untuk:
    - Navbar links
    - Hero (headline, subtitle, pitch, CTA buttons, ticker bottom)
    - About (bio, titles, education, stack headers, philosophy, focus)
    - Projects (heading, subtitle, labels, buttons)
    - Journey (heading, subtitle, roles, descriptions)
    - Contact (heading, subtitle, direct email, labels, submit button)

- [ ] **Step 2: Sambungkan `useTheme().lang` di setiap komponen**
  - Konsumsi kamus terjemahan berdasarkan state `lang` ("ID" vs "US").
  - Verifikasi bahwa mengklik bendera di Navbar langsung menerjemahkan seluruh halaman secara mulus dan reaktif.

---

### Task 5: Normalisasi Skema Warna Tema Gelap & Perbaikan Slop Detektor

**Files:**
- Modify: `src/components/Projects.tsx`
- Modify: `src/components/Contact.tsx`
- Modify: `src/components/ProfileCard.css`

- [ ] **Step 1: Hilangkan efek flashbang pada tema gelap**
  - Ubah `Projects.tsx`: ganti `bg-black dark:bg-white text-white dark:text-black` menjadi `bg-neutral-50 dark:bg-black text-black dark:text-white border-t border-neutral-200 dark:border-neutral-800`.
  - Ubah `Contact.tsx`: ganti `bg-black dark:bg-white text-white dark:text-black` menjadi `bg-white dark:bg-neutral-950 text-black dark:text-white`.

- [ ] **Step 2: Perbaiki detektor `gradient-text` di `ProfileCard.css`**
  - Ubah baris 403 dan 418 dari `background-image: linear-gradient(...)` menjadi warna solid berdefinisi tinggi (`#ffffff` / `text-white`).

---

### Task 6: Perbaikan Memory Leak & Double-Tick di `FallingText.jsx` dan Pembersihan Dead Code

**Files:**
- Modify: `src/components/FallingText.jsx`
- Delete: `src/components/Footer.tsx` (0 byte)
- Delete: `src/components/TechStack.tsx` (0 byte)
- Delete: `src/components/ui/animated-theme-toggler.tsx` (tidak digunakan)
- Delete: `src/components/SplitText.jsx` (tidak digunakan)
- Clean: Hapus folder `scratch/` jika tidak dibutuhkan.

- [ ] **Step 1: Perbaiki `FallingText.jsx`**
  - Gunakan `rafIdRef = useRef<number | null>(null)`.
  - Di dalam cleanup `useEffect`: panggil `if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)`.
  - Hapus pemanggilan manual `Matter.Engine.update(engine)` di dalam `updateLoop` karena `Runner.run(runner, engine)` sudah memutarnya.

- [ ] **Step 2: Hapus file zombie dan dead components**
  - Hapus file 0 byte dan file komponen tak terpakai.

- [ ] **Step 3: Bersihkan unused imports**
  - Bersihkan import yang tidak terpakai di `About.tsx`, `Hero.tsx`, dan `Contact.tsx`.

---

### Task 7: SEO, Open Graph & Aksesibilitas Layout

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Perbarui metadata SEO di `src/app/layout.tsx`**
  - Set `metadataBase: new URL("https://candraputra.vercel.app")`.
  - Tambahkan `alternates: { canonical: "/" }`.
  - Tambahkan Open Graph images (`/profil-hero.png`).
  - Tambahkan Twitter cards (`summary_large_image`).
  - Set `<html lang="id">`.

---

### Task 8: Verifikasi Menyeluruh

- [ ] **Step 1: Jalankan `npm run build`**
  - Verifikasi Turbopack & TypeScript selesai dengan code 0 tanpa error.
- [ ] **Step 2: Jalankan detektor Impeccable**
  - Pastikan tidak ada anti-pattern `gradient-text` atau slop tersisa.
- [ ] **Step 3: Uji fungsionalitas di browser**
  - Pastikan toggle bahasa bekerja, dark mode nyaman, dan semua link GitHub terbuka dengan benar.
