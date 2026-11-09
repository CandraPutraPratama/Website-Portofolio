export interface MetricItem {
  id: string;
  value: string;
  suffix?: string;
  label: string;
  sublabel: string;
  description: string;
  tag: string;
  trend?: string;
}

export const METRICS_DATA: MetricItem[] = [
  {
    id: "systems-built",
    value: "5+",
    label: "Production Web Systems",
    sublabel: "Enterprise & High-Availability PWA",
    description: "Merancang dan mendeploy 5+ sistem web berbasis relasional terstruktur dengan performa teruji.",
    tag: "Software Engineering",
    trend: "+2 Proyek Berjalan",
  },
  {
    id: "gpa-score",
    value: "3.76",
    suffix: "/ 4.00",
    label: "IPK Kumulatif PENS",
    sublabel: "D4 Teknik Informatika (Semester 5)",
    description: "Konsistensi capaian akademik tinggi dengan fokus pada arsitektur sistem dan rekayasa perangkat lunak.",
    tag: "Academic Excellence",
    trend: "Dean's List",
  },
  {
    id: "orders-processed",
    value: "1.600+",
    label: "Pesanan F&B Terproses",
    sublabel: "Platform Live Jasdor Kopi Cima",
    description: "PWA aggregator multi-brand aktif dengan integrasi pemesanan WhatsApp otomatis dan antrean pesanan real-time.",
    tag: "High Traffic PWA",
    trend: "Live Production",
  },
  {
    id: "query-latency",
    value: "30%",
    label: "Reduksi Latensi Query",
    sublabel: "Optimasi Skema & Indeks Relasional",
    description: "Perancangan indeks komposit, normalisasi 3NF, dan eliminasi N+1 query pada PostgreSQL & MySQL.",
    tag: "Database Performance",
    trend: "Benchmark Verified",
  },
  {
    id: "internship-duration",
    value: "6",
    suffix: "Bulan",
    label: "Pengalaman Industri Nyata",
    sublabel: "PT Angkasa Pura I Bandara Juanda",
    description: "Magang di Stakeholder Relation Section dengan nilai akhir 87,86 dan penghargaan operasional simulasi PKD ke-108.",
    tag: "Industry Certified",
    trend: "Nilai 87.86",
  },
  {
    id: "system-uptime",
    value: "99.8%",
    label: "Keandalan Sistem PWA",
    sublabel: "Vercel Edge & Cloudflare DNS",
    description: "SLA ketersediaan platform mandiri dengan pemantauan otomatis, caching aset statis, dan fallback offline.",
    tag: "Infrastructure",
    trend: "Zero Major Outage",
  },
];

