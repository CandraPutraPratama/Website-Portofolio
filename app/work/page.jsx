import Header from "../../components/Header";
import WorksGallery from "../../components/WorksGallery";
import Publications from "../../components/Publications";
import MilestonesGallery from "../../components/MilestonesGallery";
import Footer from "../../components/Footer";
import { PROJECTS } from "../../data/projects";

export const metadata = {
  title: "Works & Technical Archive : Candra Putra Pratama",
  description:
    "Arsip proyek rekayasa perangkat lunak, sistem produksi nyata, arsitektur backend, dan publikasi riset Candra Putra Pratama.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Header alwaysShowBackToTop={true} />
      <WorksGallery projects={PROJECTS} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Publications />
        <MilestonesGallery />
      </div>
      <Footer />
    </main>
  );
}
