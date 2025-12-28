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
          ? "bg-white transition-colors duration-300 dark:text-white dark:bg-black flex justify-between fixed"
          : "bg-transparent transition-colors duration-300 flex justify-between w-full py-6 px-4 fixed"
      }
    >
      <h1 className="font-bold text-2xl">La Cuhara De Vilma</h1>
      <ul className="flex items-center justify-center gap-6">
        <li className="cursor-pointer">Inicio</li>
        <li className="cursor-pointer">Contacto</li>
        <li className="cursor-pointer">Por Que Lo Hacemos</li>
        <li className="cursor-pointer">Opiniones</li>
        <li className="cursor-pointer">
          <button
            type="button"
            className="dark:bg-blue-500 rounded-md cursor-pointer py-2 px-4"
          >
            Contacto
          </button>
        </li>
      </ul>
    </nav>
  );
}
