import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <ParticleBackground />
    <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="relative inline-block animate-float-profile">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 glow-primary mx-auto">
            <img src={profilePhoto} alt="Donipati Anu Kumari" className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl md:text-6xl font-heading font-bold mb-4"
      >
        Donipati <span className="gradient-text">Anu Kumari</span>
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg md:text-xl text-primary font-medium mb-4"
      >
        Machine Learning Enthusiast | Computer Science Student
      </motion.p>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl mx-auto"
      >
        Building intelligent solutions using Machine Learning and Artificial Intelligence.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          <Mail size={18} /> Get In Touch
        </a>
        <a
          href="#resume"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <FileText size={18} /> View Resume
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
