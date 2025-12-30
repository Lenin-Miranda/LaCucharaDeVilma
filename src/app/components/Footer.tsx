import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full  bg-sky-900 dark:bg-neutral-950 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Columna 1: Info restaurante */}
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h3 className="text-2xl font-bold tracking-wide mb-1">
            La Cuchara de Vilma
          </h3>
          <div className="flex items-center gap-2 text-lg">
            <span className="text-sky-300">
              <FaMapMarkerAlt size={20} />
            </span>
            <span>6136 Windmill Island Ave</span>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <span className="text-sky-300">
              <FaPhoneAlt size={20} />
            </span>
            <span>725 772 0694</span>
          </div>
        </div>
        {/* Columna 2: Redes sociales */}
        <div className="flex flex-col gap-3 items-center">
          <span className="text-lg font-semibold">Síguenos</span>
          <div className="flex gap-6 mt-1">
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <span className="text-2xl text-white hover:text-sky-400 transition-colors duration-200">
                <FaFacebookF size={28} />
              </span>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <span className="text-2xl text-white hover:text-pink-400 transition-colors duration-200">
                <FaInstagram size={28} />
              </span>
            </Link>
          </div>
        </div>
        {/* Columna 3: Derechos */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right text-sm text-sky-200 dark:text-neutral-400 gap-1 md:gap-2 mt-6 md:mt-0">
          <p>
            &copy; {new Date().getFullYear()} La Cuchara de Vilma. Todos los
            derechos reservados.
          </p>
          <p>
            Desarrollado con <span className="text-pink-400">♥</span> por tu
            equipo.
          </p>
        </div>
      </div>
    </footer>
  );
}
