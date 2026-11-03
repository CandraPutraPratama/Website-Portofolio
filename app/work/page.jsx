import Header from "../../components/Header";
import TechnicalArchive from "../../components/TechnicalArchive";
import { PROJECTS } from "../../data/projects";

export const metadata = {
  title: "Technical Archive — Candra Putra",
  description:
    "Arsip teknis seluruh proyek perangkat lunak dan sistem web Candra Putra Pratama (2024–2026).",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Header />
      <TechnicalArchive projects={PROJECTS} />
    </main>
  );
}
