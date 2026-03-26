import { Trophy, Star, Award, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const stats = [
  { icon: Trophy, value: "1771", label: "LeetCode Contest Rating", desc: "Competitive programming rating", color: "from-amber-400/20 to-yellow-500/10 border-amber-400/30 text-amber-300" },
  { icon: Star,   value: "150+", label: "Problems Solved",         desc: "LeetCode DSA practice",        color: "from-cyan-400/20 to-blue-500/10 border-cyan-400/30 text-cyan-300" },
  { icon: Award,  value: "Top 30", label: "Model Masters Expo",    desc: "National ML competition",      color: "from-violet-400/20 to-purple-500/10 border-violet-400/30 text-violet-300" },
  { icon: BookOpen, value: "🏅", label: "Vigyan Jyothi",           desc: "Academic excellence award",    color: "from-emerald-400/20 to-teal-500/10 border-emerald-400/30 text-emerald-300" },
];

const AchievementsSection = () => (
  <SectionWrapper id="achievements" className="relative overflow-hidden">
    <div className="absolute top-0 left-0 w-[45%] h-[55%] bg-sky-500/12 rounded-full blur-[100px] pointer-events-none animate-pulse" />
    <div className="absolute bottom-0 right-0 w-[45%] h-[55%] bg-primary/12 rounded-full blur-[100px] pointer-events-none" />

    <div className="relative z-10">
      <SectionTitle title="Achievements" subtitle="Milestones and recognition" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className={`group relative rounded-2xl p-6 md:p-8 flex flex-col items-center text-center bg-gradient-to-br border backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${s.color}`}
            style={{ boxShadow: "0 4px 24px rgba(0,140,175,0.10)" }}
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <s.icon size={22} />
            </div>

            {/* Big stat */}
            <div className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-1 leading-none">
              {s.value}
            </div>

            {/* Label */}
            <p className="font-semibold text-sm md:text-base text-white/80 mb-1">{s.label}</p>
            <p className="text-xs text-white/45">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AchievementsSection;
