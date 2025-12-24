import { Twitter, Instagram, Music } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 bg-gradient-to-b from-background via-background to-background/80 backdrop-blur-sm py-16 px-6 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-16">
          {/* Branding */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-display text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
              Hili
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Culture-Led Digital Productions & Live Media
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-6">
            <p className="text-sm font-semibold text-foreground uppercase tracking-widest">Connect</p>
            <div className="flex gap-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-primary group-hover:text-secondary transition-colors duration-300" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-primary group-hover:text-secondary transition-colors duration-300" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                aria-label="TikTok"
              >
                <Music size={20} className="text-primary group-hover:text-secondary transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center sm:items-end gap-3">
            <a
              href="https://forms.gle/FR3gKdKcvALNUxiu5"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Join Early Access →</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 pt-12">
          {/* Copyright and attribution */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © 2025 Hili. Made with ❤️ in Kenya.
            </p>
            <p className="text-xs text-primary/60">
              Bringing African culture to life online.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
