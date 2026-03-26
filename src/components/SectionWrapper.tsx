import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const SectionWrapper = ({ children, id, className = "" }: SectionWrapperProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    style={{ willChange: "transform, opacity" }}
    className={`section-padding ${className}`}
  >
    <div className="max-w-screen-2xl mx-auto">{children}</div>
  </motion.section>
);

export default SectionWrapper;
