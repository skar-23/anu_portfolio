import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
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
  );
};

export default Index;
