import { ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const platforms = [
  {
    name: "LeetCode",
    icon: "🏆",
    details: ["Contest Rating: 1759", "Solved 100+ problems"],
    url: "#",
  },
  {
    name: "GitHub",
    icon: "🐙",
    details: ["Active contributor", "Open source projects"],
    url: "#",
  },
  {
    name: "HackerRank",
    icon: "💚",
    details: ["Problem solving badges", "Python certified"],
    url: "#",
  },
  {
    name: "Codeforces",
    icon: "⚡",
    details: ["Active participant", "Competitive programming"],
    url: "#",
  },
];

const CodingPlatformsSection = () => (
  <SectionWrapper id="platforms">
    <SectionTitle title="Coding Platforms" subtitle="Where I practice and compete" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {platforms.map((p, i) => (
        <div key={i} className="bg-card rounded-2xl p-6 shadow-md card-hover text-center">
          <div className="text-4xl mb-4">{p.icon}</div>
          <h3 className="font-heading font-bold text-heading mb-3">{p.name}</h3>
          {p.details.map((d, j) => (
            <p key={j} className="text-sm text-muted-foreground">{d}</p>
          ))}
          <a
            href={p.url}
            className="inline-flex items-center gap-1.5 mt-4 px-5 py-2 text-sm font-medium rounded-full gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={14} /> Profile
          </a>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default CodingPlatformsSection;
