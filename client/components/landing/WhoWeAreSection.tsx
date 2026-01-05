import { useEffect, useRef, useState } from "react";
import { Camera } from "lucide-react";

export const WhoWeAreSection = () => {
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
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const floatingIcons = [
    { id: 1, top: "20%", left: "10%", delay: "0s" },
    { id: 2, top: "60%", right: "15%", delay: "0.5s" },
    { id: 3, top: "40%", left: "5%", delay: "1s" },
    { id: 4, top: "70%", right: "10%", delay: "1.5s" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 bg-background overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 sm:bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/5 sm:bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating camera icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((icon) => (
          <div
            key={icon.id}
            className="absolute hidden sm:flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-300"
            style={{
              top: icon.top,
              left: icon.left || "auto",
              right: icon.right || "auto",
              animation: `float 4s ease-in-out infinite`,
              animationDelay: icon.delay,
            }}
          >
            <Camera size={48} className="text-primary/40" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section title */}
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground text-center mb-8 sm:mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Who We Are
        </h2>

        {/* Content */}
        <div
          className={`text-center transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-base sm:text-lg lg:text-xl text-foreground leading-relaxed mb-4">
            Hili is a digital productions and live media company rooted in East
            Africa.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-foreground leading-relaxed">
            We create creator-led shows, live broadcasts, and cultural
            experiences that bring African stories to life — in real time.
          </p>
        </div>
      </div>
    </section>
  );
};
