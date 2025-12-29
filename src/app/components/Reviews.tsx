export default function Reviews() {
  return (
    <section className="flex flex-col bg-blue-100 dark:bg-black items-center justify-center gap-12 w-full h-screen px-6 py-10">
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-center font-bold text-6xl drop-shadow-lg bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30">
          Lo Que Dicen Nuestros Clientes
        </h1>
        <p className="text-center text-3xl drop-shadow-lg bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30">
          La satisfacción de nuestra familia es nuestro mayor orgullo
        </p>
      </div>
      <div className="flex justify-around gap-6">
        <div className="p-10 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-white dark:border dark:p-10 dark:rounded-xl dark:bg-neutral-900 dark:bg-none">
          <div className="flex flex-col gap-8 ">
            <div className="flex gap-6 items-center">
              {" "}
              <span className="dark:bg-neutral-600 bg-blue-100 p-4 rounded-[50%] w-[80px] h-[80px] flex justify-center items-center font-bold  text-3xl">
                MC
              </span>
              <h3 className="drop-shadow-lg text-4xl font-bold bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30">
                Maria Carmen
              </h3>
            </div>
            <p className="text-neutral-400 text-xl">
              "El mejor gallo pinto fuera de Nicaragua. Me transporta
              directamente a mi infancia en Managua. ¡Simplemente espectacular!"
            </p>
          </div>
        </div>
        <div className="p-10 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-white dark:border dark:p-10 dark:rounded-xl dark:bg-neutral-900 dark:bg-none">
          <div className="flex flex-col gap-8">
            <div className="flex gap-6 items-center">
              <span className="dark:bg-neutral-600 bg-blue-100 p-4 rounded-[50%]  w-[80px] h-[80px] flex justify-center items-center font-bold  text-3xl">
                JR
              </span>
              <h3 className="drop-shadow-lg text-4xl font-bold bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30">
                Jose Ramon
              </h3>
            </div>
            <p className="text-neutral-400">
              "La atención es cálida y familiar. Los nacatamales están
              exactamente como los hacía mi abuela. Un pedacito de Nicaragua en
              cada bocado."
            </p>
          </div>
          <div className=""></div>
        </div>
        <div className="p-10 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-white dark:border dark:p-10 dark:rounded-xl dark:bg-neutral-900 dark:bg-none">
          <div className="flex flex-col gap-8">
            <div className="flex gap-6 items-center">
              <span className="dark:bg-neutral-600 bg-blue-100 p-4 rounded-[50%] w-[80px] h-[80px] flex justify-center items-center font-bold  text-3xl">
                SR
              </span>
              <h3 className="drop-shadow-lg text-4xl font-bold bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30">
                Sofia Reyes
              </h3>
            </div>
            <p className="text-neutral-400">
              "Vine por curiosidad y ahora soy cliente habitual. El vigorón es
              auténtico y las tajadas de plátano están perfectas. ¡Altamente
              recomendado!"
            </p>
          </div>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
}
