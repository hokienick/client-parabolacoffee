import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import TheShop from "@/components/sections/TheShop";
import Gifts from "@/components/sections/Gifts";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Menu />
      <TheShop />
      <Gifts />
      <Footer />
    </main>
  );
}
