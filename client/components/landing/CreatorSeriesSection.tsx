import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, Play, Ticket } from "lucide-react";
import { CreatorSeriesEvent } from "@shared/api";

export const CreatorSeriesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Fetch events from API
  const { data: eventsResponse, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await fetch("/api/events");
      if (!res.ok) throw new Error("Failed to fetch events");
      return res.json();
    },
  });

  const seriesData: CreatorSeriesEvent[] = eventsResponse?.data || [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = 320; // width of card + gap

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setCurrentIndex(Math.max(0, currentIndex - 1));
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setCurrentIndex(Math.min(seriesData.length - 1, currentIndex + 1));
    }

    // Update button states
    setTimeout(() => {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10,
      );
    }, 300);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10,
      );
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="creator-series"
      className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-background overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-gradient-to-bl from-primary/10 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-gradient-to-tr from-secondary/10 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Creator Series & Events
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl">
            Discover the live experiences, shows, and cultural moments that define HILI. From creator-led series to exclusive events.
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative group">
          {/* Scroll container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          >
            {seriesData.map((item, index) => (
              <div
                key={item.id}
                className={`flex-shrink-0 w-72 sm:w-80 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Card */}
                <div className="relative h-96 sm:h-[420px] rounded-xl sm:rounded-2xl overflow-hidden group/card hover:shadow-2xl transition-all duration-300">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} border border-primary/20`}></div>

                  {/* Content */}
                  <div className="relative h-full p-6 sm:p-8 flex flex-col justify-between">
                    {/* Icon and type badge */}
                    <div className="flex items-start justify-between">
                      <div className="text-4xl sm:text-5xl">{item.icon}</div>
                      <span className="px-3 py-1 bg-primary/30 backdrop-blur-sm rounded-full text-xs font-semibold text-foreground uppercase">
                        {item.type}
                      </span>
                    </div>

                    {/* Title and description */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-foreground/80 line-clamp-2 mb-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Tags and CTA */}
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium bg-foreground/10 text-foreground/80 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button className="w-full py-2.5 px-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base">
                        <Play size={16} />
                        Watch Now
                      </button>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Left scroll button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-20 p-2 sm:p-3 rounded-full bg-primary hover:bg-secondary text-white shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
          )}

          {/* Right scroll button */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-20 p-2 sm:p-3 rounded-full bg-primary hover:bg-secondary text-white shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          )}
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center gap-2 mt-8">
          {seriesData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({
                    left: index * 320,
                    behavior: "smooth",
                  });
                  setCurrentIndex(index);
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-primary/40 hover:bg-primary/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};
