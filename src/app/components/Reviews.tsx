"use client";

const reviews = [
  {
    initials: "LA",
    name: "Lesther Alarcon",
    role: "Cliente",
    text: "Si de comer rico se trata la comida nica es única y en Las Vegas la disfrutamos con la Cuchara de Vilma, sabor y calidad en cada bocado.",
    delay: "0",
  },
  {
    initials: "LS",
    name: "Luisa Santos",
    role: "Cliente fiel",
    text: "Excelente comida nicaragüense, realmente te hace sentir como en casa. Cada platillo tiene ese sabor auténtico y casero que tanto se añora.",
    delay: "100",
  },
  {
    initials: "CS",
    name: "Carlos Santos",
    role: "Cliente",
    text: "La comida nicaragüense de este lugar es simplemente maravillosa. Cada platillo está hecho con amor y dedicación que se siente desde el primer bocado.",
    delay: "200",
  },
];

const stars = Array(5).fill(null);

export default function Reviews() {
  return (
    <section className="w-full py-20 md:py-28 bg-nica-blue-soft dark:bg-nica-blue-dark/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            data-aos="fade-up"
            className="text-nica-blue dark:text-nica-gold font-semibold text-xs uppercase tracking-[0.25em] mb-4"
          >
            Testimonios
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="60"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-nica-blue-dark dark:text-white leading-tight mb-4"
          >
            Lo Que Dicen<br />
            <span className="text-nica-blue dark:text-nica-gold">Nuestros Clientes</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-slate-600 dark:text-slate-400 text-lg"
          >
            La satisfacción de nuestra familia es nuestro mayor orgullo
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              data-aos="fade-up"
              data-aos-delay={r.delay}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 card-glow flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {stars.map((_s, si) => (
                  <svg
                    key={si}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-nica-gold"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Big quote mark */}
              <p
                className="text-7xl font-serif leading-none text-nica-blue/15 dark:text-nica-gold/20 select-none mb-2"
                aria-hidden="true"
              >
                &ldquo;
              </p>

              {/* Quote text */}
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base flex-1 mb-8">
                {r.text}
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-nica-blue dark:bg-nica-blue-light flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white font-bold text-xs tracking-wide">
                    {r.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-nica-blue-dark dark:text-white text-sm">
                    {r.name}
                  </p>
                  <p className="text-nica-gold text-xs font-medium">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
