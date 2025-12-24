import { useEffect, useRef, useState } from "react";

const audiences = [
  {
    title: "Creators",
    description: "A home for culturally rooted content, collaboration, and creative growth.",
    icon: "🎨",
  },
  {
    title: "Fans & Viewers",
    description: "A place to watch, engage with, and be part of real African culture online.",
    icon: "👥",
  },
  {
    title: "Brands",
    description: "Authentic access to youth culture through meaningful, story-driven integrations.",
    icon: "🏢",
  },
];

export const WhoHiliIsForSection = () => {
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
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Who Hili Is For
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hili brings together everyone in the ecosystem
          </p>
        </div>

        {/* Audience cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {audiences.map((audience, index) => (
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
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/20 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-300"></div>

              {/* Card content */}
              <div className="relative p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4">{audience.icon}</div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {audience.description}
                  </p>
                </div>

                {/* Hover accent */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
