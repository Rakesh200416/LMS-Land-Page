import Hero from "./components/Hero";
import Features from "./components/Features";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <main className="pb-10">
      <Hero />
      <Features />
      <AboutSection />
      <Services />
      <Testimonials />
      <CTASection />
    </main>
  );
}
