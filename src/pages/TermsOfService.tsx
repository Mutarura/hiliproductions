import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hiliLogo from "@/assets/hili-logo.png";

const TermsOfService = () => {
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
            Terms of <span className="font-serif-accent text-primary normal-case">Service</span>
          </h1>

          <div className="space-y-8 font-body text-sm text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-display text-lg uppercase tracking-[0.15em] text-foreground mb-4">1. Agreement to Terms</h2>
              <p>By accessing or using Hili's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </section>

            <section>
              <h2 className="font-display text-lg uppercase tracking-[0.15em] text-foreground mb-4">2. Services</h2>
              <p>Hili provides creator monetisation consulting, brand partnership facilitation, content strategy, and related services. We reserve the right to modify or discontinue any service at any time without prior notice.</p>
            </section>

            <section>
              <h2 className="font-display text-lg uppercase tracking-[0.15em] text-foreground mb-4">3. User Responsibilities</h2>
              <p>You agree to provide accurate information when contacting us and to use our services in compliance with all applicable laws and regulations.</p>
            </section>

            <section>
              <h2 className="font-display text-lg uppercase tracking-[0.15em] text-foreground mb-4">4. Intellectual Property</h2>
              <p>All content, branding, and materials on this website are the property of Hili and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.</p>
            </section>

            <section>
              <h2 className="font-display text-lg uppercase tracking-[0.15em] text-foreground mb-4">5. Limitation of Liability</h2>
              <p>Hili shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.</p>
            </section>

            <section>
              <h2 className="font-display text-lg uppercase tracking-[0.15em] text-foreground mb-4">6. Governing Law</h2>
              <p>These terms shall be governed by the laws of the Republic of Kenya. Any disputes shall be resolved in the courts of Nairobi, Kenya.</p>
            </section>

            <section>
              <h2 className="font-display text-lg uppercase tracking-[0.15em] text-foreground mb-4">7. Contact</h2>
              <p>For questions about these terms, contact us at <a href="mailto:hilistreaming.co@gmail.com" className="text-primary hover:underline">hilistreaming.co@gmail.com</a>.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
