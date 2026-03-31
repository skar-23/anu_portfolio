import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-10 px-4 border-t border-border">
    <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="gradient-text" style={{ fontFamily: "'Dancing Script', cursive", fontSize: "2rem", fontWeight: 700 }}>
          Anu Kumari
        </a>
      <div className="flex items-center gap-4">
        <a href="https://github.com/942004" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl frost-badge flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
          <Github size={18} />
        </a>
        <a href="https://linkedin.com/in/donipati-anu-kumari" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl frost-badge flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
          <Linkedin size={18} />
        </a>
        <a href="mailto:kanusha5431@gmail.com" className="w-10 h-10 rounded-xl frost-badge flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
          <Mail size={18} />
        </a>
      </div>
      <p className="text-sm text-muted-foreground">© 2025 DAK. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
