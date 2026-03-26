import { useState } from "react";
import { Mail, Linkedin, Github, Phone, Send, CheckCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const contactInfo = [
  { icon: Mail, label: "Email", value: "kanusha5431@gmail.com", href: "mailto:kanusha5431@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/donipati-anu-kumari", href: "https://linkedin.com/in/donipati-anu-kumari" },
  { icon: Github, label: "GitHub", value: "github.com/942004", href: "https://github.com/942004" },
  { icon: Phone, label: "Phone", value: "+91 78478 98609", href: "tel:+917847898609" },
];

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const res = await fetch("https://formspree.io/f/mnjoqeqj", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <SectionWrapper id="contact" className="relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[45%] h-[70%] bg-primary/12 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[45%] h-[70%] bg-accent/12 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative z-10">
      <SectionTitle title="Let's Connect" subtitle="Feel free to reach out" />
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {contactInfo.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 glass-card rounded-2xl p-5 card-hover group relative overflow-hidden"
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
        <div className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden">
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
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all placeholder:text-muted-foreground/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-heading mb-2 block">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all placeholder:text-muted-foreground/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-heading mb-2 block">Message</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-all placeholder:text-muted-foreground/50"
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
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
