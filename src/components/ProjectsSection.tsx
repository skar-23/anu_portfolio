import { ExternalLink, Github } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import projectMl from "@/assets/project-ml.jpg";
import projectGesture from "@/assets/project-gesture.jpg";
import projectSentiment from "@/assets/project-sentiment.jpg";
import projectChatbot from "@/assets/project-chatbot.jpg";

const projects = [
  {
    title: "Slow Learner Detection using ML",
    desc: "An ML-based system to identify and support slow learners using predictive analytics and classification algorithms.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    image: projectMl,
  },
  {
    title: "Hand Gesture Recognition System",
    desc: "Real-time hand gesture recognition using computer vision and deep learning.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    image: projectGesture,
  },
  {
    title: "Sentiment Analysis Dashboard",
    desc: "Dashboard that analyzes sentiment from text data using NLP techniques.",
    tech: ["Python", "NLP", "React"],
    image: projectSentiment,
  },
  {
    title: "AI Powered Chatbot",
    desc: "Chatbot built with NLP for automated customer support and information retrieval.",
    tech: ["Python", "TensorFlow", "Flask"],
    image: projectChatbot,
  },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <SectionTitle title="Projects" subtitle="Some of my recent work" />
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((p, i) => (
        <div key={i} className="bg-card rounded-2xl overflow-hidden card-hover border border-border group relative">
          <div className="h-52 overflow-hidden relative">
            <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            <div className="absolute bottom-4 left-5 flex gap-2">
              {p.tech.map((t) => (
                <span key={t} className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary backdrop-blur-sm border border-primary/30">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="p-7">
            <h3 className="font-heading font-bold text-xl text-heading mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{p.desc}</p>
            <div className="flex gap-3">
              <a href="#" className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold rounded-full gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                <ExternalLink size={14} /> Live Demo
              </a>
              <a href="#" className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors">
                <Github size={14} /> GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
