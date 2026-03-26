import { motion } from "framer-motion";
import { Sparkles, MapPin, Coffee, Music, BookOpen, Gamepad2, Camera } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const facts = [
  { emoji: "🎓", text: "B.Tech CSE student at LPU, Punjab" },
  { emoji: "🤖", text: "Obsessed with Machine Learning & AI" },
  { emoji: "💻", text: "Solved 150+ DSA problems on LeetCode" },
  { emoji: "🏆", text: "Top 10 at Model Masters Expo (National ML)" },
  { emoji: "🌐", text: "Freelancer building real-world ML solutions" },
  { emoji: "📍", text: "Based in Odisha, India" },
];

const offCoding = [
  { icon: Music, label: "Listening to music" },
  { icon: BookOpen, label: "Reading tech blogs" },
  { icon: Coffee, label: "Chai & deep thinking" },
  { icon: Camera, label: "Photography" },
  { icon: Gamepad2, label: "Gaming" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.5 },
});

const AboutSection = () => (
  <SectionWrapper id="about" className="relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[40%] h-[50%] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

    <div className="relative z-10">
      <SectionTitle title="About Me" subtitle="A little about who I am" />

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* About Me */}
        <motion.div {...fadeUp(0)} className="glass-card rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={18} className="text-primary" />
            <h3 className="font-heading font-bold text-lg text-heading">Who I Am</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            I'm <span className="text-foreground font-semibold">Donipati Anu Kumari</span>, a passionate Machine Learning Engineer and B.Tech CSE student at Lovely Professional University. I love turning raw data into intelligent systems that solve real problems.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base mt-3">
            From building ML models to competing in national-level competitions, I'm constantly pushing my boundaries and exploring the cutting edge of AI.
          </p>
        </motion.div>

        {/* My Journey */}
        <motion.div {...fadeUp(0.1)} className="glass-card rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={18} className="text-primary" />
            <h3 className="font-heading font-bold text-lg text-heading">My Journey</h3>
          </div>
          <div className="space-y-3">
            {[
              { year: "2020–22", text: "Completed +2 at Kendriya Vidyalaya, Odisha" },
              { year: "2023", text: "Joined LPU — started exploring ML & Python" },
              { year: "2024", text: "Built first ML projects, started freelancing" },
              { year: "2025", text: "Top 10 at Model Masters Expo, 150+ LeetCode problems" },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary mt-0.5 w-14 shrink-0">{item.year}</span>
                <span className="text-sm text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Quick Facts */}
        <motion.div {...fadeUp(0.2)} className="glass-card rounded-2xl p-6 md:p-8">
          <h3 className="font-heading font-bold text-lg text-heading mb-4">⚡ Quick Facts</h3>
          <div className="grid grid-cols-1 gap-2">
            {facts.map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="text-base">{f.emoji}</span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Off Coding */}
        <motion.div {...fadeUp(0.3)} className="glass-card rounded-2xl p-6 md:p-8">
          <h3 className="font-heading font-bold text-lg text-heading mb-4">🎮 When I'm Not Coding</h3>
          <p className="text-sm text-muted-foreground mb-5">Life beyond the terminal — things that keep me balanced and inspired.</p>
          <div className="flex flex-wrap gap-3">
            {offCoding.map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full frost-badge text-sm text-foreground">
                <item.icon size={15} className="text-primary" />
                {item.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
