import { FileText, Download } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const ResumeSection = () => (
  <SectionWrapper id="resume">
    <SectionTitle title="Resume" subtitle="Download or view my resume" />
    <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 shadow-lg text-center">
      <div className="w-full h-64 bg-muted rounded-xl flex items-center justify-center mb-6">
        <div className="text-center">
          <FileText size={48} className="text-primary mx-auto mb-3" />
          <p className="text-muted-foreground">Resume Preview</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          <FileText size={18} /> View Resume
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Download size={18} /> Download Resume
        </a>
      </div>
    </div>
  </SectionWrapper>
);

export default ResumeSection;
