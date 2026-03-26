import { Briefcase, Calendar, CheckCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const FreelancingSection = () => (
  <SectionWrapper id="experience" className="relative overflow-hidden">
    <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-cyan-400/12 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-primary/12 rounded-full blur-[100px] pointer-events-none" />

    <div className="relative z-10">
      <SectionTitle title="Freelancing" subtitle="Professional work and freelancing" />
      <div className="max-w-3xl mx-auto">
        <div className="glass-card rounded-[2rem] p-6 md:p-10 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2 relative z-10">
            <div>
              <h3 className="font-heading font-bold text-heading text-xl md:text-2xl mb-1">NextGen Inova Private Limited</h3>
              <p className="text-primary font-semibold text-base md:text-lg">Freelancer – Machine Learning Engineer</p>
            </div>
            <div className="flex items-center gap-2 frost-badge px-4 py-2 rounded-xl text-sm font-bold text-muted-foreground/80 self-start sm:self-auto shrink-0">
              <Calendar size={15} className="text-primary" /> June 2025 – Present
            </div>
          </div>

          <div className="w-16 h-px bg-primary/20 mb-6 mt-4" />

          <ul className="space-y-3 relative z-10">
            {[
              "Developed backend workflows in Python for ML automation",
              "Built machine learning pipelines and recommendation systems",
              "Improved recommendation accuracy by 82%",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm md:text-base text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default FreelancingSection;
