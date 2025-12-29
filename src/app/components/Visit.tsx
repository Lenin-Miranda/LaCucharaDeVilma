import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function Visit() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 w-full h-screen px-6 py-10 bg-sky-100 dark:bg-neutral-900">
      <div
        data-aos="fade-right"
        className="relative w-full md:w-1/2 h-84 md:h-[80vh] rounded-2xl overflow-hidden shadow-2xl"
      >
        <Image
          src="/images/restaurante.jpg"
          alt="Restaurante La Cuchara de Vilma"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col gap-10 md:w-1/2 w-full  rounded-2xl p-12 shadow-lg justify-start h-full">
        <h2
          data-aos="fade-left"
          className="text-6xl font-bold mb-4 drop-shadow-lg bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30"
        >
          Visítanos
        </h2>
        <div data-aos="fade-right" className="flex items-center gap-4 text-2xl">
          <span
            data-aos="zoom-in"
            data-aos-delay="100"
            className="text-blue-600 dark:text-blue-400"
          >
            <FaMapMarkerAlt size={36} />
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
        <div data-aos="fade-left" className="flex items-center gap-4 text-2xl">
          <span
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-blue-600 dark:text-blue-400"
          >
            <FaPhoneAlt size={32} />
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
          className="flex items-center gap-4 text-2xl "
        >
          <span
            data-aos="zoom-in"
            data-aos-delay="300"
            className="text-blue-600 dark:text-blue-400"
          >
            <FaClock size={32} />
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
          className="mt-4 text-2xl text-blue-900/80 dark:text-neutral-300"
        >
          Ven a disfrutar de una experiencia gastronómica única. Te esperamos
          con los brazos abiertos y el mejor sabor nicaragüense.
        </p>
      </div>
    </section>
  );
}
