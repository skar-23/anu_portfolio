const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-heading mb-3">{title}</h2>
    {subtitle && <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>}
    <div className="mt-4 mx-auto w-20 h-1 rounded-full gradient-primary" />
  </div>
);

export default SectionTitle;
