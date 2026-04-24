import { motion } from "framer-motion";

const platforms: { name: string; href?: string }[] = [
  { name: "TWITCH" },
  { name: "KICK", href: "https://kick.com/hili-streams" },
  { name: "YOUTUBE", href: "https://www.youtube.com/@madebyhili" },
  { name: "INSTAGRAM", href: "https://www.instagram.com/madebyhili/" },
  { name: "TIKTOK", href: "https://www.tiktok.com/@madebyhili" },
  { name: "TWITTER / X", href: "https://x.com/hilistreams" },
];

const AboutSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary text-xs tracking-[0.3em] font-display uppercase font-semibold">
              About
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold uppercase leading-[1.1] tracking-wide">
            When you need more, you come to{" "}
            <span className="font-serif-accent text-primary normal-case">Hili</span>.
          </h2>

          <div className="kenyan-dots mt-10" />
        </motion.div>

        {/* Right column */}
        <motion.div
          className="space-y-8 md:pt-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-foreground/80 text-base md:text-lg leading-relaxed font-body">
            Nairobi's creative market is growing fast.{" "}
            <span className="text-foreground font-medium">Attention is everywhere</span>{" "}
            — but structured systems to sustain it aren't.
          </p>

          <p className="text-foreground/80 text-base md:text-lg leading-relaxed font-body">
            Building the system that works for {" "}
            <span className="text-foreground font-medium">you.</span>{" "} 
          </p>

          {/* Platforms */}
          <div className="pt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-muted-foreground/40" />
              <span className="text-muted-foreground text-xs tracking-[0.25em] font-display uppercase font-medium">
                Platforms We Work Across
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {platforms.map((p) =>
                p.href ? (
                  <a
                    key={p.name}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border text-foreground/70 text-xs tracking-[0.15em] font-body px-5 py-2.5 hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    {p.name}
                  </a>
                ) : (
                  <span
                    key={p.name}
                    className="border border-border text-foreground/70 text-xs tracking-[0.15em] font-body px-5 py-2.5 hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {p.name}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
