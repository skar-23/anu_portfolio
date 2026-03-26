import { motion } from "framer-motion";
import { Mail, FileText, Flame } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const stats = [
  { value: "4+", label: "PROJECTS" },
  { value: "15+", label: "REPOSITORIES" },
  { value: "100+", label: "PROBLEMS SOLVED" },
];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
    <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-6 md:px-12 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left - Photo Card */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-center order-2 md:order-1"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-xs">
            {/* Dashed circle decoration */}
            <div className="absolute -top-8 -left-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] pointer-events-none">
              <svg viewBox="0 0 400 400" className="w-full h-full animate-rotate-slow">
                <circle
                  cx="200" cy="200" r="180"
                  fill="none"
                  stroke="hsl(186 78% 42%)"
                  strokeWidth="3"
                  strokeDasharray="15 12"
                  opacity="0.6"
                />
              </svg>
            </div>
            <div className="glass-card rounded-2xl p-4 relative z-10">
              <div className="rounded-xl overflow-hidden mb-4">
                <img src={profilePhoto} alt="Donipati Anu Kumari" className="w-full h-56 sm:h-72 object-cover" />
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-heading px-1">Donipati Anu Kumari</h3>
              <div className="flex items-center gap-2 px-1 mt-1">
                <Flame size={16} className="text-primary" />
                <span className="text-sm text-muted-foreground">ML Enthusiast</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right - Text Content */}
        <div className="order-1 md:order-2">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight mb-2">
              MACHINE
              <br />
              <span className="text-muted-foreground">LEARNING</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-muted-foreground mb-5 md:mb-6">
              ENGINEER
            </h2>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-md leading-relaxed"
          >
            Passionate about building intelligent solutions using Machine Learning and AI. Specialize in transforming data into impactful, real-world applications.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 rounded-full gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm md:text-base"
            >
              <Mail size={16} /> Get In Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 rounded-full border-2 border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-colors text-sm md:text-base"
            >
              <FileText size={16} /> View Resume
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-6 md:gap-12"
          >
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-heading">
                  {s.value.replace('+', '')}<span className="gradient-accent">+</span>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
