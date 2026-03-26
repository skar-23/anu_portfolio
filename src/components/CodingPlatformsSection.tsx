import { ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const platforms = [
  {
    name: "LeetCode",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leetcode.svg",
    color: "bg-amber-500",
    details: ["Contest Rating: 1771", "Solved 150+ problems"],
    url: "https://leetcode.com/u/Anusha_5/",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
    color: "bg-zinc-800",
    details: ["Active contributor", "Open source projects"],
    url: "https://github.com/942004",
  },
  {
    name: "HackerRank",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hackerrank.svg",
    color: "bg-emerald-600",
    details: ["Problem solving badges", "Python certified"],
    url: "https://www.hackerrank.com/profile/kanusha5431",
  },
  {
    name: "Codeforces",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codeforces.svg",
    color: "bg-blue-600",
    details: ["Active participant", "Competitive programming"],
    url: "https://codeforces.com/profile/Anusha_7542",
  },
];

const CodingPlatformsSection = () => (
  <SectionWrapper id="platforms" className="relative overflow-hidden">
    {/* Background Decorations */}
    <div className="absolute top-0 left-0 w-[45%] h-[60%] bg-teal-500/12 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[45%] h-[60%] bg-primary/12 rounded-full blur-[100px] pointer-events-none" />

    <div className="relative z-10">
      <SectionTitle title="Coding Platforms" subtitle="Where I practice and compete" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {platforms.map((p, i) => (
          <div key={i} className="glass-card rounded-[2rem] p-6 md:p-10 text-center group relative overflow-hidden transition-all duration-700">
            {/* SHINE EFFECT */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className={`w-16 h-16 md:w-24 md:h-24 ${p.color} rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700`}>
              <img
                src={p.icon}
                alt={p.name}
                className="w-8 h-8 md:w-12 md:h-12"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <h3 className="font-heading font-bold text-heading text-xl md:text-2xl mb-4 md:mb-5 group-hover:text-primary transition-colors duration-300">{p.name}</h3>
            <div className="space-y-2 md:space-y-3 mb-6 md:mb-10">
              {p.details.map((d, j) => (
                <p key={j} className="text-sm md:text-base font-medium text-muted-foreground/80 leading-relaxed">{d}</p>
              ))}
            </div>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-2xl gradient-primary text-primary-foreground hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95 w-full justify-center"
            >
              <ExternalLink size={16} /> Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default CodingPlatformsSection;
