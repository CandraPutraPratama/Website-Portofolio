import Header from "../../components/Header";
import WorksGallery from "../../components/WorksGallery";
import { PROJECTS } from "../../data/projects";

export const metadata = {
  title: "Works & Projects : Candra Putra Pratama",
  description:
    "Koleksi proyek rekayasa perangkat lunak, sistem produksi nyata, dan arsitektur backend Candra Putra Pratama.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Header alwaysShowBackToTop={true} />
      <WorksGallery projects={PROJECTS} />
    </main>
  );
}
