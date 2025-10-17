import { Twitter, Instagram, Music } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 bg-background/50 backdrop-blur-sm py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {/* Branding */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-display text-2xl font-bold gradient-text mb-2">
              Hili
            </h3>
            <p className="text-sm text-muted-foreground">
              The Stream. The Story. The Revolution.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-semibold text-foreground">Connect</p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="TikTok"
              >
                <Music size={20} />
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center sm:items-end gap-2">
            <a
              href="https://forms.gle/early-access"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:text-secondary transition-colors duration-300"
            >
              Join Early Access →
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 pt-8 pb-4">
          {/* Copyright and attribution */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © 2025 Hili. Made with ❤️ in Kenya.
            </p>
            <p className="text-sm text-primary font-semibold">
              Something Kenyan is coming!
            </p>
            <p className="text-sm text-primary font-semibold">
              #HiliNdioPlatform 🚀
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
