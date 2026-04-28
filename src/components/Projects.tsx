import Link from "next/link";
import { projectsSummary } from "../utils/data/projectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 overflow-hidden">
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
            Desde startups hasta empresas establecidas, creo soluciones a medida
            que generan impacto real.
          </p>
          <div className="mt-8 hidden">
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsSummary.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* See more projects link */}
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-200 text-sm"
          >
            Ver más proyectos
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
