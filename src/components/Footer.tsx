import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-10 px-4 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <span className="font-heading font-bold text-2xl gradient-text">DAK</span>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
          <Github size={18} />
        </a>
        <a href="#" className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="#" className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
          <Mail size={18} />
        </a>
      </div>
      <p className="text-sm text-muted-foreground flex items-center gap-1">
        Built with <Heart size={14} className="text-primary" /> by DAK
      </p>
    </div>
  </footer>
);

export default Footer;
