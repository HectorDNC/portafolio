import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const experience = [
  {
    role: "Desarrollador Full Stack",
    company: "Nexus Logistics",
    period: "Junio 2023 – Marzo 2026",
    location: "Chile",
    highlights: [
      "Diseñé e implementé procesos automatizados para operaciones logísticas y contables.",
      "Desarrollé servicios backend con Spring Boot para el manejo de datos críticos.",
      "Construí interfaces internas en Angular para optimizar flujos operativos.",
      "Reduje errores operativos mediante validaciones y automatización de procesos.",
      "Implementé pipelines de CI/CD con Jenkins.",
      "Gestioné despliegues y monitoreo de servicios en AWS.",
    ],
    tags: ["Java", "Spring Boot", "Angular", "Jenkins", "AWS"],
  },
  {
    role: "Desarrollador Full Stack",
    company: "Ideadecoders – HomeworkHelp",
    period: "Febrero 2022 – Mayo 2023",
    location: "Panamá",
    highlights: [
      "Desarrollé una plataforma educativa con React y Spring Boot.",
      "Integré funcionalidades de videoconferencia para clases en línea.",
      "Implementé el sistema de pagos para la plataforma.",
    ],
    tags: ["React", "Java", "Spring Boot", "WebRTC", "Pagos"],
  },
  {
    role: "Desarrollador Full Stack",
    company: "Versa Studio",
    period: "Enero 2021 – Enero 2022",
    location: "Venezuela",
    highlights: [
      "Desarrollé un sistema de pedidos para restaurantes.",
      "Creé APIs REST con Node.js y Express para la gestión de órdenes.",
      "Mejoré el flujo operativo del proceso de pedidos.",
    ],
    tags: ["React", "Node.js", "Express", "APIs REST"],
  },
];

const education = [
  {
    degree: "Ingeniero en Informática",
    institution: "Universidad Politécnica Territorial Andrés Eloy Blanco",
    period: "2017 - 2022",
    description: "",
  },
  {
    degree: "TSU en Informática",
    institution: "Universidad Politécnica Territorial Andrés Eloy Blanco",
    period: "2017 - 2020",
    description: "",
  },
];

