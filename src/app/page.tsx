import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { AiSection } from "@/components/AiSection";
import { WhyHireMe } from "@/components/WhyHireMe";
import { Contact } from "@/components/Contact";
import { CodingProfiles } from "@/components/CodingProfiles";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <AiSection />
      <TechStack />
      <Experience />
      <Education />
      <Projects />
      <WhyHireMe />
      <CodingProfiles />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
