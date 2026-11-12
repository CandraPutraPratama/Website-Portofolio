export interface MetricItem {
  id: string;
  value: string;
  suffix?: string;
  label: string;
  sublabel: string;
  description: string;
  tag: string;
  methodology: string;
  trend?: string;
}

export const METRICS_DATA: MetricItem[] = [
  {
    id: "orders-processed",
    value: "1.600+",
    label: "Pesanan F&B Terproses",
    sublabel: "Platform Live Jasdor Kopi Cima",
    description: "Pesanan pelanggan yang masuk lewat aplikasi pemesanan Jasdor dengan checkout WhatsApp.",
    tag: "Proyek Mandiri",
    methodology: "Data transaksi platform live Jasdor Kopi Cima",
  },
  {
    id: "gpa-score",
    value: "3.76",
    suffix: "/ 4.00",
    label: "IPK Kumulatif PENS",
    sublabel: "D4 Teknik Informatika (Semester 5)",
    description: "IPK kumulatif D4 Teknik Informatika PENS dengan fokus pada pengembangan web dan basis data.",
    tag: "Akademik",
    methodology: "Transkrip akademik resmi D4 TI PENS semester 5",
  },
  {
    id: "systems-built",
    value: "7",
    label: "Proyek Web Berbasis Database",
    sublabel: "Proyek mandiri, tugas kuliah, dan tim PBL",
    description: "Aplikasi web dengan PostgreSQL: pemesanan, persetujuan anggaran, kepegawaian, inventaris, kasir, keuangan, dan reservasi ruangan.",
    tag: "Proyek",
    methodology: "Daftar proyek di halaman Arsip dan GitHub",
  },
];
