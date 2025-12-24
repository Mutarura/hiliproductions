import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "We Create",
    description: "Working closely with creators to develop original, culture-led content.",
    icon: "✏️",
    number: "01",
  },
  {
    title: "We Go Live",
    description: "Broadcasting experiences through platforms people already use and trust.",
    icon: "🔴",
    number: "02",
  },
  {
    title: "We Build Community",
    description: "Turning viewers into participants through interaction, conversation, and shared culture.",
    icon: "🤝",
    number: "03",
  },
];

export const HowItWorksSection = () => {
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The Hili process: from creation to community
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
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
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{step.icon}</div>
                    <div className="text-3xl font-display font-bold text-primary/40">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
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
