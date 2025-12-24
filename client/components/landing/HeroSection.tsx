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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 pb-20">
      {/* Animated background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Main headline */}
        <h1
          className={`font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="gradient-text">Hili</span>
          <br className="hidden sm:block" />
          <span className="text-foreground">Culture-Led Digital Productions & Live Media</span>
        </h1>

        {/* Subheading */}
        <p
          className={`text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Built for Africa. Built for Creators. Built for the People.
        </p>

        {/* Description */}
        <p
          className={`text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Hili is a people-first digital productions company creating creator-led shows, live streams, and culturally rooted digital experiences — bringing African culture to life online.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://forms.gle/FR3gKdKcvALNUxiu5"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            I'm a Viewer
          </a>
          <a
            href="https://forms.gle/9fyvancYqXQg8i2XA"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:shadow-xl hover:shadow-secondary/50 transition-all duration-300 hover:scale-105"
          >
            I'm a Creator
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
            className="text-primary hover:text-secondary transition-colors duration-300 animate-bounce"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
