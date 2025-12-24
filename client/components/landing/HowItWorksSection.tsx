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
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-background overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 sm:bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/5 sm:bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2">
            The Hili journey: from creation to community
          </p>
        </div>

        {/* Steps with connecting flow */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-0.5 bg-primary/30 z-0"></div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
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
              >
                {/* Card container */}
                <div className="relative group h-full">
                  {/* Main card */}
                  <div className="relative p-6 sm:p-8 rounded-2xl bg-background border border-primary/20 group-hover:border-primary/40 transition-all duration-300 h-full flex flex-col">
                    {/* Step number badge */}
                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-white font-display font-bold text-sm">{step.number}</span>
                    </div>

                    {/* Icon section */}
                    <div className="mb-4">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <span className="text-3xl">{step.icon}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:flex justify-end mt-6">
                        <div className="text-3xl text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
                          →
                        </div>
                      </div>
                    )}

                    {/* Mobile step indicator */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden flex justify-center mt-6">
                        <div className="text-2xl text-primary/50 group-hover:text-primary group-hover:translate-y-1 transition-all duration-300">
                          ↓
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
