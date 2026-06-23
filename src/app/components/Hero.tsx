"use client";
import Image from "next/image";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-dvh flex items-center overflow-hidden">
      {/* Background image with CSS parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-image.jpeg"
          alt="Comida tradicional nicaragüense"
          fill
          className="object-cover object-bottom hero-parallax"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-linear-to-r from-nica-blue-dark/95 via-nica-blue/75 to-nica-blue/20 z-10" />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="animate-fade-in text-nica-gold font-semibold text-xs uppercase tracking-[0.25em] mb-5">
            Auténtica cocina nicaragüense en Las Vegas
          </p>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] mb-6">
            La Cuchara<br />
            <span className="text-nica-gold">de Vilma</span>
          </h1>

          {/* Body */}
          <p className="animate-fade-in-up delay-200 text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            Tradición y amor en cada platillo. Sabores auténticos preparados con ingredientes frescos y recetas de familia que honran nuestras raíces.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-start gap-4">
            <button
              onClick={() => scrollTo("#visit")}
              className="btn-gold inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-xl shadow-lg"
            >
              Ordenar ahora
            </button>
            <button
              onClick={() => scrollTo("#about")}
              className="inline-flex items-center gap-3 text-white border border-white/30 hover:border-white/70 hover:bg-white/8 font-semibold px-8 py-4 rounded-xl transition-all duration-300 active:scale-95 backdrop-blur-sm"
            >
              Nuestra historia
            </button>
          </div>

          {/* Open status */}
          <div className="animate-fade-in delay-500 mt-12 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <span className="text-white/65 text-sm">
              Abierto hoy - Lunes a Domingo: 8:00am a 5:00pm
            </span>
          </div>
        </div>
      </div>

      {/* Nicaraguan flag stripe at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex h-1.5">
        <div className="flag-stripe flex-1 bg-nica-blue" />
        <div className="flag-stripe flex-1 bg-white delay-100" />
        <div className="flag-stripe flex-1 bg-nica-blue delay-200" />
      </div>
    </section>
  );
}
