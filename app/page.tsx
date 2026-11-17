import { LangProvider } from "@/components/LangContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Promo from "@/components/Promo";
import About from "@/components/About";
import Signature from "@/components/Signature";
import MenuSection from "@/components/MenuSection";
import Banquet from "@/components/Banquet";
import Amenities from "@/components/Amenities";
import Delivery from "@/components/Delivery";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <LangProvider>
      <Reveal />
      <Header />
      <main>
        <Hero />
        <Promo />
        <About />
        <Signature />
        <MenuSection />
        <Banquet />
        <Amenities />
        <Delivery />
        <Gallery />
        <Reviews />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </LangProvider>
  );
}
