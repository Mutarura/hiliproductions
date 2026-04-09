import { motion } from "framer-motion";
import hiliLogo from "@/assets/hili-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 40%, hsl(38 100% 55% / 0.04), transparent)",
        }}
      />

      {/* Logo */}
      <motion.img
        src={hiliLogo}
        alt="Hili"
        className="w-20 h-20 md:w-28 md:h-28 object-contain mb-12 opacity-80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Main headline */}
      <motion.h1
        className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-center leading-[1.05] max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        The studio{" "}
        <span className="text-gradient">Nairobi's creatives</span>{" "}
        actually <span className="text-gradient">needed</span>.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="mt-8 text-lg md:text-xl text-muted-foreground text-center max-w-2xl leading-relaxed font-body"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        A monetisation studio built from the inside out, by people that understand
        the <span className="text-foreground font-medium">culture</span>, the
        creators & systems that actually work.
      </motion.p>

      {/* CTA */}
      <motion.a
        href="mailto:hilistreaming.co@gmail.com"
        className="mt-12 inline-flex items-center gap-2 border border-primary/40 text-primary px-8 py-4 font-display text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Get In Touch
      </motion.a>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-[0.2em] text-muted-foreground font-body uppercase">
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-8 bg-muted-foreground/30"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
