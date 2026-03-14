import { Code, Brain, Wrench, Users } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const skillIcons: Record<string, string> = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  TensorFlow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "Scikit-learn": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  NumPy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  Pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
};

const skillGroups = [
  { title: "Programming Languages", icon: Code, skills: ["Python", "C++", "JavaScript", "Java", "C"] },
  { title: "ML Frameworks", icon: Brain, skills: ["TensorFlow", "Scikit-learn"] },
  { title: "Tools & Technologies", icon: Wrench, skills: ["AWS", "Firebase", "MySQL", "NumPy", "Pandas", "Git"] },
  { title: "Soft Skills", icon: Users, skills: ["Problem Solving", "Teamwork", "Adaptability", "Communication", "Time Management"] },
];

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {skillGroups.map((group, i) => (
        <div key={i} className="bg-card rounded-2xl p-6 shadow-md card-hover border border-border">
          <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
            <group.icon size={22} className="text-primary-foreground" />
          </div>
          <h3 className="font-heading font-bold text-heading mb-4">{group.title}</h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full bg-secondary text-foreground"
              >
                {skillIcons[skill] && <img src={skillIcons[skill]} alt={skill} className="w-4 h-4" />}
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
