"use client";

export default function Wwdt() {
  return (
    <section className="w-full dark:bg-neutral-900 justify-center items-center h-screen px-4 flex flex-col gap-8 py-12">
      <div className="flex flex-col gap-8">
        <h1 className="text-center drop-shadow-lg bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30 font-bold text-6xl ">
          Por Qué Lo Hacemos
        </h1>
        <p className="text-center drop-shadow-lg bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30 text-2xl">
          {" "}
          Nuestra pasión va más allá de cocinar. Es preservar nuestra herencia y
          compartir el orgullo de ser nicaragüenses.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col rounded-xl w-full rounded p-8 gap-3 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-white dark:bg-black dark:bg-none">
          <span className="mb-8 rounded-[50%] w-14 h-14 bg-sky-200/80 dark:bg-neutral-800 flex items-center justify-center">
            🇳🇮
          </span>
          <h3 className="text-2xl font-bold text-blue-950 drop-shadow-lg bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30 ">
            Tradicion
          </h3>
          <p className="mt-8 max-w-100 text-neutral-800/80 dark:text-neutral-400">
            Mantenemos vivas las recetas ancestrales que han pasado de
            generación en generación, honrando a quienes nos enseñaron el
            verdadero sabor de Nicaragua.
          </p>
        </div>
        <div className="flex gap-3 flex-col rounded-xl w-full rounded p-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-white dark:bg-black dark:bg-none">
          <span className="mb-8 rounded-[50%] w-14 h-14 bg-sky-200/80 dark:bg-neutral-800 flex items-center justify-center">
            ❤️
          </span>
          <h3 className="text-2xl font-bold text-blue-950 drop-shadow-lg bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30 ">
            Pasion
          </h3>
          <p className="mt-8 max-w-100 text-neutral-800/80 dark:text-neutral-400">
            Cada platillo es preparado con dedicación y cariño, porque sabemos
            que la comida es el lenguaje universal del amor y la familia.
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 rounded-xl rounded p-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-white dark:bg-black dark:bg-none">
          <span className="mb-8 rounded-[50%] w-14 h-14 bg-sky-200/80 dark:bg-neutral-800 flex items-center justify-center">
            🌎
          </span>
          <h3 className="text-2xl font-bold text-blue-950 drop-shadow-lg bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30">
            Comunidad
          </h3>
          <p className="mt-8 text-neutral-800/80 max-w-100 dark:text-neutral-400">
            Creamos un espacio donde todos se sienten como en casa, conectando a
            nuestra comunidad a través del sabor auténtico de nuestra tierra.
          </p>
        </div>
      </div>
    </section>
  );
}
