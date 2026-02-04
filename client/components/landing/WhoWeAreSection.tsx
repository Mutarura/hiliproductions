import { useEffect, useRef, useState } from "react";
import { Radio, Zap, Music } from "lucide-react";

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
    { id: 1, top: "10%", left: "5%", size: 120, delay: "0s", color: "primary" },
    {
      id: 2,
      top: "70%",
      right: "8%",
      size: 160,
      delay: "1.5s",
      color: "secondary",
    },
    {
      id: 3,
      top: "40%",
      right: "3%",
      size: 100,
      delay: "2.5s",
      color: "primary",
    },
    { id: 4, bottom: "15%", left: "10%", size: 140, delay: "1s", color: "secondary" },
  ];

  const featureIcons = [
    { icon: Radio, label: "Live Streaming", position: "top-1/4 left-1/3" },
    { icon: Zap, label: "Creator Tools", position: "top-1/3 right-1/4" },
    { icon: Music, label: "Culture & Arts", position: "bottom-1/4 left-1/4" },
  ];

  return (
    <section
      ref={sectionRef}
      id="who-we-are"
      className="relative py-16 sm:py-32 lg:py-40 px-4 sm:px-6 bg-background overflow-hidden"
    >
      {/* Multi-layered gradient background with purple, yellow, black */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary purple gradient */}
        <div className="absolute -top-1/2 -left-1/3 w-96 sm:w-[600px] lg:w-[800px] h-96 sm:h-[600px] lg:h-[800px] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl"></div>

        {/* Secondary yellow/golden gradient */}
        <div className="absolute top-1/4 right-0 w-80 sm:w-[500px] lg:w-[700px] h-80 sm:h-[500px] lg:h-[700px] bg-gradient-to-bl from-yellow-500/10 via-primary/5 to-transparent rounded-full blur-3xl"></div>

        {/* Tertiary black/dark accent */}
        <div className="absolute bottom-0 left-1/2 w-96 sm:w-[600px] h-80 sm:h-[400px] bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating glowing dots for live energy */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute opacity-30 lg:opacity-40"
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
                animationDuration: "8s",
              }}
            >
              <svg
                width={element.size}
                height={element.size}
                viewBox="0 0 100 100"
                className="drop-shadow-lg"
              >
                <defs>
                  <filter id={`glow-${element.id}`} x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <radialGradient id={`gradient-${element.id}`}>
                    <stop
                      offset="0%"
                      stopColor={element.color === "primary" ? "#a855f7" : "#ec4899"}
                      stopOpacity="1"
                    />
                    <stop
                      offset="100%"
                      stopColor={element.color === "primary" ? "#a855f7" : "#ec4899"}
                      stopOpacity="0"
                    />
                  </radialGradient>
                </defs>
                {/* Outer glowing ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="35"
                  fill={`url(#gradient-${element.id})`}
                  opacity="0.3"
                  filter={`url(#glow-${element.id})`}
                />
                {/* Middle ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="22"
                  fill="none"
                  stroke={element.color === "primary" ? "#a855f7" : "#ec4899"}
                  strokeWidth="1.5"
                  opacity="0.4"
                />
                {/* Inner glowing dot */}
                <circle
                  cx="50"
                  cy="50"
                  r="10"
                  fill={element.color === "primary" ? "#a855f7" : "#ec4899"}
                  opacity="0.7"
                  filter={`url(#glow-${element.id})`}
                />
              </svg>
            </div>
          </div>
        ))}

        {/* Subtle cultural icons scattered */}
        {featureIcons.map((item, idx) => (
          <div
            key={idx}
            className={`absolute ${item.position} opacity-10 lg:opacity-15 transition-opacity duration-700 ${
              isVisible ? "opacity-10 lg:opacity-15" : "opacity-0"
            }`}
          >
            <item.icon size={80} className="text-primary" />
          </div>
        ))}
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main headline with enhanced styling */}
        <div
          className={`mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-center leading-tight">
            <span className="text-foreground">Africa's Stories.</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-yellow-500 to-primary bg-clip-text text-transparent">
              Real Time.
            </span>
          </h2>

          {/* Decorative line under headline */}
          <div
            className={`flex justify-center mt-6 sm:mt-10 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transformOrigin: "center" }}
          >
            <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-primary via-yellow-500 to-primary rounded-full"></div>
          </div>
        </div>

        {/* Main body text with highlighted keywords */}
        <div
          className={`mb-8 sm:mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-base sm:text-lg lg:text-xl text-foreground/90 leading-relaxed text-center max-w-3xl mx-auto font-light">
            HILI is a{" "}
            <span className="font-semibold bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
              creator-first media brand
            </span>{" "}
            bringing{" "}
            <span className="font-semibold bg-gradient-to-r from-primary via-yellow-500 to-primary bg-clip-text text-transparent">
              live experiences, shows, and cultural moments
            </span>{" "}
            to life across East Africa. We partner with talented creators, spotlight local voices, and turn stories into vibrant, shareable experiences that resonate with audiences everywhere.
          </p>
        </div>

        {/* Secondary paragraph */}
        <div
          className={`mb-8 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto font-light">
            We don't just broadcast — we{" "}
            <span className="font-semibold text-foreground">
              build culture, capture energy,
            </span>{" "}
            and create content that moves. From{" "}
            <span className="font-semibold bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
              live events
            </span>{" "}
            to digital-first series, HILI is where{" "}
            <span className="font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              African creativity meets global imagination.
            </span>
          </p>
        </div>

        {/* Accent dots below text */}
        <div className="flex justify-center gap-3 mt-8 sm:mt-12">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`rounded-full transition-all duration-1000 ${
                isVisible ? "opacity-50" : "opacity-0"
              }`}
              style={{
                width: index === 1 ? "12px" : "6px",
                height: index === 1 ? "12px" : "6px",
                backgroundColor:
                  index === 0
                    ? "rgb(168, 85, 247)"
                    : index === 1
                      ? "rgb(234, 179, 8)"
                      : "rgb(236, 72, 153)",
                transitionDelay: `${700 + index * 100}ms`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.01] mix-blend-overlay pointer-events-none">
        <svg width="100%" height="100%">
          <filter id="sectionNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#sectionNoise)" opacity="0.05" />
        </svg>
      </div>
    </section>
  );
};
