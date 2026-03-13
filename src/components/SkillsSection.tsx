import { Code, Brain, Wrench, Users } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "C++", "JavaScript", "Java", "C"],
  },
  {
    title: "ML Frameworks",
    icon: Brain,
    skills: ["TensorFlow", "Scikit-learn"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["AWS", "Firebase", "MySQL", "NumPy", "Pandas", "Git"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Teamwork", "Adaptability", "Communication", "Time Management"],
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {skillGroups.map((group, i) => (
        <div key={i} className="bg-card rounded-2xl p-6 shadow-md card-hover">
          <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
            <group.icon size={22} className="text-primary-foreground" />
          </div>
          <h3 className="font-heading font-bold text-heading mb-4">{group.title}</h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm font-medium rounded-full bg-muted text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
