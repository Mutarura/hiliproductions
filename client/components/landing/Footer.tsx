import { Instagram, Mail } from "lucide-react";

// Custom social icons using SVG
const XIcon = (props: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={props.className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.637l-5.205-6.802-5.94 6.802h-3.31l7.73-8.835L2.423 2.25h6.802l4.706 6.223 5.303-6.223zM17.534 20.066h1.885L6.455 3.906H4.482l13.052 16.16z" />
  </svg>
);

const YouTubeIcon = (props: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={props.className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const TwitchIcon = (props: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={props.className}>
    <path d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.116v-15.364h16.474v11.782z" />
    <path d="M11.857 7.241h-1.969v5.892h1.969v-5.892zm4.671 0h-1.969v5.892h1.969v-5.892z" />
  </svg>
);

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
            <div className="flex gap-4 sm:gap-6">
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
                <TwitterIcon className="text-primary group-hover:text-secondary transition-colors duration-300" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                aria-label="TikTok"
              >
                <TiktokIcon className="text-primary group-hover:text-secondary transition-colors duration-300" />
              </a>
              <a
                href="https://twitch.tv"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                aria-label="Twitch"
              >
                <TwitchIcon className="text-primary group-hover:text-secondary transition-colors duration-300" />
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
                © Hili Productions
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
