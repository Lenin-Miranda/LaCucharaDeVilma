import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Wwdt from "./components/Wwdt";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <NavBar />
        <div id="hero" className="w-full">
          <Hero />
        </div>
        <div id="about" className="w-full">
          <About />
        </div>
        <div id="wwdt" className="w-full">
          <Wwdt />
        </div>
        <div id="reviews" className="w-full">
          <Reviews />
        </div>
        <div id="visit" className="w-full">
          <Visit />
        </div>
        <div id="footer" className="w-full">
          <Footer />
        </div>
      </main>
    </div>
  );
}
