const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Tienda online completa con carrito, pasarela de pagos y panel de administración.",
    category: "E-Commerce",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    gradient: "from-orange-500/20 to-red-600/20",
    accent: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    link: "#",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description:
      "Panel de análisis con gráficas en tiempo real, reportes y métricas de negocio.",
    category: "SaaS",
    tech: ["React", "TypeScript", "Node.js"],
    gradient: "from-blue-500/20 to-cyan-600/20",
    accent: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    link: "#",
  },
  {
    id: 3,
    title: "Landing Page Creativa",
    description:
      "Landing page animada con alto impacto visual y optimización para conversión.",
    category: "Web Design",
    tech: ["Next.js", "Tailwind", "Framer"],
    gradient: "from-purple-500/20 to-pink-600/20",
    accent: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    link: "#",
  },
  {
    id: 4,
    title: "API REST & Microservicios",
    description:
      "Arquitectura de microservicios escalable con autenticación JWT y documentación Swagger.",
    category: "Backend",
    tech: ["Node.js", "Docker", "PostgreSQL"],
    gradient: "from-green-500/20 to-emerald-600/20",
    accent: "bg-green-500/10 text-green-300 border-green-500/20",
    link: "#",
  },
  {
    id: 5,
    title: "App de Gestión",
    description:
      "Sistema de gestión de tareas y equipos con notificaciones en tiempo real.",
    category: "Full Stack",
    tech: ["React", "Socket.io", "MongoDB"],
    gradient: "from-yellow-500/20 to-amber-600/20",
    accent: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
    link: "#",
  },
  {
    id: 6,
    title: "Blog & CMS",
    description:
      "Plataforma de contenido con editor enriquecido, SEO optimizado y CDN global.",
    category: "CMS",
    tech: ["Next.js", "Sanity", "Vercel"],
    gradient: "from-pink-500/20 to-rose-600/20",
    accent: "bg-pink-500/10 text-pink-300 border-pink-500/20",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
            Mi Trabajo
          </p>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Proyectos
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed">
            Desde startups hasta marcas establecidas, creo soluciones a medida
            que generan impacto real.
          </p>
          <div className="mt-8">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-blue-600/30 text-sm"
            >
              Construir tu proyecto
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-dark rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Image placeholder with gradient */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-white/20 text-7xl font-bold select-none">
                  {project.id.toString().padStart(2, "0")}
                </div>
                {/* Category tag */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`text-xs font-medium px-3 py-1.5 rounded-full border backdrop-blur-sm ${project.accent}`}
                  >
                    {project.category}
                  </span>
                </div>
                {/* View Now overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    className="bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Now
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-white/40 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
