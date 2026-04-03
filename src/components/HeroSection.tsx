import { motion } from "framer-motion";
import { Download, FolderOpen } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import profilePhoto from "@/assets/profile-photo.png";
import { useTheme } from "@/components/ThemeProvider";

const TYPED_STRINGS = ["Machine Learning Engineer", "AI Enthusiast", "Problem Solver"];

// ── Animated background canvas ──────────────────────────────────────────────
const FrameCanvas = ({ isDark }: { isDark: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const W = canvas.width = canvas.offsetWidth;
    const H = canvas.height = canvas.offsetHeight;

    type Particle = {
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; rotation: number; rotSpeed: number;
      color?: string;
    };

    const count = 28;
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H - H,
      vx: (Math.random() - 0.5) * 0.6,
      vy: Math.random() * 0.8 + 0.3,
      size: Math.random() * 8 + 5,
      opacity: Math.random() * 0.6 + 0.3,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.04,
      color: isDark ? undefined : ["#f9a8d4", "#fda4af", "#f0abfc", "#fbcfe8", "#e9d5ff"][Math.floor(Math.random() * 5)],
    }));

    let raf: number;

    const drawPetal = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      if (isDark) {
        // glowing star/orb
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size);
        grad.addColorStop(0, "rgba(56,189,248,0.9)");
        grad.addColorStop(0.5, "rgba(99,102,241,0.5)");
        grad.addColorStop(1, "rgba(99,102,241,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // rose petal shape
        ctx.fillStyle = p.color!;
        ctx.beginPath();
        ctx.ellipse(0, -p.size / 2, p.size * 0.45, p.size * 0.7, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(p.size * 0.3, 0, p.size * 0.45, p.size * 0.7, Math.PI / 3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        if (p.y > H + 20) { p.y = -20; p.x = Math.random() * W; }
        drawPetal(p);
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, [isDark]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

const HeroSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
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

          {/* Right — Square Photo Frame with live animation */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative" style={{ width: "min(460px, 88vw)", height: "min(460px, 88vw)" }}>
              {/* Animated background */}
              <div className={`absolute inset-0 rounded-2xl overflow-hidden ${isDark ? "bg-[hsl(215,42%,8%)]" : "bg-pink-50"}`}>
                <FrameCanvas isDark={isDark} />
              </div>

              {/* Glowing border */}
              <div className={`absolute inset-0 rounded-2xl ${isDark ? "shadow-[0_0_30px_4px_rgba(56,189,248,0.25)]" : "shadow-[0_0_30px_4px_rgba(249,168,212,0.5)]"}`}
                style={{ border: isDark ? "2px solid rgba(56,189,248,0.35)" : "2px solid rgba(249,168,212,0.7)" }}
              />

              {/* Photo */}
              <div className="absolute inset-4 rounded-xl overflow-hidden shadow-xl">
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
