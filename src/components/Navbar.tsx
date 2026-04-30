"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { id: "home", label: "Inicio" },
  { id: "projects", label: "Portafolio" },
  { id: "skills", label: "Habilidades" },
  { id: "contact", label: "Contacto" },
  { id: "resume", label: "Sobre mí", href: "/resume" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

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
  }, [pathname]);

  const scrollTo = (id: string) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
      setMenuOpen(false);
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const redirectTo = (href: string) => {
    router.push(href);
    setMenuOpen(false);
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        pathname !== "/" || scrolled
          ? "bg-black/40 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Divider */}
        <div className="flex items-center gap-5 ml-1 lg:ml-2">
          <button
            onClick={() => {
              if (pathname !== "/") {
                router.push("/");
                return;
              }
              scrollTo("home");
            }}
            className="flex items-center group"
          >
            <Image
              src="/logo.webp"
              alt="Logo"
              width={45}
              height={25}
              className="w-[65px] h-[auto] lg:w-[60px] transition-transform duration-200 group-hover:scale-110"
            />
          </button>
          {/* Vertical divider */}
          <div className="hidden md:block w-px h-6 bg-white/20" />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ id, label, href }) => (
              <button
                key={id}
                onClick={() => href ? redirectTo(href) : scrollTo(id)}
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
          onClick={() => scrollTo("contact")}
          className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-blue-600/30"
        >
          Contactar
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
            onClick={() => scrollTo("contact")}
            className="mt-2 bg-blue-600 text-white text-sm font-semibold px-5 py-3 rounded-full"
          >
            Contactar
          </button>
        </div>
      )}
    </nav>
  );
}
