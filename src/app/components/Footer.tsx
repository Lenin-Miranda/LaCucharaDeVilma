import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const navLinks = [
  { label: "Inicio", to: "#hero" },
  { label: "Historia", to: "#about" },
  { label: "Por Qué Lo Hacemos", to: "#wwdt" },
  { label: "Opiniones", to: "#reviews" },
  { label: "Visítanos", to: "#visit" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-nica-blue dark:bg-nica-blue-dark text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* Column 1: Brand + contact */}
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">
                La Cuchara de Vilma
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Auténtica cocina nicaragüense en Las Vegas, preparada con amor y tradición familiar.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <a
                href="tel:7257720694"
                className="flex items-center gap-3 text-white/80 hover:text-nica-gold transition-colors duration-200 text-sm group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-nica-gold/20 flex items-center justify-center transition-colors duration-200">
                  <FaPhoneAlt size={13} />
                </span>
                725 772 0694
              </a>
              <div className="flex items-start gap-3 text-white/80 text-sm">
                <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <FaMapMarkerAlt size={13} />
                </span>
                6136 Windmill Island Ave, Las Vegas
              </div>
              <div className="flex items-center gap-3 text-white/80 text-sm">
                <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <FaClock size={13} />
                </span>
                Lun - Dom: 8:00am a 5:00pm
              </div>
            </div>
          </div>

          {/* Column 2: Nav links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-1">
              Páginas
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.to}
                    className="text-white/70 hover:text-nica-gold transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social + CTA */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                Síguenos
              </h4>
              <div className="flex gap-3">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-nica-gold flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <FaFacebookF size={16} />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-nica-gold flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <FaInstagram size={16} />
                </Link>
              </div>
            </div>

            <div className="bg-white/8 rounded-2xl p-5">
              <p className="text-white font-semibold text-sm mb-1">Haz tu pedido hoy</p>
              <p className="text-white/60 text-xs mb-4">Llámanos y con gusto te atendemos</p>
              <a
                href="tel:7257720694"
                className="btn-gold inline-flex items-center gap-2 text-white font-semibold text-sm px-5 py-2.5 rounded-xl"
              >
                <FaPhoneAlt size={12} />
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with flag stripe */}
      <div className="border-t border-white/10">
        {/* Nicaraguan flag stripe */}
        <div className="flex h-1">
          <div className="flex-1 bg-nica-blue-light" />
          <div className="flex-1 bg-white/30" />
          <div className="flex-1 bg-nica-blue-light" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/50 text-xs">
          <p>
            &copy; {new Date().getFullYear()} La Cuchara de Vilma. Todos los derechos reservados.
          </p>
          <p>
            Desarrollado con{" "}
            <span className="text-nica-gold">♥</span>
            {" "}por Lenin Miranda
          </p>
        </div>
      </div>
    </footer>
  );
}
