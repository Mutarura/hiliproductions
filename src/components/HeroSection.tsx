import { motion } from "framer-motion";
import hiliLogo from "@/assets/hili-logo.png";
import nairobiSkyline from "@/assets/NairobiSkyline.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat opacity-35 pointer-events-none md:opacity-45"
        style={{
          backgroundImage: `url(${nairobiSkyline})`,
          backgroundPosition: "center 55%",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, hsl(20 25% 4% / 0.72) 0%, hsl(20 25% 4% / 0.45) 34%, hsl(20 25% 4% / 0.55) 68%, hsl(20 25% 4% / 0.84) 100%), radial-gradient(ellipse 60% 42% at 50% 42%, hsl(33 80% 50% / 0.09), transparent 68%)",
        }}
      />

      <motion.img
        src={hiliLogo}
        alt="Hili"
        className="relative z-10 w-20 h-20 md:w-28 md:h-28 object-contain mb-12 opacity-80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <motion.h1
        className="relative z-10 font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-center leading-[1.05] max-w-5xl uppercase tracking-wide"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        Forged by{" "}
        <span className="font-serif-accent text-primary normal-case">Africa's Creativity </span>{" "}
        
      </motion.h1>

      <motion.p
        className="relative z-10 mt-8 text-lg md:text-xl text-muted-foreground text-center max-w-2xl leading-relaxed font-body"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        A production partner rooted in community, dedicated to building a sustainable and scalable ecosystem for African creativity.
      </motion.p>

      <motion.div
        className="relative z-10"
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
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2"
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
