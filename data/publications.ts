export interface PublicationItem {
  id: string;
  title: string;
  year: number;
  type: "PBL Research" | "Technical Paper" | "Applied Study" | "Case Study";
  venue: string;
  tags: string[];
  abstract: string;
  authors: string[];
  paperUrl?: string;
  pdfUrl?: string;
  githubUrl?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const PUBLICATIONS_DATA: PublicationItem[] = [
  {
    id: "pub-jasdor-pwa-2026",
    title: "Arsitektur Event-Driven Order Aggregator Berbasis PWA untuk Efisiensi Transaksi Komunitas UMKM F&B",
    year: 2026,
    type: "Applied Study",
    venue: "Studi Penerapan Rekayasa Sistem Web • Proyek Mandiri Terbimbing",
    tags: ["Next.js 14", "PWA", "Real-Time Queue", "Web Systems", "F&B Tech"],
    abstract: "Studi mengenai perancangan arsitektur pemesanan terpusat satu pintu yang menggabungkan katalog multi-brand F&B ke dalam satu Progressive Web App ringan. Menganalisis efisiensi alur antrean pesanan real-time berbasis localStorage buffer dan otomatisasi WhatsApp checkout API dengan throughput lebih dari 1.600 transaksi riil.",
    authors: ["Candra Putra Pratama"],
    paperUrl: "https://jasdor.cimagroup.my.id",
    githubUrl: "https://github.com/CandraPutraPratama/CimaV2",
    metrics: [
      { label: "Transaksi Riil", value: "1.600+ Orders" },
      { label: "Ukuran Bundle PWA", value: "< 120 KB" },
    ],
  },
  {
    id: "pub-budgex-approval-2025",
    title: "Perancangan Skema Relasional Berjenjang dan Kontrol Konkurensi pada Sistem Persetujuan Anggaran Perusahaan",
    year: 2025,
    type: "PBL Research",
    venue: "Project-Based Learning • Politeknik Elektronika Negeri Surabaya (PENS)",
    tags: ["ASP.NET Core", "PostgreSQL", "Relational Schema", "Concurrency Control", "Audit Logging"],
    abstract: "Penelitian dan implementasi alur persetujuan anggaran berjenjang (multi-level hierarchical approval) untuk OPEX & CAPEX. Membahas penanganan race condition saat pengajuan simultan terhadap batas plafon tahunan, validasi hak akses multi-role (Staff, Kadiv, Direktur Keuangan), serta jejak audit komprehensif pada database relasional PostgreSQL.",
    authors: ["Candra Putra Pratama", "Tim PBL PENS"],
    metrics: [
      { label: "Validasi Plafon", value: "Strict Limit Check" },
      { label: "Integritas Data", value: "ACID Compliant" },
    ],
  },
  {
    id: "pub-query-optimization-2025",
    title: "Analisis Komparatif Performa Indeks B-Tree dan Indeks Komposit pada Skema Finansial Bertingkat",
    year: 2025,
    type: "Technical Paper",
    venue: "Eksplorasi Basis Data Lanjut • Laboratorium Rekayasa Perangkat Lunak PENS",
    tags: ["PostgreSQL", "MySQL", "Query Optimization", "Database Indexing", "Execution Plan"],
    abstract: "Menganalisis dampak penambahan partial index dan covering index terhadap query berbobot agregasi tahunan. Pengujian dilakukan dengan EXPLAIN ANALYZE pada 50.000 simulasi data pengajuan anggaran, membuktikan reduksi latensi query hingga 32% dan penghematan buffer cache memori sebesar 28%.",
    authors: ["Candra Putra Pratama"],
    metrics: [
      { label: "Query Speedup", value: "32% Lebih Cepat" },
      { label: "Cache Saved", value: "28%" },
    ],
  },
];
