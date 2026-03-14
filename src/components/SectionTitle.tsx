const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-16">
    <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">— {title}</p>
    <h2 className="text-4xl md:text-5xl font-heading font-bold text-heading">{title}</h2>
    {subtitle && <p className="text-muted-foreground text-lg mt-3 max-w-xl">{subtitle}</p>}
  </div>
);

export default SectionTitle;
