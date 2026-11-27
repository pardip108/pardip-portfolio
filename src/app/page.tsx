import { AboutSection } from "@/components/AboutSection";
import { BeyondSection } from "@/components/BeyondSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { JourneySection } from "@/components/JourneySection";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-16 bg-surface min-h-[calc(100vh-10rem)]">
        <div className="flex flex-col w-full text-on-surface">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <JourneySection />
          <BeyondSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
