"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-image.jpg"
        alt="Hero background"
        fill
        className="object-cover z-0 opacity-50 shadow-2xl object-center"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-white z-10 dark:from-white/60 via-white/40 via-black-40 dark:to-black/30" />

      <div className="relative z-20 text-center flex-col items-center justify-center px-4">
        <h1 className="text-8xl md:text-8xl font-bold mb-4 drop-shadow-lg bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30">
          La cuchara de vilma
        </h1>
        <p className="text-lg md:text-2xl font-medium drop-shadow w-full drop-shadow-lg bg-gradient-to-b from-black via-black/40  to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30">
          Descubre la tradición y el amor en cada platillo de nuestra tierra
        </p>
      </div>
    </section>
  );
}
