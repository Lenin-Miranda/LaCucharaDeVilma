"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden py-8 px-2 sm:px-4">
      <Image
        src="/images/hero-image.jpeg"
        alt="Hero background"
        fill
        className="object-cover z-0 opacity-50 shadow-2xl object-bottom"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-white z-10 dark:from-white/60 via-white/40 via-black-40 dark:to-black/30" />

      <div className="relative z-20 text-center flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-2 sm:px-4">
        <h1
          data-aos="fade-left"
          className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-bold mb-4 drop-shadow-lg bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30 max-w-full break-words"
        >
          La cuchara de vilma
        </h1>
        <p
          data-aos="fade-right"
          className="text-base xs:text-lg sm:text-xl md:text-2xl font-medium drop-shadow w-full drop-shadow-lg bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30 max-w-full break-words"
        >
          Descubre la tradición y el amor en cada platillo de nuestra tierra
        </p>
      </div>
    </section>
  );
}
