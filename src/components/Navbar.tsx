import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{
      background: "linear-gradient(135deg, rgba(10,25,50,0.72) 0%, rgba(6,16,36,0.60) 100%)",
      backdropFilter: "blur(28px) saturate(180%)",
      WebkitBackdropFilter: "blur(28px) saturate(180%)",
      borderBottom: "1px solid rgba(80,195,215,0.15)",
      boxShadow: "0 4px 32px rgba(0,150,180,0.12), inset 0 1px 0 rgba(100,200,220,0.12)"
    }}>
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-6 md:px-12 h-16">
        <a href="#home" className="font-heading font-bold text-2xl tracking-tight">
          <span className="gradient-text">DAK</span>
        </a>
        <div className="hidden md:flex gap-1 items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-xl transition-all duration-200"
              style={{ position: "relative" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(80,195,215,0.10)";
                (e.currentTarget as HTMLElement).style.boxShadow = "inset 0 1px 0 rgba(100,200,220,0.15)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
        <button className="md:hidden text-foreground p-2 rounded-xl transition-all" onClick={() => setOpen(!open)}
          style={{ background: open ? "rgba(80,195,215,0.12)" : "transparent" }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(10,25,50,0.85) 0%, rgba(6,16,36,0.75) 100%)",
              borderBottom: "1px solid rgba(80,195,215,0.12)",
            }}
          >
            <div className="flex flex-col px-4 py-3 gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary rounded-xl transition-all duration-200 hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
