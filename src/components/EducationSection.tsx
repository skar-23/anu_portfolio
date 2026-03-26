import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import EducationCard from "./EducationCard";

const educationData = [
  {
  image: "/lpu.jpg",
    school: "Lovely Professional University",
    degree: "B.Tech Computer Science and Engineering",
    score: "CGPA: 7.01",
    period: "2023 – Present",
    location: "Punjab, India",
    link: "https://www.lpu.in/about-lpu/",
  },
  {
  image: "/kv.png",
    school: "Kendriya Vidyalaya Khurda Road",
    degree: "Intermediate (+2)",
    score: "Percentage: 76%",
    period: "2020 – 2022",
    location: "Odisha, India",
    link: "https://khurdaroad.kvs.ac.in/",
  },
];

const EducationSection = () => (
  <SectionWrapper id="education" className="relative overflow-hidden">
    {/* Vibrant background elements for glassmorphism transparency */}
    <div className="absolute top-0 left-0 w-[55%] h-[55%] bg-gradient-to-br from-primary/12 to-accent/12 rounded-full blur-[100px] animate-pulse pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[55%] h-[55%] bg-gradient-to-tl from-purple-500/12 to-pink-500/12 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[30%] bg-primary/7 rounded-full blur-[80px] pointer-events-none" />
    
    <div className="relative z-10">
      <SectionTitle title="Education" subtitle="My academic journey" />
      {/* Asymmetric grid — current card larger */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
        {educationData.map((ed, i) => (
          <div key={i} className={i === 0 ? "md:col-span-3" : "md:col-span-2"}>
            <EducationCard index={i} image={ed.image} school={ed.school} degree={ed.degree} score={ed.score} period={ed.period} location={ed.location} link={ed.link} />
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default EducationSection;
