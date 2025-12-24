import { useEffect, useRef, useState } from "react";

const audiences = [
  {
    title: "Creators",
    description: "A home for culturally rooted content, collaboration, and creative growth.",
    icon: "🎨",
    gradient: "from-primary/30 to-primary/5",
    iconGradient: "from-primary to-secondary",
    highlight: "primary",
    features: ["Creative Freedom", "Fair Collaboration", "Growth"],
  },
  {
    title: "Fans & Viewers",
    description: "A place to watch, engage with, and be part of real African culture online.",
    icon: "👥",
    gradient: "from-secondary/30 to-secondary/5",
    iconGradient: "from-secondary to-primary",
    highlight: "secondary",
    features: ["Real Culture", "Community", "Engagement"],
  },
  {
    title: "Brands",
    description: "Authentic access to youth culture through meaningful, story-driven integrations.",
    icon: "🏢",
    gradient: "from-primary/30 to-secondary/5",
    iconGradient: "from-primary via-secondary to-primary",
    highlight: "primary",
    features: ["Authentic Access", "Story-Driven", "Cultural Roots"],
  },
];

export const WhoHiliIsForSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-background overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 sm:bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/5 sm:bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4">
            Who Hili Is For
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2">
            One platform. Three essential communities. Infinite possibilities.
          </p>
        </div>

        {/* Audience cards - Compact mobile-first layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              data-index={index}
              className={`transition-all duration-700 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card wrapper with glow effect */}
              <div className="relative group h-full">
                {/* Animated glow background */}
                <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${audience.iconGradient} opacity-0 group-hover:opacity-40 blur-2xl group-hover:blur-3xl transition-all duration-500 -z-10`}></div>

                {/* Main card */}
                <div className={`relative h-full rounded-xl sm:rounded-2xl bg-gradient-to-br ${audience.gradient} border border-primary/20 group-hover:border-primary/50 transition-all duration-300 overflow-hidden`}>
                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${audience.iconGradient}`}></div>

                  {/* Card content */}
                  <div className="p-5 sm:p-6 lg:p-8 h-full flex flex-col">
                    {/* Icon container */}
                    <div className="mb-4 sm:mb-6">
                      <div className={`w-16 sm:w-20 h-16 sm:h-20 rounded-lg sm:rounded-xl bg-gradient-to-br ${audience.iconGradient} flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 group-hover:rotate-2 sm:group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                        <span className="text-3xl sm:text-4xl">{audience.icon}</span>
                      </div>
                    </div>

                    {/* Title and description */}
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2">
                      {audience.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 flex-1">
                      {audience.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 pt-4 sm:pt-5 border-t border-primary/20">
                      {audience.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className={`flex items-center gap-2 transition-all duration-300 ${
                            activeCard === index ? "translate-x-1 opacity-100" : "opacity-90"
                          }`}
                          style={{
                            transitionDelay: `${featureIndex * 100}ms`,
                          }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${audience.iconGradient} flex-shrink-0`}></div>
                          <span className="text-xs sm:text-sm font-medium text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Hover indicator */}
                    <div className="mt-4 flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      <span>Discover more</span>
                      <span className="group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Whether you create, watch, or collaborate — Hili is built for you to thrive.
          </p>
        </div>
      </div>
    </section>
  );
};
