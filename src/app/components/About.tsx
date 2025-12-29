"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full h-screen flex justify-center px-6 items-center bg-blue-100 dark:bg-black">
      <div className="flex-col justify-center  w-full items-center">
        <h1
          data-aos="fade-left"
          className="text-6xl mb-4 font-bold px-6 drop-shadow-lg bg-gradient-to-b from-black via-black/40 to-white/30 bg-clip-text text-transparent dark:from-white dark:via-white/60 dark:to-black/30"
        >
          Nuestra Historia
        </h1>
        <p data-aos="fade-right" className="text-xl mb-8 px-6 ">
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
        <p data-aos="fade-left" className="text-xl px-6">
          Somos más que un restaurante; somos una familia que celebra la rica
          cultura gastronómica nicaragüense, desde el tradicional gallo pinto
          hasta el indio viejo, pasando por el vigorón que te transportará
          directamente a Granada.
        </p>
      </div>
      <div className="flex gap-6 w-full items-center justify-center mt-8">
        <div className="flex flex-col gap-6">
          <div data-aos="fade-right" className="relative w-80 h-70">
            <Image
              src="/images/nacatamal.jpg"
              alt="Nacatamal"
              fill
              className="object-cover rounded-xl shadow-2xl object-center opacity-80 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3"
              priority
            />
          </div>
          <div data-aos="fade-left" className="relative w-80 h-70">
            <Image
              src="/images/quesillo.jpg"
              alt="Quesillo"
              fill
              className="object-cover rounded-xl shadow-2xl object-center opacity-80 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div data-aos="fade-down" className="relative mt-10 w-80 h-70">
            <Image
              src="/images/tres-leches.jpg"
              alt="Tres leches"
              fill
              className="object-cover rounded-xl shadow-2xl object-center opacity-80 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3"
              priority
            />
          </div>
          <div data-aos="fade-up" className="relative w-80 h-70">
            <Image
              src="/images/vigoron.jpg"
              alt="Vigorón"
              fill
              className="object-cover rounded-xl shadow-2xl object-center opacity-80 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
