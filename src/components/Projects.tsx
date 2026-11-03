"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, FileText, X, ChevronRight } from "lucide-react";
import TiltedCard from "./TiltedCard";
import { useTheme } from "./ThemeProvider";
import { translations } from "@/lib/translations";

// SVG inline untuk ikon GitHub
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectMetric {
  value: string;
  label: string;
  labelEn?: string;
}

interface ProjectLinks {
  demo: string | null;
  github: string | null;
  caseStudy: string | null;
}

interface CaseStudyContent {
  problem: string;
  problemEn?: string;
  solution: string;
  solutionEn?: string;
  background: string;
  backgroundEn?: string;
  features: string[];
  featuresEn?: string[];
  bannerBg: string;
}

interface ProjectItem {
  id: number;
  category: string;
  categoryEn?: string;
  title: string;
  description: string;
  descriptionEn?: string;
  metrics: ProjectMetric[];
  tags: string[];
  links: ProjectLinks;
  image: string;
  caseStudyContent: CaseStudyContent;
}

// ============================================================
// DATA — Daftar Proyek (Diperbarui dengan Proyek Riil & Link Aman)
// ============================================================
const projects: ProjectItem[] = [
  {
    id: 6,
    category: "Aplikasi Web Live Production • PWA",
    categoryEn: "Live Production Web App • PWA",
    title: "Jasdor — Jasa Order Kopi Promo",
    description:
      "Platform jasa order kopi promo yang saya bangun dan operasikan sendiri. Mendukung 3 brand ternama (Kopi Kenangan, Fore, Tomoro) dengan 2.000+ outlet nasional, tier harga akurat per outlet, promo bundling otomatis, antrean real-time, dan checkout WhatsApp otomatis — live production sejak Oktober 2026.",
    descriptionEn:
      "Live production coffee ordering PWA built and operated independently. Supports 3 major brands (Kopi Kenangan, Fore, Tomoro) across 2,000+ nationwide outlets with tiered pricing, automated bundle promo validation, real-time queuing, and automated WhatsApp checkout.",
    metrics: [
      { value: "3 Brand", label: "Multi-Brand", labelEn: "Multi-Brand" },
      { value: "2.000+", label: "Outlet Aktif", labelEn: "Active Outlets" },
      { value: "Live PWA", label: "Status Produksi", labelEn: "Production Status" },
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PWA", "Cloudflare", "WhatsApp API"],
    links: {
      demo: "https://jasdor.cimagroup.my.id/",
      github: null,
      caseStudy: null,
    },
    image: "/projects/jasdor.svg",
    caseStudyContent: {
      problem:
        "Promo kopi seperti diskon 50% atau B1G1 sering kali hanya bisa dinikmati dengan datang langsung ke gerai dan antre panjang. Jasa titip konvensional via chat rawan salah rekap, tidak memiliki katalog harga transparan, serta pembayarannya serba manual.",
      problemEn:
        "Promotional coffee deals like 50% discounts or B1G1 usually require in-store queues. Conventional order proxies via chat are error-prone, lack structured outlet pricing, and suffer from manual payment reconciliation.",
      solution:
        "Membangun platform PWA dengan katalog multi-brand terintegrasi, sinkronisasi harga per outlet berdasarkan tier (normal, mall, bandara), validasi otomatis bundling promo di sisi server, antrean pesanan real-time, dan checkout pesanan terformat ke WhatsApp API.",
      solutionEn:
        "Engineered a production-ready PWA with multi-brand catalogs, tier-based outlet pricing (standard, mall, airport), automated server-side bundle promo validation, real-time order queue estimates, and formatted WhatsApp checkout.",
      background:
        "Jasdor merupakan platform dan unit bisnis yang saya rancang, kembangkan, dan operasikan secara mandiri sejak Oktober 2026. Menangani katalog 3 brand besar dengan ribuan outlet di Indonesia, manajemen status operasional gerai, serta panel admin untuk pemrosesan pesanan harian.",
      backgroundEn:
        "Jasdor is an independently built and operated commercial venture launched in October 2026. It manages 3 major beverage chains across thousands of Indonesian outlets, handles live outlet open/closed status, and provides an admin operations console.",
      features: [
        "Katalog multi-brand (Kopi Kenangan, Fore, Tomoro) dengan fitur pencarian outlet cepat",
        "Kalkulasi harga per outlet mengikuti tier spesifik (Reguler, Mall, Bandara)",
        "Promo bundling dan promo B1G1 dengan validasi kuota otomatis di server",
        "Sistem estimasi waktu tunggu antrean pesanan real-time",
        "Generasi pesan checkout otomatis ke WhatsApp admin",
        "Dashboard admin terintegrasi untuk pemantauan dan pengelolaan pesanan",
        "Progressive Web App (PWA) yang dapat diinstal langsung di perangkat mobile",
      ],
      featuresEn: [
        "Multi-brand catalog (Kopi Kenangan, Fore, Tomoro) with fast outlet search",
        "Tier-based price calculation (Standard, Mall, Airport outlets)",
        "Automated server-side promo bundling and B1G1 validation",
        "Real-time order wait queue estimation",
        "Automated structured WhatsApp order generation",
        "Integrated admin dashboard for order and operational tracking",
        "Installable Progressive Web App (PWA) with native-like mobile UX",
      ],
      bannerBg: "bg-gradient-to-r from-amber-950 via-slate-900 to-neutral-900",
    },
  },
  {
    id: 7,
    category: "Backend API & Enterprise System • Proyek Tim",
    categoryEn: "Backend API & Enterprise System • Team Project",
    title: "BudgEx — Sistem Anggaran (RAB)",
    description:
      "Sistem pengajuan dan persetujuan Rencana Anggaran Biaya (RAB) perusahaan yang dikembangkan dalam tim. Berperan sebagai backend developer: merancang REST API dengan ASP.NET Core, alur persetujuan bertingkat (3-Level Approval), modul anggaran OPEX & CAPEX, transfer anggaran antar departemen, dan integrasi aplikasi Flutter.",
    descriptionEn:
      "Corporate budget request and approval system developed as a team project. Served as backend developer: engineered REST APIs with ASP.NET Core (.NET 10), multi-tier approval workflow (3-Level), OPEX & CAPEX modules, inter-departmental transfers, and Flutter mobile integration.",
    metrics: [
      { value: "Backend Dev", label: "Peran Tim", labelEn: "Team Role" },
      { value: "OPEX + CAPEX", label: "Modul Anggaran", labelEn: "Budget Modules" },
      { value: "3-Level", label: "Alur Approval", labelEn: "Approval Flow" },
    ],
    tags: ["ASP.NET Core", ".NET 10", "PostgreSQL", "EF Core", "Flutter", "xUnit", "REST API"],
    links: {
      demo: null,
      github: null,
      caseStudy: null,
    },
    image: "/projects/budgex.svg",
    caseStudyContent: {
      problem:
        "Proses pengajuan dan revisi anggaran (RAB) di korporat sering dilakukan secara manual lewat dokumen cetak atau chat. Hal ini memicu kesulitan pelacakan status, hilangnya jejak audit approval, dan kompilasi laporan keuangan yang lambat.",
      problemEn:
        "Corporate budget planning and revisions often rely on paper documents or fragmented chats, creating blind spots in tracking, missing audit logs, and slow manual reporting.",
      solution:
        "Mengembangkan arsitektur backend REST API dengan ASP.NET Core dan PostgreSQL yang mendukung alur persetujuan bertingkat (Dept Head → Finance → Director), modul alokasi dana OPEX & CAPEX, mekanisme transfer anggaran antar divisi, serta ekspor laporan otomatis.",
      solutionEn:
        "Engineered a scalable REST API backend using ASP.NET Core and PostgreSQL featuring a 3-tier approval hierarchy (Dept Head → Finance → Director), OPEX/CAPEX allocation, cross-department budget transfers, and automated report exports.",
      background:
        "BudgEx merupakan proyek kolaborasi tim pada mata kuliah PdBL yang dikembangkan dari semester 4 hingga semester 5. Saya bertanggung jawab merancang database relasional, logika validasi approval, endpoint API, dan penjaminan kualitas kode melalui unit testing dengan xUnit.",
      backgroundEn:
        "BudgEx is a team project developed across semesters 4 and 5 in the PdBL curriculum. Responsible for relational database schema design, business approval logic, RESTful endpoints, and automated testing with xUnit.",
      features: [
        "Alur approval terstruktur 3 tingkat: Department Head → Finance → Director",
        "Modul pemisahan anggaran operasional (OPEX) dan modal (CAPEX)",
        "Fitur revisi dan riwayat perubahan proposal anggaran (audit log)",
        "Transfer alokasi sisa anggaran antar departemen secara terkontrol",
        "Generasi dokumen laporan anggaran format PDF dan spreadsheet Excel otomatis",
        "Integrasi RESTful API untuk klien mobile Flutter dan web client",
        "Pengujian otomatis dengan xUnit untuk memastikan reliabilitas endpoint",
      ],
      featuresEn: [
        "3-level structured approval hierarchy: Department Head → Finance → Director",
        "Dual-budget tracking modules for OPEX (operational) and CAPEX (capital)",
        "Comprehensive revision history and immutable audit log",
        "Controlled cross-department budget reallocation",
        "Automated PDF and Excel report generation",
        "RESTful API endpoints consumed by Flutter mobile and web clients",
        "Automated unit & integration tests using xUnit for API reliability",
      ],
      bannerBg: "bg-gradient-to-r from-emerald-950 via-slate-900 to-neutral-900",
    },
  },
  {
    id: 0,
    category: "Aplikasi Web Modern (Frontend & Full-Stack)",
    categoryEn: "Modern Web Application (Frontend & Full-Stack)",
    title: "Website Portofolio Interaktif",
    description:
      "Website portofolio profesional dan interaktif yang dibangun menggunakan Next.js 16 (App Router), React 19, TypeScript, dan Tailwind CSS v4. Dilengkapi arsitektur tema adaptif, integrasi Cloudflare Turnstile, serverless email API route menggunakan Resend, serta sistem bilingual terstruktur.",
    descriptionEn:
      "Modern interactive portfolio built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. Features adaptive themes, Cloudflare Turnstile verification, Resend serverless email API, and a reactive bilingual architecture.",
    metrics: [
      { value: "Next.js 16", label: "App Router", labelEn: "App Router" },
      { value: "TypeScript", label: "Type Safe", labelEn: "Type Safe" },
      { value: "Serverless", label: "API Route", labelEn: "API Route" },
    ],
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Cloudflare Turnstile", "Resend API"],
    links: {
      demo: "https://candraputra.vercel.app",
      github: "https://github.com/CandraPutraPratama",
      caseStudy: null,
    },
    image: "/profil-hero.png",
    caseStudyContent: {
      problem:
        "Sebagian besar portofolio mahasiswa bersifat statis, kurang interaktif, atau menggunakan template umum yang tidak mencerminkan pemahaman mendalam tentang arsitektur frontend modern dan keamanan aplikasi web.",
      problemEn:
        "Most student portfolios are static, lack interactivity, or rely on generic templates that fail to demonstrate deep understanding of modern frontend architecture, state management, and web security.",
      solution:
        "Membangun website portofolio interaktif dari nol dengan Next.js 16, TypeScript untuk keamanan tipe, Tailwind CSS v4 untuk styling terstruktur, API route untuk pengiriman email terproteksi Turnstile, serta sistem i18n yang responsif.",
      solutionEn:
        "Engineered a high-performance interactive portfolio from scratch utilizing Next.js 16, TypeScript for strict type safety, Tailwind CSS v4 for clean modular styling, Turnstile-protected email API route, and responsive bilingual state.",
      background:
        "Portofolio ini dirancang sebagai platform showcase profesional untuk melamar posisi magang Web Developer / Frontend Developer, mendemonstrasikan keahlian dalam ekosistem React modern dan integrasi API.",
      backgroundEn:
        "Designed as a flagship professional platform for web/frontend internship applications, demonstrating modern React ecosystem mastery and secure API integration.",
      features: [
        "Arsitektur Next.js 16 App Router & React 19",
        "Desain Neobrutalism Modern dengan Palet Warna Konsisten",
        "Sistem Multi-Bahasa Reaktif (ID / EN)",
        "Route Handler Serverless dengan Resend Email & Validasi Cloudflare Turnstile",
        "Komponen Interaktif 3D & Animasi Fisika Teroptimasi",
        "SEO Lengkap dengan Open Graph & Responsivitas Mobile Penuh",
      ],
      featuresEn: [
        "Next.js 16 App Router & React 19 architecture",
        "Modern Neobrutalist design with consistent dark/light themes",
        "Reactive bilingual state system (ID / EN)",
        "Serverless route handler with Resend email & Cloudflare Turnstile verification",
        "Optimized physics and 3D interactive components",
        "Full SEO metadata, Open Graph preview, and mobile responsiveness",
      ],
      bannerBg: "bg-gradient-to-r from-blue-950 via-slate-900 to-neutral-900",
    },
  },
  {
    id: 1,
    category: "Aplikasi Web Full-Stack",
    categoryEn: "Full-Stack Web Application",
    title: "Sistem Manajemen Data Pegawai",
    description:
      "Aplikasi web berbasis PHP dan PostgreSQL untuk digitalisasi data kepegawaian. Dilengkapi autentikasi sesi admin, dashboard statistik, pencarian multi-parameter, serta operasi CRUD terstruktur dengan proteksi SQL injection melalui PDO prepared statements.",
    descriptionEn:
      "Web application powered by PHP and PostgreSQL for employee record management. Features admin session authentication, statistical dashboard, multi-parameter search, and CRUD operations secured with PDO prepared statements.",
    metrics: [
      { value: "PostgreSQL", label: "Database", labelEn: "Database" },
      { value: "CRUD + Auth", label: "Fitur Sistem", labelEn: "Core Features" },
      { value: "PDO Secure", label: "Arsitektur", labelEn: "Architecture" },
    ],
    tags: ["PHP Native", "PostgreSQL", "Bootstrap", "PDO", "SQL"],
    links: {
      demo: null,
      github: "https://github.com/CandraPutraPratama/sistem-manajemen-data-pegawai",
      caseStudy: null,
    },
    image: "/projects/project1.png",
    caseStudyContent: {
      problem:
        "Pengelolaan data pegawai konvensional berbasis arsip fisik atau spreadsheet rentan duplikasi, sulit diaudit, dan lambat saat pencarian riwayat data.",
      problemEn:
        "Conventional employee record tracking via physical files or spreadsheets is prone to data duplication, audit difficulties, and inefficient retrieval.",
      solution:
        "Membangun sistem informasi kepegawaian terpusat dengan database PostgreSQL. Menggunakan arsitektur PDO untuk menjamin keamanan query serta antarmuka Bootstrap yang mudah dioperasikan.",
      solutionEn:
        "Built a centralized employee management system with PostgreSQL database and PDO layer to prevent SQL injection and ensure reliable data persistence.",
      background:
        "Proyek ini dirancang untuk organisasi skala menengah guna memusatkan data pegawai, mempermudah pembaruan jabatan, dan mempercepat pencarian profil pegawai.",
      backgroundEn:
        "Designed for medium-scale organizations to centralize staff profiles, update job roles, and accelerate employee records retrieval.",
      features: [
        "Login Admin dengan Validasi Sesi Aman",
        "Dashboard Ringkasan Total & Status Pegawai",
        "CRUD Data Pegawai Lengkap",
        "Pencarian Cepat Berdasarkan Nama dan NIP",
        "Halaman Detail Profil Pegawai",
        "Koneksi Database Terenkapsulasi dengan PDO",
      ],
      featuresEn: [
        "Secure Admin Login with Session Validation",
        "Dashboard Summary of Staff Counts & Statuses",
        "Full CRUD Operations for Employee Records",
        "Fast Search by Name and Employee ID",
        "Detailed Profile View Modal",
        "Encapsulated Database Connection with PDO",
      ],
      bannerBg: "bg-gradient-to-r from-blue-950 via-slate-900 to-neutral-900",
    },
  },
  {
    id: 2,
    category: "Aplikasi Web Full-Stack",
    categoryEn: "Full-Stack Web Application",
    title: "Sistem Inventaris Barang",
    description:
      "Aplikasi web PHP & PostgreSQL untuk mengelola logistik gudang dan aset organisasi. Mendukung pencatatan stok masuk, stok keluar dengan validasi batas minimum, pengelompokan kategori barang, serta log riwayat transaksi stok.",
    descriptionEn:
      "PHP & PostgreSQL web application for warehouse inventory and asset control. Supports stock-in, stock-out with boundary validation, category grouping, and transaction audit trails.",
    metrics: [
      { value: "Stok Masuk/Keluar", label: "Pelacakan", labelEn: "Tracking" },
      { value: "6 Modul", label: "Fitur Sistem", labelEn: "System Modules" },
      { value: "Validasi Stok", label: "Integritas", labelEn: "Integrity" },
    ],
    tags: ["PHP Native", "PostgreSQL", "HTML/CSS", "PDO", "SQL"],
    links: {
      demo: null,
      github: "https://github.com/CandraPutraPratama/sistem-inventaris-barang",
      caseStudy: null,
    },
    image: "/projects/project2.png",
    caseStudyContent: {
      problem:
        "Pencatatan manual pada buku stok barang sering menyebabkan selisih data fisik dan pencatatan, stok minus tanpa peringatan, serta hilangnya riwayat mutasi barang.",
      problemEn:
        "Manual ledger tracking frequently causes inventory discrepancies, unnotified stockouts, and untracked item movement histories.",
      solution:
        "Dikembangkan sistem inventaris digital dengan validasi otomatis agar stok tidak dapat keluar jika melebihi ketersediaan, serta tabel riwayat log untuk setiap mutasi stok barang.",
      solutionEn:
        "Developed a digital inventory system with automated validation preventing negative stock and an audit log table recording every stock mutation.",
      background:
        "Ditujukan untuk laboratorium kampus, kantor, atau gudang kecil agar proses audit aset menjadi transparan, cepat, dan akurat.",
      backgroundEn:
        "Targeted at campus laboratories and office warehouses to make asset auditing transparent, fast, and accurate.",
      features: [
        "Dashboard Status Stok Menipis & Total Kategori",
        "Pencatatan Mutasi Stok Masuk & Stok Keluar",
        "Validasi Pencegahan Stok Minus",
        "Manajemen Kategori dan Lokasi Penyimpanan",
        "Riwayat Audit Transaksi Stok Lengkap",
      ],
      featuresEn: [
        "Low Stock Alert & Total Categories Dashboard",
        "Stock-in and Stock-out Mutation Tracking",
        "Negative Stock Prevention Validation",
        "Category and Storage Location Management",
        "Complete Transaction Audit History Log",
      ],
      bannerBg: "bg-gradient-to-r from-emerald-950 via-slate-900 to-neutral-900",
    },
  },
  {
    id: 3,
    category: "Aplikasi Web Full-Stack",
    categoryEn: "Full-Stack Web Application",
    title: "Sistem Kasir Sederhana",
    description:
      "Aplikasi point-of-sale (POS) web berbasis PHP dan PostgreSQL untuk toko retail. Dilengkapi keranjang transaksi kasir, perhitungan kembalian otomatis, cetak struk pembelian, serta rekapitulasi laporan penjualan berdasarkan rentang tanggal.",
    descriptionEn:
      "Point-of-sale (POS) web application built with PHP and PostgreSQL for retail shops. Features cashier transaction cart, automated change calculation, receipt printing, and date-range sales reports.",
    metrics: [
      { value: "Cetak Struk", label: "Transaksi", labelEn: "Transactions" },
      { value: "Laporan Tanggal", label: "Rekapitulasi", labelEn: "Reporting" },
      { value: "Kalkulasi", label: "Otomatis", labelEn: "Automation" },
    ],
    tags: ["PHP Native", "PostgreSQL", "Bootstrap", "pg_query", "SQL"],
    links: {
      demo: null,
      github: "https://github.com/CandraPutraPratama",
      caseStudy: null,
    },
    image: "/projects/project3.png",
    caseStudyContent: {
      problem:
        "Pencatatan nota manual pada usaha kecil rawan kesalahan hitung, membutuhkan waktu lama untuk melayani pelanggan, dan menyulitkan pemilik saat menghitung omzet harian.",
      problemEn:
        "Manual handwritten receipts in small businesses lead to calculation mistakes, slow customer service, and tedious daily revenue reconciliation.",
      solution:
        "Membangun aplikasi kasir web yang mengotomatisasi perhitungan total belanja dan kembalian, mencetak struk secara instan, serta menyaring omzet penjualan per periode tanggal.",
      solutionEn:
        "Engineered a web-based cashier system automating total and change calculations, instant thermal receipt formatting, and period-based sales filtering.",
      background:
        "Membantu digitalisasi UMKM agar transaksi kasir lebih cepat, struk tercetak rapi, dan data penjualan tersimpan aman dalam database relasional.",
      backgroundEn:
        "Empowers small businesses to speed up cashier workflows, generate clean receipts, and securely store sales history in a relational database.",
      features: [
        "Katalog Produk dengan Pencarian Instan",
        "Transaksi Kasir Cepat dengan Perhitungan Kembalian",
        "Fitur Cetak Struk Belanja",
        "Laporan Penjualan Berdasarkan Filter Rentang Tanggal",
        "Pencatatan Stok Masuk & Keluar Produk",
      ],
      featuresEn: [
        "Product Catalog with Instant Keyword Search",
        "Rapid Cashier Checkout with Automatic Change Calculation",
        "Print-ready Receipt Generation",
        "Sales Reporting with Date-range Filtering",
        "Stock Adjustment Logs for Retail Products",
      ],
      bannerBg: "bg-gradient-to-r from-purple-950 via-slate-900 to-neutral-900",
    },
  },
  {
    id: 4,
    category: "Aplikasi Web Full-Stack",
    categoryEn: "Full-Stack Web Application",
    title: "Sistem Manajemen Keuangan Pribadi",
    description:
      "Aplikasi web pelacak arus kas keuangan pribadi berbasis PHP dan PostgreSQL. Menyediakan pencatatan transaksi pemasukan dan pengeluaran, pengelompokan kategori pos belanja, grafik ringkasan saldo, serta laporan bulanan terstruktur.",
    descriptionEn:
      "Personal cash-flow management web application built with PHP and PostgreSQL. Provides income and expense logging, spending category classification, balance analytics, and monthly reports.",
    metrics: [
      { value: "Arus Kas", label: "Pencatatan", labelEn: "Cash Flow" },
      { value: "Filter Bulanan", label: "Pelaporan", labelEn: "Reporting" },
      { value: "Kategori", label: "Klasifikasi", labelEn: "Categories" },
    ],
    tags: ["PHP Native", "PostgreSQL", "CSS", "pgAdmin", "SQL"],
    links: {
      demo: null,
      github: "https://github.com/CandraPutraPratama",
      caseStudy: null,
    },
    image: "/projects/project4.png",
    caseStudyContent: {
      problem:
        "Pencatatan keuangan yang tersebar di catatan teks atau ingatan pribadi menyulitkan evaluasi pola pengeluaran bulanan dan monitoring saldo riil.",
      problemEn:
        "Scattered personal finance tracking makes it hard to evaluate monthly expenditure patterns and accurately monitor true net balance.",
      solution:
        "Menyediakan sistem web sederhana namun terstruktur untuk mengelompokkan pos transaksi, menghitung saldo secara otomatis, dan menyajikan ringkasan keuangan bulanan.",
      solutionEn:
        "Delivered a structured web tool to categorize transaction streams, automatically compute net balance, and display monthly summaries.",
      background:
        "Proyek ini dikembangkan untuk melatih pemodelan skema relasi data antara entitas pengguna, pos kategori, dan jurnal transaksi keuangan.",
      backgroundEn:
        "Developed to master schema modeling between users, spending categories, and chronological financial transaction records.",
      features: [
        "Dashboard Ringkasan Total Pemasukan, Pengeluaran & Saldo",
        "CRUD Kategori Pos Anggaran",
        "Pencatatan Transaksi dengan Tanggal & Keterangan",
        "Filter Transaksi Berdasarkan Periode Bulan & Tahun",
      ],
      featuresEn: [
        "Summary Dashboard of Income, Expense, and Net Balance",
        "CRUD Management for Budget Categories",
        "Transaction Logging with Timestamps and Notes",
        "Monthly and Yearly Financial Filtering",
      ],
      bannerBg: "bg-gradient-to-r from-red-950 via-slate-900 to-neutral-900",
    },
  },
  {
    id: 5,
    category: "Aplikasi Web Full-Stack",
    categoryEn: "Full-Stack Web Application",
    title: "Sistem Reservasi Ruangan (RoomBook)",
    description:
      "Aplikasi web berbasis PHP dan PostgreSQL untuk reservasi fasilitas dan ruangan kampus. Dilengkapi algoritma validasi bentrok jadwal otomatis, manajemen kapasitas ruangan, alur persetujuan admin (pending, approved, rejected), dan riwayat peminjaman.",
    descriptionEn:
      "Campus room and facility reservation web application using PHP and PostgreSQL. Features automated schedule conflict detection, capacity management, multi-stage approval workflow, and booking logs.",
    metrics: [
      { value: "Anti-Bentrok", label: "Validasi Jadwal", labelEn: "Conflict Check" },
      { value: "Multi-Status", label: "Persetujuan", labelEn: "Workflows" },
      { value: "Multi-Role", label: "Hak Akses", labelEn: "Roles" },
    ],
    tags: ["PHP Native", "PostgreSQL", "Bootstrap 5", "PDO", "JavaScript", "SQL"],
    links: {
      demo: null,
      github: "https://github.com/CandraPutraPratama",
      caseStudy: null,
    },
    image: "/projects/projek51.png",
    caseStudyContent: {
      problem:
        "Proses peminjaman ruangan kampus melalui formulir manual atau chat rawan jadwal bentrok, antrean tumpang tindih, dan tidak adanya transparansi status ketersediaan ruangan.",
      problemEn:
        "Manual room booking via paper forms or instant messaging causes double-booking conflicts, scheduling overlaps, and zero visibility into availability.",
      solution:
        "Mengembangkan RoomBook dengan algoritma pengecekan overlap waktu pada level query database sehingga sistem menolak pengajuan jadwal yang bertabrakan secara otomatis.",
      solutionEn:
        "Developed RoomBook with query-level timestamp overlap algorithms to automatically block conflicting reservation submissions.",
      background:
        "Dirancang untuk meningkatkan efisiensi operasional manajemen fasilitas kampus PENS agar peminjaman laboratorium dan aula terdokumentasi terpusat.",
      backgroundEn:
        "Engineered to streamline campus facility operations, centralizing laboratory and auditorium bookings transparently.",
      features: [
        "Katalog Ruangan dengan Fasilitas & Kapasitas",
        "Formulir Pengajuan Peminjaman Lengkap",
        "Algoritma Pengecekan Bentrok Jadwal Otomatis",
        "Dashboard Admin: Persetujuan, Penolakan & Status Peminjaman",
        "Riwayat Arsip Reservasi Berdasarkan Ruangan",
      ],
      featuresEn: [
        "Room Catalog with Facility Lists and Seating Capacities",
        "Comprehensive Reservation Booking Form",
        "Automated Schedule Conflict Detection Algorithm",
        "Admin Portal: Approve, Reject & Manage Active Bookings",
        "Historical Booking Archive by Room",
      ],
      bannerBg: "bg-gradient-to-r from-orange-950 via-slate-900 to-neutral-900",
    },
  },
];

// ============================================================
// PROJECTS COMPONENT
// ============================================================
const Projects = () => {
  const { lang } = useTheme();
  const t = translations[lang].projects;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Disable body scroll when modal is open and handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    // ── SECTION WRAPPER ───────────────────────────────────────
    // Menggunakan palet standar (bg-white dark:bg-black) untuk mencegah efek flashbang
    <section
      id="projects"
      className="w-full bg-white dark:bg-black text-black dark:text-white pt-12 pb-20 md:pt-20 md:pb-32 font-mono overflow-hidden relative transition-colors duration-300 border-t border-neutral-200 dark:border-neutral-800 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* ── HEADING ────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter"
          >
            {t.headingPart1}
            <br />
            {t.headingPart2}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-600 dark:text-neutral-400 text-xs md:text-base max-w-md text-left md:text-right leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* ── DAFTAR PROYEK ───────────────────────────────────── */}
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-neutral-200 dark:border-neutral-800 pt-8 md:pt-12 items-center"
            >
              {/* ── KIRI: Info Proyek ──────────────────────────── */}
              <div className="md:col-span-5 flex flex-col gap-5 md:gap-7 order-2 md:order-1">
                <div>
                  {/* ── Badge Kategori ── */}
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <span className="text-[10px] font-bold px-3 py-1 border border-neutral-300 dark:border-neutral-700 rounded-full text-neutral-600 dark:text-neutral-400 uppercase tracking-widest bg-neutral-100 dark:bg-neutral-900">
                      {lang === "US" ? project.categoryEn || project.category : project.category}
                    </span>
                  </div>
                  {/* ── Judul Proyek ── */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight text-black dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* ── Deskripsi ── */}
                <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm leading-relaxed font-sans">
                  {lang === "US" ? project.descriptionEn || project.description : project.description}
                </p>

                {/* ── Metrics ── */}
                <div className="grid grid-cols-3 gap-3 md:gap-4 border-l-2 border-black dark:border-white pl-3 md:pl-4">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-base md:text-lg font-black text-black dark:text-white break-words">
                        {m.value}
                      </p>
                      <p className="text-[9px] md:text-[10px] text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-mono">
                        {lang === "US" ? m.labelEn || m.label : m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* ── Tech Stack Tags ── */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold px-2.5 py-1.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded text-neutral-700 dark:text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ── Action Buttons: Studi Kasus, Kode GitHub, & Demo Live ────────────── */}
                <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4 items-center">
                  {/* Tombol 1: Baca Studi Kasus */}
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="relative flex items-center gap-2 text-xs md:text-sm font-bold text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors duration-300 group/link cursor-pointer bg-transparent border-none outline-none py-1"
                  >
                    <FileText className="w-4 h-4 text-neutral-500 group-hover/link:text-black dark:group-hover/link:text-white transition-transform duration-300 group-hover/link:rotate-12" />
                    <span className="relative">
                      {t.readCaseStudy}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black dark:bg-white transition-all duration-300 group-hover/link:w-full" />
                    </span>
                  </motion.button>

                  {/* Tombol 2: Repositori GitHub (Selalu ditampilkan jika ada) */}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-black dark:text-white border border-neutral-300 dark:border-neutral-700 transition-colors duration-300 font-bold text-[10px] md:text-xs uppercase tracking-wider rounded-lg shadow-sm"
                    >
                      <GithubIcon />
                      <span>{t.viewCode}</span>
                    </a>
                  )}

                  {/* Tombol 3: Demo Live (Hanya jika benar-benar dideploy online) */}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-300 font-bold text-[10px] md:text-xs uppercase tracking-wider rounded-lg shadow-sm"
                    >
                      <span>{t.visitDemo}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* ── KANAN: Preview Card ──────────────────────── */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                aria-label={`${t.readCaseStudy}: ${project.title}`}
                className="md:col-span-7 order-1 md:order-2 aspect-video overflow-visible cursor-pointer relative focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 rounded-2xl"
              >
                <TiltedCard
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={5}
                  scaleOnHover={1.02}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={false}
                  className="rounded-2xl border border-neutral-300 dark:border-neutral-800 overflow-hidden relative group/preview w-full h-full bg-neutral-100 dark:bg-neutral-900 shadow-md"
                >
                  {/* ── Gambar Screenshot Proyek ── */}
                  <Image
                    src={project.image}
                    alt={`Screenshot ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain object-center transition-all duration-500 filter brightness-[0.85] contrast-[0.98] group-hover/preview:brightness-100 group-hover/preview:contrast-100 group-hover/preview:scale-[1.02]"
                    priority={i === 0}
                  />

                  {/* ── Hover Overlay: LIHAT STUDI KASUS ── */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="px-5 py-3 bg-black/90 dark:bg-white/90 text-white dark:text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-2xl flex items-center gap-2 transform translate-y-3 opacity-0 group-hover/preview:opacity-100 group-hover/preview:translate-y-0 transition-all duration-300 ease-out backdrop-blur-sm">
                      <FileText className="w-4 h-4" />
                      {t.readCaseStudy}
                    </div>
                  </div>
                </TiltedCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── CASE STUDY MODAL OVERLAY ────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${t.caseStudyTag}: ${selectedProject.title}`}
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-4xl h-[90vh] md:h-[85vh] bg-white dark:bg-[#121212] border border-neutral-300 dark:border-neutral-800 rounded-3xl overflow-y-auto scrollbar-thin text-black dark:text-white font-mono flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── Close Button (sticky: tetap terlihat saat modal di-scroll) ── */}
              <div className="sticky top-0 z-30 flex justify-end pointer-events-none -mb-12 md:-mb-14 pr-4 md:pr-6 pt-4 md:pt-6">
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label={t.closeModalAria}
                  className="pointer-events-auto w-10 h-10 bg-black/70 hover:bg-black/90 dark:bg-neutral-800/80 dark:hover:bg-neutral-700 border border-neutral-700 text-white rounded-full flex items-center justify-center transition-all cursor-pointer outline-none backdrop-blur-md shadow flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* ── Banner Header ── */}
              <div
                className={`relative p-6 md:p-12 min-h-[200px] md:min-h-[260px] flex flex-col justify-end overflow-hidden ${selectedProject.caseStudyContent.bannerBg}`}
              >
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  priority
                  className="object-cover object-top opacity-30 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                <div className="relative z-20 flex flex-col">
                  <span className="inline-block self-start text-[10px] font-black px-3 py-1 bg-white text-black rounded-full uppercase tracking-widest mb-3 md:mb-4">
                    {t.caseStudyTag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight max-w-xl leading-tight text-white pr-12">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* ── Modal Content Scroll ── */}
              <div className="p-6 md:p-12 space-y-8 md:space-y-10 flex-1">
                {/* ── Row 1: Problem & Solution ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Problem */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block animate-pulse" />
                      <span className="text-red-600 dark:text-red-400 font-bold text-sm uppercase tracking-wider">
                        {t.problemTitle}
                      </span>
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed font-sans">
                      {lang === "US"
                        ? selectedProject.caseStudyContent.problemEn || selectedProject.caseStudyContent.problem
                        : selectedProject.caseStudyContent.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block animate-pulse" />
                      <span className="text-green-600 dark:text-green-400 font-bold text-sm uppercase tracking-wider">
                        {t.solutionTitle}
                      </span>
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed font-sans">
                      {lang === "US"
                        ? selectedProject.caseStudyContent.solutionEn || selectedProject.caseStudyContent.solution
                        : selectedProject.caseStudyContent.solution}
                    </p>
                  </div>
                </div>

                <div className="border-t border-neutral-200 dark:border-neutral-800" />

                {/* ── Row 2: Project Background & Key Features ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Background */}
                  <div>
                    <h4 className="text-black dark:text-white font-bold text-sm uppercase tracking-wider mb-4">
                      {t.backgroundTitle}
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed font-sans">
                      {lang === "US"
                        ? selectedProject.caseStudyContent.backgroundEn || selectedProject.caseStudyContent.background
                        : selectedProject.caseStudyContent.background}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-black dark:text-white font-bold text-sm uppercase tracking-wider mb-4">
                      {t.featuresTitle}
                    </h4>
                    <ul className="space-y-3 font-sans">
                      {(lang === "US" && selectedProject.caseStudyContent.featuresEn
                        ? selectedProject.caseStudyContent.featuresEn
                        : selectedProject.caseStudyContent.features
                      ).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300 text-sm">
                          <ChevronRight className="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-neutral-200 dark:border-neutral-800" />

                {/* ── Row 3: Action Buttons ── */}
                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-300 font-bold text-xs uppercase tracking-wider rounded-lg shadow"
                    >
                      <GithubIcon />
                      <span>{t.viewCode} (GitHub)</span>
                    </a>
                  )}

                  {selectedProject.links.demo && (
                    <a
                      href={selectedProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-300 font-bold text-xs uppercase tracking-wider rounded-lg shadow"
                    >
                      <span>{t.visitDemo}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
