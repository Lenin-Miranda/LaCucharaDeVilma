"use client";
import Image from "next/image";

const photos = [
  { src: "/images/enchiladas.jpeg", alt: "Enchiladas Nicaraguenses" },
  { src: "/images/carnes.jpeg", alt: "Carnes asadas" },
  { src: "/images/pescado.jpeg", alt: "Pescado fresco" },
  { src: "/images/queso.jpeg", alt: "Queso frito" },
];

export default function About() {
  return (
    <section className="w-full py-20 md:py-28 bg-nica-blue-soft dark:bg-nica-blue-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

        {/* Left: Text */}
        <div className="flex-1 max-w-xl w-full">
          <p
            data-aos="fade-up"
            className="text-nica-blue dark:text-nica-gold font-semibold text-xs uppercase tracking-[0.25em] mb-4"
          >
            Quienes somos
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="60"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-nica-blue-dark dark:text-white leading-tight mb-6"
          >
            Nuestra<br />
            <span className="text-nica-blue dark:text-nica-gold">Historia</span>
          </h2>

          {/* Accent rule */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="w-14 h-1 bg-nica-gold rounded-full mb-8"
          />

          <p
            data-aos="fade-up"
            data-aos-delay="120"
            className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-5"
          >
            Somos un restaurante en casa dedicado a traer el autentico sabor de Nicaragua a Las Vegas. Nuestra mision es honrar y recordar nuestra patria a traves del sazon inconfundible de la comida nica, preparada con el mismo carino y dedicacion de nuestras abuelas.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="160"
            className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-10"
          >
            Con mas de 3 anos compartiendo nuestra mesa en Las Vegas y mas de 8 anos de experiencia en la cocina, cada platillo es una celebracion de nuestras raices. Somos mas que un restaurante: somos una familia.
          </p>

          {/* Stats */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-nica-blue dark:bg-nica-blue/50 rounded-2xl p-5 text-center shadow-lg shadow-nica-blue/20">
              <p className="text-4xl font-bold text-white mb-1">8+</p>
              <p className="text-xs text-white/75 uppercase tracking-wide">Anos de experiencia</p>
            </div>
            <div className="bg-nica-gold dark:bg-nica-gold/40 rounded-2xl p-5 text-center shadow-lg shadow-nica-gold/20">
              <p className="text-4xl font-bold text-white mb-1">3+</p>
              <p className="text-xs text-white/80 uppercase tracking-wide">Anos en Las Vegas</p>
            </div>
          </div>
        </div>

        {/* Right: Image grid with stagger and hover effect */}
        <div className="flex-1 w-full max-w-lg">
          <div className="grid grid-cols-2 gap-4">
            {photos.map((photo, i) => (
              <div
                key={photo.src}
                data-aos="zoom-in"
                data-aos-delay={`${i * 80}`}
                className={`relative overflow-hidden rounded-2xl shadow-xl group card-glow transition-transform duration-300 hover:-translate-y-1 ${
                  i % 2 === 0 ? "mt-6" : "mt-0"
                }`}
                style={{ aspectRatio: "4/5" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Hover label */}
                <div className="absolute inset-0 bg-linear-to-t from-nica-blue-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <p className="absolute bottom-0 left-0 right-0 text-center text-white text-sm font-medium py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
                  {photo.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
