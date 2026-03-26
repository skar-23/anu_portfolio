import { FileText, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const ResumeSection = () => (
  <SectionWrapper id="resume" className="relative overflow-hidden">
    {/* Animated gradient background */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[50%] h-full bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-0 right-1/4 w-[40%] h-full bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />
    </div>

    <div className="relative z-10 text-center max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 frost-badge px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase text-primary mb-6">
          <Sparkles size={13} /> Open to Opportunities
        </div>

        {/* Big heading */}
        <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-heading leading-tight mb-4">
          Let's Build<br />
          <span className="gradient-text">Something Great</span>
        </h2>

        <p className="text-muted-foreground/70 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Machine Learning Engineer with hands-on experience in Python, TensorFlow, and cloud platforms. Available for full-time roles and freelance projects.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-3.5 sm:py-4 rounded-full gradient-primary text-primary-foreground font-bold text-sm sm:text-base hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
          >
            <FileText size={18} /> View Resume
          </a>
          <a
            href="/resume.pdf"
            download="Donipati_Anu_Kumari_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-3.5 sm:py-4 rounded-full border-2 border-primary/30 text-foreground font-bold text-sm sm:text-base hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300 frost-badge"
          >
            <Download size={18} /> Download My Resume
          </a>
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default ResumeSection;
