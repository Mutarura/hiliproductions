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

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          {/* Main vision text */}
          <p
            className={`text-2xl sm:text-3xl font-display font-bold text-foreground leading-relaxed transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            We're building a home for creators, dreamers, gamers, and storytellers across Kenya.
          </p>

          {/* Animated divider line */}
          <div
            className={`flex items-center justify-center gap-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className={`flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent ${isVisible ? "animate-pulse" : ""}`}></div>
          </div>

          {/* Secondary vision text */}
          <p
            className={`text-2xl sm:text-3xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Hili is where moments go live — and where voices rise.
          </p>
        </div>

        {/* Icon cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Creativity icon */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center glow">
              <Zap className="text-primary" size={32} />
            </div>
            <p className="text-muted-foreground">Unbounded Creativity</p>
          </div>

          {/* Community icon */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center glow-gold">
              <MessageCircle className="text-secondary" size={32} />
            </div>
            <p className="text-muted-foreground">Thriving Community</p>
          </div>
        </div>
      </div>
    </section>
  );
};
