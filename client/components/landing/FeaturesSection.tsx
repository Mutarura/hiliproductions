import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Creator-Led Shows",
    description: "Original shows driven by African creators, voices, and stories.",
    icon: "🎬",
    color: "from-primary/20 to-primary/5",
    accentColor: "primary",
  },
  {
    title: "Live Digital Experiences",
    description: "Live streams, conversations, and moments that bring culture online in real time.",
    icon: "🔴",
    color: "from-secondary/20 to-secondary/5",
    accentColor: "secondary",
  },
  {
    title: "Cultural Storytelling",
    description: "Authentic narratives rooted in East African youth culture.",
    icon: "📖",
    color: "from-primary/20 to-secondary/5",
    accentColor: "primary",
  },
  {
    title: "Digital Productions",
    description: "High-quality production that elevates African creativity and energy.",
    icon: "🎥",
    color: "from-secondary/20 to-primary/5",
    accentColor: "secondary",
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
    <section ref={sectionRef} className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Creating culture-led digital experiences for Africa
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
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
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} border border-primary/20 group-hover:border-primary/40 group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-300`}></div>

              {/* Decorative top accent */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${feature.color} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>

              {/* Card content */}
              <div className="relative p-8 sm:p-10 h-full flex flex-col justify-between">
                <div>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover accent line */}
                <div className="mt-8 flex items-center gap-3 group-hover:gap-4 transition-all duration-300">
                  <div className="h-1 flex-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="text-primary group-hover:translate-x-1 transition-transform duration-300">→</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action text */}
        <div className="text-center border-t border-primary/20 pt-12">
          <p className="text-muted-foreground text-lg">
            This is what we're building — <span className="text-primary font-semibold">for creators, for audiences, for culture</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
