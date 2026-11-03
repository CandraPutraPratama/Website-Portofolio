import Header from "../components/Header";
import Hero from "../components/Hero";
import WhatICanDo from "../components/WhatICanDo";
import About from "../components/About";
import Experience from "../components/Experience";
import FeaturedProjects from "../components/FeaturedProjects";
import Contact from "../components/Contact";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center w-full min-h-screen bg-bg text-text selection:bg-text selection:text-bg">
      {/* Sticky Header with ThemeToggle */}
      <Header />

      {/* Sections */}
      <Hero />
      <WhatICanDo />
      <About />
      <Experience />
      <FeaturedProjects />
      <Contact />

      {/* Footer */}
      <footer className="w-full py-12 px-5 border-t border-line mt-12 bg-surface/50">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted">
          <div>
            &copy; {new Date().getFullYear()} Candra Putra Pratama &bull; D4 Teknik
            Informatika PENS.
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/work"
              className="hover:text-text transition-colors"
            >
              Technical Archive
            </Link>

            <a
              href="#hero"
              className="inline-flex items-center gap-1.5 hover:text-text transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
