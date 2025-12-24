import { useEffect, useRef, useState } from "react";
import { Zap, MessageCircle } from "lucide-react";

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
    <section ref={sectionRef} className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <h2
          className={`text-4xl sm:text-5xl font-display font-bold text-foreground text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Why Hili Exists
        </h2>

        {/* Why Hili exists - 3 items grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Creators */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/20 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-300"></div>
            <div className="relative p-8 h-full flex flex-col justify-start">
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">Creators</h3>
              <p className="text-sm text-primary font-semibold mb-4">Under-monetized. Overlooked.</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Hili creates space for fair collaboration, creative freedom, and growth.
              </p>
            </div>
          </div>

          {/* Audiences */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-secondary/10 to-primary/5 border border-primary/20 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-secondary/20 transition-all duration-300"></div>
            <div className="relative p-8 h-full flex flex-col justify-start">
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">Audiences</h3>
              <p className="text-sm text-secondary font-semibold mb-4">Disconnected from real culture.</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Hili delivers authentic African content built around community and identity.
              </p>
            </div>
          </div>

          {/* Culture */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/20 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-300"></div>
            <div className="relative p-8 h-full flex flex-col justify-start">
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">Culture</h3>
              <p className="text-sm text-primary font-semibold mb-4">Filtered and diluted online.</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Hili centers African stories, voices, and moments — as they are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
