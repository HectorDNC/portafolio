const skills = [
  {
    name: "React",
    subtitle: "UI Library",
    description:
      "Construcción de interfaces interactivas con componentes reutilizables y gestión de estado avanzada.",
    icon: "⚛",
    bg: "from-cyan-400 to-blue-500",
    shadow: "shadow-cyan-500/20",
  },
  {
    name: "Next.js",
    subtitle: "Framework",
    description:
      "Aplicaciones full-stack con SSR, SSG, App Router y optimizaciones de rendimiento.",
    icon: "▲",
    bg: "from-gray-600 to-gray-800",
    shadow: "shadow-gray-500/20",
  },
  {
    name: "TypeScript",
    subtitle: "Tipado Estático",
    description:
      "Código robusto y mantenible con tipado fuerte, interfaces y patrones avanzados.",
    icon: "TS",
    bg: "from-blue-500 to-blue-700",
    shadow: "shadow-blue-500/20",
  },
  {
    name: "Node.js",
    subtitle: "Backend Runtime",
    description:
      "APIs REST y GraphQL de alto rendimiento con Express, Fastify y arquitectura limpia.",
    icon: "⬡",
    bg: "from-green-500 to-green-700",
    shadow: "shadow-green-500/20",
  },
  {
    name: "Tailwind CSS",
    subtitle: "Estilos",
    description:
      "Diseño moderno y responsivo con utility-first CSS, sistemas de diseño y animaciones.",
    icon: "◈",
    bg: "from-cyan-500 to-teal-600",
    shadow: "shadow-teal-500/20",
  },
  {
    name: "PostgreSQL",
    subtitle: "Base de Datos",
    description:
      "Modelado relacional, consultas optimizadas, migraciones y ORMs como Prisma.",
    icon: "🐘",
    bg: "from-blue-400 to-indigo-600",
    shadow: "shadow-indigo-500/20",
  },
  {
    name: "Docker",
    subtitle: "DevOps",
    description:
      "Contenedores, compose, pipelines CI/CD y despliegues en ambientes reproducibles.",
    icon: "◻",
    bg: "from-blue-500 to-sky-600",
    shadow: "shadow-sky-500/20",
  },
  {
    name: "Git",
    subtitle: "Control de Versiones",
    description:
      "Flujos de trabajo colaborativos, estrategias de branching y revisión de código.",
    icon: "⌥",
    bg: "from-orange-500 to-red-600",
    shadow: "shadow-orange-500/20",
  },
  {
    name: "MongoDB",
    subtitle: "NoSQL",
    description:
      "Modelos de datos flexibles, agregaciones y optimización para aplicaciones a escala.",
    icon: "◉",
    bg: "from-green-400 to-green-700",
    shadow: "shadow-green-500/20",
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 glow-blue-center pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
            Mis Capacidades
          </p>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-2">
            Habilidades
          </h2>
          <h3 className="text-4xl md:text-5xl font-light text-white/30 mb-6">
            Tecnologías y Herramientas
          </h3>
          <p className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed">
            Un conjunto de herramientas modernas para construir productos
            digitales de alta calidad.
          </p>
          <div className="mt-8">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-blue-600/30 text-sm"
            >
              Ver Proyectos
            </a>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="card-dark rounded-2xl p-6 flex flex-col gap-4 group"
            >
              {/* Top row: icon + arrow */}
              <div className="flex items-start justify-between">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.bg} flex items-center justify-center text-white text-lg font-bold shadow-lg ${skill.shadow}`}
                >
                  {skill.icon}
                </div>
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="text-white/20 group-hover:text-white/50 transition-colors mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>

              {/* Name + subtitle */}
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="text-white font-semibold">{skill.name}</h3>
                  <span className="text-xs text-white/30 bg-white/5 px-2 py-0.5 rounded-full border border-white/8">
                    {skill.subtitle}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/40 text-sm leading-relaxed">
                {skill.description}
              </p>

              {/* Progress bar */}
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.bg} rounded-full`}
                  style={{ width: `${75 + Math.random() * 20}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
