import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Creator-Led Shows",
    icon: "🎬",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Live Event Broadcasts",
    icon: "🔴",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    title: "Cultural Digital Experiences",
    icon: "🌍",
    color: "from-primary/20 to-secondary/5",
  },
  {
    title: "Branded Entertainment",
    icon: "✨",
    color: "from-secondary/20 to-primary/5",
  },
  {
    title: "Community-Driven Content",
    icon: "👥",
    color: "from-primary/20 to-primary/5",
  },
];

export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

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
      { threshold: 0.3 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/5 sm:bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 sm:bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 sm:mb-12">
            What We Create
          </h2>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`relative group transition-all duration-700 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Card background with gradient */}
              <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} border border-primary/20 group-hover:border-primary/40 group-hover:shadow-xl sm:group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-300`}></div>

              {/* Card content */}
              <div className="relative p-5 sm:p-6 lg:p-8 h-full flex flex-col items-center justify-center text-center">
                <div className={`w-12 sm:w-14 h-12 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl sm:text-3xl">{feature.icon}</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action text */}
        <div className="text-center border-t border-primary/20 pt-8 sm:pt-12">
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg px-2">
            This is what we're building — <span className="text-primary font-semibold">for creators, for audiences, for culture</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
