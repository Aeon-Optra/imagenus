import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ValueProposition />
      <Services />
      <Process />
      <FAQ />
      <Contact />
    </div>
  );
}
