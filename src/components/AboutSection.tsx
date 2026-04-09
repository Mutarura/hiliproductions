import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative py-32 md:py-48 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.3] text-foreground"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Nairobi's creative market is{" "}
          <span className="text-gradient">growing</span> fast. Attention is
          everywhere but structured{" "}
          <span className="text-gradient">systems</span> to sustain it aren't.
          When creators & brands need{" "}
          <span className="text-gradient">more</span>, they come to{" "}
          <span className="text-gradient">Hili</span>.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
