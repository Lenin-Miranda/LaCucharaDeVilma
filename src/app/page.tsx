import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Wwdt from "./components/Wwdt";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <NavBar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="wwdt">
        <Wwdt />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div id="visit">
        <Visit />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </main>
  );
}
