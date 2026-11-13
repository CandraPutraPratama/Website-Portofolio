export interface Project {
  num: string;
  title: string;
  category: string;
  categoryFilter: "All" | "Fullstack" | "Frontend" | "Backend & Database";
  desc: string;
  tech: string[];
  awards: string[];
  impact: string[];
  image: string;
  link: string | null;
  liveUrl: string | null;
  githubUrl: string | null;
  linkText: string;
  year: string;
  role: string;
}

export const PROJECTS: Project[] = [
  {
    num: "01",
    title: "Jasdor Kopi Cima",
    category: "Proyek Mandiri • Live",
    categoryFilter: "Fullstack",
    desc: "Aplikasi jasa order kopi untuk mahasiswa dan komunitas, dirancang dan dikelola sendiri. Customer memilih outlet dan menu dari tiga brand, membayar lewat QRIS, lalu pesanan dikonfirmasi lewat WhatsApp. Layanan independen, bukan mitra resmi brand.",
    tech: ["Next.js", "TypeScript", "Supabase", "Cloudflare Workers", "Tailwind CSS", "PWA"],
    awards: ["Live", "1.600+ Pesanan"],
    impact: [
      "1.600+ pesanan pelanggan masuk lewat aplikasi yang berjalan live",
      "Tiga brand kopi (Kopi Kenangan, Fore Coffee, TOMORO Coffee): pilih outlet, varian, dan paket bundling",
      "Pembayaran QRIS dan konfirmasi pesanan lewat WhatsApp, plus panel admin dengan notifikasi Telegram",
      "Backend di Cloudflare Workers dengan Supabase (PostgreSQL), rate limiting, dan 600+ test otomatis"
    ],
    image: "/images/projects/jasdor.svg",
    link: "https://jasdor.cimagroup.my.id",
    liveUrl: "https://jasdor.cimagroup.my.id",
    githubUrl: "https://github.com/CandraPutraPratama/jasdorkopicima",
    linkText: "Buka Aplikasi",
    year: "2026",
    role: "Lead Developer & Creator",
  },
  {
    num: "02",
    title: "BudgEx - Sistem Persetujuan Anggaran",
    category: "Backend API • Tim PBL PENS",
    categoryFilter: "Backend & Database",
    desc: "Sistem alur persetujuan anggaran berjenjang dengan review antar departemen, validasi batas plafon tahunan, dan pelacakan audit. Proyek tim PBL PENS; repositori ada di organisasi kampus dan bersifat privat.",
    tech: ["ASP.NET Core", "C#", "PostgreSQL", "REST API", "Clean Architecture"],
    awards: [],
    impact: [
      "Merancang skema relasional dan integrasi alur persetujuan multi-role sebagai Backend & Database Developer",
      "State machine persetujuan bertingkat agar data anggaran tetap konsisten saat dokumen direview bersamaan",
      "Validasi plafon tahunan (ceiling logic) dan pelacakan audit atas setiap perubahan status"
    ],
    image: "/images/projects/budgex.svg",
    link: null,
    liveUrl: null,
    githubUrl: null,
    linkText: "Lihat Repositori",
    year: "2025 - 2026",
    role: "Backend & Database Developer",
  },
  {
    num: "03",
    title: "Personal Portfolio v2",
    category: "Aplikasi Web",
    categoryFilter: "Frontend",
    desc: "Website portofolio pribadi dengan tema terang dan gelap serta halaman arsip proyek.",
    tech: ["Next.js 14", "React 18", "Tailwind CSS", "Lucide Icons"],
    awards: [],
    impact: [
      "Next.js 14 App Router dengan halaman beranda dan arsip proyek",
      "Tema terang dan gelap yang mengikuti pengaturan perangkat",
      "Responsif di perangkat mobile dan desktop"
    ],
    image: "/images/projects/project1.png",
    link: "/",
    liveUrl: "https://website-portofolio-lac-pi.vercel.app",
    githubUrl: "https://github.com/CandraPutraPratama/Website-Portofolio",
    linkText: "Lihat Proyek",
    year: "2026",
    role: "Frontend Developer",
  },
  {
    num: "04",
    title: "Sistem Data Pegawai",
    category: "Full-Stack Web",
    categoryFilter: "Fullstack",
    desc: "Aplikasi web sederhana untuk mengelola data pegawai: login admin, dashboard, CRUD, dan pencarian berdasarkan nama, NIP, jabatan, atau departemen.",
    tech: ["PHP", "PostgreSQL", "Bootstrap 5", "PDO"],
    awards: [],
    impact: [
      "Login admin dan dashboard jumlah pegawai",
      "CRUD data pegawai dengan pencarian berdasarkan nama, NIP, jabatan, atau departemen",
      "Koneksi database dengan PDO dan validasi input"
    ],
    image: "/images/projects/project2.png",
    link: "https://github.com/CandraPutraPratama/sistem-manajemen-data-pegawai",
    liveUrl: null,
    githubUrl: "https://github.com/CandraPutraPratama/sistem-manajemen-data-pegawai",
    linkText: "Lihat Repositori",
    year: "2026",
    role: "Full-Stack Developer",
  },
  {
    num: "05",
    title: "Sistem Manajemen Inventaris Gudang",
    category: "Full-Stack Web",
    categoryFilter: "Backend & Database",
    desc: "Aplikasi web sederhana untuk mengelola barang, kategori, stok masuk, stok keluar, dan riwayat transaksi stok.",
    tech: ["PHP", "PostgreSQL", "PDO", "CSS"],
    awards: [],
    impact: [
      "CRUD barang dan kategori dengan pencarian berdasarkan nama, kode, kategori, atau lokasi",
      "Stok keluar divalidasi agar tidak melebihi stok tersedia dan diproses dengan database transaction",
      "Riwayat transaksi stok masuk dan keluar"
    ],
    image: "/images/projects/project3.png",
    link: "https://github.com/CandraPutraPratama/sistem-inventaris-barang",
    liveUrl: null,
    githubUrl: "https://github.com/CandraPutraPratama/sistem-inventaris-barang",
    linkText: "Lihat Repositori",
    year: "2026",
    role: "Full-Stack Developer",
  },
  {
    num: "06",
    title: "Point of Sales (POS) Kasir",
    category: "Full-Stack Web",
    categoryFilter: "Fullstack",
    desc: "Aplikasi kasir berbasis web untuk mengelola produk, transaksi penjualan, laporan penjualan, dan stok.",
    tech: ["PHP", "PostgreSQL", "Bootstrap 5"],
    awards: [],
    impact: [
      "CRUD produk dengan pencarian dan transaksi penjualan beserta detailnya",
      "Cetak struk transaksi dan laporan penjualan dengan filter tanggal",
      "Stok masuk dan keluar dengan riwayat perubahan stok"
    ],
    image: "/images/projects/project4.png",
    link: "https://github.com/CandraPutraPratama/project4-kasir",
    liveUrl: null,
    githubUrl: "https://github.com/CandraPutraPratama/project4-kasir",
    linkText: "Lihat Repositori",
    year: "2026",
    role: "Full-Stack Developer",
  },
  {
    num: "07",
    title: "Manajemen Keuangan Pribadi",
    category: "Full-Stack Web",
    categoryFilter: "Fullstack",
    desc: "Aplikasi web untuk mencatat pemasukan dan pengeluaran, mengelola kategori, serta melihat ringkasan dan laporan keuangan bulanan.",
    tech: ["PHP", "PostgreSQL", "HTML", "CSS"],
    awards: [],
    impact: [
      "Dashboard total pemasukan, total pengeluaran, dan saldo akhir",
      "CRUD kategori dan transaksi dengan filter keterangan, tipe, dan rentang tanggal",
      "Laporan keuangan bulanan dengan tampilan responsif"
    ],
    image: "/images/projects/projek51.png",
    link: "https://github.com/CandraPutraPratama/keuangan-pribadi",
    liveUrl: null,
    githubUrl: "https://github.com/CandraPutraPratama/keuangan-pribadi",
    linkText: "Lihat Repositori",
    year: "2026",
    role: "Full-Stack Developer",
  },
  {
    num: "08",
    title: "RoomBook - Reservasi Ruangan Kampus",
    category: "Full-Stack Web",
    categoryFilter: "Fullstack",
    desc: "Aplikasi web reservasi ruangan kampus dengan manajemen ruangan dan reservasi, validasi jadwal bentrok, dan riwayat. Masih dalam pengembangan.",
    tech: ["PHP", "PostgreSQL", "Bootstrap", "JavaScript"],
    awards: [],
    impact: [
      "Manajemen data ruangan dan reservasi",
      "Validasi jadwal bentrok saat reservasi dibuat",
      "Jadwal penggunaan ruangan, riwayat reservasi, serta pencarian dan filter"
    ],
    image: "/images/projects/project1.png",
    link: "https://github.com/CandraPutraPratama/roombook",
    liveUrl: null,
    githubUrl: "https://github.com/CandraPutraPratama/roombook",
    linkText: "Lihat Repositori",
    year: "2026",
    role: "Full-Stack Developer",
  },
];

