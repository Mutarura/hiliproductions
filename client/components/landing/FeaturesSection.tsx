import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Creator-Led Shows",
    icon: "🎬",
    color: "from-primary/20 to-primary/5",
    sublabel: "Live storytelling",
    animationType: "clapper",
  },
  {
    title: "Live Event Broadcasts",
    icon: "🔴",
    color: "from-secondary/20 to-secondary/5",
    sublabel: "Real-time engagement",
    animationType: "pulse-dot",
  },
  {
    title: "Cultural Digital Experiences",
    icon: "🌍",
    color: "from-primary/20 to-secondary/5",
    sublabel: "Global reach",
    animationType: "spin-gentle",
  },
  {
    title: "Branded Entertainment",
    icon: "✨",
    color: "from-secondary/20 to-primary/5",
    sublabel: "Premium content",
    animationType: "sparkle",
  },
];

export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0",
            );
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 },
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-24 lg:py-32 px-4 sm:px-6 bg-background overflow-hidden"
    >
      {/* Animated background gradient (mobile only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none sm:hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/3 rounded-full blur-3xl animate-float" style={{ animationDuration: "8s" }}></div>
        <div className="absolute bottom-1/4 left-0 w-56 h-56 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDuration: "10s", animationDelay: "1s" }}></div>
      </div>

      {/* Desktop background gradient (unchanged) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/5 sm:bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 sm:bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-12">
            What We Create
          </h2>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 lg:gap-8 mb-10 sm:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`relative group transition-all duration-700 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              onTouchStart={() => setActiveCard(index)}
              onTouchEnd={() => setActiveCard(null)}
            >
              {/* Card background with gradient */}
              <div
                className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} border border-primary/20 group-hover:border-primary/40 group-hover:shadow-xl sm:group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-300`}
              ></div>

              {/* Card content */}
              <div className="relative p-4 sm:p-6 lg:p-8 h-32 sm:h-40 lg:h-48 flex flex-col items-center justify-center text-center">
                {/* Icon container with animation trigger */}
                <div
                  className={`w-10 sm:w-14 h-10 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-2 sm:mb-4 transition-transform duration-300 ${
                    feature.animationType === "pulse-dot" && activeCard === index
                      ? "animate-pulse-dot"
                      : feature.animationType === "spin-gentle" && activeCard === index
                        ? "animate-spin-gentle"
                        : feature.animationType === "sparkle" && activeCard === index
                          ? "animate-sparkle"
                          : feature.animationType === "clapper" && activeCard === index
                            ? "animate-clapper"
                            : "group-hover:scale-110"
                  }`}
                >
                  <span className="text-xl sm:text-3xl">{feature.icon}</span>
                </div>

                {/* Title and sublabel */}
                <h3 className="font-display text-sm sm:text-xl lg:text-2xl font-bold text-foreground">
                  {feature.title}
                </h3>
                {isSmallScreen && (
                  <p className="text-xs text-foreground/60 mt-1">
                    {feature.sublabel}
                  </p>
                )}
              </div>

              {/* Subtle corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to action text */}
        <div className="text-center border-t border-primary/20 pt-6 sm:pt-12">
          <p className="text-muted-foreground text-xs sm:text-base lg:text-lg px-2">
            Designed for creators. Experienced by communities. Watched
            everywhere.
          </p>
        </div>
      </div>

      {/* Subtle noise texture overlay (mobile only) */}
      <div className="absolute inset-0 opacity-[0.01] mix-blend-overlay pointer-events-none sm:hidden">
        <svg width="100%" height="100%">
          <filter id="mobileNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" />
          </filter>
          <rect width="100%" height="100%" filter="url(#mobileNoise)" opacity="0.05" />
        </svg>
      </div>
    </section>
  );
};
