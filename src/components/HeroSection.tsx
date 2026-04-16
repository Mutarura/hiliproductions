import { motion } from "framer-motion";
import hiliLogo from "@/assets/hili-logo.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 40%, hsl(33 80% 50% / 0.04), transparent)",
        }}
      />

      {/* African-inspired decorative accents */}
      <svg
        className="absolute top-10 left-6 md:top-16 md:left-16 w-20 h-20 md:w-32 md:h-32 text-primary/20 pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="50" cy="50" r="30" />
        <circle cx="50" cy="50" r="18" />
        <path d="M50 20 L50 80 M20 50 L80 50 M29 29 L71 71 M71 29 L29 71" />
      </svg>

      <svg
        className="absolute bottom-24 right-6 md:bottom-32 md:right-16 w-24 h-24 md:w-36 md:h-36 text-primary/20 pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M10 50 L50 10 L90 50 L50 90 Z" />
        <path d="M30 50 L50 30 L70 50 L50 70 Z" />
        <circle cx="50" cy="50" r="4" fill="currentColor" />
      </svg>

      {/* Mudcloth-inspired side strips */}
      <div className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 flex-col gap-3 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-primary/40" />
            <div className="w-6 h-[1px] bg-primary/30" />
            <div className="w-1 h-1 rotate-45 bg-primary/40" />
          </div>
        ))}
      </div>
      <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 flex-col gap-3 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="w-1 h-1 rotate-45 bg-primary/40" />
            <div className="w-6 h-[1px] bg-primary/30" />
            <div className="w-1 h-1 rounded-full bg-primary/40" />
          </div>
        ))}
      </div>

      {/* Top kenyan-color accent line */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-none">
        <div className="w-12 h-[2px] bg-[hsl(var(--kenyan-red))]/50" />
        <div className="w-12 h-[2px] bg-foreground/30" />
        <div className="w-12 h-[2px] bg-[hsl(var(--kenyan-green))]/50" />
      </div>

      <motion.img
        src={hiliLogo}
        alt="Hili"
        className="w-20 h-20 md:w-28 md:h-28 object-contain mb-12 opacity-80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <motion.h1
        className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-center leading-[1.05] max-w-5xl uppercase tracking-wide"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        The studio{" "}
        <span className="font-serif-accent text-primary normal-case">Nairobi's creatives</span>{" "}
        actually needed.
      </motion.h1>

      <motion.p
        className="mt-8 text-lg md:text-xl text-muted-foreground text-center max-w-2xl leading-relaxed font-body"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        A monetisation studio built from the inside out, by people that understand
        the culture, the creators & systems that actually work.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <Link
          to="/contact"
          className="mt-12 inline-flex items-center gap-2 border border-primary/40 text-primary px-8 py-4 font-display text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          Get In Touch
        </Link>
      </motion.div>

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
