export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  relationship: string;
  avatarText: string;
  verified: boolean;
  linkedInUrl?: string;
  tags: string[];
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "ap1-mentor",
    quote: "Candra menunjukkan disiplin kerja dan inisiatif teknis yang luar biasa selama enam bulan magang di Stakeholder Relation Bandara Juanda. Mampu beradaptasi dengan cepat di lingkungan operasional bertekanan tinggi, termasuk partisipasi aktif dalam simulasi penanggulangan keadaan darurat PKD ke-108.",
    author: "Stakeholder Relation Section",
    role: "Pembimbing Industri / PIC Magang",
    organization: "PT Angkasa Pura I (Persero) Bandara Juanda",
    relationship: "Pembimbing Magang Industri (6 Bulan)",
    avatarText: "AP",
    verified: true,
    tags: ["Disiplin Kerja", "Nilai 87.86", "Adaptasi Cepat"],
  },
  {
    id: "pens-pbl-lead",
    quote: "Dalam pengembangan proyek PBL BudgeEx, Candra memegang peran krusial pada arsitektur backend dan basis data relasional. Pemahamannya tentang struktur schema SQL, constraint relational, dan logika persetujuan multi-level sangat matang untuk mahasiswa semester 5.",
    author: "Koordinator Tim PBL PENS",
    role: "D4 Teknik Informatika",
    organization: "Politeknik Elektronika Negeri Surabaya (PENS)",
    relationship: "Kolaborator Proyek PBL BudgeEx",
    avatarText: "PE",
    verified: true,
    tags: ["Backend Architecture", "PostgreSQL", "PBL Teamwork"],
  },
  {
    id: "cima-founder",
    quote: "Platform Jasdor Kopi Cima yang dibangun Candra sukses menangani lebih dari 1.600 pesanan nyata tanpa kendala fatal. Sistem antrean pesanan dan alur checkout WhatsApp yang ia rancang sangat mempermudah operasional harian kami.",
    author: "Cima Group Partner",
    role: "Operational Lead",
    organization: "Jasdor Kopi Cima",
    relationship: "Mitra Produk & Operasional",
    avatarText: "JC",
    verified: true,
    tags: ["1.600+ Pesanan", "Reliable PWA", "Production Delivery"],
  },
];

