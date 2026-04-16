import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Twitter } from "lucide-react";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/madebyhili/?hl=en", icon: Instagram },
  { label: "X", href: "https://x.com/hilistreams?s=21", icon: Twitter },
  { label: "TikTok", href: "https://www.tiktok.com/@madebyhili?_r=1&_t=ZS-95aXKUcUiby", icon: null, text: "TikTok" },
  { label: "YouTube", href: "https://youtube.com/@madebyhili?si=2TsaDKhOZdLkYNqZ", icon: Youtube },
  { label: "Kick", href: "https://kick.com/hili-streams", icon: null, text: "Kick" },
];

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

          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex items-center gap-5">
              {socials.map(({ label, href, icon: Icon, text }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {Icon ? (
                    <Icon className="w-4 h-4" />
                  ) : (
                    <span className="text-xs font-display tracking-[0.15em] uppercase">{text}</span>
                  )}
                </a>
              ))}
            </div>
            <div className="flex gap-6">
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
