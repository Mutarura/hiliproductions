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
          className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Be part of <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">the culture.</span>
        </h2>

        {/* Description */}
        <p
          className={`text-lg text-muted-foreground max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Get early access to Hili shows, live moments, and community drops as we grow together.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://forms.gle/FR3gKdKcvALNUxiu5"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">I'm a Viewer</span>
          </a>
          <a
            href="https://forms.gle/9fyvancYqXQg8i2XA"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-secondary to-primary text-white font-semibold rounded-xl border border-primary/30 hover:border-primary/80 hover:shadow-2xl hover:shadow-secondary/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">I'm a Creator</span>
          </a>
        </div>

        {/* Email signup */}
        <div
          className={`relative group transition-all duration-1000 delay-500 max-w-md mx-auto ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-40 blur-xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>

          <div className="bg-gradient-to-br from-background via-background to-background border border-primary/30 group-hover:border-primary/60 rounded-2xl p-8 transition-all duration-300">
            <form onSubmit={handleEmailSignup} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 bg-background border border-primary/30 focus:border-primary/60 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="group relative px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Join the Community</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
