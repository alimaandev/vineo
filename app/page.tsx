import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import BentoGrid from "./components/BentoGrid";
import DashboardPreview from "./components/DashboardPreview";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Reveal from "./components/animations/Reveal";
import ParallaxBlob from "./components/animations/ParallaxBlob";

export default function Home() {
  return (
    <main className="bg-background text-text-primary overflow-hidden">
      <Navbar />
      <Hero />
      <ParallaxBlob />
      <Reveal>
      <BentoGrid />
      </Reveal>
      <Reveal>
        <DashboardPreview />
      </Reveal>
      <Reveal>
        <Pricing />
      </Reveal>
      <Reveal>
      <CTA />
      </Reveal>
      <Footer />
    </main>
  );
}