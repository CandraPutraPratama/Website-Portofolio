# Portfolio Redesign — Design Direction
Tanggal: 2026-11-03 · Status: disetujui user secara delegasi ("pilihin yang menurut lu terbaik")
Pindah ke: `docs/superpowers/specs/2026-11-03-portfolio-redesign-design.md` di repo setelah clone.

## Intent & Why
Portofolio Candra Putra (D4 IT PENS, semester 5) untuk lamaran magang (konteks: Jatim Taman Steel).
Satu hal yang harus terjadi: rekruter dalam 10 detik berpikir "kandidat ini niat & terbukti" —
bukan "template lagi".
Kegagalan Gemini kemarin: dibangun tapi tidak sesuai bayangan user → kali ini arah dikunci dulu
dari DUA referensi TikTok user, prinsip amati-tiru-modifikasi (gabung, bukan plek-ketiplek).

## Referensi yang dipakai (apa yang diambil dari masing-masing)
1. Carousel "Top 10 Portofolio" (@andrewtanjaya21 via @babysharksosos):
   - #1 syfrsam.space → tema gelap + SATU aksen lime (#a3e635), headline raksasa, badge tech stack,
     label "HELLO, IT'S ME ..." dengan titik hijau, tombol pill lime.
   - #2 farrelzv → nama display raksasa penuh lebar viewport.
   - #8 fadil → kartu profil (foto + detail + tautan sosial).
   - #9 rizkirammadhan → pill "See My CV" sebagai satu-satunya aksi primer.
2. Video chardoxx (Richard): hero = FOTO FORMAL BESAR di tengah + TEKS OUTLINE RAKSASA
   di belakangnya + teks vertikal "SCROLL DOWN"; daftar proyek bernomor 01–04 + tag teknologi;
   efek ketikan di heading; galeri 3D (tidak dipakai — diganti blueprint dealt).

## Direction (taste-skill draw, seed 58008970)
`name-as-monument` · sector personal-portfolio · tone bold.
- REDRAW PALETTE (alasan: brief & 9/10 referensi = gelap; palette dealt "Navy on white" melawan brief):
  --bg #0a0a0a · --surface #141414 · --ink #f4f4ef · --muted #a1a19a ·
  --accent #a3e635 (lime) · --accent-ink #0a0a0a ·
  --field-1 #05070a · --field-2 #151a08. Proporsi dealt dipertahankan (1 ground, 1 ink, 1 aksen).
- Type: Hanken Grotesk (dealt). Monument butuh extra-bold (blueprint hero) → load 400;500;700;800,
  800 hanya untuk monumen. Tracking -0.05em, leading 0.85–0.9 untuk display.
- Satu pola tombol: pill penuh (bukan radius 9–16px). Semua sudut media: square.

## The Idea
> Di halaman ini, **nama "CANDRA PUTRA" menjadi monumen** — diset 16–24vw, dilubangi jadi outline,
> dengan foto formal Candra (background transparan) berdiri di depannya seperti patung
> di depan prasastinya sendiri.
Uji kompetitor: kalimat ini menempel ke nama & foto spesifik Candra, bukan kategori umum.

## One live thing
Hover pada nama proyek di section Work: nama menyala full-ink dan bingkai screenshot-nya
mengembang 1.6x dari tepi kiri. Dibangun dari konten asli (screenshot proyek miliknya).
Plus: kalimat stack di Proof dengan nama yang menyala bergantian tiap 2 detik.

## Copy deck (Bahasa Indonesia)
- Nav: Tentang · Proyek · Perjalanan · Kontak + pill lime "Rekrut Saya"
- Hero label: "● Halo, saya Candra Putra" (titik = lime)
- H1 (monumen, outline): CANDRA PUTRA
- Support: "Junior web & backend developer — D4 Teknik Informatika, PENS Surabaya."
- Availability: "Terbuka untuk magang semester 6."
- Aksi: [Unduh CV] (lime) · [Lihat Proyek] (outline)
- Vertikal kanan: "SCROLL"
- Proof: "Saya membangun dengan Next.js, TypeScript, ASP.NET Core, C#, Flutter, PostgreSQL, Tailwind CSS, Git."
- About statement: "Saya membangun software yang dipakai orang betulan."
- About body: "Semester 5 D4 Teknik Informatika PENS. Di tim backend membangun BudgEx (ASP.NET Core + PostgreSQL).
  Di luar kampus menjalankan Jasdor — jasa order kopi promo yang live production: 3 brand, 2000+ outlet, checkout via WhatsApp."
- Kartu profil: foto · Candra Putra Pratama · Junior Web & Backend Developer · Surabaya, ID ·
  IPK 3.76 · Semester 5 · GitHub / LinkedIn / Email / Instagram
- Work: "Proyek pilihan:" + 8 nama (JASDOR · BUDGEX · 6 lainnya dari situs lama) + "— 8 proyek, 2024–2026."
  Jasdor bertanda LIVE (lime).
- Arsip: tabel nama | kategori | stack | tahun (8 baris).
- Perjalanan: "Perjalanan" + jumlah bingkai (foto dokumentasi dari repo).
- Kontak: "Mari ngobrol." + "Ceritakan kebutuhan magang di tim Anda — saya balas < 24 jam."
  Rows: Email · GitHub · LinkedIn · WhatsApp (display rows raksasa).
- Footer: CANDRA PUTRA raksasa di field lime, ink hitam. Kredit foto secukupnya.

## Goals / Non-goals / Anti-goals
- Goal: rekruter terkesan & mudah menghubungi; semua konten LAMA tetap ada (proyek, journey, kontak, CV).
- Non-goal: migrasi framework, ganti copy ke Inggris, tambah backend/form baru.
- Anti-goal: terlihat seperti template AI (no-slop house rules berlaku penuh); meniru 1:1 satu referensi;
  klaim palsu (angka Jasdor & IPK hanya yang terverifikasi di situs lama).

## Constraints
- Stack tetap: Next.js + TS + Framer Motion, Tailwind (versi ikut repo). Deploy Vercel tetap.
- Foto: profil.png (formal, transparan) → public/. Ganti semua foto lama di hero & kartu profil.
- Screenshot proyek: pakai ulang dari public/ repo bila ada; bila tidak ada, bingkai inline
  memakai cuplikan yang digambar dari kode (flat, warna palette) — laporkan mana yang digambar.
- Motion: entrance stagger per section (60–90ms, rise 16–32px, sekali), hover di semua kontrol,
  prefers-reduced-motion = konten tetap, gerak hilang. Parallax halus di hero (signature move).
- Aksesibilitas: satu h1, heading tiap section, alt text, fokus terlihat, kontras ≥ 4.5:1 untuk teks.
- Tidak ada: eyebrow pill di atas headline (label kecil polos boleh), monospace di luar kode,
  penomoran 01/02/03 (arsip memakai tabel blueprint, bukan kartu bernomor), gradien, glow,
  bayangan, garis hairline, kartu ikon berderet.

## Build order
1. Tokens (CSS custom properties) + font Hanken Grotesk via next/font.
2. Hero persis blueprint (desktop + 390px).
3. Proof → About → Work → List → Gallery → Contact → Footer, masing-masing dari blueprint.
4. Motion layer. 5. Gate: build lolos, screenshot 1440/768/390, kritik, perbaiki.
