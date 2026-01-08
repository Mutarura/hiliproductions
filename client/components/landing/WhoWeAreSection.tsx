import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const floatingElements = [
    { id: 1, top: "15%", left: "8%", size: 120, delay: "0s", color: "primary" },
    {
      id: 2,
      top: "65%",
      right: "10%",
      size: 160,
      delay: "1s",
      color: "secondary",
    },
    {
      id: 3,
      top: "35%",
      right: "5%",
      size: 100,
      delay: "2s",
      color: "primary",
    },
    { id: 4, bottom: "10%", left: "12%", size: 140, delay: "1.5s", color: "secondary" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-32 lg:py-40 px-4 sm:px-6 bg-background overflow-hidden"
    >
      {/* Multi-layered background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary gradient orb */}
        <div className="absolute top-1/3 left-1/4 w-72 sm:w-96 lg:w-[28rem] h-72 sm:h-96 lg:h-[28rem] bg-gradient-to-br from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl"></div>

        {/* Secondary gradient orb */}
        <div className="absolute bottom-1/4 right-1/3 w-80 sm:w-[28rem] lg:w-[32rem] h-80 sm:h-[28rem] lg:h-[32rem] bg-gradient-to-tl from-secondary/12 via-secondary/4 to-transparent rounded-full blur-3xl"></div>

        {/* Tertiary subtle gradient */}
        <div className="absolute top-1/2 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-l from-primary/8 to-transparent rounded-full blur-2xl opacity-60"></div>
      </div>

      {/* Floating abstract elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute opacity-30 lg:opacity-40 transition-opacity duration-500 hover:opacity-50"
            style={{
              top: element.top || "auto",
              bottom: element.bottom || "auto",
              left: element.left || "auto",
              right: element.right || "auto",
            }}
          >
            <div
              className={`animate-float`}
              style={{
                animationDelay: element.delay,
                animationDuration: "6s",
              }}
            >
              <svg
                width={element.size}
                height={element.size}
                viewBox="0 0 100 100"
                className="drop-shadow-sm"
              >
                <defs>
                  <filter id={`glow-${element.id}`} x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  fill="url(#ringGradient)"
                  opacity="0.4"
                  filter={`url(#glow-${element.id})`}
                  className={`${
                    element.color === "primary"
                      ? "fill-primary"
                      : "fill-secondary"
                  }`}
                />
                <circle
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  stroke={
                    element.color === "primary"
                      ? "rgb(168, 85, 247)"
                      : "rgb(236, 72, 153)"
                  }
                  strokeWidth="1"
                  opacity="0.3"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="10"
                  fill={
                    element.color === "primary"
                      ? "rgb(168, 85, 247)"
                      : "rgb(236, 72, 153)"
                  }
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading with staggered animation */}
        <div className="mb-8 sm:mb-16 lg:mb-20">
          <h2
            className={`text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground text-center leading-tight transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            Who We Are
          </h2>

          {/* Decorative line under heading */}
          <div
            className={`flex justify-center mt-5 sm:mt-10 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transformOrigin: "center" }}
          >
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"></div>
          </div>
        </div>

        {/* Primary statement with enhanced styling */}
        <div
          className={`mb-5 sm:mb-10 transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-base sm:text-xl lg:text-2xl text-foreground leading-relaxed text-center font-light">
            <span className="block">
              Hili is a{" "}
              <span className="font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                digital productions and live media company
              </span>{" "}
            </span>
            <span className="block mt-1 sm:mt-2">rooted in East Africa.</span>
          </p>
        </div>

        {/* Secondary statement with different animation */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm sm:text-lg lg:text-xl text-foreground/80 leading-relaxed text-center font-light max-w-3xl mx-auto">
            We create{" "}
            <span className="text-foreground font-medium">
              creator-led shows,
            </span>{" "}
            <span className="text-foreground font-medium">live broadcasts,</span> and{" "}
            <span className="text-foreground font-medium">
              cultural experiences
            </span>{" "}
            that bring African stories to life — in real time.
          </p>
        </div>

        {/* Subtle accent elements below text */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-14">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-1000 ${
                isVisible ? "opacity-40" : "opacity-0"
              }`}
              style={{
                width: index === 1 ? "24px" : "8px",
                backgroundColor:
                  index === 0 ? "rgb(168, 85, 247)" : index === 1 ? "rgb(236, 72, 153)" : "rgb(168, 85, 247)",
                transitionDelay: `${800 + index * 100}ms`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Ambient noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none">
        <svg width="100%" height="100%">
          <filter id="sectionNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#sectionNoise)" opacity="0.1" />
        </svg>
      </div>
    </section>
  );
};
