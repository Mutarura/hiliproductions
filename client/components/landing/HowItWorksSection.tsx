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
    <section ref={sectionRef} className="relative py-32 px-6 bg-background overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The Hili journey: from creation to community
          </p>
        </div>

        {/* Steps with connecting flow */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-30 z-0"></div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
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
                  {/* Animated background glow on hover */}
                  <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-30 blur-xl group-hover:blur-2xl transition-all duration-500 -z-10`}></div>

                  {/* Main card */}
                  <div className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-background via-background to-background border border-primary/20 group-hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                    {/* Step number badge */}
                    <div className={`absolute top-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-lg`}>
                      <span className="text-white font-display font-bold text-lg">{step.number}</span>
                    </div>

                    {/* Icon section */}
                    <div className="mb-6">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-4xl">{step.icon}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed">
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
