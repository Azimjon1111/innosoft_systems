import Navbar from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Stats from "@/components/home/stats";
import Cta from "@/components/home/cta";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
