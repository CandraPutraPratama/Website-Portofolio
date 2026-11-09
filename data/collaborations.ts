export interface CollaborationItem {
  id: string;
  name: string;
  role: string;
  category: "Institution" | "Industry Partner" | "Student Organization" | "Product Ecosystem";
  description: string;
  badge: string;
}

export const COLLABORATIONS_DATA: CollaborationItem[] = [
  {
    id: "pens",
    name: "PENS Surabaya",
    role: "Pendidikan Tinggi Vokasi IT No. 1",
    category: "Institution",
    description: "Politeknik Elektronika Negeri Surabaya • D4 Teknik Informatika",
    badge: "Almamater / IPK 3.76",
  },
  {
    id: "angkasa-pura",
    name: "PT Angkasa Pura I",
    role: "Bandara Internasional Juanda",
    category: "Industry Partner",
    description: "Praktik Kerja Lapangan 6 Bulan • Stakeholder Relation Section",
    badge: "Magang Industri 6 Bulan",
  },
  {
    id: "cima-group",
    name: "Jasdor Kopi Cima",
    role: "F&B Order Aggregator Platform",
    category: "Product Ecosystem",
    description: "Ekosistem pemesanan hemat mahasiswa • 1.600+ Pesanan Sukses",
    badge: "1.600+ Transaksi Riil",
  },
  {
    id: "himit",
    name: "HIMIT PENS",
    role: "Himpunan Mahasiswa Informatika",
    category: "Student Organization",
    description: "Komunitas pengembang mahasiswa dan kegiatan kolaboratif IT",
    badge: "Komunitas Developer",
  },
  {
    id: "pbl-lab",
    name: "PBL Enterprise Lab",
    role: "Project-Based Learning PENS",
    category: "Institution",
    description: "Pengembangan sistem korporat BudgeEx Budgeting System",
    badge: "Arsitektur Enterprise",
  },
];

