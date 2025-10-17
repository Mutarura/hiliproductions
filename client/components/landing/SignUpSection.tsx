import { useEffect, useRef, useState } from "react";

export const SignUpSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

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

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Store email locally in localStorage or send to a form
      const emails = JSON.parse(localStorage.getItem("hili_emails") || "[]");
      if (!emails.includes(email)) {
        emails.push(email);
        localStorage.setItem("hili_emails", JSON.stringify(emails));
      }
      setEmail("");
      alert("Thank you! We'll notify you when we launch.");
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 bg-gradient-to-b from-background to-background overflow-hidden"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl transform translate-x-1/2"></div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl transform -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <h2
          className={`font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Your opinion <span className="gradient-text">builds this.</span>
        </h2>

        {/* Description */}
        <p
          className={`text-lg text-muted-foreground max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          We're still crafting Hili — but you can help shape what comes next. Whether you're a creator or viewer, your insights will guide our design.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://forms.gle/viewer-form"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            I'm a Viewer
          </a>
          <a
            href="https://forms.gle/creator-form"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:shadow-xl hover:shadow-secondary/50 transition-all duration-300 hover:scale-105"
          >
            I'm a Creator
          </a>
        </div>

        {/* Email signup */}
        <div
          className={`bg-card border border-primary/20 rounded-xl p-8 max-w-md mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm text-muted-foreground mb-4">
            Or get notified when we launch
          </p>
          <form onSubmit={handleEmailSignup} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
            <button
              type="submit"
              className="px-4 py-3 bg-gradient-to-r from-primary to-secondary text-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
