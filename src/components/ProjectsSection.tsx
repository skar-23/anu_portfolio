import { Github } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import projectMl from "@/assets/project-ml.jpg";
import projectGesture from "@/assets/project-gesture.jpg";
import projectSentiment from "@/assets/project-sentiment.jpg";
import projectChurn from "@/assets/Churn.png";

const projects = [
  {
    title: "Slow Learner Detection using ML",
    desc: "An ML-based system to identify and support slow learners using predictive analytics and classification algorithms.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    image: projectMl,
    github: "https://github.com/942004/slow-learner-",
  },
  {
    title: "Hand Gesture Recognition System",
    desc: "Real-time hand gesture recognition using computer vision and deep learning.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    image: projectGesture,
    github: "https://github.com/942004/hand-gesture-volume-control",
  },
  {
    title: "Customer Churn Prediction",
    desc: "Predicts customer churn using machine learning classification models to help businesses retain customers proactively.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    image: projectChurn,
    github: "https://github.com/vskr-23/CODING-SAMURAI-INTERNSHIP-TASK/tree/main/TASK%205.Customer%20Churn%20Prediction",
  },
  {
    title: "Anomaly Detection in Industrial IoT",
    desc: "Detects anomalies in industrial IoT sensor data using machine learning for predictive maintenance and fault detection.",
    tech: ["Python", "TensorFlow", "Flask"],
    image: projectMl,
    github: "https://github.com/942004/Anomaly-detection-in-industrial-IoT",
  },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects" className="relative overflow-hidden">
    {/* Vibrant background elements for glassmorphism transparency */}
    <div className="absolute top-0 right-0 w-[45%] h-[45%] bg-primary/12 rounded-full blur-[100px] animate-pulse pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[45%] h-[45%] bg-accent/12 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

    <div className="relative z-10">
      <SectionTitle title="Projects" subtitle="Some of my recent work" />
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="glass-card rounded-[2rem] overflow-hidden group relative flex flex-col">
            {/* APPLE GLASS REFLECTION/SHINE */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="h-60 overflow-hidden relative">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="px-3.5 py-1.5 text-[10px] font-bold tracking-wider uppercase rounded-xl bg-white/10 text-white backdrop-blur-2xl border border-white/20 shadow-xl">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 md:p-10 flex-1 flex flex-col">
              <h3 className="font-heading font-bold text-xl md:text-2xl text-heading mb-3 group-hover:text-primary transition-colors duration-300">{p.title}</h3>
              <p className="text-muted-foreground/80 text-sm md:text-base mb-6 md:mb-8 leading-relaxed flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-3">
                <a href={p.github || "#"} target={p.github ? "_blank" : undefined} rel={p.github ? "noopener noreferrer" : undefined} className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold rounded-2xl bg-white/5 border border-white/10 text-foreground hover:bg-white/10 transition-all active:scale-95">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
