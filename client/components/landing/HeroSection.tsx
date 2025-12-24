import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNextSection = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16 sm:pt-20 pb-16 sm:pb-20">
      {/* Animated background gradient elements with enhanced visuals */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orb - smaller on mobile */}
        <div className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-48 sm:w-96 h-48 sm:h-96 bg-primary/20 sm:bg-primary/30 rounded-full blur-3xl animate-glow-pulse"></div>
        {/* Secondary gradient orb - smaller on mobile */}
        <div className="absolute -bottom-24 -left-24 sm:-bottom-32 sm:-left-32 w-48 sm:w-96 h-48 sm:h-96 bg-secondary/15 sm:bg-secondary/25 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }}></div>
        {/* Tertiary accent - hidden on mobile */}
        <div className="hidden sm:block absolute top-1/2 left-1/3 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Main headline */}
        <h1
          className={`font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 transition-all duration-1000 leading-tight ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">Hili</span>
          <br className="hidden sm:block" />
          <span className="text-foreground text-2xl sm:text-4xl md:text-5xl lg:text-6xl">Culture-Led Digital Productions & Live Media</span>
        </h1>

        {/* Subheading */}
        <p
          className={`text-sm sm:text-lg md:text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent max-w-3xl mx-auto mb-3 sm:mb-4 transition-all duration-1000 delay-200 px-2 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Built for Africa. Built for Creators. Built for the People.
        </p>

        {/* Description */}
        <p
          className={`text-xs sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 transition-all duration-1000 delay-200 px-2 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Hili is a people-first digital productions company creating creator-led shows, live streams, and culturally rooted digital experiences — bringing African culture to life online.
        </p>

        {/* CTA Buttons with enhanced styling */}
        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 transition-all duration-1000 delay-300 px-2 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://forms.gle/FR3gKdKcvALNUxiu5"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl hover:shadow-xl sm:hover:shadow-2xl hover:shadow-primary/40 sm:hover:shadow-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Explore Hili</span>
          </a>
          <a
            href="https://forms.gle/9fyvancYqXQg8i2XA"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-secondary to-primary text-white font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl border border-primary/30 hover:border-primary/80 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-secondary/40 sm:hover:shadow-secondary/50 transition-all duration-300 hover:scale-105 overflow-hidden active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Join the Community</span>
          </a>
        </div>

        {/* Scroll hint */}
        <div
          className={`flex flex-col items-center gap-2 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm text-muted-foreground">Discover what's coming</p>
          <button
            onClick={scrollToNextSection}
            className="text-primary hover:text-secondary transition-colors duration-300 animate-bounce group"
          >
            <ChevronDown size={28} className="group-hover:scale-125 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
