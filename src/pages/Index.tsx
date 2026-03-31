import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import FreelancingSection from "@/components/FreelancingSection";
import ProjectsSection from "@/components/ProjectsSection";
import CodingPlatformsSection from "@/components/CodingPlatformsSection";
import CertificatesSection from "@/components/CertificatesSection";
import AchievementsSection from "@/components/AchievementsSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  return (
    <ThemeProvider>
      <ParticleBackground />
      <div className="relative z-10 min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <FreelancingSection />
        <ProjectsSection />
        <CodingPlatformsSection />
        <CertificatesSection />
        <AchievementsSection />
        <ResumeSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
