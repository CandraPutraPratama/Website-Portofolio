"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, FileText, X, ChevronRight } from "lucide-react";
import TiltedCard from "./TiltedCard";

// SVG inline untuk ikon yang tidak tersedia di versi lucide ini
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectMetric {
  value: string;
  label: string;
}

interface ProjectLinks {
  demo: string | null;
  github: string | null;
  caseStudy: string | null;
}

interface CaseStudyContent {
  problem: string;
  solution: string;
  background: string;
  features: string[];
  bannerBg: string;
}

interface ProjectItem {
  id: number;
  category: string;
  title: string;
  description: string;
  metrics: ProjectMetric[];
  tags: string[];
  links: ProjectLinks;
  image: string;
  caseStudyContent: CaseStudyContent;
}

// ============================================================
// DATA — Daftar Proyek
// ============================================================
const projects: ProjectItem[] = [
  {
    id: 6,
    category: "Web App Production",
    title: "Jasdor — Jasa Order Kopi Promo",
    description:
      "Jasdor adalah platform jasa order kopi promo yang saya bangun dan operasikan sendiri. Mendukung 3 brand (Kopi Kenangan, Fore, Tomoro) dengan ribuan outlet, harga akurat per outlet, promo bundling, antrean real-time, dan checkout via WhatsApp — live production sejak Oktober 2026.",
    metrics: [
      { value: "3", label: "Brand Aktif" },
      { value: "2000+", label: "Outlet" },
      { value: "Live", label: "Production" },
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PWA", "Cloudflare", "WhatsApp API"],
    links: {
      demo: "https://jasdor.cimagroup.my.id/",
      github: null,
      caseStudy: null,
    },
    image: "/projects/jasdor.svg",
    caseStudyContent: {
      problem: "Promo kopi seperti diskon 50% biasanya hanya bisa dinikmati dengan datang langsung ke outlet dan antre, atau lewat jasa titip yang tidak terstruktur via chat — rawan salah catat, tidak ada katalog harga yang jelas, dan pembayaran serba manual.",
      solution: "Membangun platform jasa order berbasis web (PWA) dengan katalog multi-brand, harga per outlet yang akurat mengikuti tier (normal/mall/bandara), promo bundling dengan validasi otomatis, antrean real-time, dan checkout via WhatsApp dengan format pesanan otomatis.",
      background: "Jasdor adalah bisnis yang saya bangun dan jalankan sendiri sejak Oktober 2026. Sistem menangani 3 brand dengan ribuan outlet, sinkronisasi status buka/tutup outlet, tier harga per outlet, paket bundling promo, sistem antrean dengan estimasi waktu, serta panel admin untuk mengelola pesanan dan operasional harian.",
      features: [
        "Katalog multi-brand (Kopi Kenangan, Fore, Tomoro) dengan pencarian outlet",
        "Harga per outlet mengikuti tier: normal, mall, dan bandara",
        "Promo bundling & B1G1 dengan validasi otomatis di server",
        "Antrean real-time dengan estimasi waktu tunggu per pesanan",
        "Checkout via WhatsApp dengan format pesanan otomatis",
        "Panel admin: kelola pesanan, status operasional, dan laporan",
        "PWA — dapat di-install di HP seperti aplikasi native"
      ],
      bannerBg: "bg-gradient-to-r from-amber-950 via-slate-900 to-neutral-900"
    }
  },
  {
    id: 7,
    category: "Backend API • Proyek Tim",
    title: "BudgEx — Sistem Anggaran (RAB)",
    description:
      "BudgEx adalah sistem pengajuan dan persetujuan anggaran (RAB) yang saya kembangkan bersama tim. Saya mengerjakan sisi backend: REST API dengan ASP.NET Core, alur approval bertingkat, modul OPEX & CAPEX, transfer antar departemen, dan laporan PDF/Excel — terintegrasi dengan aplikasi mobile Flutter.",
    metrics: [
      { value: "Backend", label: "Peran di Tim" },
      { value: "OPEX+CAPEX", label: "Modul" },
      { value: "3-Level", label: "Approval" },
    ],
    tags: ["ASP.NET Core", ".NET 10", "PostgreSQL", "EF Core", "Flutter", "xUnit"],
    links: {
      demo: null,
      github: null,
      caseStudy: null,
    },
    image: "/projects/budgex.svg",
    caseStudyContent: {
      problem: "Pengajuan dan persetujuan anggaran (RAB) di perusahaan masih sering dilakukan manual lewat form kertas atau chat — status pengajuan sulit dilacak, tidak ada jejak audit yang jelas, dan laporan harus direkap manual satu per satu.",
      solution: "Membangun backend sistem budgeting dengan alur approval bertingkat (Dept Head → Finance → Director), mendukung anggaran OPEX dan CAPEX, transfer anggaran antar departemen, revisi RAB, serta laporan PDF/Excel otomatis yang siap unduh.",
      background: "BudgEx adalah proyek tim pada mata kuliah PdBL yang dikerjakan sejak semester 4 hingga semester 5. Saya berperan di tim backend: merancang endpoint REST API, logika approval, dan integrasi database PostgreSQL dengan Entity Framework Core. API yang sama dikonsumsi oleh aplikasi mobile yang dibangun dengan Flutter.",
      features: [
        "Alur approval bertingkat: Dept Head → Finance → Director",
        "Modul OPEX & CAPEX dengan fitur revisi RAB",
        "Transfer anggaran antar departemen",
        "Laporan PDF & Excel otomatis",
        "REST API yang dikonsumsi aplikasi mobile (Flutter)",
        "Unit & integration test untuk menjaga kualitas kode"
      ],
      bannerBg: "bg-gradient-to-r from-emerald-950 via-slate-900 to-neutral-900"
    }
  },
  {
    id: 1,
    category: "Aplikasi web Full-Stack",
    title: "Sistem Manajemen Data Pegawai",
    description:
      "Sistem Manajemen Data Pegawai adalah aplikasi web berbasis PHP dan PostgreSQL yang digunakan untuk mengelola data pegawai secara digital. Website ini menyediakan fitur login admin, dashboard, pencarian data, serta proses CRUD untuk menambah, melihat, mengubah, dan menghapus data pegawai.",
    metrics: [
      { value: "8", label: "Fitur Utama" },
      { value: "Login Admin", label: "Hak Akses" },
      { value: "PDO", label: "Koneksi Aman" },
    ],
    tags: ["PHP Native", "PostgreSQL", "Bootstrap", "PDO", "Laragon"],
    links: {
      demo: null,
      github: "https://github.com/CandraPutraPratama/sistem-manajemen-data-pegawai",
      caseStudy: null,
    },
    image: "/projects/project1.png",
    caseStudyContent: {
      problem: "Data pegawai masih sering dikelola secara manual melalui berkas fisik atau file spreadsheet terpisah. Hal ini membuat data lebih sulit dicari, rawan duplikasi, dan kurang efisien saat admin perlu menambah, mengubah, atau mengecek informasi pegawai.",
      solution: "Membangun sistem manajemen data pegawai berbasis web menggunakan PHP Native dan PostgreSQL. Sistem ini menyediakan login admin, dashboard, pencarian data, serta fitur CRUD lengkap agar pengelolaan data pegawai menjadi lebih rapi, cepat, dan terstruktur.",
      background: "Proyek ini dibuat untuk membantu proses pengelolaan data pegawai pada organisasi kecil atau menengah. Dengan menyimpan data ke dalam database PostgreSQL, informasi pegawai dapat dikelola secara lebih terpusat, mudah diakses, dan lebih efisien dibandingkan pencatatan manual.",
      features: [
        "Login Admin",
        "Dashboard Jumlah Pegawai",
        "CRUD Data Pegawai",
        "Pencarian Pegawai Berdasarkan Nama",
        "Halaman Detail Pegawai",
        "Integrasi Database PostgreSQL",
        "Koneksi Database Menggunakan PDO",
        "Tampilan Responsif dengan Bootstrap"
      ],
      bannerBg: "bg-gradient-to-r from-blue-950 via-slate-900 to-neutral-900"
    }
  },
  {
    id: 2,
    category: "Aplikasi Web Full-Stack",
    title: "Sistem Inventaris Barang",
    description:
      "Sistem Inventaris Barang adalah aplikasi web berbasis PHP dan PostgreSQL yang digunakan untuk mengelola data inventaris secara digital. Website ini menyediakan fitur dashboard, pencarian barang, kategori, stok masuk, stok keluar, riwayat stok, serta proses CRUD untuk menambah, melihat, mengubah, dan menghapus data barang.",
    metrics: [
      { value: "6", label: "Fitur Utama" },
      { value: "Masuk & Keluar", label: "Arus Stok" },
      { value: "Riwayat", label: "Perubahan Stok" },
    ],
    tags: ["PHP Native", "PostgreSQL", "HTML/CSS", "PDO", "Laragon"],
    links: {
      demo: null,
      github: "https://github.com/CandraPutraPratama/sistem-inventaris-barang",
      caseStudy: null,
    },
    image: "/projects/project2.png",
    caseStudyContent: {
      problem: "Pengelolaan data barang secara manual sering membuat pencatatan stok menjadi tidak rapi. Data barang bisa tercecer, stok masuk dan keluar sulit dilacak, serta pencarian barang membutuhkan waktu lama ketika jumlah data semakin banyak.",
      solution: "Dibangun sistem inventaris berbasis web menggunakan PHP Native dan PostgreSQL untuk mengelola data barang secara digital. Sistem ini menyediakan dashboard, CRUD barang, kategori, pencarian data, stok masuk, stok keluar, serta riwayat transaksi stok yang tersimpan di database.",
      background: "Project ini dirancang untuk membantu pengelolaan inventaris barang pada skala kecil hingga menengah, seperti kantor, organisasi, laboratorium, atau gudang sederhana. Aplikasi ini memudahkan pengguna dalam mencatat data barang, mengelompokkan kategori, memantau stok, dan melihat riwayat perubahan stok secara lebih terstruktur.",
      features: [
        "Dashboard ringkasan jumlah barang, kategori, total stok, dan stok menipis",
        "CRUD data barang untuk menambah, melihat, mengubah, dan menghapus barang",
        "Manajemen kategori barang agar data inventaris lebih terorganisir",
        "Fitur pencarian barang berdasarkan nama, kode, kategori, atau lokasi",
        "Stok masuk dan stok keluar dengan validasi agar stok tidak minus",
        "Riwayat transaksi stok untuk mencatat setiap perubahan jumlah barang"
      ],
      bannerBg: "bg-gradient-to-r from-emerald-950 via-slate-900 to-neutral-900"
    }
  },
  {
    id: 3,
    category: "Aplikasi Web Full-Stack",
    title: "Sistem Kasir Sederhana",
    description:
      "Sistem Kasir Sederhana adalah aplikasi web berbasis PHP dan PostgreSQL yang digunakan untuk mengelola produk, stok barang, transaksi penjualan, serta laporan penjualan secara digital. Website ini menyediakan fitur dashboard, pencarian produk, proses transaksi, cetak struk, riwayat transaksi, laporan berdasarkan tanggal, dan manajemen stok masuk maupun stok keluar.",
    metrics: [
      { value: "6", label: "Fitur Utama" },
      { value: "Cetak", label: "Struk Otomatis" },
      { value: "Filter", label: "Laporan Tanggal" },
    ],
    tags: ["PHP Native", "PostgreSQL", "Bootstrap", "pg_query"],
    links: {
      demo: null,
      github: null,
      caseStudy: null,
    },
    image: "/projects/project3.png",
    caseStudyContent: {
      problem: "Proses pencatatan produk, stok, dan transaksi penjualan yang masih dilakukan secara manual sering menimbulkan kesalahan data, stok tidak akurat, dan laporan penjualan yang sulit direkap. Pengelolaan barang juga menjadi kurang efisien karena admin harus mengecek stok dan transaksi secara terpisah.",
      solution: "Membangun sistem kasir sederhana berbasis PHP Native dan PostgreSQL untuk mengelola produk, transaksi penjualan, laporan, serta stok barang dalam satu aplikasi terintegrasi. Sistem ini membantu proses penjualan menjadi lebih cepat, pencatatan lebih rapi, dan data stok maupun laporan lebih mudah dipantau.",
      background: "Project ini dirancang sebagai aplikasi kasir sederhana untuk membantu pengelolaan penjualan pada usaha kecil atau toko skala sederhana. Sistem menyediakan fitur dashboard, manajemen produk, transaksi, riwayat penjualan, laporan berdasarkan tanggal, serta pengelolaan stok masuk dan stok keluar secara manual.",
      features: [
        "Dashboard ringkasan produk, stok, transaksi, dan pendapatan",
        "CRUD data produk lengkap dengan pencarian produk",
        "Transaksi penjualan dengan perhitungan total dan kembalian otomatis",
        "Detail transaksi dan print struk pembelian",
        "Laporan penjualan dengan filter tanggal dan fitur print",
        "Manajemen stok masuk, stok keluar, dan riwayat perubahan stok"
      ],
      bannerBg: "bg-gradient-to-r from-purple-950 via-slate-900 to-neutral-900"
    }
  },
  {
    id: 4,
    category: "Aplikasi Web Full-Stack",
    title: "Sistem Manajemen Keuangan Pribadi",
    description:
      "Sistem Manajemen Keuangan Pribadi adalah aplikasi web berbasis PHP dan PostgreSQL yang digunakan untuk mencatat pemasukan, pengeluaran, serta mengelola kategori transaksi secara digital. Website ini menyediakan fitur dashboard ringkasan, CRUD kategori, CRUD transaksi, filter data, dan laporan bulanan untuk membantu pengguna memantau kondisi keuangan pribadi dengan lebih rapi.",
    metrics: [
      { value: "6", label: "Fitur Utama" },
      { value: "Kelola", label: "Kategori" },
      { value: "Laporan", label: "Bulanan" },
    ],
    tags: ["PHP Native", "PostgreSQL", "CSS", "pgAdmin", "Laragon"],
    links: {
      demo: null,
      github: null,
      caseStudy: null,
    },
    image: "/projects/project4.png",
    caseStudyContent: {
      problem: "Banyak orang masih mencatat pemasukan dan pengeluaran secara manual, sehingga data keuangan mudah tercecer, sulit dilacak, dan tidak memiliki ringkasan yang jelas. Akibatnya, pengguna kesulitan mengetahui total pengeluaran, pemasukan, serta kondisi saldo secara cepat.",
      solution: "Dibangun sebuah aplikasi web manajemen keuangan pribadi berbasis PHP dan PostgreSQL untuk mencatat transaksi secara digital. Sistem ini menyediakan dashboard ringkasan, pengelolaan kategori, filter transaksi, serta laporan bulanan agar pengguna lebih mudah memantau kondisi keuangan.",
      background: "Project ini dirancang untuk membantu pengguna mengelola keuangan pribadi dengan cara yang lebih rapi dan terstruktur. Aplikasi menyimpan data kategori dan transaksi ke dalam database, lalu menampilkan ringkasan pemasukan, pengeluaran, saldo akhir, serta laporan berdasarkan bulan dan tahun.",
      features: [
        "Dashboard Ringkasan Keuangan",
        "CRUD Kategori Pemasukan dan Pengeluaran",
        "CRUD Transaksi Keuangan",
        "Filter Transaksi Berdasarkan Tipe, Tanggal, dan Keterangan",
        "Laporan Keuangan Bulanan",
        "Tampilan Responsive untuk Desktop dan Mobile"
      ],
      bannerBg: "bg-gradient-to-r from-red-950 via-slate-900 to-neutral-900"
    }
  },
  {
    id: 5,
    category: "Aplikasi Web Full-Stack",
    title: "SISTEM RESERVASI RUANGAN",
    description:
      "RoomBook adalah aplikasi web berbasis PHP dan PostgreSQL untuk mengelola reservasi ruangan kampus. Sistem ini mendukung manajemen data ruangan, pengajuan reservasi, validasi jadwal bentrok, pemantauan jadwal aktif, serta riwayat peminjaman ruangan.",
    metrics: [
      { value: "5", label: "Fitur Utama" },
      { value: "Cegah", label: "Jadwal Bentrok" },
      { value: "4", label: "Status Reservasi" },
    ],
    tags: ["PHP Native", "PostgreSQL", "Bootstrap 5", "PDO", "JavaScript", "HTML", "CSS"],
    links: {
      demo: null,
      github: null,
      caseStudy: null,
    },
    image: "/projects/projek51.png",
    caseStudyContent: {
      problem: "Proses peminjaman ruangan kampus yang masih dilakukan secara manual melalui chat atau pencatatan terpisah membuat data reservasi sulit dipantau, rawan bentrok jadwal, dan status pengajuan tidak terdokumentasi dengan jelas.",
      solution: "Dikembangkan sistem reservasi ruangan kampus berbasis web dengan database terpusat. Admin dapat mengelola data ruangan, memantau jadwal penggunaan, menyetujui atau menolak reservasi, serta memastikan tidak ada jadwal yang saling bertabrakan.",
      background: "Proyek ini dibangun untuk membantu proses pengelolaan reservasi ruangan kampus agar lebih rapi, cepat, dan terstruktur. RoomBook menggabungkan data ruangan, jadwal reservasi, status pengajuan, dan riwayat peminjaman dalam satu sistem berbasis database relasional.",
      features: [
        "Manajemen data ruangan dengan informasi lokasi, kapasitas, fasilitas, dan status ketersediaan.",
        "Pengajuan reservasi ruangan dengan data peminjam, kegiatan, tanggal, jam mulai, dan jam selesai.",
        "Validasi jadwal bentrok otomatis untuk mencegah reservasi pada ruangan dan waktu yang sama.",
        "Update status reservasi menjadi pending, approved, rejected, atau completed.",
        "Dashboard ringkasan untuk memantau total ruangan, status reservasi, dan jadwal aktif hari ini."
      ],
      bannerBg: "bg-gradient-to-r from-orange-950 via-slate-900 to-neutral-900"
    }
  }
];

// ============================================================
// PROJECTS COMPONENT
// ============================================================
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    // ── SECTION WRAPPER ───────────────────────────────────────
    <section
      id="projects"
      className="w-full bg-black dark:bg-white text-white dark:text-black pt-8 pb-12 md:pt-16 md:pb-32 font-mono overflow-hidden relative transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">

        {/* ── HEADING ────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-10 gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter"
          >
            Karya<br />Terpilih
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-400 dark:text-neutral-600 text-sm md:text-base max-w-md text-left md:text-right"
          >
            Kumpulan solusi web fungsional yang berfokus pada akurasi data, otomatisasi, dan pengalaman pengguna.
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
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-neutral-800 dark:border-neutral-200 pt-8 md:pt-12 items-center"
            >
              {/* ── KIRI: Info Proyek ──────────────────────────── */}
              <div className="md:col-span-5 flex flex-col gap-6 md:gap-8 order-2 md:order-1">
                <div>
                  {/* ── Badge Kategori ── */}
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <span className="text-[10px] font-bold px-3 py-1 border border-neutral-700 dark:border-neutral-300 rounded-full text-neutral-400 dark:text-neutral-600 uppercase tracking-widest bg-neutral-900/50 dark:bg-neutral-100/50">
                      {project.category}
                    </span>
                  </div>
                  {/* ── Judul Proyek ── */}
                  <h3 className="text-3xl md:text-5xl font-bold uppercase leading-tight text-white dark:text-black group-hover:text-neutral-300 dark:group-hover:text-neutral-600 transition-colors duration-500">
                    {project.title}
                  </h3>
                </div>

                {/* ── Deskripsi ── */}
                <p className="text-neutral-400 dark:text-neutral-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* ── Metrics ── */}
                <div className="grid grid-cols-3 gap-4 border-l-2 border-neutral-800 dark:border-neutral-200 pl-4">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-lg md:text-xl font-black text-white dark:text-black">{m.value}</p>
                      <p className="text-[9px] md:text-[10px] text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* ── Tech Stack Tags ── */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold px-3 py-2 bg-neutral-900 dark:bg-neutral-100 border border-neutral-800 dark:border-neutral-200 rounded text-neutral-300 dark:text-neutral-700">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ── Links: Case Study & Visit Site ────────────── */}
                <div className="flex flex-wrap gap-6 pt-4 items-center">
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="relative flex items-center gap-2 text-sm font-bold text-neutral-300 dark:text-neutral-700 hover:text-white dark:hover:text-black transition-colors duration-300 group/link cursor-pointer bg-transparent border-none outline-none"
                  >
                    <FileText className="w-4 h-4 text-neutral-400 dark:text-neutral-500 group-hover/link:text-white dark:group-hover/link:text-black transition-transform duration-300 group-hover/link:rotate-12 group-hover/link:scale-110" />
                    <span className="relative py-1">
                      Baca Studi Kasus
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white dark:bg-black transition-all duration-300 group-hover/link:w-full" />
                    </span>
                  </motion.button>

                  {(project.links.demo || project.links.github) && (
                    <a
                      href={(project.links.demo || project.links.github) as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white dark:bg-black text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors duration-300 font-bold text-xs uppercase tracking-wider rounded-lg"
                    >
                      KUNJUNGI SITUS
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

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
                aria-label={`Lihat studi kasus ${project.title}`}
                className="md:col-span-7 order-1 md:order-2 aspect-video overflow-visible cursor-pointer relative focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 rounded-2xl"
              >
                <TiltedCard
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={6}
                  scaleOnHover={1.03}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={false}
                  className="rounded-2xl border border-neutral-800 dark:border-neutral-200 overflow-hidden relative group/preview w-full h-full bg-neutral-950 dark:bg-neutral-50"
                >
                  {/* ── Gambar Screenshot Proyek ── */}
                  <Image
                    src={project.image}
                    alt={`Screenshot ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain object-center transition-all duration-500 filter brightness-[0.65] contrast-[0.95] group-hover/preview:brightness-100 group-hover/preview:contrast-100 group-hover/preview:scale-[1.02]"
                    priority={i === 0}
                  />

                  {/* ── Hover Overlay: LIHAT STUDI KASUS ── */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="px-6 py-3.5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-2xl flex items-center gap-2 transform translate-y-3 opacity-0 group-hover/preview:opacity-100 group-hover/preview:translate-y-0 transition-all duration-300 ease-out">
                      <FileText className="w-4 h-4 text-black" />
                      BACA STUDI KASUS
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-4xl h-[90vh] md:h-[85vh] bg-[#121212] border border-neutral-800 rounded-3xl overflow-y-auto scrollbar-thin text-white font-mono flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── Close Button ── */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-black/40 hover:bg-black/80 border border-neutral-800 hover:border-neutral-500 text-white rounded-full flex items-center justify-center transition-all cursor-pointer z-20 outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              {/* ── Banner Header ── */}
              <div className={`relative p-8 md:p-12 min-h-[220px] md:min-h-[280px] flex flex-col justify-end overflow-hidden ${selectedProject.caseStudyContent.bannerBg}`}>
                {/* Background Image of the Project */}
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-w-1024px) 100vw, 1000px"
                  priority
                  className="object-cover object-top opacity-35 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent z-10" />
                <div className="relative z-20 flex flex-col">
                  <span className="inline-block self-start text-[10px] font-black px-3 py-1 bg-white text-black rounded-full uppercase tracking-widest mb-4">
                    Studi Kasus
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight max-w-xl leading-tight text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* ── Modal Content Scroll ── */}
              <div className="p-8 md:p-12 space-y-10 flex-1">
                {/* ── Row 1: Problem & Solution ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Problem */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block animate-pulse" />
                      <span className="text-red-500 font-bold text-sm uppercase tracking-wider">
                        Permasalahan
                      </span>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {selectedProject.caseStudyContent.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block animate-pulse" />
                      <span className="text-green-500 font-bold text-sm uppercase tracking-wider">
                        Solusi
                      </span>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {selectedProject.caseStudyContent.solution}
                    </p>
                  </div>
                </div>

                <div className="border-t border-neutral-800" />

                {/* ── Row 2: Project Background & Key Features ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Background */}
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                      Latar Belakang Proyek
                    </h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {selectedProject.caseStudyContent.background}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                      Fitur Utama
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.caseStudyContent.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-neutral-400 text-sm">
                          <ChevronRight className="w-4 h-4 text-neutral-600 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-neutral-800" />

                {/* ── Row 3: Action Button ── */}
                {(selectedProject.links.demo || selectedProject.links.github) && (
                  <div className="pt-2">
                    <a
                      href={(selectedProject.links.demo || selectedProject.links.github) as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-neutral-200 transition-colors duration-300 font-bold text-xs uppercase tracking-wider rounded-lg"
                    >
                      KUNJUNGI SITUS
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
