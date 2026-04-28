import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/utils/data/projectsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden px-6 pb-20 pt-28">
        <div className="absolute left-1/2 top-0 h-[32rem] w-2/3 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <section className="relative mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-400">
              Portafolio completo
            </p>
            <h1 className="mb-6 text-4xl font-light text-white md:text-6xl">
              Proyectos
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/45 md:text-lg">
              Una selección de soluciones construidas para empresas, startups y
              productos digitales con foco en rendimiento, escalabilidad y diseño.
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10"
            >
              Volver al inicio
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
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
            </Link>
          </div>

          <Footer />
        </section>
      </main>
    </>
  );
}