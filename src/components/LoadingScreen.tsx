import { motion, AnimatePresence } from "framer-motion";
import hiliLogo from "@/assets/hili-logo.png";

interface LoadingScreenProps {
  isVisible: boolean;
}

const LoadingScreen = ({ isVisible }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ boxShadow: "var(--glow-strong)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0.3, 0.6, 0] }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            <img
              src={hiliLogo}
              alt="Hili"
              className="w-28 h-28 md:w-36 md:h-36 object-contain"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            className="font-display text-4xl md:text-5xl font-bold tracking-[0.3em] text-foreground mt-8 glow-text"
            initial={{ opacity: 0, y: 20, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.3em" }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            HILI
          </motion.h1>

          {/* Loading bar */}
          <motion.div
            className="mt-10 h-[1px] bg-muted overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              className="h-full bg-primary"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1,
                delay: 1,
                repeat: 1,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
