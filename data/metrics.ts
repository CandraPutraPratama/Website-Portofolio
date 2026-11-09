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
    description: "Pesanan pelanggan terproses langsung pada PWA aggregator multi-brand aktif dengan antrean real-time dan checkout WhatsApp.",
    tag: "High Traffic PWA",
    methodology: "Data transaksi pesanan F&B terproses di platform live Jasdor",
  },
  {
    id: "gpa-score",
    value: "3.76",
    suffix: "/ 4.00",
    label: "IPK Kumulatif PENS",
    sublabel: "D4 Teknik Informatika (Semester 5)",
    description: "Capaian akademik tinggi dengan predikat Dean's Honor, berfokus pada rekayasa perangkat lunak dan arsitektur sistem.",
    tag: "Academic Excellence",
    methodology: "Transkrip akademik resmi PENS D4 Teknik Informatika semester 5",
  },
  {
    id: "query-latency",
    value: "30%",
    label: "Reduksi Latensi Query",
    sublabel: "Optimasi Skema & Indeks Relasional",
    description: "Peningkatan efisiensi query lewat indeks komposit, normalisasi 3NF, dan eliminasi query berulang.",
    tag: "Database Performance",
    methodology: "Hasil pengujian benchmark indeks skema relasional PostgreSQL & MySQL",
  },
  {
    id: "system-uptime",
    value: "99,8%",
    label: "Keandalan Sistem (Uptime)",
    sublabel: "Infrastruktur Live PWA & Cloud Edge",
    description: "Tingkat ketersediaan layanan live platform mandiri dengan pemantauan otomatis dan arsitektur edge terdistribusi.",
    tag: "System Reliability",
    methodology: "Monitoring ketersediaan 99,8% uptime platform mandiri & Vercel edge",
  },
  {
    id: "systems-built",
    value: "5+",
    label: "Sistem Web Produksi",
    sublabel: "Enterprise & Relational Databases",
    description: "Merancang dan membangun 5+ sistem web bisnis berbasis basis data relasional terstruktur dengan performa teruji.",
    tag: "Software Engineering",
    methodology: "Koleksi implementasi sistem web operasional, PWA, dan backend API",
  },
];
