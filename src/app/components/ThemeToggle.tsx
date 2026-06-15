"use client";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
      className="relative w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-nica-gold/60"
    >
      <span
        className={`absolute transition-all duration-300 ${
          dark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75"
        }`}
      >
        <FaSun size={16} className="text-nica-gold" />
      </span>
      <span
        className={`absolute transition-all duration-300 ${
          dark ? "opacity-0 -rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
        }`}
      >
        <FaMoon size={16} className="text-white/90" />
      </span>
    </button>
  );
}
