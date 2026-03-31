import { motion } from "framer-motion";
import { Download, FolderOpen } from "lucide-react";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile-photo.png";

const TYPED_STRINGS = ["Machine Learning Engineer", "AI Enthusiast", "Problem Solver"];

const HeroSection = () => {
  const [displayed, setDisplayed] = useState("");
  const [strIdx, setStrIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPED_STRINGS[strIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1400);
        } else {
          setCharIdx(charIdx + 1);
        }
      } else {
        setDisplayed(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setStrIdx((strIdx + 1) % TYPED_STRINGS.length);
          setCharIdx(0);
        } else {
          setCharIdx(charIdx - 1);
        }
      }
    }, deleting ? 45 : 80);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, strIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="relative z-10 max-w-screen-xl mx-auto w-full px-6 md:px-16 py-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            {/* Badge */}
            <span className="inline-block border border-primary/50 text-primary text-xs font-semibold tracking-widest px-4 py-1.5 rounded-full mb-5">
              HELLO, I AM
            </span>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-4 text-foreground">
              Donipati<br />
              <span className="gradient-text">Anu Kumari</span>
            </h1>

            {/* Typewriter */}
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-8 h-9">
              {displayed}<span className="animate-pulse text-primary">|</span>
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-primary/60 text-foreground font-semibold hover:border-primary hover:text-primary transition-colors text-sm"
              >
                <Download size={15} /> Download CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                <FolderOpen size={15} /> View Projects
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10">
              {[["4+", "Projects"], ["15+", "Repositories"], ["100+", "Problems Solved"]].map(([val, label]) => (
                <div key={label}>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                    {val.replace("+", "")}<span className="gradient-accent">+</span>
                  </div>
                  <p className="text-xs text-muted-foreground tracking-wider mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Arch Photo */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 blur-3xl opacity-25 bg-primary scale-90 rounded-full" />
              <div
                className="relative overflow-hidden shadow-2xl"
                style={{
                  width: "min(380px, 80vw)",
                  height: "min(520px, 110vw)",
                  borderRadius: "min(190px, 40vw) min(190px, 40vw) 20px 20px",
                }}
              >
                <img
                  src={profilePhoto}
                  alt="Donipati Anu Kumari"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
