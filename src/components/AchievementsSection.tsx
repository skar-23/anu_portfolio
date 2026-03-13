import { Trophy, Award, Star, BookOpen } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const achievements = [
  {
    icon: Trophy,
    title: "LeetCode Contest Rating 1759",
    desc: "Achieved competitive contest rating demonstrating strong problem-solving skills.",
  },
  {
    icon: Star,
    title: "Solved 100+ LeetCode Problems",
    desc: "Consistent practice across algorithms and data structures.",
  },
  {
    icon: Award,
    title: "Model Masters Expo – Top 30 Teams",
    desc: "Selected among top 30 teams in a national ML competition.",
  },
  {
    icon: BookOpen,
    title: "Vigyan Jyothi Scholarship",
    desc: "Awarded for academic excellence in science.",
  },
];

const AchievementsSection = () => (
  <SectionWrapper id="achievements">
    <SectionTitle title="Achievements" subtitle="Milestones and recognition" />
    <div className="max-w-2xl mx-auto relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
      <div className="space-y-8">
        {achievements.map((a, i) => (
          <div key={i} className="relative flex items-start gap-6 pl-2">
            <div className="relative z-10 w-10 h-10 rounded-full gradient-primary flex items-center justify-center shrink-0 mt-1">
              <a.icon size={18} className="text-primary-foreground" />
            </div>
            <div className="bg-card rounded-xl p-5 shadow-md card-hover flex-1">
              <h3 className="font-heading font-bold text-heading mb-1">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AchievementsSection;
