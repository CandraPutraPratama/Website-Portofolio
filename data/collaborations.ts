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
    role: "Politeknik Negeri",
    category: "Institution",
    description: "Politeknik Elektronika Negeri Surabaya • D4 Teknik Informatika",
    badge: "Almamater Kampus",
  },
  {
    id: "angkasa-pura",
    name: "PT Angkasa Pura I",
    role: "Bandara Internasional Juanda",
    category: "Industry Partner",
    description: "Praktik Kerja Lapangan • Stakeholder Relation Section",
    badge: "PKL 2023",
  },
  {
    id: "cima-group",
    name: "Jasdor Kopi Cima",
    role: "F&B Order Aggregator Platform",
    category: "Product Ecosystem",
    description: "Ekosistem pemesanan hemat mahasiswa dan komunitas",
    badge: "Platform Mandiri",
  },
  {
    id: "himit",
    name: "HIMIT PENS",
    role: "Himpunan Mahasiswa Informatika",
    category: "Student Organization",
    description: "Komunitas pengembang mahasiswa dan kegiatan kolaboratif IT",
    badge: "Organisasi Mahasiswa",
  },
];
