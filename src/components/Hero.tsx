export default function Hero() {
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

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div className="flex items-center gap-2 w-fit">
            <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              NEW
            </span>
            <span className="text-white/60 text-sm bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Disponible para proyectos 2025
            </span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-white">
              Desarrollador
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-white/50">
              Full Stack.
            </h1>
          </div>

          {/* Description */}
          <p className="text-white/50 text-lg leading-relaxed max-w-md">
            Creo experiencias digitales únicas que ayudan a los negocios a
            crecer y destacar. Especializado en aplicaciones web modernas y
            escalables.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contacto"
              className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-all duration-200 text-sm"
            >
              Conectar
            </a>
            <a
              href="#proyectos"
              className="bg-white/5 border border-white/15 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-200 text-sm"
            >
              Ver Proyectos
            </a>
          </div>

          {/* Tech logos row */}
          <div className="flex items-center gap-6 pt-6 border-t border-white/5">
            <span className="text-white/25 text-xs uppercase tracking-widest font-medium">
              Tech Stack
            </span>
            {["React", "Next.js", "TypeScript", "Node"].map((tech) => (
              <span
                key={tech}
                className="text-white/40 text-sm font-medium hover:text-white/70 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right: floating card */}
        <div className="hidden lg:flex items-center justify-center relative">
          {/* Decorative corner lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 border border-white/5 rounded-2xl" />
            <div className="absolute w-64 h-64 border border-white/5 rounded-2xl rotate-12" />
          </div>

          {/* Main card */}
          <div className="relative z-10 card-dark rounded-2xl p-8 w-72 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-600/40">
                H
              </div>
              <div>
                <p className="text-white font-semibold">Hector M.</p>
                <p className="text-white/40 text-sm">Full Stack Dev</p>
              </div>
              <div className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>

            <div className="space-y-3">
              {[
                { label: "Proyectos", value: "12+", color: "text-blue-400" },
                { label: "Experiencia", value: "3+ años", color: "text-purple-400" },
                { label: "Tecnologías", value: "10+", color: "text-green-400" },
              ].map(({ label, value, color }) => (
                <div
                  key={label}
                  className="flex justify-between items-center py-2 border-b border-white/5"
                >
                  <span className="text-white/40 text-sm">{label}</span>
                  <span className={`font-semibold text-sm ${color}`}>
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
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
