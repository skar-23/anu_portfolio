import { Code, Brain, Wrench, Users } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const skillIcons: Record<string, string> = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  Keras: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
  OpenCV: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
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
  { title: "ML Frameworks", icon: Brain, skills: ["TensorFlow", "Scikit-learn", "Keras", "OpenCV"] },
  { title: "Tools & Technologies", icon: Wrench, skills: ["AWS", "Firebase", "MySQL", "NumPy", "Pandas", "Git"] },
  { title: "Soft Skills", icon: Users, skills: ["Problem Solving", "Teamwork", "Adaptability", "Communication", "Time Management"] },
];

const SkillsSection = () => (
  <SectionWrapper id="skills" className="relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/12 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-accent/12 rounded-full blur-[100px] pointer-events-none" />

    <div className="relative z-10">
      <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, i) => (
          <div key={i} className="glass-card rounded-[2rem] p-6 md:p-8 group relative overflow-hidden transition-all duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center mb-5 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <group.icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-heading text-lg mb-5 group-hover:text-primary transition-colors duration-300">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-semibold rounded-xl text-foreground frost-badge transition-all hover:-translate-y-1">
                  {skillIcons[skill] && <img src={skillIcons[skill]} alt={skill} className="w-4 h-4" />}
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default SkillsSection;
