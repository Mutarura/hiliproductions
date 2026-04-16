import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="space-y-2">
            <p className="font-display text-sm tracking-[0.2em] text-muted-foreground uppercase">
              Based in Nairobi
            </p>
            <a
              href="mailto:hilistreaming.co@gmail.com"
              className="text-foreground hover:text-primary transition-colors font-body text-sm"
            >
              hilistreaming.co@gmail.com
            </a>
          </div>

          <div className="flex gap-6 md:gap-8">
            <Link
              to="/terms"
              className="text-xs text-muted-foreground font-body hover:text-foreground transition-colors"
            >
              Terms Of Service
            </Link>
            <Link
              to="/privacy"
              className="text-xs text-muted-foreground font-body hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
        >
          <span
            className="font-display text-7xl md:text-9xl font-bold tracking-[0.2em] text-primary select-none"
            style={{
              textShadow:
                "0 0 40px hsl(33 80% 50% / 0.3), 0 0 80px hsl(33 80% 50% / 0.15)",
            }}
          >
            HILI
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
