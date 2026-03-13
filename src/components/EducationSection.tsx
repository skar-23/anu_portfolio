import { GraduationCap, MapPin, Calendar } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import lpuImg from "@/assets/lpu-campus.jpg";
import kvImg from "@/assets/kv-school.jpg";

const educationData = [
  {
    image: lpuImg,
    school: "Lovely Professional University",
    degree: "B.Tech Computer Science and Engineering",
    score: "CGPA: 7.01",
    period: "2023 – Present",
    location: "Punjab, India",
  },
  {
    image: kvImg,
    school: "Kendriya Vidyalaya Khurda Road",
    degree: "Intermediate (+2)",
    score: "Percentage: 76%",
    period: "2020 – 2022",
    location: "Odisha, India",
  },
];

const EducationSection = () => (
  <SectionWrapper id="education">
    <SectionTitle title="Education" subtitle="My academic journey" />
    <div className="grid md:grid-cols-2 gap-8">
      {educationData.map((ed, i) => (
        <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-lg card-hover">
          <div className="h-48 overflow-hidden">
            <img src={ed.image} alt={ed.school} className="w-full h-full object-cover" />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={20} className="text-primary" />
              <h3 className="font-heading font-bold text-lg text-heading">{ed.school}</h3>
            </div>
            <p className="font-medium text-foreground mb-1">{ed.degree}</p>
            <p className="text-primary font-semibold mb-3">{ed.score}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar size={14} /> {ed.period}</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> {ed.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default EducationSection;
