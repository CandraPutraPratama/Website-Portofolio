# Design Document: Portfolio Candra Putra Pratama

**Date:** 2026-11-04  
**Author:** Pair Programming (Antigravity & Candra Putra)  
**Status:** In Review (Builder Check)  
**Reference Architecture:** [richardmiculob-portfolio.vercel.app](https://richardmiculob-portfolio.vercel.app/)  

---

## 1. Intent & The Why

Candra Putra adalah mahasiswa semester 5 D4 Teknik Informatika PENS (Politeknik Elektronika Negeri Surabaya) dengan IPK 3.76 yang tengah mempersiapkan portofolio untuk melamar posisi magang semester 6 (*Junior Web & Backend Developer*).

Portofolio sebelumnya sudah memiliki kredibilitas teknis yang kuat, namun presentasi visualnya masih konvensional. Tujuannya adalah merombak total portofolio menjadi sebuah website berstandar tinggi yang meniru 1:1 estetika, arsitektur, dan mikro-interaksi dari portofolio Richard Miculob—menggabungkan kematangan rekayasa sistem Candra (Jasdor dan BudgEx) dengan visual *bento grid*, *3D card stack*, dan *motion* yang memukau.

---

## 2. Goals, Non-Goals & Anti-Goals

### Goals
1. **Replikasi Estetika & Interaktivitas 1:1 dari Referensi:**
   - **Circular Wipe Theme Transition:** Transisi tema (Dark/Light) melingkar menggunakan native Browser View Transitions API (`document.startViewTransition`) dan CSS `@keyframes vt-circle-wipe`.
   - **Interactive 3D Card Stack (Traits Deck):** Tumpukan kartu fisik di hero dengan efek `perspective: 800px`, rotasi acak (*scatter*), dan animasi flip saat diklik atau auto-cycle.
   - **Bento Grid System:** Layout asimetris untuk memamerkan keahlian (*What I Can Do*) dan proyek unggulan (*Featured Projects*).
   - **Floating Glassmorphism Navbar:** Navbar yang melayang dan menyusut saat di-scroll (`.nav-bar.scrolled`).
   - **Lightweight Scroll Animations:** Menggunakan custom React hook `useReveal` berbasis `IntersectionObserver` native tanpa library berat.
   - **Kombinasi Tipografi Identik:** Inter (body/headings), Space Grotesk (aksen judul), JetBrains Mono (nomor proyek, badge, stats), dan Great Vibes (aksen personal/tanda tangan).

2. **Penyajian Data Riil Candra Putra:**
   - **Jasdor (Live Production PWA):** Diposisikan secara profesional sebagai *Multi-Brand F&B Unified Ordering Platform* (analogi TIX ID untuk F&B: 3 brand, 2.000+ outlet, checkout WhatsApp, tanpa perlu unduh banyak aplikasi).
   - **BudgEx (Enterprise Backend API):** Sistem anggaran perusahaan dengan alur persetujuan 3 tingkat berbasis ASP.NET Core dan PostgreSQL.
   - **Technical Archive:** Menampung seluruh riwayat proyek lainnya (Data Pegawai, Inventaris, Kasir, RoomBook, Keuangan Pribadi).
   - **Pendidikan & Perjalanan:** D4 Teknik Informatika PENS (IPK 3.76) dan milestone 2024–2026.

3. **Free Serverless Integrations:**
   - **Contact Form:** Terhubung langsung ke Google Sheets melalui Google Apps Script Webhook (`script.google.com/macros/s/...`) tanpa perlu server/backend email berbayar.
   - **Coffee Counter ("Buy me a coffee"):** Endpoint `/api/coffee-count` (Next.js API route) untuk pencatatan interaktif jumlah traktir kopi.

### Non-Goals
- Tidak menggunakan library animasi pihak ketiga yang berat (seperti Framer Motion atau GSAP) karena referensi aslinya dibangun secara native dengan CSS + Next.js sehingga performa web tetap instan dan PageSpeed 100%.
- Tidak memerlukan database berbayar (Supabase/Firebase/RDS) untuk fitur kontak dan counter; gunakan Google Sheets Webhook dan local JSON fallback.

### Anti-Goals
- **Dilarang menyebut "abuse voucher" atau celah promo:** Jasdor wajib 100% diposisikan dari sudut pandang solusi rekayasa produk (*unified ordering platform*).
- **Hindari proyek dummy/placeholder:** Semua data proyek, link GitHub, LinkedIn, dan email harus menggunakan identitas asli Candra Putra.

---

## 3. Technology Stack & Architecture

- **Framework:** Next.js 14+ (App Router, JavaScript/JSX)
- **UI & Runtime:** React 18+
- **Styling:** Tailwind CSS v3 + CSS Custom Properties di `globals.css`
  - Dark Theme: `--bg: #0f1115`, `--surface: #1a1d23`, `--surface-2: #252a33`, `--text: #e7e9ee`
  - Light Theme: `--bg: #d9dadd`, `--surface: #ffffff`, `--surface-2: #f5f5f7`, `--text: #000000`
- **Iconography:** `lucide-react`
- **Fonts:** Google Fonts via `app/layout.jsx` (`Inter`, `Space Grotesk`, `JetBrains Mono`, `Great Vibes`)
- **Hosting Target:** Vercel

---

## 4. Section by Section Breakdown (Aligned with Reference)

The authoritative page section sequence follows Richard's architecture:
`#hero` &rarr; `#what-i-can-do` &rarr; `#about` &rarr; `#experience` &rarr; `#work` &rarr; `#contact`

### 1. Header (`components/Header.jsx` & `ThemeToggle.jsx`)
- Brand: `candra.` dengan dot berwarna aksen.
- Nav items (hash navigation on `/`, path navigation from `/work`):
  1. `What I Can Do` (`/#what-i-can-do`)
  2. `About` (`/#about`)
  3. `Experience` (`/#experience`)
  4. `Projects` (`/#work`)
  5. `Contact` (`/#contact`)
- Action buttons: Toggle tema (Sun/Moon dengan ripple wipe) & tombol "Hire Me" (`/#contact`).
- Sticky behavior dengan blur backdrop dan margin saat halaman di-scroll (`.nav-bar.scrolled`).

### 2. Hero Section (`components/Hero.jsx`)
- Status pill: *"Available for Internship • Surabaya, Indonesia"*.
- Heading: **CANDRA PUTRA** (Large tracking-tight).
- Subtitle: *Junior Web & Backend Developer* dengan efek fade-in/reveal.
- Tagline: *"Membangun software yang dipakai orang betulan."*
- Interactive 3D Traits Deck: Kumpulan kartu mini (Problem Solver, Detail-Oriented, Reliable, Fast Learner, Clean Code) yang bisa diklik untuk rotasi layer.
- Background: Garis kurva SVG halus dan gradien ambient.

### 3. What I Can Do (`components/WhatICanDo.jsx` - `#what-i-can-do`)
- Bento Grid:
  - **Large Card:** IT, Web Development & Backend Engineering (Next.js, ASP.NET Core, PostgreSQL, PHP, API Design).
  - **Medium Card:** Production & Architecture Highlights (Live PWA Jasdor, 3-tier approval BudgEx).
  - **Small Cards:** Metrics (IPK 3.76, 2.000+ Outlets, 8 Proyek).

### 4. About Section (`components/About.jsx` - `#about`)
- Profile card: Foto Candra, badge PENS Surabaya, deskripsi fokus kuliah & pengembangan software.
- Skills grouped by category (Backend, Frontend, Database, Domain/Tools).

### 5. Experience & Journey (`components/Experience.jsx` - `#experience`)
- Milestone Timeline independen:
  - 2026: Junior Web & Backend Developer (Jasdor Live Production + BudgEx Tim).
  - 2025: Web Development & Relational Database (PHP + PostgreSQL).
  - 2024: D4 Teknik Informatika PENS (Fondasi Rekayasa Perangkat Lunak).

### 6. Featured Projects & Work (`components/FeaturedProjects.jsx` - `#work`)
- **Card 1 (Heroic Bento):** Jasdor
  - Kategori: `LIVE PRODUCTION • PWA`
  - Deskripsi: *"Platform satu pintu pemesanan kopi multi-brand (analogi TIX ID untuk F&B), mengintegrasikan katalog dari 2.000+ outlet dengan antrean real-time dan checkout via WhatsApp."*
  - Tags: `Next.js`, `TypeScript`, `PWA`, `WhatsApp API`, `Tailwind CSS`.
- **Card 2 (Enterprise Bento):** BudgEx
  - Kategori: `ENTERPRISE BACKEND API`
  - Deskripsi: *"Sistem manajemen anggaran perusahaan dengan alur persetujuan bertingkat (3-tier approval) dan audit trail transaksi."*
  - Tags: `ASP.NET Core`, `C#`, `PostgreSQL`, `REST API`.
- **Archive Link / Button:** Tombol menuju rute terdedikasi `/work` (`app/work/page.jsx`) untuk menampilkan tabel Technical Archive dari seluruh 8 proyek terdahulu secara lengkap.

### 7. Dedicated Technical Archive Route (`app/work/page.jsx` & `components/TechnicalArchive.jsx`)
- Halaman terpisah berisi tabel interaktif seluruh 8 proyek:
  1. Jasdor (Live Production, Next.js + TypeScript, 2026)
  2. BudgEx (Backend API, ASP.NET Core + PostgreSQL, 2025-2026)
  3. Portofolio (Aplikasi Web, Next.js + Tailwind, 2026)
  4. Data Pegawai (Full-Stack, PHP + PostgreSQL, 2025)
  5. Inventaris (Full-Stack, PHP + PostgreSQL, 2025)
  6. Kasir (Full-Stack, PHP + PostgreSQL, 2025)
  7. Keuangan Pribadi (Full-Stack, PHP + PostgreSQL, 2025)
  8. RoomBook (Full-Stack, PHP + PostgreSQL, 2025)
- Header navigasi kembali ke Beranda (`/`).

### 8. Contact & Coffee CTA (`components/Contact.jsx` & `WorkCTA.jsx` - `#contact`)
- Heading besar: **LET'S WORK TOGETHER**
- Formulir kontak (Nama, Email, Pesan) dengan status loading dan success overlay.
- Webhook submission ke Google Apps Script (tersimpan rapi di Google Sheets).
- Social links: GitHub (`github.com/CandraPutraPratama`), LinkedIn (`linkedin.com/in/candra-putra`), Email (`candraputrap46@gmail.com`).
- Interactive Coffee Button: "Get me a coffee" yang memanggil `/api/coffee-count`.
- **Coffee Persistence:**
  - Production (Vercel): Jika `GOOGLE_SHEET_WEBAPP_URL` diset, proxy ke Google Apps Script. Jika tidak diset, gunakan client-side `localStorage` caching untuk mencegah error `EROFS: read-only file system` di serverless.
  - Local Dev: Fallback persistensi lokal di `data/coffee-count.json`.

---

## 5. What is Left to the Builder

- Pengaturan asset gambar proyek (menggunakan screenshot dari portofolio lama atau mockup placeholder SVG beresolusi tinggi).
- Penyesuaian konfigurasi Tailwind CSS (`tailwind.config.js`) dan skema warna CSS variables.
- Penyiapan Google Apps Script Webhook URL (bisa memakai webhook yang sudah ada atau setup baru sesuai preferensi pengguna).
- Optimalisasi responsivitas mobile (breakpoint 768px dan 1024px) agar bento grid ter-stack rapi di smartphone.
