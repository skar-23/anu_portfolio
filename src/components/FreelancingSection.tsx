import { Briefcase, Calendar, CheckCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const FreelancingSection = () => (
  <SectionWrapper id="experience">
    <SectionTitle title="Freelancing Experience" />
    <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 shadow-lg card-hover border border-border">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shrink-0">
          <Briefcase size={24} className="text-primary-foreground" />
        </div>
        <div className="flex-1">
          <h3 className="font-heading font-bold text-xl text-heading">NextGen Inova Private Limited</h3>
          <p className="text-primary font-semibold mb-1">Freelancer – Machine Learning Engineer</p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
            <Calendar size={14} /> June 2025 – Present
          </p>
          <ul className="space-y-3">
            {[
              "Developed backend workflows in Python for ML automation",
              "Built machine learning pipelines and recommendation systems",
              "Improved recommendation accuracy by 82%",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground">
                <CheckCircle size={18} className="text-accent mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default FreelancingSection;
