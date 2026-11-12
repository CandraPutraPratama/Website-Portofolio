import Header from "../../components/Header";
import WorksGallery from "../../components/WorksGallery";
import MilestonesGallery from "../../components/MilestonesGallery";
import Footer from "../../components/Footer";
import { PROJECTS } from "../../data/projects";

export const metadata = {
  title: "Arsip Proyek : Candra Putra Pratama",
  description:
    "Arsip proyek web dan basis data Candra Putra Pratama: proyek mandiri, tugas kuliah, dan proyek tim PBL PENS.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Header alwaysShowBackToTop={true} />
      <WorksGallery projects={PROJECTS} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <MilestonesGallery />
      </div>
      <Footer />
    </main>
  );
}
