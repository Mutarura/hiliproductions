import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hiliLogo from "@/assets/hili-logo.png";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between px-6 md:px-16 py-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={hiliLogo} alt="Hili" className="w-10 h-10 object-contain opacity-80" />
          <span className="font-display text-lg tracking-[0.15em] font-bold">HILI</span>
        </Link>
        <Link to="/" className="text-muted-foreground text-sm font-body hover:text-foreground transition-colors">
          ← Back
        </Link>
      </header>

      <div className="max-w-3xl mx-auto px-6 pt-12 pb-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wide mb-12">
            Privacy <span className="font-serif-accent text-primary normal-case">Policy</span>
          </h1>

          <div className="space-y-8 font-body text-sm text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-display text-lg uppercase tracking-[0.15em] text-foreground mb-4">1. Information We Collect</h2>
              <p>When you contact us through our forms, we may collect your name, email address, company information, and any details you voluntarily provide in your message.</p>
            </section>

            <section>
              <h2 className="font-display text-lg uppercase tracking-[0.15em] text-foreground mb-4">2. How We Use Your Information</h2>
              <p>We use collected information to respond to your inquiries, evaluate potential partnerships, and improve our services. We do not sell or rent your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="font-display text-lg uppercase tracking-[0.15em] text-foreground mb-4">3. Data Security</h2>
              <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
            </section>

            <section>
              <h2 className="font-display text-lg uppercase tracking-[0.15em] text-foreground mb-4">4. Cookies</h2>
              <p>Our website may use cookies to enhance your browsing experience. You can disable cookies in your browser settings at any time.</p>
            </section>

            <section>
              <h2 className="font-display text-lg uppercase tracking-[0.15em] text-foreground mb-4">5. Third-Party Links</h2>
              <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites.</p>
            </section>

            <section>
              <h2 className="font-display text-lg uppercase tracking-[0.15em] text-foreground mb-4">6. Your Rights</h2>
              <p>You have the right to request access to, correction of, or deletion of your personal data. Contact us to exercise these rights.</p>
            </section>

            <section>
              <h2 className="font-display text-lg uppercase tracking-[0.15em] text-foreground mb-4">7. Contact</h2>
              <p>For privacy-related inquiries, reach us at <a href="mailto:hilistreaming.co@gmail.com" className="text-primary hover:underline">hilistreaming.co@gmail.com</a>.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
