# Portfolio Candra Putra Pratama Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Membangun website portofolio modern untuk Candra Putra Pratama yang mereplikasi secara presisi estetika, arsitektur, dan mikro-interaksi dari referensi Richard Miculob, menampilkan Jasdor (Multi-Brand F&B Unified Ordering Platform PWA) dan BudgEx (Enterprise 3-Tier Approval Budgeting System).

**Architecture:** Menggunakan Next.js 14 App Router dengan kombinasi React Server Components dan Client Components untuk interaktivitas dinamis. Antarmuka bergaya Bento Grid dengan CSS variables untuk dark/light theme, native browser View Transitions API untuk transisi tema melingkar, CSS 3D perspective untuk chaotic traits deck, dan custom IntersectionObserver hook untuk animasi scroll ringan tanpa library eksternal. Rute `/work` terdedikasi untuk Technical Archive seluruh 8 proyek Candra.

**Tech Stack:** Next.js 14.2.5, React 18.3.1, Tailwind CSS 3.4.4, Lucide React 0.383.0, Google Fonts (Inter, Space Grotesk, JetBrains Mono, Great Vibes).

**Spec:** [docs/superpowers/specs/2026-11-04-portfolio-redesign-design.md](file:///C:/Users/LENOVO/portofolio%202/docs/superpowers/specs/2026-11-04-portfolio-redesign-design.md)

## Global Constraints

- Wajib menggunakan Next.js 14 App Router dengan JavaScript/JSX.
- Dilarang mengimpor library animasi eksternal yang berat (Framer Motion atau GSAP); seluruh animasi wajib menggunakan CSS Keyframes dan native browser APIs.
- Seluruh narasi proyek Jasdor wajib diposisikan sebagai "Multi-Brand F&B Unified Ordering Platform (PWA ala TIX ID)"; dilarang menggunakan kata atau narasi "abuse voucher/celah promo".
- Rute `/api/coffee-count` dilarang menulis langsung ke filesystem lokal pada lingkungan produksi Vercel tanpa pengecekan (wajib fallback ke Google Sheets API atau client-side state untuk mencegah error `EROFS: read-only file system`).
- Palet warna dark mode menggunakan `--bg: #0f1115`, `--surface: #1a1d23`, `--surface-2: #252a33`, `--text: #e7e9ee`; light mode menggunakan `--bg: #d9dadd`, `--surface: #ffffff`, `--surface-2: #f5f5f7`, `--text: #000000`.

## Review Focus

1. **Browser tanpa dukungan View Transitions API:** Tombol switch tema harus memiliki fallback animasi clipping mask `circle()` agar tidak terjadi freeze atau blank screen pada Firefox/Safari lama.
2. **Vercel Serverless Read-Only Filesystem:** Request POST ke `/api/coffee-count` saat `GOOGLE_SHEET_WEBAPP_URL` tidak tersedia harus mengembalikan respon 200 sukses dengan in-memory/localStorage counter tanpa memicu unhandled rejection `fs.writeFileSync`.
3. **Navigasi Lintas Rute (`/work` &larr;&rarr; `/`):** Link navbar seperti `/#what-i-can-do` saat diakses dari halaman `/work` harus berhasil mengarahkan pengguna kembali ke anchor di root page tanpa memicu reload penuh yang merusak state tema.
4. **Perangkat Layar Sentuh / Mobile Viewport:** Interaksi 3D traits deck di hero section harus mendukung tap/click event dan ukuran kartu harus auto-scale pada layar < 768px tanpa horizontal overflow.
5. **Koneksi Jaringan Lambat / Offline pada Form Kontak:** Pengiriman formulir kontak dengan webhook `no-cors` harus menangani timeout dan menampilkan status error yang ramah pengguna apabila koneksi gagal.

---

### Task 1: Scaffolding Project & Konfigurasi Next.js + Tailwind CSS

**Files:**
- Create: `package.json`
- Create: `next.config.js`
- Create: `postcss.config.js`
- Create: `tailwind.config.js`
- Create: `app/globals.css`
- Create: `app/layout.jsx`

**Interfaces:**
- Produces: Fondasi Next.js 14 App Router, konfigurasi Tailwind CSS, CSS variables untuk dark/light theme, dan preloading Google Fonts.

- [ ] **Step 1: Buat `package.json` dengan dependensi Next.js 14, React 18, Tailwind CSS, dan Lucide React**
  Tulis `package.json` dengan `next@^14.2.5`, `react@^18.3.1`, `react-dom@^18.3.1`, `lucide-react@^0.383.0`, `tailwindcss@^3.4.4`, `postcss@^8.4.38`, `autoprefixer@^10.4.19`.

- [ ] **Step 2: Jalankan `npm install` untuk mengunduh seluruh dependensi**
  Run: `npm install`
  Expected: Node modules terpasang tanpa error conflict.

- [ ] **Step 3: Buat `next.config.js`, `postcss.config.js`, dan `tailwind.config.js`**
  Konfigurasikan scanning konten `./app/**/*.{js,jsx}` dan `./components/**/*.{js,jsx}` pada Tailwind.

- [ ] **Step 4: Buat `app/globals.css` dengan CSS custom properties, keyframes, dan background organic SVG**
  Salin token warna `--bg`, `--surface`, `--surface-2`, `--line`, `--text`, `--muted` untuk light dan dark mode, efek noise curve background `body:before`, dan `@keyframes vt-circle-wipe`.

- [ ] **Step 5: Buat `app/layout.jsx` dengan Google Fonts (`Inter`, `Space Grotesk`, `JetBrains Mono`, `Great Vibes`) dan metadata Candra Putra**
  Set meta title "Candra Putra — Junior Web & Backend Developer", deskripsi D4 TI PENS Surabaya, dan preconnect Google Fonts.

- [ ] **Step 6: Verifikasi build awal**
  Run: `npx next build`
  Expected: Compiled successfully.

- [ ] **Step 7: Commit**
  ```bash
  git add package.json package-lock.json next.config.js postcss.config.js tailwind.config.js app/globals.css app/layout.jsx
  git commit -m "chore: scaffold Next.js 14 project with Tailwind and Google Fonts"
  ```

---

### Task 2: ThemeProvider & Circular View Transitions ThemeToggle

**Files:**
- Create: `components/ThemeProvider.jsx`
- Create: `components/ThemeToggle.jsx`
- Modify: `app/layout.jsx`

**Interfaces:**
- Consumes: CSS variables di `app/globals.css`
- Produces: `useTheme()` hook (`dark: boolean, toggleTheme: (e) => void`) dan tombol toggle dengan circular ripple wipe.

- [ ] **Step 1: Buat `components/ThemeProvider.jsx` dengan native View Transitions & fallback**
  Implementasikan context provider `ThemeProvider` yang membaca tema dari `localStorage` / `prefers-color-scheme`, mengatur class `.dark` pada `document.documentElement`, dan menjalankan `document.startViewTransition` dengan custom properties `--vt-x`, `--vt-y`, `--vt-r`.

- [ ] **Step 2: Buat `components/ThemeToggle.jsx` menggunakan Lucide Icons (`Sun`, `Moon`)**
  Tombol interaktif dengan `aria-label="Toggle theme"` yang memicu `toggleTheme(e)` dari context.

- [ ] **Step 3: Pasang `ThemeProvider` di `app/layout.jsx` membungkus `children`**
  Pastikan script inline deteksi tema awal disematkan di `<head>` untuk mencegah flash of incorrect theme (FOUC).

- [ ] **Step 4: Uji fungsionalitas transisi tema**
  Verifikasi build dan pastikan toggle berhasil mengubah class `dark` pada root elemen.

- [ ] **Step 5: Commit**
  ```bash
  git add components/ThemeProvider.jsx components/ThemeToggle.jsx app/layout.jsx
  git commit -m "feat: add ThemeProvider with View Transitions circular wipe animation"
  ```

---

### Task 3: Data Layer & Custom Utilities (Projects Data & useReveal Hook)

**Files:**
- Create: `data/projects.js`
- Create: `data/skills.js`
- Create: `components/Reveal.jsx`

**Interfaces:**
- Produces: Array `PROJECTS` (8 proyek lengkap Candra Putra), array `SKILLS`, array `CARDS`, dan komponen `<Reveal delay={ms}>` berbasis `IntersectionObserver`.

- [ ] **Step 1: Buat `data/projects.js` berisi 8 proyek lengkap Candra Putra**
  Definisikan data proyek lengkap:
  1. `Jasdor`: Category "LIVE PRODUCTION • PWA", Brand 3, Outlets 2000+, Next.js + TypeScript.
  2. `BudgEx`: Category "ENTERPRISE BACKEND API", 3-Tier Approval, ASP.NET Core + PostgreSQL.
  3. `Portofolio`: Category "APLIKASI WEB", Next.js 14 + Tailwind CSS.
  4. `Data Pegawai`: Category "FULL-STACK", PHP + PostgreSQL.
  5. `Inventaris`: Category "FULL-STACK", PHP + PostgreSQL.
  6. `Kasir`: Category "FULL-STACK", PHP + PostgreSQL.
  7. `Keuangan Pribadi`: Category "FULL-STACK", PHP + PostgreSQL.
  8. `RoomBook`: Category "FULL-STACK", PHP + PostgreSQL.

- [ ] **Step 2: Buat `data/skills.js` dan daftar `CARDS` traits**
  Daftar skill per kategori (Backend, Frontend, Database, Tools) dan traits array (`CARDS = ["Problem Solver", "Detail-Oriented", "Reliable", "Quick Learner", "Clean Code", "Team Player", "Adaptable", "User-Focused"]`).

- [ ] **Step 3: Buat `components/Reveal.jsx` dengan custom hook `useReveal()`**
  Implementasikan wrapper `<Reveal delay={ms}>` menggunakan native browser `IntersectionObserver` dengan threshold 0.1 dan transisi cubic-bezier smooth.

- [ ] **Step 4: Commit**
  ```bash
  git add data/projects.js data/skills.js components/Reveal.jsx
  git commit -m "feat: add projects data layer and useReveal animation hook"
  ```

---

### Task 4: Header & Hero Section dengan 3D Chaotic Traits Deck

**Files:**
- Create: `components/Header.jsx`
- Create: `components/Hero.jsx`
- Create: `components/TypewriterTitle.jsx`
- Modify: `app/globals.css` (tambahkan style khusus `.card-stack`, `.nav-bar.scrolled`)

**Interfaces:**
- Consumes: `useTheme()`, `CARDS` dari `data/skills.js`, `Reveal`
- Produces: Navbar melayang responsif dan Hero section dengan 3D traits deck interaktif.

- [ ] **Step 1: Buat `components/Header.jsx` dengan scroll listener glassmorphism**
  Navbar dengan logo `candra.`, navigasi tautan (`/#what-i-can-do`, `/#about`, `/#experience`, `/#work`, `/#contact`), tombol `ThemeToggle`, dan tombol CTA "Rekrut Saya".

- [ ] **Step 2: Buat `components/TypewriterTitle.jsx`**
  Animasi judul teks bergulir atau fade-in karakter untuk subtitle hero.

- [ ] **Step 3: Buat `components/Hero.jsx` dengan Interactive 3D Card Stack**
  Hero section memuat:
  - Status pill: *"Available for Internship • Surabaya, Indonesia"*
  - Heading: **CANDRA PUTRA**
  - Subtitle: *Junior Web & Backend Developer*
  - Tagline: *"Membangun software yang dipakai orang betulan."*
  - Action buttons: "Unduh CV" & "Lihat Proyek"
  - Interactive 3D Traits Deck: tumpukan kartu fisik menggunakan CSS `perspective: 800px`, rotasi acak per kartu, dan interaksi klik untuk rotasi layer kartu depan ke belakang.

- [ ] **Step 4: Uji interaktivitas tumpukan kartu di browser**
  Pastikan saat kartu diklik, layer berganti dengan transisi rotasi halus dan tidak terjadi layout shift.

- [ ] **Step 5: Commit**
  ```bash
  git add components/Header.jsx components/Hero.jsx components/TypewriterTitle.jsx app/globals.css
  git commit -m "feat: add Header and Hero section with interactive 3D card deck"
  ```

---

### Task 5: Bento Grid "What I Can Do" & About Section

**Files:**
- Create: `components/WhatICanDo.jsx`
- Create: `components/About.jsx`

**Interfaces:**
- Consumes: `data/skills.js`, `Reveal`
- Produces: Section `#what-i-can-do` dan Section `#about`.

- [ ] **Step 1: Buat `components/WhatICanDo.jsx` dengan Bento Grid Layout**
  Bento grid interaktif memuat:
  - Kartu Besar: **IT, Web Development & Backend Engineering** (fokus pada REST APIs, arsitektur relasional, dan performa tinggi).
  - Kartu Sedang: **Production Systems** (Highlight Jasdor PWA & BudgEx 3-tier approval).
  - Kartu Metrik: IPK 3.76 PENS D4 IT, 2.000+ Outlets, dan 8 Proyek.

- [ ] **Step 2: Buat `components/About.jsx` dengan profil dan pengelompokan skill**
  Section profil memuat:
  - Kartu profil Candra Putra dengan badge resmi PENS Surabaya.
  - Ringkasan bio: Mahasiswa semester 5 yang fokus pada web modern dan backend API.
  - Skill pills: Backend (ASP.NET Core, C#, PHP, PostgreSQL, REST APIs), Frontend (Next.js, TypeScript, Tailwind CSS, JavaScript), Tools (Git, Postman, Docker/Linux basics).

- [ ] **Step 3: Commit**
  ```bash
  git add components/WhatICanDo.jsx components/About.jsx
  git commit -m "feat: implement What I Can Do bento grid and About section"
  ```

---

### Task 6: Experience & Journey Timeline

**Files:**
- Create: `components/Experience.jsx`

**Interfaces:**
- Consumes: `Reveal`
- Produces: Section `#experience` menampilkan linimasa perjalanan akademik dan rekayasa software.

- [ ] **Step 1: Buat `components/Experience.jsx` dengan timeline cards**
  Tampilkan 3 milestone utama Candra:
  - **2026:** *Junior Web & Backend Developer (Semester 5)* — Mengoperasikan Jasdor (PWA live production, 3 brand, 2.000+ outlet) dan mengembangkan backend BudgEx (ASP.NET Core + PostgreSQL) dalam tim.
  - **2025:** *Web Development & Database Modeling (Semester 2-3)* — Merancang sistem web terstruktur berbasis PHP & PostgreSQL (Data Pegawai, Inventaris, Kasir, RoomBook).
  - **2024:** *D4 Teknik Informatika PENS Surabaya (Semester 1)* — Fondasi algoritma, pemrograman, analisis kebutuhan sistem, dan rekayasa perangkat lunak.

- [ ] **Step 2: Commit**
  ```bash
  git add components/Experience.jsx
  git commit -m "feat: add Experience timeline section"
  ```

---

### Task 7: Featured Projects & Dedicated Technical Archive Route (`/work`)

**Files:**
- Create: `components/FeaturedProjects.jsx`
- Create: `components/TechnicalArchive.jsx`
- Create: `app/work/page.jsx`

**Interfaces:**
- Consumes: `PROJECTS` dari `data/projects.js`, `Reveal`
- Produces: Section `#work` di homepage dan dedicated page `/work` dengan tabel arsip teknis.

- [ ] **Step 1: Buat `components/FeaturedProjects.jsx` di halaman utama**
  Menampilkan dua kartu unggulan berukuran besar bergaya Bento:
  - **Jasdor (Heroic Card):** Label `LIVE PRODUCTION • PWA`, narasi Multi-brand F&B Unified Ordering Platform ala TIX ID, tags Next.js, TypeScript, PWA, WhatsApp API, serta tombol direct link.
  - **BudgEx (Enterprise Card):** Label `ENTERPRISE BACKEND API`, sistem anggaran alur persetujuan 3 tingkat, tags ASP.NET Core, PostgreSQL, REST API.
  - Tombol aksi menuju `/work`: *"Lihat Seluruh Arsip Proyek (8 Proyek) &rarr;"*.

- [ ] **Step 2: Buat `components/TechnicalArchive.jsx`**
  Tabel interaktif seluruh 8 proyek dengan filter kategori, kolom tahun, nama proyek, deskripsi arsitektur, tags teknologi, dan tautan eksternal/GitHub.

- [ ] **Step 3: Buat `app/work/page.jsx`**
  Halaman multi-page mandiri dengan header navigasi kembali ke Beranda (`/`) dan integrasi `TechnicalArchive.jsx`.

- [ ] **Step 4: Uji rute `/work` dan navigasi kembali ke `/`**
  Pastikan perpindahan rute berjalan mulus dan status tema tetap konsisten.

- [ ] **Step 5: Commit**
  ```bash
  git add components/FeaturedProjects.jsx components/TechnicalArchive.jsx app/work/page.jsx
  git commit -m "feat: add Featured Projects bento and dedicated /work technical archive"
  ```

---

### Task 8: Contact Section, Webhook Form & Coffee Counter API

**Files:**
- Create: `components/Contact.jsx`
- Create: `app/api/coffee-count/route.js`

**Interfaces:**
- Produces: Section `#contact` dengan formulir pesan, direct contact links, tombol traktir kopi, dan API serverless `/api/coffee-count`.

- [ ] **Step 1: Buat `app/api/coffee-count/route.js` dengan fallback Vercel yang aman**
  Handler `GET` dan `POST` yang mengecek `GOOGLE_SHEET_WEBAPP_URL`. Jika di local dev gunakan fallback `data/coffee-count.json`; jika di Vercel tanpa environment variable, gunakan fallback in-memory/response aman tanpa memicu crash write permission `EROFS`.

- [ ] **Step 2: Buat `components/Contact.jsx` dengan Google Apps Script Webhook**
  Section kontak memuat:
  - Heading besar: **LET'S WORK TOGETHER**
  - Form submit dengan field Nama, Email, Pesan dan indikator status pengiriman (loading spinner & success modal).
  - Integrasi webhook Google Apps Script (`mode: 'no-cors'`).
  - Direct links: Email (`candraputrap46@gmail.com`), GitHub (`github.com/CandraPutraPratama`), LinkedIn (`linkedin.com/in/candra-putra`).
  - Tombol traktir kopi interaktif ("Get me a coffee") dengan animasi counter real-time.

- [ ] **Step 3: Uji endpoint `/api/coffee-count` secara lokal**
  Run: `curl.exe -s http://localhost:3000/api/coffee-count` atau uji via fetch.
  Expected: JSON `{ "count": number }`.

- [ ] **Step 4: Commit**
  ```bash
  git add components/Contact.jsx app/api/coffee-count/route.js
  git commit -m "feat: implement Contact form webhook and safe coffee counter API"
  ```

---

### Task 9: Perakitan Halaman Utama & Verifikasi Akhir Build

**Files:**
- Create: `app/page.jsx`
- Modify: `app/globals.css` (penyempurnaan margin/padding responsif)

**Interfaces:**
- Consumes: Seluruh komponen (`Header`, `Hero`, `WhatICanDo`, `About`, `Experience`, `FeaturedProjects`, `Contact`)
- Produces: Halaman beranda utama yang utuh, fungsional, dan responsif.

- [ ] **Step 1: Buat `app/page.jsx` menyusun seluruh section berurutan**
  Rakit `<Header />`, `<Hero />`, `<WhatICanDo />`, `<About />`, `<Experience />`, `<FeaturedProjects />`, `<Contact />`, dan footer hak cipta.

- [ ] **Step 2: Jalankan build produksi Next.js**
  Run: `npm run build`
  Expected: Build berhasil 100% tanpa error TypeScript/ESLint, menghasilkan rute statis `/` dan `/work`.

- [ ] **Step 3: Verifikasi responsivitas pada mobile (< 768px)**
  Pastikan bento grid ter-stack menjadi 1 kolom yang nyaman dibaca dan card deck di hero tidak terpotong.

- [ ] **Step 4: Final Commit**
  ```bash
  git add app/page.jsx app/globals.css
  git commit -m "feat: assemble main portfolio page and verify production build"
  ```
