"use client";
import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Inicio", to: "#hero" },
  { label: "Historia", to: "#about" },
  { label: "Por Que", to: "#wwdt" },
  { label: "Opiniones", to: "#reviews" },
  { label: "Visítanos", to: "#visit" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (to: string) => {
    setMenuOpen(false);
    document.querySelector(to)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-nica-blue dark:bg-nica-blue-dark shadow-2xl shadow-nica-blue/30"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => scrollTo("#hero")}
          className="font-bold text-lg md:text-xl text-white tracking-tight transition-all duration-300 hover:text-nica-gold focus:outline-none"
        >
          La Cuchara de Vilma
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => scrollTo(link.to)}
                className="nav-link-underline text-white/90 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200 focus:outline-none pb-1"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
          <li>
            <button
              onClick={() => scrollTo("#visit")}
              className="btn-gold text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-md"
            >
              Ordenar
            </button>
          </li>
        </ul>

        {/* Mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((v) => !v)}
            className="relative w-10 h-10 flex flex-col justify-center items-center gap-1.25 focus:outline-none"
          >
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-1.75" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0 w-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-1.75" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-nica-blue dark:bg-nica-blue-dark`}
      >
        <ul className="flex flex-col py-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => scrollTo(link.to)}
                className="w-full text-left px-8 py-4 text-white font-medium hover:bg-white/10 transition-colors duration-200 focus:outline-none"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="px-6 pt-2 pb-4">
            <button
              onClick={() => scrollTo("#visit")}
              className="w-full btn-gold text-white font-semibold py-3 rounded-xl"
            >
              Ordenar ahora
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
