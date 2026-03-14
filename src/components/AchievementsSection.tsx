import { Trophy, Award, Star, BookOpen } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const achievements = [
  { icon: Trophy, title: "LeetCode Contest Rating 1759", desc: "Achieved competitive contest rating demonstrating strong problem-solving skills." },
  { icon: Star, title: "Solved 100+ LeetCode Problems", desc: "Consistent practice across algorithms and data structures." },
  { icon: Award, title: "Model Masters Expo – Top 30 Teams", desc: "Selected among top 30 teams in a national ML competition." },
  { icon: BookOpen, title: "Vigyan Jyothi Scholarship", desc: "Awarded for academic excellence in science." },
];

const AchievementsSection = () => (
  <SectionWrapper id="achievements">
    <SectionTitle title="Achievements" subtitle="Milestones and recognition" />
    <div className="max-w-3xl mx-auto">
      <div className="space-y-6">
        {achievements.map((a, i) => (
          <div key={i} className="flex items-start gap-5 bg-card rounded-2xl p-6 card-hover border border-border relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full gradient-primary" />
            <div className="relative z-10 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
              <a.icon size={20} className="text-primary-foreground" />
            </div>
            <div className="pl-2">
              <h3 className="font-heading font-bold text-heading text-lg mb-1">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AchievementsSection;
