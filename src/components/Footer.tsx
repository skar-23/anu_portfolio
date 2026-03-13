import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-4 border-t border-border text-center">
    <p className="text-sm text-muted-foreground">
      © Donipati Anu Kumari
    </p>
    <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 mt-1">
      Built with <Heart size={14} className="text-primary" /> passion
    </p>
  </footer>
);

export default Footer;
