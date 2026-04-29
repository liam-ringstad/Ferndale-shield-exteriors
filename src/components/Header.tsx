"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#areas", label: "Areas" },
  { href: "#pricing", label: "Pricing" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy-900/95 backdrop-blur-xl shadow-2xl shadow-navy-950/30 py-2"
            : "bg-transparent py-4"
        }`}
        role="banner"
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" role="navigation" aria-label="Main navigation">
            <a
              href="#"
              className="flex items-center gap-3 group"
              aria-label="Ferndale Shield Exteriors - Home"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >
              <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-105">
                <Image src="/logo.png" alt="Ferndale Shield Exteriors logo" fill className="object-contain" priority />
              </div>
              <div className="hidden sm:block">
                <p className="font-display font-bold text-white text-lg leading-tight tracking-tight">Ferndale Shield</p>
                <p className="text-forest-400 text-xs font-semibold uppercase tracking-widest">Exteriors</p>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200">
                  {link.label}
                </button>
              ))}
              <button onClick={() => handleNavClick("#contact")}
                className="ml-4 px-6 py-2.5 bg-forest-600 hover:bg-forest-500 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-forest-600/25 hover:shadow-xl hover:-translate-y-0.5">
                Get Free Quote
              </button>
            </div>

            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
                <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-navy-900 shadow-2xl border-l border-white/10 flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image src="/logo.png" alt="Ferndale Shield Exteriors" fill className="object-contain" />
                  </div>
                  <span className="font-display font-bold text-white">Menu</span>
                </div>
                <button onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors" aria-label="Close menu">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex-1 py-6 px-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.button key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }} onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 font-medium text-base">
                    {link.label}
                  </motion.button>
                ))}
              </nav>
              <div className="p-6 border-t border-white/10">
                <button onClick={() => handleNavClick("#contact")}
                  className="w-full py-3.5 bg-forest-600 hover:bg-forest-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-forest-600/25">
                  Get Free Quote
                </button>
                <a href="tel:+13603836184"
                  className="flex items-center justify-center gap-2 mt-3 py-3 text-white/70 hover:text-white transition-colors text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (360) 383-6184
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
