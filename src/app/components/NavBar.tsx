"use client";
import React, { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={
        scrolled
          ? "bg-white transition-all duration-500 shadow-lg dark:text-white dark:bg-neutral-950 flex justify-between w-full py-6 px-4 z-1000 fixed animate-fade-in"
          : "bg-transparent transition-all duration-500 flex justify-between w-full py-6 px-4 z-1000 fixed animate-fade-in"
      }
    >
      <h1 className="font-bold text-2xl transition-transform duration-300 hover:scale-105 hover:text-blue-600">
        La Cuhara De Vilma
      </h1>
      <ul className="flex items-center justify-center gap-6">
        <li className="cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-blue-500">
          Inicio
        </li>
        <li className="cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-blue-500">
          Contacto
        </li>
        <li className="cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-blue-500">
          Por Que Lo Hacemos
        </li>
        <li className="cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-blue-500">
          Opiniones
        </li>
        <li className="cursor-pointer">
          <button
            type="button"
            className="dark:bg-blue-500 bg-blue-400 text-white rounded-md cursor-pointer py-2 px-4 transition-transform duration-300 hover:scale-110 hover:bg-blue-600 shadow-md"
          >
            Contacto
          </button>
        </li>
      </ul>
    </nav>
  );
}
