"use client";

import React, { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUp, ArrowUpRight, FileDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header({ alwaysShowCoffee, alwaysShowBackToTop }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showCoffee, setShowCoffee] = useState(false);
  const [coffeeCount, setCoffeeCount] = useState(42);
  const [coffeePop, setCoffeePop] = useState(false);
  const [coffeeLoading, setCoffeeLoading] = useState(true);
  const navRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/coffee-count")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled && typeof data.count === "number") {
          setCoffeeCount(data.count);
        }
        setCoffeeLoading(false);
      })
      .catch(() => setCoffeeLoading(false));
    return () => {
      cancelled = true;
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCoffeeClick = async (e) => {
    e.preventDefault();
    setCoffeePop(true);
    const previousCount = coffeeCount;
    const optimisticCount = previousCount + 1;
    setCoffeeCount(optimisticCount);
    try {
      const res = await fetch("/api/coffee-count", { method: "POST" });
      const data = await res.json();
      if (typeof data.count === "number") {
        setCoffeeCount(data.count);
      } else {
        setCoffeeCount(previousCount);
      }
    } catch {
      setCoffeeCount(previousCount);
    }
  };

  useEffect(() => {
    if (!coffeePop) return;
    const id = setTimeout(() => setCoffeePop(false), 350);
    return () => clearTimeout(id);
  }, [coffeePop]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowBackToTop(alwaysShowBackToTop || window.scrollY > 350);
      setShowCoffee(alwaysShowCoffee || window.scrollY > window.innerHeight * 0.5);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [alwaysShowCoffee, alwaysShowBackToTop]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClickAway = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickAway);
    document.addEventListener("touchstart", handleClickAway);
    return () => {
      document.removeEventListener("mousedown", handleClickAway);
      document.removeEventListener("touchstart", handleClickAway);
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`nav-bar ${scrolled ? "scrolled" : ""} ${
          menuOpen ? "nav-bar--expanded" : ""
        }`}
      >
        <div className="nav-mobile-header">
          <a href="/" className="nav-left">
            <div className="nav-logo">C</div>
            <div className="nav-brand">Candra Putra</div>
          </a>
          <ThemeToggle
            className="md:hidden nav-theme-toggle"
            style={{ position: "relative", zIndex: 210 }}
          />
          <button
            className="md:hidden nav-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              position: "relative",
              zIndex: 210,
            }}
            aria-label="Toggle Navigation Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="nav-mobile-menu">
            <div className="nav-mobile-menu-inner">
              <a href="/#work" className="nav-link" onClick={() => setMenuOpen(false)}>
                Work
              </a>
              <a
                href="/#what-i-can-do"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                What I Can Do
              </a>
              <a
                href="/#about"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/#awards"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Awards
              </a>
              <a
                href="/#trainings"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link nav-link--resume"
                onClick={() => setMenuOpen(false)}
              >
                <FileDown size={14} style={{ display: "inline-block", marginRight: 6, verticalAlign: "middle" }} />
                <span>Resume (PDF)</span>
              </a>
              <a
                href="/#contact"
                className="nav-cta nav-cta--mobile"
                onClick={() => setMenuOpen(false)}
              >
                <span>Hubungi Saya</span>
                <ArrowUpRight size={14} className="nav-cta-icon" />
              </a>
            </div>
          </div>
        )}

        <div className="nav-center hidden md:flex">
          <a href="/#work" className="nav-link">
            Work
          </a>
          <a href="/#what-i-can-do" className="nav-link">
            What I Can Do
          </a>
          <a href="/#about" className="nav-link">
            About
          </a>
          <a href="/#awards" className="nav-link">
            Awards
          </a>
          <a href="/#trainings" className="nav-link">
            Experience
          </a>
        </div>

        <div className="nav-right">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn hidden md:inline-flex"
            title="Download CV / Resume (PDF)"
          >
            <FileDown size={13} className="nav-resume-icon" />
            <span>Resume</span>
          </a>
          <ThemeToggle
            className="nav-theme-toggle hidden md:inline-flex"
            style={{ marginRight: 10 }}
          />
          <a href="/#contact" className="nav-cta hidden md:inline-flex">
            <span>Hubungi Saya</span>
            <ArrowUpRight size={14} className="nav-cta-icon" />
          </a>
        </div>
      </nav>

      {showBackToTop && !menuOpen && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}
