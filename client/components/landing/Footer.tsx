import { Twitter, Instagram, Music, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 bg-gradient-to-b from-background via-background to-background/80 backdrop-blur-sm py-20 sm:py-28 px-6 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main statement */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6">
            This is Hili.
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground">
            This culture. This community. This moment.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 sm:mb-20">
          <a
            href="https://forms.gle/FR3gKdKcvALNUxiu5"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl hover:shadow-xl sm:hover:shadow-2xl hover:shadow-primary/40 sm:hover:shadow-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden active:scale-95 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Partner with us</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-foreground/30 text-foreground font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl hover:border-foreground/60 hover:bg-foreground/5 transition-all duration-300 hover:scale-105 active:scale-95 text-center"
          >
            <span className="relative">Follow the journey</span>
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 pt-12 sm:pt-16">
          {/* Social links and info */}
          <div className="flex flex-col items-center gap-8">
            {/* Social icons */}
            <div className="flex gap-6">
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
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-primary group-hover:text-secondary transition-colors duration-300" />
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
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                aria-label="X"
              >
                <Twitter size={20} className="text-primary group-hover:text-secondary transition-colors duration-300" />
              </a>
              <a
                href="https://twitch.tv"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                aria-label="Twitch"
              >
                <Music size={20} className="text-primary group-hover:text-secondary transition-colors duration-300" />
              </a>
              <a
                href="mailto:hello@hili.com"
                className="group p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} className="text-primary group-hover:text-secondary transition-colors duration-300" />
              </a>
            </div>

            {/* Copyright and message */}
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                © Hili
              </p>
              <p className="text-sm text-primary font-semibold">
                Something Kenyan is coming!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
