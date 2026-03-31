import { motion } from "framer-motion";
import { Sparkles, Music, BookOpen, Gamepad2, Camera } from "lucide-react";
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
  { icon: Camera, label: "Photography" },
  { icon: Gamepad2, label: "Gaming" },
];

const values = [
  { emoji: "✨", label: "Simplicity", desc: "Building solutions that are easy to understand and use" },
  { emoji: "🔁", label: "Consistency", desc: "Writing structured and reliable code" },
  { emoji: "📚", label: "Learning Mindset", desc: "Continuously improving my skills" },
  { emoji: "🤝", label: "Collaboration", desc: "Working effectively with others to build better products" },
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
        {/* Who I Am */}
        <motion.div {...fadeUp(0)} className="glass-card rounded-2xl p-6 md:p-8 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={18} className="text-primary" />
            <h3 className="font-heading font-bold text-lg text-heading">Who I Am</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            I'm <span className="text-foreground font-semibold">Donipati Anu Kumari</span>, a passionate Machine Learning Engineer and B.Tech CSE student at Lovely Professional University. I love turning raw data into intelligent systems that solve real problems.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base mt-3">
            My journey into technology didn't start with expertise, but with a simple question: <span className="text-foreground italic">"How do things actually work?"</span> That curiosity quickly evolved into a deep interest in building systems that are not just functional, but meaningful. Today, I specialize in crafting solutions at the intersection of machine learning, software development, and cloud technologies.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base mt-3">
            From building ML models to competing in national-level competitions, I'm constantly pushing my boundaries and exploring the cutting edge of AI.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Quick Facts */}
        <motion.div {...fadeUp(0.2)} className="glass-card rounded-2xl p-6 md:p-8">
          <h3 className="font-heading font-bold text-lg text-heading mb-4">⚡ Quick Facts</h3>
          <div className="grid grid-cols-1 gap-2">
            {facts.map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-base text-muted-foreground">
                <span className="text-lg">{f.emoji}</span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Off Coding */}
        <motion.div {...fadeUp(0.3)} className="glass-card rounded-2xl p-6 md:p-8">
          <h3 className="font-heading font-bold text-lg text-heading mb-4">🎮 When I'm Not Coding</h3>
          <p className="text-base text-muted-foreground mb-5">Life beyond the terminal — things that keep me balanced and inspired.</p>
          <div className="flex flex-wrap gap-3">
            {offCoding.map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full frost-badge text-base text-foreground">
                <item.icon size={15} className="text-primary" />
                {item.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* My Approach */}
      <motion.div {...fadeUp(0.4)} className="glass-card rounded-2xl p-6 md:p-8 mt-6">
        <h3 className="font-heading font-bold text-lg text-heading mb-2">🧭 My Approach</h3>
        <p className="text-base text-muted-foreground mb-6 max-w-2xl">
          I believe technology should not only work efficiently but also create real value for users. For me, development is not just about coding — it's about creating meaningful experiences that combine logic, creativity, and usability.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <div key={i} className="flex flex-col gap-1 p-4 rounded-xl bg-foreground/5 border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200">
              <span className="text-2xl mb-1">{v.emoji}</span>
              <span className="font-semibold text-base text-foreground">{v.label}</span>
              <span className="text-sm text-muted-foreground">{v.desc}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
