"use client";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 glow-blue pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid lines subtle overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-30 pb-16 sm:pb-20 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Left content */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Badge */}
          {/* <div className="flex items-center gap-2 w-fit">
            <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              NEW
            </span>
            <span className="text-white/60 text-sm bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Disponible para proyectos 2026
            </span>
          </div> */}

          {/* Heading */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light leading-tight text-white font-weight-400">
              Desarrollador
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light leading-tight text-white/60 font-weight-400">
              Full Stack.
            </h1>
          </div>

          {/* Description */}
          <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-md">
            Desarrollador Full Stack con más de 5 años de experiencia construyendo
            software robusto y escalable. Especializado en Java, Spring Boot,
            Angular y React con fuerte enfoque en calidad y procesos ágiles.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="bg-white/5 border border-white/15 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-200 text-xs sm:text-sm"
            >
              Ver Proyectos
            </a>
          </div>

          {/* Tech logos row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-6 pt-4 sm:pt-6 border-t border-white/5">
            <span className="text-white/25 text-xs uppercase tracking-widest font-medium w-full sm:w-auto">
              Tech Stack
            </span>
            {["Java", "Spring Boot", "Angular", "React", "Node.js", "AWS"].map((tech) => (
              <span
                key={tech}
                className="text-white/40 text-xs sm:text-sm font-medium hover:text-white/70 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right: floating card */}
        <div className="flex items-center justify-center relative mt-8 lg:mt-0">
          {/* Decorative corner lines - hidden on mobile */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
            <div className="w-[84%] h-80 border border-white/5 rounded-2xl" />
            <div className="absolute w-[75%] h-64 border border-white/5 rounded-2xl rotate-12" />
          </div>

          {/* Main card */}
          <div className="relative z-10 card-dark rounded-2xl p-6 sm:p-8 w-full sm:w-[85%] lg:w-[80%] max-w-xs sm:max-w-none shadow-2xl">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 mb-6">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0">
                  <div className={`absolute inset-0 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg shadow-blue-600/40 bg-gradient-to-br from-blue-500 to-blue-700 transition-opacity duration-300 ${imgLoaded ? 'opacity-0' : 'opacity-100'}`}>
                    H
                  </div>
                  <Image
                    src="/photo-avatar.webp"
                    alt="Hector Noguera"
                    fill
                    className={`object-cover object-[center_20%] rounded-full transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImgLoaded(true)}
                  />
                </div>
              <div className="text-center sm:text-left flex-grow">
                <p className="text-white font-semibold text-sm sm:text-base">Hector Noguera</p>
                <p className="text-white/40 text-xs sm:text-sm">Full Stack Developer</p>
              </div>
              <div className="hidden sm:block w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div className="sm:hidden mt-2 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>

            <div className="space-y-3">
              {[
                { label: "Proyectos", value: `10+`, color: "text-blue-400" },
                { label: "Experiencia", value: `${new Date().getFullYear() - 2021}+ años`, color: "text-purple-400" },
                { label: "Tecnologías", value: "12+", color: "text-green-400" },
              ].map(({ label, value, color }) => (
                <div
                  key={label}
                  className="flex justify-between items-center py-2 border-b border-white/5"
                >
                  <span className="text-white/40 text-xs sm:text-sm">{label}</span>
                  <span className={`font-semibold text-xs sm:text-sm ${color}`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 bg-blue-600/20 border border-blue-500/30 rounded-xl p-3 text-center">
              <p className="text-blue-300 text-xs font-medium">
                ✦ Disponible para trabajo remoto
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        <svg
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="text-white/30"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
