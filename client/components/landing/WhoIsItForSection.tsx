import { useEffect, useRef, useState } from "react";

export const WhoIsItForSection = () => {
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

  const audience = [
    "Creators",
    "Communities",
    "Cultural events",
    "Brands in youth culture",
    "Fans of African storytelling",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 bg-background overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 sm:bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section title */}
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Built For
        </h2>

        {/* Audience list */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-center sm:text-left">
            {audience.map((item, index) => (
              <div
                key={index}
                className="text-base sm:text-lg text-foreground font-semibold flex items-center justify-center sm:justify-start gap-3"
              >
                <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0"></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
