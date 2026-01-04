"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center px-2 sm:px-6 bg-blue-100 dark:bg-black py-8 overflow-x-hidden">
      {/* Texto a la izquierda en desktop, arriba en mobile */}
      <div className="w-full md:w-[56%] flex flex-col justify-center items-start max-w-2xl mx-auto px-2 sm:px-6 break-words">
        <h1
          data-aos="fade-left"
          className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl mb-4 font-bold px-2 sm:px-6 drop-shadow-lg text-black dark:text-white max-w-full break-words text-left"
        >
          Nuestra Historia
        </h1>
        <p
          data-aos="fade-right"
          className="text-sm xs:text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-2 sm:px-6 max-w-full break-words text-left text-neutral-800 dark:text-neutral-200 leading-relaxed"
        >
          Somos un restaurante en casa dedicado a traer el auténtico sabor de
          Nicaragua a Las Vegas. Nuestra misión es honrar y recordar nuestra
          patria a través del sazón inconfundible de la comida nica, preparada
          con el mismo cariño y dedicación de nuestras abuelas. Con más de 3
          años compartiendo nuestra mesa en Las Vegas y más de 8 años de
          experiencia en la cocina, cada platillo es una celebración de nuestras
          raíces y tradiciones. Disfruta de una experiencia casera y familiar,
          donde cada bocado te transporta a los sabores y recuerdos de nuestra
          tierra.
        </p>
        <p
          data-aos="fade-left"
          className="text-sm xs:text-base sm:text-lg md:text-xl px-2 sm:px-6 max-w-full break-words text-left text-neutral-800 dark:text-neutral-200 leading-relaxed"
        >
          Somos más que un restaurante; somos una familia que celebra la rica
          cultura gastronómica nicaragüense, desde el tradicional gallo pinto
          hasta el indio viejo, pasando por el vigorón que te transportará
          directamente a Granada.
        </p>
      </div>
      {/* Imágenes a la derecha en desktop, abajo en mobile */}
      <div className="w-full md:w-[44%] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 items-center md:items-end mt-8 md:mt-24">
        <div
          data-aos="fade-right"
          className="relative w-full h-40 sm:w-64 sm:h-52 md:w-full md:h-60 mx-auto"
        >
          <Image
            src="/images/enchiladas.jpeg"
            alt="Enchiladas"
            fill
            className="object-cover rounded-xl w-full shadow-2xl object-center opacity-80 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3"
            priority
          />
        </div>
        <div
          data-aos="fade-left"
          className="relative w-full h-40 sm:w-64 sm:h-52 md:w-full md:h-60 mx-auto"
        >
          <Image
            src="/images/carnes.jpeg"
            alt="Carnes asadas"
            fill
            className="object-cover rounded-xl shadow-2xl object-center opacity-80 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3"
            priority
          />
        </div>
        <div
          data-aos="fade-down"
          className="relative w-full h-40 sm:w-64 sm:h-52 md:w-full md:h-60 mx-auto"
        >
          <Image
            src="/images/pescado.jpeg"
            alt="Pescado"
            fill
            className="object-cover rounded-xl shadow-2xl object-bottom opacity-80 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3"
            priority
          />
        </div>
        <div
          data-aos="fade-up"
          className="relative w-full h-40 sm:w-64 sm:h-52 md:w-full md:h-60 mx-auto"
        >
          <Image
            src="/images/queso.jpeg"
            alt="Queso Frito"
            fill
            className="object-cover rounded-xl shadow-2xl object-center opacity-80 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3"
            priority
          />
        </div>
      </div>
    </section>
  );
}
