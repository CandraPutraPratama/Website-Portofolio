"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Proof from "@/components/Proof";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-ground text-ink">
        <Navbar />
        <main>
          <Hero />
          <Proof />
          <About />
          <Projects />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
