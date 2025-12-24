import { useEffect, useRef, useState } from "react";

export const VisionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-background overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 sm:bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/5 sm:bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <h2
          className={`text-3xl sm:text-4xl lg:text-6xl font-display font-bold text-foreground text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Why Hili Exists
        </h2>

        {/* Why Hili exists - 3 items grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Creators */}
          <div className="relative group h-full">
            {/* Animated glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-30 blur-xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>

            <div className="relative rounded-lg sm:rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 group-hover:border-primary/60 transition-all duration-300 p-5 sm:p-7 lg:p-10 h-full flex flex-col">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-secondary rounded-t-lg sm:rounded-t-2xl"></div>

              {/* Icon */}
              <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl sm:text-3xl">👨‍🎨</span>
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-foreground mb-2 sm:mb-3">Creators</h3>
              <p className="text-xs sm:text-sm text-primary font-semibold mb-3 sm:mb-4">Under-monetized. Overlooked.</p>
              <p className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-relaxed flex-1">
                Hili creates space for fair collaboration, creative freedom, and growth.
              </p>

              {/* Hover indicator */}
              <div className="mt-4 sm:mt-6 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>
                <span>Empower creators</span>
              </div>
            </div>
          </div>

          {/* Audiences */}
          <div className="relative group h-full">
            {/* Animated glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-secondary to-primary opacity-0 group-hover:opacity-30 blur-xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>

            <div className="relative rounded-lg sm:rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-primary/30 group-hover:border-primary/60 transition-all duration-300 p-5 sm:p-7 lg:p-10 h-full flex flex-col">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-secondary to-primary rounded-t-lg sm:rounded-t-2xl"></div>

              {/* Icon */}
              <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl sm:text-3xl">👥</span>
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-foreground mb-2 sm:mb-3">Audiences</h3>
              <p className="text-xs sm:text-sm text-secondary font-semibold mb-3 sm:mb-4">Disconnected from real culture.</p>
              <p className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-relaxed flex-1">
                Hili delivers authentic African content built around community and identity.
              </p>

              {/* Hover indicator */}
              <div className="mt-4 sm:mt-6 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground group-hover:text-secondary transition-colors duration-300">
                <span className="w-1 h-1 rounded-full bg-secondary flex-shrink-0"></span>
                <span>Connect communities</span>
              </div>
            </div>
          </div>

          {/* Culture */}
          <div className="relative group h-full">
            {/* Animated glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary via-secondary to-primary opacity-0 group-hover:opacity-30 blur-xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>

            <div className="relative rounded-lg sm:rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30 group-hover:border-primary/60 transition-all duration-300 p-5 sm:p-7 lg:p-10 h-full flex flex-col">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-t-lg sm:rounded-t-2xl"></div>

              {/* Icon */}
              <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl sm:text-3xl">🌍</span>
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-foreground mb-2 sm:mb-3">Culture</h3>
              <p className="text-xs sm:text-sm text-primary font-semibold mb-3 sm:mb-4">Filtered and diluted online.</p>
              <p className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-relaxed flex-1">
                Hili centers African stories, voices, and moments — as they are.
              </p>

              {/* Hover indicator */}
              <div className="mt-4 sm:mt-6 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>
                <span>Celebrate culture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
