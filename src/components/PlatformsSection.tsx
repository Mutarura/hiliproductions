import { motion } from "framer-motion";

const platforms = [
  "Twitch",
  "Kick",
  "YouTube",
  "Instagram",
  "TikTok",
  "Twitter/X",
];

const PlatformsSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="flex flex-col items-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {platforms.map((platform) => (
            <motion.span
              key={platform}
              className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground/30 hover:text-foreground hover:glow-text transition-all duration-500 cursor-default tracking-wide"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {platform}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformsSection;
