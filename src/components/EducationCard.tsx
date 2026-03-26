import { GraduationCap, MapPin, Calendar } from "lucide-react";

type Props = {
  image: string;
  school: string;
  degree: string;
  score: string;
  period: string;
  location: string;
  index: number;
  link?: string;
};

export default function EducationCard({ image, school, degree, score, period, location, index, link }: Props) {
  return (
    <div className="relative w-full h-[380px] sm:h-[440px] md:h-[500px] rounded-[2rem] overflow-hidden group">
      {/* Cinematic background image */}
      <img
        src={image}
        alt={school}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient — stronger at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

      {/* Accent glow line on left edge */}
      <div className="absolute left-0 top-8 bottom-8 w-1 rounded-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-80" />

      {/* Content — pinned to bottom left */}
      <div className="absolute inset-0 flex flex-col justify-end px-5 sm:px-8 md:px-10 pb-5 sm:pb-8 md:pb-10">
        {/* Index badge */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
            <GraduationCap size={15} className="text-primary-foreground" />
          </div>
          <span className="text-xs font-bold text-primary/80 tracking-widest uppercase">
            {index === 0 ? "Current" : "Previous"}
          </span>
        </div>

        <h2 className="font-heading font-bold text-white text-lg sm:text-2xl md:text-3xl leading-tight mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">
          {school}
        </h2>
        <p className="text-white/70 text-sm md:text-base mb-4 font-medium">{degree}</p>

        {/* Score + meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-4 py-1.5 rounded-xl bg-primary/20 border border-primary/30 text-primary font-bold text-sm backdrop-blur-sm">
            {score}
          </span>
          <span className="flex items-center gap-1.5 text-white/60 text-xs font-semibold">
            <Calendar size={13} className="text-primary/70" /> {period}
          </span>
          <span className="flex items-center gap-1.5 text-white/60 text-xs font-semibold">
            <MapPin size={13} className="text-primary/70" /> {location}
          </span>
        </div>

        {/* Know More — inline, right aligned */}
        <div className="flex justify-end">
          <a href={link || "#"} target={link ? "_blank" : undefined} rel={link ? "noopener noreferrer" : undefined} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl frost-badge text-xs font-bold text-white/80 hover:text-primary hover:border-primary/40 transition-all duration-200">
            Know More <span className="text-primary">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
