"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function Visit() {
  // Carousel logic
  const images = [
    "/images/fotoClientes.jpeg",
    "/images/fotoClientes2.jpeg",
    "/images/fotoClientes3.jpeg",
  ];
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startX = useRef<number | null>(null);
  const deltaX = useRef<number>(0);

  // Auto-slide every 2s
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  // Drag handlers
  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    if ("touches" in e) {
      startX.current = e.touches[0].clientX;
    } else {
      startX.current = e.clientX;
    }
  };
  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (startX.current !== null) {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      deltaX.current = clientX - startX.current;
    }
  };
  const handleDragEnd = () => {
    if (deltaX.current > 50) {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
    } else if (deltaX.current < -50) {
      setCurrent((prev) => (prev + 1) % images.length);
    }
    startX.current = null;
    deltaX.current = 0;
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 w-full min-h-screen px-2 sm:px-6 py-8 bg-sky-100 dark:bg-neutral-900 overflow-x-hidden">
      {/* Carousel */}
      <div
        data-aos="fade-right"
        className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-[5/5] min-h-[140px] sm:min-h-[180px] md:min-h-[220px] rounded-2xl overflow-hidden shadow-2xl select-none"
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleDragStart}
        onMouseMove={(e) => {
          if (startX.current !== null) handleDragMove(e);
        }}
        onMouseUp={handleDragEnd}
        onMouseLeave={() => {
          if (startX.current !== null) handleDragEnd();
        }}
        style={{ cursor: startX.current !== null ? "grabbing" : "grab" }}
      >
        {images.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt={`Foto ${idx + 1}`}
            fill
            className={`object-cover absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            draggable={false}
            priority={idx === 0}
          />
        ))}
        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 border border-white/80 ${
                idx === current ? "bg-blue-500 scale-110" : "bg-white/60"
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Ir a la foto ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 md:w-1/2 w-full rounded-2xl p-4 sm:p-8 md:p-12 shadow-lg justify-start h-full max-w-2xl mx-auto items-start text-left">
        <h2
          data-aos="fade-left"
          className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4 drop-shadow-lg bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30 max-w-full break-words text-left"
        >
          Visítanos
        </h2>
        <div
          data-aos="fade-right"
          className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 text-base xs:text-lg sm:text-xl md:text-2xl flex-wrap"
        >
          <span
            data-aos="zoom-in"
            data-aos-delay="100"
            className="text-blue-600 dark:text-blue-400"
          >
            <FaMapMarkerAlt size={24} />
          </span>
          <div className="flex flex-col">
            <span className="font-semibold drop-shadow-lg bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30">
              Dirección:
            </span>
            <span className="drop-shadow-lg bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30">
              6136 Windmill Island Ave
            </span>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 text-base xs:text-lg sm:text-xl md:text-2xl flex-wrap"
        >
          <span
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-blue-600 dark:text-blue-400"
          >
            <FaPhoneAlt size={22} />
          </span>
          <div className="flex flex-col">
            <span className="font-semibold drop-shadow-lg bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30">
              Teléfono:
            </span>
            <span className="drop-shadow-lg bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30">
              725 772 0694
            </span>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 text-base xs:text-lg sm:text-xl md:text-2xl flex-wrap"
        >
          <span
            data-aos="zoom-in"
            data-aos-delay="300"
            className="text-blue-600 dark:text-blue-400"
          >
            <FaClock size={22} />
          </span>
          <div className="flex flex-col">
            <span className="font-semibold drop-shadow-lg bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30">
              Horarios de atención:
            </span>
            <span className="drop-shadow-lg bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30">
              Lunes - Domingo: 8:00am a 5:00pm
            </span>
          </div>
        </div>
        <p
          data-aos="fade-left"
          className="mt-2 sm:mt-4 text-base xs:text-lg sm:text-xl md:text-2xl text-blue-900/80 dark:text-neutral-300 max-w-full break-words text-left"
        >
          Ven a disfrutar de una experiencia gastronómica única. Te esperamos
          con los brazos abiertos y el mejor sabor nicaragüense.
        </p>
      </div>
    </section>
  );
}
