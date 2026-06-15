"use client";
import Image from "next/image";
import { useState, useRef, useEffect, useMemo } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Visit() {
  const images = useMemo(
    () => [
      "/images/fotoClientes.jpeg",
      "/images/fotoClientes2.jpeg",
      "/images/fotoClientes3.jpeg",
    ],
    []
  );

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startX = useRef<number | null>(null);
  const deltaX = useRef<number>(0);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => setCurrent((p) => (p + 1) % images.length), 4000);
    return () => clearInterval(id);
  }, [isPaused, images.length]);

  const scheduleResume = (delay = 6000) => {
    if (resumeRef.current) clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => setIsPaused(false), delay);
  };

  const prev = () => { setIsPaused(true); setCurrent((p) => (p - 1 + images.length) % images.length); scheduleResume(); };
  const next = () => { setIsPaused(true); setCurrent((p) => (p + 1) % images.length); scheduleResume(); };
  const goTo = (i: number) => { setIsPaused(true); setCurrent(i); scheduleResume(); };

  const onDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsPaused(true);
    startX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };
  const onDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (startX.current !== null)
      deltaX.current = ("touches" in e ? e.touches[0].clientX : e.clientX) - startX.current;
  };
  const onDragEnd = () => {
    if (deltaX.current > 50) prev();
    else if (deltaX.current < -50) next();
    startX.current = null;
    deltaX.current = 0;
    scheduleResume();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  useEffect(() => () => { if (resumeRef.current) clearTimeout(resumeRef.current); }, []);

  const infoItems = [
    {
      icon: <FaMapMarkerAlt size={20} />,
      label: "Direccion",
      value: "6136 Windmill Island Ave, Las Vegas",
    },
    {
      icon: <FaPhoneAlt size={18} />,
      label: "Telefono",
      value: "725 772 0694",
    },
    {
      icon: <FaClock size={18} />,
      label: "Horarios",
      value: "Lunes - Domingo: 8:00am a 5:00pm",
    },
  ];

  return (
    <section className="w-full py-20 md:py-28 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Section header */}
        <div className="text-center mb-14">
          <p
            data-aos="fade-up"
            className="text-nica-blue dark:text-nica-gold font-semibold text-xs uppercase tracking-[0.25em] mb-4"
          >
            Ubicacion
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="60"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-nica-blue-dark dark:text-white leading-tight"
          >
            Visitanos
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Carousel */}
          <div
            data-aos="fade-right"
            className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl select-none relative"
            style={{ aspectRatio: "4/3" }}
            onTouchStart={onDragStart}
            onTouchMove={onDragMove}
            onTouchEnd={onDragEnd}
            onMouseDown={onDragStart}
            onMouseMove={(e) => { if (startX.current !== null) onDragMove(e); }}
            onMouseUp={onDragEnd}
            onMouseLeave={() => { if (startX.current !== null) onDragEnd(); }}
          >
            {images.map((src, idx) => (
              <Image
                key={src}
                src={src}
                alt={`Foto de clientes ${idx + 1}`}
                fill
                className={`object-cover absolute inset-0 transition-all duration-700 ease-in-out ${
                  idx === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
                }`}
                draggable={false}
                priority={idx === 0}
              />
            ))}

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-nica-blue-dark/40 to-transparent z-10 pointer-events-none" />

            {/* Prev / Next */}
            <button
              onClick={prev}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 dark:bg-nica-blue-dark/90 shadow-lg flex items-center justify-center text-nica-blue dark:text-white hover:bg-white dark:hover:bg-nica-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-nica-gold active:scale-95"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 dark:bg-nica-blue-dark/90 shadow-lg flex items-center justify-center text-nica-blue dark:text-white hover:bg-white dark:hover:bg-nica-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-nica-gold active:scale-95"
            >
              <FaChevronRight size={14} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((src, idx) => (
                <button
                  key={src}
                  onClick={() => goTo(idx)}
                  aria-label={`Ir a foto ${idx + 1}`}
                  className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-nica-gold ${
                    idx === current
                      ? "w-6 h-2.5 bg-nica-gold"
                      : "w-2.5 h-2.5 bg-white/60 hover:bg-white/90"
                  }`}
                />
              ))}
            </div>

            <div className="sr-only" aria-live="polite">
              Foto {current + 1} de {images.length}
            </div>
          </div>

          {/* Info */}
          <div
            data-aos="fade-left"
            className="w-full lg:w-1/2 flex flex-col gap-8"
          >
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
              Ven a disfrutar de una experiencia gastronomica unica. Te esperamos con los brazos abiertos y el mejor sabor Nicaraguense.
            </p>

            <div className="flex flex-col gap-6">
              {infoItems.map((item, i) => (
                <div
                  key={item.label}
                  data-aos="fade-left"
                  data-aos-delay={`${i * 80}`}
                  className="flex items-start gap-5 p-5 rounded-2xl bg-nica-blue-soft dark:bg-nica-blue-dark/50 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-nica-blue dark:bg-nica-blue-light flex items-center justify-center shrink-0 shadow-md text-white">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-nica-gold uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    <p className="text-nica-blue-dark dark:text-white font-medium text-base">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#footer")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-gold self-start text-white font-semibold px-8 py-4 rounded-xl shadow-lg"
            >
              Contactanos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
