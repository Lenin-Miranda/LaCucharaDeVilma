export default function Reviews() {
  return (
    <section className="flex flex-col bg-blue-100 dark:bg-black items-center justify-center gap-8 w-full min-h-screen px-2 sm:px-6 py-8 overflow-x-hidden">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1
          data-aos="fade-down"
          className="text-center font-bold text-2xl xs:text-3xl sm:text-4xl md:text-6xl drop-shadow-lg text-black dark:text-white max-w-full break-words"
        >
          Lo Que Dicen Nuestros Clientes
        </h1>
        <p
          data-aos="fade-up"
          className="text-center text-base xs:text-lg md:text-3xl drop-shadow-lg text-neutral-800 dark:text-neutral-200 max-w-full break-words"
        >
          La satisfacción de nuestra familia es nuestro mayor orgullo
        </p>
      </div>
      <div
        data-aos="fade-down"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto"
      >
        <div className="p-4 sm:p-6 md:p-10 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-white dark:border dark:rounded-xl dark:bg-neutral-900 dark:bg-none">
          <div className="flex flex-col gap-8 ">
            <div className="flex gap-4 items-center flex-wrap">
              <span className="dark:bg-neutral-600 bg-blue-100 p-2 sm:p-4 rounded-[50%] w-12 h-12 sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] flex justify-center items-center font-bold text-lg sm:text-2xl md:text-3xl">
                LA
              </span>
              <h3 className="drop-shadow-lg text-lg sm:text-2xl md:text-4xl font-bold text-black dark:text-white max-w-full break-words">
                Lesther Alarcon
              </h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base md:text-xl max-w-full break-words leading-relaxed">
              "Si de comer rico se trata la comida nica es unica y en las vegas
              la disfrutamos con la{" "}
              <span className="font-extrabold">cuchara de vilma</span>, sabor y
              calidad en cada bocado."
            </p>
          </div>
        </div>
        <div className="p-4 sm:p-6 md:p-10 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-white dark:border dark:rounded-xl dark:bg-neutral-900 dark:bg-none">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4 items-center flex-wrap">
              <span className="dark:bg-neutral-600 bg-blue-100 p-2 sm:p-4 rounded-[50%] w-12 h-12 sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] flex justify-center items-center font-bold text-lg sm:text-2xl md:text-3xl">
                LS
              </span>
              <h3 className="drop-shadow-lg text-lg sm:text-2xl md:text-4xl font-bold text-black dark:text-white max-w-full break-words">
                Luisa Santos
              </h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base md:text-xl max-w-full break-words leading-relaxed">
              "Excelente comida{" "}
              <span className="font-extrabold">Nicaragüense</span>, realmente te
              hace sentir como en casa! Cada platillo tiene ese sabor autentico
              y casero que tanto se extraña."
            </p>
          </div>
          <div className=""></div>
        </div>
        <div className="p-4 sm:p-6 md:p-10 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-white dark:border dark:rounded-xl dark:bg-neutral-900 dark:bg-none">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4 items-center flex-wrap">
              <span className="dark:bg-neutral-600 bg-blue-100 p-2 sm:p-4 rounded-[50%] w-12 h-12 sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] flex justify-center items-center font-bold text-lg sm:text-2xl md:text-3xl">
                CS
              </span>
              <h3 className="drop-shadow-lg text-lg sm:text-2xl md:text-4xl font-bold text-black dark:text-white max-w-full break-words">
                Carlos Santos
              </h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base md:text-xl max-w-full break-words leading-relaxed">
              "La comida <span className="font-extrabold">Nicaragüense</span> de
              este lugar es simplemente maravillosa, con ese sabor autentico que
              te abraza y te hace sentir cerca de casa desde el primer bocado.
              Cada platillo esta hecho con amor y dedicacion."
            </p>
          </div>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
}
