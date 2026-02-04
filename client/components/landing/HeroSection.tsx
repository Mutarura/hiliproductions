import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { HiliLogo } from "@/components/landing/HiliLogo";
import { MobileNav } from "@/components/landing/MobileNav";
import "../styles/africa-glow.css";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNextSection = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <>
      <MobileNav />
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-4 sm:pt-8 pb-12 sm:pb-20">
      {/* Logo Header */}
      <div className="absolute top-4 sm:top-8 left-4 sm:left-8 z-50 w-16 sm:w-24 lg:w-28">
        <HiliLogo className="w-full h-auto" />
      </div>
      {/* Animated background gradient elements with enhanced visuals */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Africa outline with flowing glow - left side */}
        <svg
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-96 h-96 sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] opacity-20 sm:opacity-25 pointer-events-none"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <style>
              {`
                .africa-path {
                  stroke: url(#glowGradient);
                  stroke-width: 2;
                  fill: none;
                  filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.6));
                  animation: flowingGlow 4s ease-in-out infinite;
                }

                @keyframes flowingGlow {
                  0% {
                    filter: drop-shadow(0 0 4px rgba(168, 85, 247, 0.3)) drop-shadow(0 0 8px rgba(168, 85, 247, 0.1));
                    opacity: 0.15;
                  }
                  50% {
                    filter: drop-shadow(0 0 12px rgba(168, 85, 247, 0.8)) drop-shadow(0 0 20px rgba(168, 85, 247, 0.4));
                    opacity: 0.35;
                  }
                  100% {
                    filter: drop-shadow(0 0 4px rgba(168, 85, 247, 0.3)) drop-shadow(0 0 8px rgba(168, 85, 247, 0.1));
                    opacity: 0.15;
                  }
                }
              `}
            </style>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.8)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0.4)" />
            </linearGradient>
          </defs>
          {/* Eastern half of Africa outline - simplified for visual effect */}
          <path
            className="africa-path"
            d="M 350 150 Q 380 160 400 180 L 420 200 Q 440 220 450 250 L 460 280 Q 465 310 460 340 L 450 370 Q 440 395 420 410 L 400 420 Q 380 425 360 420 L 340 410 Q 320 395 310 370 L 300 340 Q 295 310 300 280 L 310 250 Q 320 220 340 200 L 360 180 Q 370 165 350 150"
          />
          {/* Additional coastline detail */}
          <path
            className="africa-path"
            d="M 420 200 Q 450 240 460 280 Q 465 330 450 370 Q 440 400 410 420"
            style={{ animationDelay: "0.5s" }}
          />
        </svg>

        {/* Primary gradient orb - smaller on mobile */}
        <div className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-48 sm:w-96 h-48 sm:h-96 bg-primary/20 sm:bg-primary/30 rounded-full blur-3xl animate-glow-pulse"></div>
        {/* Secondary gradient orb - smaller on mobile */}
        <div
          className="absolute -bottom-24 -left-24 sm:-bottom-32 sm:-left-32 w-48 sm:w-96 h-48 sm:h-96 bg-secondary/15 sm:bg-secondary/25 rounded-full blur-3xl animate-glow-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        {/* Tertiary accent - hidden on mobile */}
        <div
          className="hidden sm:block absolute top-1/2 left-1/3 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-glow-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-6 text-center mt-6 sm:mt-12 lg:mt-0">
        {/* Main headline */}
        <h1
          className={`font-display text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-6 transition-all duration-1000 leading-tight text-foreground ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          African Culture, In Motion.
        </h1>

        {/* Subheading */}
        <p
          className={`text-sm sm:text-xl md:text-2xl font-semibold text-foreground max-w-3xl mx-auto mb-3 sm:mb-6 transition-all duration-1000 delay-200 px-2 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          A culture-led digital productions and live media company.
        </p>

        {/* Micro-tagline */}
        <p
          className={`text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-12 transition-all duration-1000 delay-200 px-2 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Built for Africa. Built for creators.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center mb-8 sm:mb-16 transition-all duration-1000 delay-300 px-2 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://forms.gle/FR3gKdKcvALNUxiu5"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-5 sm:px-8 py-2.5 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold text-xs sm:text-base rounded-lg sm:rounded-xl hover:shadow-xl sm:hover:shadow-2xl hover:shadow-primary/40 sm:hover:shadow-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Collaborate</span>
          </a>
          <button
            onClick={scrollToNextSection}
            className="group relative px-5 sm:px-8 py-2.5 sm:py-4 border-2 border-foreground/30 text-foreground font-semibold text-xs sm:text-base rounded-lg sm:rounded-xl hover:border-foreground/60 hover:bg-foreground/5 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="relative">View Work</span>
          </button>
        </div>

        {/* Scroll hint */}
        <div
          className={`flex flex-col items-center gap-1.5 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xs sm:text-sm text-muted-foreground font-semibold italic">
            Go HILI or Go Home!
          </p>
          <button
            onClick={scrollToNextSection}
            className="text-primary hover:text-secondary transition-colors duration-300 animate-bounce group p-1"
          >
            <ChevronDown
              size={24}
              className="sm:w-7 sm:h-7 group-hover:scale-125 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </section>
    </>
  );
};
