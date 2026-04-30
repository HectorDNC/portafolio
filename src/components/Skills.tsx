const skills = [
  {
    name: "Java",
    subtitle: "Lenguaje Principal",
    description:
      "Desarrollo backend robusto con Java, aplicando patrones de diseño, POO y arquitecturas limpias.",
    icon: "☕",
    bg: "from-orange-500 to-red-600",
    shadow: "shadow-orange-500/20",
  },
  {
    name: "Spring Boot",
    subtitle: "Backend Framework",
    description:
      "Construcción de microservicios y APIs REST escalables con Spring Boot, Spring Security y JPA.",
    icon: "🌱",
    bg: "from-green-500 to-green-700",
    shadow: "shadow-green-500/20",
  },
  {
    name: "Angular",
    subtitle: "Frontend Framework",
    description:
      "Interfaces empresariales con Angular, RxJS, gestión de estado y componentes reutilizables.",
    icon: "▲",
    bg: "from-red-500 to-rose-700",
    shadow: "shadow-red-500/20",
  },
  {
    name: "React JS",
    subtitle: "UI Library",
    description:
      "Aplicaciones SPA y multiplataforma con React, hooks, context y gestión de estado avanzada.",
    icon: "⚛",
    bg: "from-cyan-400 to-blue-500",
    shadow: "shadow-cyan-500/20",
  },
  {
    name: "Node.js",
    subtitle: "Backend Runtime",
    description:
      "APIs REST de alto rendimiento con Node.js y Express.js para aplicaciones en tiempo real.",
    icon: "⬡",
    bg: "from-green-400 to-emerald-600",
    shadow: "shadow-emerald-500/20",
  },
  {
    name: "JavaScript",
    subtitle: "Lenguaje",
    description:
      "Dominio avanzado de JS moderno: ES6+, programación funcional, async/await y patrones.",
    icon: "JS",
    bg: "from-yellow-400 to-yellow-600",
    shadow: "shadow-yellow-500/20",
  },
  {
    name: "SQL",
    subtitle: "Base de Datos",
    description:
      "Diseño relacional, consultas optimizadas, procedimientos almacenados y modelado de datos.",
    icon: "🗄",
    bg: "from-blue-400 to-indigo-600",
    shadow: "shadow-indigo-500/20",
  },
  {
    name: "AWS",
    subtitle: "Cloud",
    description:
      "Gestión y monitoreo de servicios cloud en AWS para aplicaciones de producción a escala.",
    icon: "☁",
    bg: "from-orange-400 to-amber-600",
    shadow: "shadow-amber-500/20",
  },
  {
    name: "Jenkins",
    subtitle: "CI/CD",
    description:
      "Implementación de pipelines de integración y despliegue continuo para automatización de entregas.",
    icon: "⚙",
    bg: "from-slate-500 to-slate-700",
    shadow: "shadow-slate-500/20",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
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
              href="#projects"
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
