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
              className="flex items-center gap-4 bg-card rounded-2xl p-5 card-hover border border-border group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full gradient-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                <c.icon size={20} className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-heading font-bold text-heading">{c.label}</p>
                <p className="text-sm text-muted-foreground">{c.value}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="bg-card rounded-2xl p-8 border border-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 gradient-primary" />
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-12">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                <CheckCircle size={32} className="text-primary-foreground" />
              </div>
              <p className="font-heading font-bold text-heading text-xl">Message Sent!</p>
              <p className="text-muted-foreground">Thank you for reaching out.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-semibold text-heading mb-2 block">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-heading mb-2 block">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-heading mb-2 block">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-all"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
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
