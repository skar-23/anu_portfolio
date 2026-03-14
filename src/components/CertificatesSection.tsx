import { ExternalLink, Award } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import certMl from "@/assets/cert-ml.jpg";
import certDl from "@/assets/cert-dl.jpg";
import certAws from "@/assets/cert-aws.jpg";
import certPython from "@/assets/cert-python.jpg";
import certData from "@/assets/cert-data.jpg";

const certificates = [
  { title: "Machine Learning Specialization", issuer: "Coursera / Stanford", year: "2024", image: certMl },
  { title: "Deep Learning Specialization", issuer: "Coursera / DeepLearning.ai", year: "2024", image: certDl },
  { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2024", image: certAws },
  { title: "Python for Data Science", issuer: "Coursera / IBM", year: "2023", image: certPython },
  { title: "Data Science Professional", issuer: "Coursera / Google", year: "2024", image: certData },
];

const CertificatesSection = () => (
  <SectionWrapper id="certificates">
    <SectionTitle title="Certificates" subtitle="Professional certifications and courses" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {certificates.map((c, i) => (
        <div key={i} className="bg-card rounded-2xl overflow-hidden card-hover border border-border group relative">
          <div className="h-48 overflow-hidden relative">
            <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <Award size={18} className="text-primary-foreground" />
            </div>
          </div>
          <div className="p-7">
            <h3 className="font-heading font-bold text-heading text-lg mb-1">{c.title}</h3>
            <p className="text-sm text-muted-foreground mb-1">{c.issuer}</p>
            <p className="text-sm text-primary font-bold mb-5">{c.year}</p>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold rounded-full gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={14} /> View Certificate
            </a>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default CertificatesSection;
