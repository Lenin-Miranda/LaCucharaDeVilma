"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden py-8 px-4">
      <Image
        src="/images/hero-image.jpeg"
        alt="Fondo con comida tradicional"
        fill
        className="object-cover z-0 opacity-60 object-bottom"
        priority
        aria-hidden="true"
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/10 to-white/50 dark:from-black/40 dark:via-black/30 dark:to-black/60" />

      <div className="relative z-20 text-center flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4">
        <div className="bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-lg border border-white/30 dark:border-black/30">
          <h1
            data-aos="fade-up"
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 text-neutral-900 dark:text-neutral-50 leading-tight"
            role="heading"
            aria-level={1}
          >
            La cuchara de Vilma
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="120"
            className="text-sm xs:text-base sm:text-lg md:text-xl text-neutral-700 dark:text-neutral-200 mb-6 max-w-3xl mx-auto"
          >
            Descubre la tradición y el amor en cada platillo. Sabores auténticos
            preparados con ingredientes frescos y recetas de familia.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
            <a
              href="#visit"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-md px-5 py-3 transition-shadow shadow-md focus:outline-none focus:ring-2 focus:ring-amber-300"
              aria-label="Ponte en contacto"
            >
              Ponte en contacto
              <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="mt-6 text-neutral-700 dark:text-neutral-300 text-sm opacity-90 flex flex-col items-center">
          <span className="mb-2">Abierto hoy · 8:00am — 5:00pm</span>
          <a href="#visit" className="animate-bounce text-amber-500">
            ↓
          </a>
        </div>
      </div>
    </section>
  );
}
