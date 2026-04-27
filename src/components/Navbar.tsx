"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "proyectos", label: "Portfolio" },
  { id: "contacto", label: "Contact" },
  { id: "faq", label: "FAQ" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(({ id }) => document.getElementById(id));
      const scrollY = window.scrollY + 100;
      sections.forEach((section) => {
        if (section && scrollY >= section.offsetTop) {
          setActive(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Divider */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center group"
          >
            <svg
              width="36"
              height="22"
              viewBox="0 0 40 24"
              fill="none"
              className="text-white"
            >
              <path
                d="M13 12C13 8.13 16.13 5 20 5C23.87 5 27 8.13 27 12C27 15.87 23.87 19 20 19"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M27 12C27 8.13 30.13 5 34 5C37.87 5 41 8.13 41 12C41 15.87 37.87 19 34 19C30.13 19 27 15.87 27 12Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M13 12C13 15.87 9.87 19 6 19C2.13 19 -1 15.87 -1 12C-1 8.13 2.13 5 6 5C9.87 5 13 8.13 13 12Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          {/* Vertical divider */}
          <div className="hidden md:block w-px h-6 bg-white/20" />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                  active === id
                    ? "text-white font-semibold"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollTo("contacto")}
          className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-blue-600/30"
        >
          Get In Touch
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/5 px-6 py-4 flex flex-col gap-2">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-left text-white/70 hover:text-white py-2.5 text-sm font-medium border-b border-white/5"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contacto")}
            className="mt-2 bg-blue-600 text-white text-sm font-semibold px-5 py-3 rounded-full"
          >
            Get In Touch
          </button>
        </div>
      )}
    </nav>
  );
}