const skillGroups = [
  {
    category: "Lenguajes",
    color: "from-orange-500/20 to-red-500/10",
    border: "border-orange-500/20",
    accent: "text-orange-400",
    dot: "bg-orange-400",
    items: ["Java", "JavaScript", "PHP", "SQL"],
  },
  {
    category: "Backend",
    color: "from-purple-500/20 to-violet-500/10",
    border: "border-purple-500/20",
    accent: "text-purple-400",
    dot: "bg-purple-400",
    items: ["Spring Boot", "Node.js", "Express.js"],
  },
  {
    category: "Frontend",
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/20",
    accent: "text-cyan-400",
    dot: "bg-cyan-400",
    items: ["Angular", "React", "Next.js"],
  },
  {
    category: "DevOps & Cloud",
    color: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/20",
    accent: "text-green-400",
    dot: "bg-green-400",
    items: ["AWS", "Jenkins (CI/CD)", "Docker"],
  },
  {
    category: "Bases de datos",
    color: "from-fuchsia-500/20 to-pink-500/10",
    border: "border-fuchsia-500/20",
    accent: "text-fuchsia-400",
    dot: "bg-fuchsia-400",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
];

const languages = [
  { name: "Español", level: "Nativo", percent: 100 },
  { name: "Inglés", level: "B1 (Intermedio)", percent: 60 },
];

const softSkills = [
  "Trabajo en equipo",
  "Análisis de requisitos",
  "Metodologías Ágiles",
  "Comunicación efectiva",
  "Resolución de problemas",
  "Aprendizaje continuo",
];

const courses = [
  { title: "Inglés", provider: "Academia Knock Knowledge", period: "Enero 2025 - Actualidad" },
  { title: "Herramientas de Oficina", provider: "Academia de Software CADIF1", period: "Mayo 2019" },
  { title: "Programación en PHP y MySQL", provider: "Udemy", period: "Junio 2019" },
  { title: "Angular", provider: "Udemy", period: "Octubre 2022" },
];

const fullName = "Hector Noguera";
const title = "Desarrollador Full Stack (Java + Angular) | Ingeniero en Informática";
const birthDate = "10/02/2000";
const phone = "+58 4125365957";
const location = "Venezuela (Remoto)";

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden px-6 pb-24 pt-28">
        {/* Background glow */}
        <div className="absolute left-1/2 top-0 h-[36rem] w-2/3 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

        <section className="relative mx-auto max-w-5xl">

          {/* Header */}
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-400">
              Curriculum Vitae
            </p>
            <h1 className="mb-4 text-4xl font-light text-white md:text-6xl">
              Resumen Profesional
            </h1>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-white/45 md:text-lg">
              Desarrollador Full Stack con foco en impacto de negocio, escalabilidad y eficiencia operativa.
            </p>
          </div>

          {/* Profile card */}
          <div className="card-dark rounded-2xl p-8 mb-6 flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-blue-500/30">
              HN
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-white mb-1">{fullName}</h2>
              <p className="text-blue-400 font-medium mb-1">{title}</p>
              <p className="text-white/40 text-xs mb-3">Ubicación: {location}</p>
              <p className="text-white/50 text-sm leading-relaxed max-w-2xl">
                Desarrollador Full Stack con más de 5 años de experiencia en la construcción de aplicaciones web escalables utilizando Java (Spring Boot) y Angular. Sólida experiencia en arquitectura backend, automatización de procesos y despliegues en la nube (AWS). Enfocado en mejorar la eficiencia operativa y reducir errores en sistemas críticos de negocio. Experiencia trabajando con equipos internacionales en Chile y Panamá.
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 text-xs text-white/50 hover:text-white/80 transition-colors"
                >
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.05.36 2.07.72 3.03a2 2 0 0 1-.45 2.11L8.91 11.09a16 16 0 0 0 6 6l1.23-1.38a2 2 0 0 1 2.11-.45c.96.36 1.98.6 3.03.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {phone}
                </a>
                <span className="text-white/15">•</span>
                <a
                  href={`mailto:hector.noguera03@gmail.com`}
                  className="flex items-center gap-2 text-xs text-white/50 hover:text-white/80 transition-colors"
                >
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  hector.noguera03@gmail.com
                </a>
                <span className="text-white/15">•</span>
                <a
                  href="https://www.linkedin.com/in/hector-noguera-c/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-white/50 hover:text-white/80 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  linkedin.com/in/hector-noguera-c
                </a>
              </div>
            </div>
            <a
              href="/CV-HectorNoguera.pdf"
              download
              className="hidden flex-shrink-0 flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-blue-600/30 whitespace-nowrap"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Descargar CV
            </a>
          </div>

          {/* Grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Experience — spans 2 cols */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4 flex items-center gap-2">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 016 4.5h4.5M16.5 3v4.5m0 0H12m4.5 0l-6 6" />
                </svg>
                Experiencia
              </h3>
              {experience.map((exp, i) => (
                <div key={i} className="card-dark rounded-2xl p-6 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h4 className="text-white font-semibold text-base">{exp.role}</h4>
                      <p className="text-blue-400 text-sm font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-white/30 text-xs font-mono block">{exp.period}</span>
                      <span className="text-white/25 text-xs">{exp.location}</span>
                    </div>
                  </div>
                  <ul className="mb-4 space-y-1.5">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-white/45 text-sm leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400/80 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-white/50 group-hover:border-blue-500/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div className="space-y-6">

              {/* Education */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4 flex items-center gap-2">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                  Educación
                </h3>
                <div className="space-y-3">
                  {education.map((edu, i) => (
                    <div key={i} className="card-dark rounded-2xl p-5">
                      <h4 className="text-white font-semibold text-sm mb-0.5">{edu.degree}</h4>
                      <p className="text-blue-400 text-xs font-medium mb-1">{edu.institution}</p>
                      {edu.period && <p className="text-white/25 text-xs font-mono mb-2">{edu.period}</p>}
                      {edu.description && <p className="text-white/40 text-xs leading-relaxed">{edu.description}</p>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4 flex items-center gap-2">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                  </svg>
                  Idiomas
                </h3>
                <div className="card-dark rounded-2xl p-5 space-y-4">
                  {languages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-white text-sm font-medium">{lang.name}</span>
                        <span className="text-white/40 text-xs">{lang.level}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
                          style={{ width: `${lang.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

                {/* Cursos Realizados */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4 flex items-center gap-2">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m0 0l-3-3m3 3l3-3M3 20h18" />
                    </svg>
                    Cursos Realizados
                  </h3>
                  <div className="card-dark rounded-2xl p-5 space-y-3">
                    {courses.map((c, idx) => (
                      <div key={idx} className="text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-white/70">{c.title}</span>
                          <span className="text-white/30 text-xs">{c.period}</span>
                        </div>
                        <div className="text-white/30 text-xs">{c.provider}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Soft skills */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4 flex items-center gap-2">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                  </svg>
                  Habilidades Blandas
                </h3>
                <div className="card-dark rounded-2xl p-5">
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-white/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills grid */}
          <div className="mt-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4 flex items-center gap-2">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
              Habilidades Técnicas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {skillGroups.map((group) => (
                <div
                  key={group.category}
                  className={`card-dark mx-4 sm:mx-0 rounded-2xl p-5 bg-gradient-to-br ${group.color} border ${group.border}`}
                >
                  <h4 className={`text-sm font-semibold mb-4 ${group.accent}`}>{group.category}</h4>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${group.dot}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Back button */}
          <div className="flex justify-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Volver al inicio
            </Link>
          </div>
          </section>
        <Footer />
      </main>
    </>
  );
}
