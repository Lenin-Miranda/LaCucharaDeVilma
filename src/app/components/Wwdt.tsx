"use client";
import Image from "next/image";
import { FaUtensils, FaHeart, FaUsers } from "react-icons/fa";
import type { IconType } from "react-icons";

interface Value {
  Icon: IconType;
  title: string;
  body: string;
  bg: string;
  delay: string;
}

const values: Value[] = [
  {
    Icon: FaUtensils,
    title: "Tradición",
    body: "Mantenemos vivas las recetas ancestrales que han pasado de generación en generación, honrando a quienes nos enseñaron el verdadero sabor de Nicaragua.",
    bg: "bg-nica-blue",
    delay: "0",
  },
  {
    Icon: FaHeart,
    title: "Pasión",
    body: "Cada platillo es preparado con dedicación y cariño, porque sabemos que la comida es el lenguaje universal del amor y la familia.",
    bg: "bg-nica-gold",
    delay: "100",
  },
  {
    Icon: FaUsers,
    title: "Comunidad",
    body: "Creamos un espacio donde todos se sienten como en casa, conectando a nuestra comunidad a través del sabor auténtico de nuestra tierra.",
    bg: "bg-nica-blue-dark",
    delay: "200",
  },
];

const dishes = [
  { name: "Nacatamal", img: "/images/nacatamal.jpg" },
  { name: "Vigorón", img: "/images/vigoron.jpg" },
  { name: "Quesillo", img: "/images/quesillo.jpg" },
  { name: "Tres Leches", img: "/images/tres-leches.jpg" },
];

export default function Wwdt() {
  return (
    <section className="w-full py-20 md:py-28 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            data-aos="fade-up"
            className="text-nica-blue dark:text-nica-gold font-semibold text-xs uppercase tracking-[0.25em] mb-4"
          >
            Nuestros valores
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="60"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-nica-blue-dark dark:text-white leading-tight mb-5"
          >
            Por Qué Lo Hacemos
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Nuestra pasión va más allá de cocinar. Es preservar nuestra herencia y compartir el orgullo de ser nicaragüenses.
          </p>
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {values.map((v, i) => (
            <div
              key={v.title}
              data-aos="fade-up"
              data-aos-delay={v.delay}
              className={`${v.bg} rounded-2xl p-8 md:p-10 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 active:scale-[0.99]`}
            >
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/8 pointer-events-none" />
              <div className="absolute -bottom-14 -left-8 w-44 h-44 rounded-full bg-white/5 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon in a soft circle */}
                <div
                  className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-8 animate-float"
                  style={{ animationDelay: `${i * 0.6}s` }}
                >
                  <v.Icon size={30} className="text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{v.title}</h3>
                <p className="text-white/85 leading-relaxed text-sm md:text-base">{v.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Food bento grid */}
        <div>
          <p
            data-aos="fade-up"
            className="text-center text-nica-blue dark:text-nica-gold font-semibold text-xs uppercase tracking-[0.25em] mb-4"
          >
            Platillos típicos
          </p>
          <h3
            data-aos="fade-up"
            data-aos-delay="60"
            className="text-center text-3xl sm:text-4xl font-bold text-nica-blue-dark dark:text-white mb-10"
          >
            Sabores que Recordarás
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dishes.map((dish, i) => (
              <div
                key={dish.name}
                data-aos="zoom-in"
                data-aos-delay={`${i * 70}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg card-glow transition-transform duration-300 hover:-translate-y-1"
                style={{ aspectRatio: "1 / 1" }}
              >
                <Image
                  src={dish.img}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-nica-blue-dark/85 via-nica-blue-dark/20 to-transparent" />
                <div className="absolute inset-0 bg-nica-gold/0 group-hover:bg-nica-gold/10 transition-colors duration-500" />
                <p className="absolute bottom-0 left-0 right-0 text-center text-white font-semibold py-4 text-sm md:text-base">
                  {dish.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
