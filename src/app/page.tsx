import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Roasts from "@/components/sections/Roasts";
import TheShop from "@/components/sections/TheShop";
import Merch from "@/components/sections/Merch";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Roasts />
      <TheShop />
      <Merch />
      <Footer />
    </main>
  );
}
