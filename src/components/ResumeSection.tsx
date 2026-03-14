import { FileText, Download } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const ResumeSection = () => (
  <SectionWrapper id="resume">
    <SectionTitle title="Resume" subtitle="Download or view my resume" />
    <div className="max-w-2xl mx-auto bg-card rounded-2xl p-10 text-center border border-border relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 gradient-primary" />
      <div className="w-full h-64 bg-secondary rounded-xl flex items-center justify-center mb-8 border border-border">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
            <FileText size={32} className="text-primary-foreground" />
          </div>
          <p className="text-muted-foreground font-medium">Resume Preview</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
          <FileText size={18} /> View Resume
        </a>
        <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-colors">
          <Download size={18} /> Download Resume
        </a>
      </div>
    </div>
  </SectionWrapper>
);

export default ResumeSection;
