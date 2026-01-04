"use client";
import React, { useEffect, useState } from "react";

const navLinks = [
  { label: "Inicio", to: "#hero" },
  { label: "Por Qué Lo Hacemos", to: "#about" },
  { label: "Opiniones", to: "#reviews" },
  { label: "Visítanos", to: "#visit" },
  { label: "Contacto", to: "#footer" },
];
export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll suave a la sección
  const handleNavClick = (to: string) => {
    setMenuOpen(false);
    const el = document.querySelector(to);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={
        (scrolled
          ? "bg-white transition-all duration-500 shadow-lg dark:text-white dark:bg-neutral-950 "
          : "bg-transparent transition-all duration-500 ") +
        "flex justify-between items-center w-full py-4 px-4 z-50 fixed animate-fade-in"
      }
    >
      <h1
        className="font-bold text-2xl transition-transform duration-300 hover:scale-105 hover:text-blue-600 cursor-pointer text-neutral-900 dark:text-white"
        onClick={() => handleNavClick("#hero")}
      >
        La Cuchara De Vilma
      </h1>
      {/* Desktop nav */}
      <ul className="hidden md:flex items-center justify-center gap-6">
        {navLinks.map((link) => (
          <li
            key={link.label}
            className="cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-blue-500 text-neutral-700 dark:text-neutral-200 font-medium"
            onClick={() => handleNavClick(link.to)}
          >
            {link.label}
          </li>
        ))}
      </ul>
      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        aria-label="Abrir menú"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span
          className={`block w-7 h-1 bg-blue-600 rounded transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-1 bg-blue-600 rounded my-1 transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-1 bg-blue-600 rounded transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      {/* Mobile menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white dark:bg-neutral-950 shadow-lg flex flex-col items-center gap-6 py-8 animate-fade-in md:hidden">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="cursor-pointer text-xl font-semibold transition-transform duration-300 hover:scale-110 hover:text-blue-500 text-neutral-800 dark:text-neutral-200"
              onClick={() => handleNavClick(link.to)}
            >
              {link.label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
