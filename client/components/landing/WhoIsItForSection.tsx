import { useEffect, useRef, useState } from "react";

export const WhoIsItForSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [centeredCard, setCenteredCard] = useState<number | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!isSmallScreen) return;

      cardRefs.current.forEach((cardRef, index) => {
        if (!cardRef) return;

        const rect = cardRef.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;

        // Check if card center is within 100px of viewport center
        if (Math.abs(cardCenter - viewportCenter) < 150) {
          setCenteredCard(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSmallScreen]);

  const cards = [
    {
      id: 0,
      label: "Creators",
      headline: "Voices Driving the Culture",
      copy: "Independent creators building shows, communities, and movements. We work with creators who want more than views — they want ownership, growth, and cultural impact.",
      gradient: "from-purple-600/40 via-purple-500/30 to-pink-500/20",
      accentColor: "from-purple-500 to-pink-400",
    },
    {
      id: 1,
      label: "Communities",
      headline: "People Who Show Up Live",
      copy: "Fans who want shared moments, live energy, and content that feels close to home. Not passive watching — real-time connection.",
      gradient: "from-blue-600/40 via-cyan-500/30 to-purple-500/20",
      accentColor: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      label: "Events",
      headline: "Moments Meant to Travel",
      copy: "Cultural events, festivals, and gatherings looking to extend their reach beyond physical spaces — without losing authenticity.",
      gradient: "from-orange-600/40 via-yellow-500/30 to-red-500/20",
      accentColor: "from-orange-500 to-yellow-400",
    },
    {
      id: 3,
      label: "Brands",
      headline: "Brands That Get It",
      copy: "Brands seeking meaningful ways to engage African youth culture through entertainment, not interruption.",
      gradient: "from-green-600/40 via-emerald-500/30 to-teal-500/20",
      accentColor: "from-green-500 to-emerald-400",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="built-for"
      className="relative py-14 sm:py-28 lg:py-32 px-4 sm:px-6 bg-background overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 sm:bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/5 sm:bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section title */}
        <div
          className={`text-center mb-10 sm:mb-20 lg:mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Built For Those
            <br className="sm:hidden" />
            Shaping Culture
          </h2>
        </div>

        {/* Cards grid - 2x2 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`group relative h-56 sm:h-80 lg:h-96 rounded-lg sm:rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } ${hoveredCard === card.id ? "lg:scale-105" : ""}`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background with gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} transition-all duration-500`}
              ></div>

              {/* Noise/grain overlay */}
              <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
                <svg width="100%" height="100%">
                  <filter id="noise">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.9"
                      numOctaves="4"
                      result="noise"
                    />
                  </filter>
                  <rect
                    width="100%"
                    height="100%"
                    fill="white"
                    filter="url(#noise)"
                    opacity="0.05"
                  />
                </svg>
              </div>

              {/* Dark overlay that intensifies on hover */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-4 sm:p-8 lg:p-10 text-white">
                {/* Top section - always visible */}
                <div>
                  <div
                    className={`inline-block mb-2 sm:mb-6 px-2.5 sm:px-4 py-1 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-500 group-hover:bg-white/20`}
                  >
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/90">
                      {card.label}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4 transition-all duration-500 group-hover:translate-y-0">
                    {card.headline}
                  </h3>
                </div>

                {/* Bottom section - revealed on hover (desktop) or scroll-to-center (mobile) */}
                <div
                  className={`transition-all duration-500 transform ${
                    isSmallScreen
                      ? centeredCard === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                      : hoveredCard === card.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 sm:translate-y-6"
                  }`}
                >
                  <p className="text-xs sm:text-base text-white/90 leading-relaxed line-clamp-3 sm:line-clamp-4">
                    {card.copy}
                  </p>

                  {/* Accent line */}
                  <div
                    className={`mt-3 sm:mt-6 h-1 w-12 bg-gradient-to-r ${card.accentColor} rounded-full`}
                  ></div>
                </div>
              </div>

              {/* Corner accent - subtle visual interest */}
              <div
                className={`absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tl ${card.accentColor} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-tl-full pointer-events-none`}
              ></div>
            </div>
          ))}
        </div>

        {/* Optional: Subtle guidance text */}
        <div className="mt-10 sm:mt-20 text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            <span className="sm:hidden">Scroll to center cards to explore</span>
            <span className="hidden sm:inline">Hover to explore each tile</span>
          </p>
        </div>
      </div>
    </section>
  );
};
