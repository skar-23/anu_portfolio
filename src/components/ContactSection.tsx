import { useState } from "react";
import { Mail, Linkedin, Github, Phone, Send, CheckCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const contactInfo = [
  { icon: Mail, label: "Email", value: "anu.kumari@email.com", href: "mailto:anu.kumari@email.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/anukumari", href: "#" },
  { icon: Github, label: "GitHub", value: "github.com/anukumari", href: "#" },
  { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX", href: "tel:+91" },
];

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <SectionWrapper id="contact">
      <SectionTitle title="Let's Connect" subtitle="Feel free to reach out" />
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {contactInfo.map((c, i) => (
            <a
              key={i}
              href={c.href}
              className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-md card-hover"
            >
              <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                <c.icon size={20} className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-heading text-sm">{c.label}</p>
                <p className="text-sm text-muted-foreground">{c.value}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="bg-card rounded-2xl p-6 shadow-lg">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 py-12">
              <CheckCircle size={48} className="text-primary" />
              <p className="font-heading font-bold text-heading text-lg">Message Sent!</p>
              <p className="text-muted-foreground text-sm">Thank you for reaching out.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-heading mb-1 block">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-heading mb-1 block">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-heading mb-1 block">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
