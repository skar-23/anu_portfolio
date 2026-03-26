import { ExternalLink, Award } from "lucide-react";
import SectionTitle from "./SectionTitle";

const certificates = [
  { title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM", issuer: "Infosys Springboard", year: "2025", image: "/c-1_page-0001.jpg", pdf: "/c-1.pdf" },
  { title: "Build Generative AI Apps and Solutions with No-Code Tools", issuer: "Udemy", year: "2025", image: "/c-2_page-0001.jpg", pdf: "/c-2.pdf" },
  { title: "Computational Theory: Language Principle & Finite Automata Theory", issuer: "Infosys Springboard", year: "2025", image: "/c-3_page-0001.jpg", pdf: "/c-3.pdf" },
  { title: "AI & ML for Real-world Problem Solving", issuer: "LPU Centre for Professional Enhancement", year: "2025", image: "/c-4.jpeg", pdf: "/c-4.jpeg" },
  { title: "Cloud Computing", issuer: "NPTEL / IIT Kharagpur", year: "2025", image: "/c-5_page-0001.jpg", pdf: "/c-5.pdf" },
];

const CertificatesSection = () => (
  // No overflow-hidden, no SectionWrapper — sticky needs clean ancestors
  <section id="certificates" className="section-padding relative">
    <div className="absolute top-0 left-0 w-[45%] h-[55%] bg-cyan-500/12 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[45%] h-[55%] bg-sky-400/12 rounded-full blur-[100px] pointer-events-none" />

    <div className="max-w-screen-2xl mx-auto relative z-10">
      <SectionTitle title="Certificates" subtitle="Professional certifications and courses" />

      <div className="max-w-3xl mx-auto">
        {certificates.map((c, i) => (
          <div
            key={i}
            className="sticky group overflow-hidden rounded-[2rem] relative"
            style={{
              top: `calc(25vh + ${i * 20}px)`,
              zIndex: i + 1,
              marginBottom: "1rem",
              background: "linear-gradient(135deg, rgba(16,38,72,0.80) 0%, rgba(8,20,44,0.70) 100%)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1px solid rgba(100,210,230,0.16)",
              boxShadow: `0 ${8 + i * 6}px ${32 + i * 10}px rgba(0,140,175,0.20), inset 0 1px 0 rgba(120,215,235,0.14)`,
            }}
          >
            {/* Glow halo behind card — unique color per card */}
            <div
              className="absolute -inset-4 -z-10 rounded-[3rem] opacity-60 blur-2xl animate-pulse pointer-events-none"
              style={{
                background: [
                  "radial-gradient(ellipse, rgba(0,200,220,0.35), transparent 70%)",
                  "radial-gradient(ellipse, rgba(120,80,255,0.35), transparent 70%)",
                  "radial-gradient(ellipse, rgba(0,180,120,0.35), transparent 70%)",
                  "radial-gradient(ellipse, rgba(255,160,40,0.35), transparent 70%)",
                  "radial-gradient(ellipse, rgba(60,140,255,0.35), transparent 70%)",
                ][i],
                animationDelay: `${i * 0.4}s`,
                animationDuration: "3s",
              }}
            />
            <div className="flex flex-col">
              <div className="w-full h-56 sm:h-64 overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-75" />
              </div>
              <div className="flex-1 p-5 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Award size={15} className="text-primary" />
                    <span className="text-xs font-bold text-primary/70 tracking-widest uppercase">{c.year}</span>
                  </div>
                  <h3 className="font-heading font-bold text-heading text-lg md:text-xl mb-2 group-hover:text-primary transition-colors duration-300">{c.title}</h3>
                  <p className="text-muted-foreground/70 text-sm mb-3">{c.issuer}</p>
                </div>
                <a href={c.pdf} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-primary text-primary-foreground text-sm font-bold self-start hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95">
                  <ExternalLink size={14} /> View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificatesSection;
