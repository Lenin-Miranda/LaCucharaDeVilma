"use client";

export default function Wwdt() {
  return (
    <section className="w-full min-h-screen dark:bg-neutral-900 justify-center items-center px-2 sm:px-4 flex flex-col gap-8 py-8 overflow-x-hidden">
      <div className="flex flex-col gap-8">
        <h1
          data-aos="fade-down"
          className="text-center drop-shadow-lg text-black dark:text-white font-bold text-2xl xs:text-3xl sm:text-4xl md:text-6xl max-w-full break-words"
        >
          Por Qué Lo Hacemos
        </h1>
        <p
          data-aos="fade-up"
          className="text-center drop-shadow-lg text-neutral-800 dark:text-neutral-200 text-base xs:text-lg md:text-2xl max-w-full break-words"
        >
          Nuestra pasión va más allá de cocinar. Es preservar nuestra herencia y
          compartir el orgullo de ser nicaragüenses.
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto"
      >
        <div className="flex flex-col rounded-xl w-full p-4 sm:p-6 md:p-8 gap-3 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-white dark:bg-black dark:bg-none">
          <span className="mb-8 rounded-[50%] w-14 h-14 bg-sky-200/80 dark:bg-neutral-800 flex items-center justify-center">
            🇳🇮
          </span>
          <h3 className="text-lg xs:text-xl md:text-2xl font-bold drop-shadow-lg text-black dark:text-white max-w-full break-words">
            Tradicion
          </h3>
          <p className="mt-4 text-sm xs:text-base md:text-lg max-w-full break-words text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Mantenemos vivas las recetas ancestrales que han pasado de
            generación en generación, honrando a quienes nos enseñaron el
            verdadero sabor de Nicaragua.
          </p>
        </div>
        <div className="flex gap-3 flex-col rounded-xl w-full p-4 sm:p-6 md:p-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-white dark:bg-black dark:bg-none">
          <span className="mb-8 rounded-[50%] w-14 h-14 bg-sky-200/80 dark:bg-neutral-800 flex items-center justify-center">
            ❤️
          </span>
          <h3 className="text-lg xs:text-xl md:text-2xl font-bold drop-shadow-lg text-black dark:text-white max-w-full break-words">
            Pasion
          </h3>
          <p className="mt-4 text-sm xs:text-base md:text-lg max-w-full break-words text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Cada platillo es preparado con dedicación y cariño, porque sabemos
            que la comida es el lenguaje universal del amor y la familia.
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 rounded-xl p-4 sm:p-6 md:p-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-white dark:bg-black dark:bg-none">
          <span className="mb-8 rounded-[50%] w-14 h-14 bg-sky-200/80 dark:bg-neutral-800 flex items-center justify-center">
            🌎
          </span>
          <h3 className="text-lg xs:text-xl md:text-2xl font-bold drop-shadow-lg text-black dark:text-white max-w-full break-words">
            Comunidad
          </h3>
          <p className="mt-4 text-sm xs:text-base md:text-lg max-w-full break-words text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Creamos un espacio donde todos se sienten como en casa, conectando a
            nuestra comunidad a través del sabor auténtico de nuestra tierra.
          </p>
        </div>
      </div>
    </section>
  );
}
