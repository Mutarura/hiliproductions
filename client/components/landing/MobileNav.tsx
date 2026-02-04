import { useState } from "react";
import { X, Menu } from "lucide-react";

interface NavLink {
  id: string;
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "who-we-are", label: "Who We Are", href: "#who-we-are" },
  { id: "creator-series", label: "Creator Series", href: "#creator-series" },
  { id: "built-for", label: "Built For", href: "#built-for" },
  { id: "contact", label: "Get in Touch", href: "#contact" },
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hamburger button - visible only on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 sm:hidden z-50 p-2 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors duration-300"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <X size={24} className="text-foreground" />
        ) : (
          <Menu size={24} className="text-foreground" />
        )}
      </button>

      {/* Mobile navigation overlay */}
      {isOpen && (
        <div className="fixed inset-0 sm:hidden z-40">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Navigation menu */}
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-background border-l border-primary/20 shadow-2xl">
            <nav className="flex flex-col h-full pt-20 px-6 overflow-y-auto">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-4 px-4 text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300 border-b border-primary/10"
                >
                  {link.label}
                </button>
              ))}

              {/* CTA section in menu */}
              <div className="mt-auto mb-8 pt-6 border-t border-primary/20">
                <a
                  href="https://forms.gle/FR3gKdKcvALNUxiu5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg text-center hover:shadow-lg transition-all duration-300"
                >
                  Partner With Us
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
