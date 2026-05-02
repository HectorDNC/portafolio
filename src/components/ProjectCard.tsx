"use client";

import { useState } from "react";
import type { Project } from "@/utils/data/projectsData";
import { Tooltip } from "react-tooltip";
import Image from "next/image";
import ProjectModal from "@/components/ProjectModal";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    {modalOpen && <ProjectModal project={project} onClose={() => setModalOpen(false)} />}
    <article className="group rounded-[26px] border border-blue-500/20 bg-[#030716] p-2 shadow-[0_20px_50px_rgba(2,8,32,0.45),inset_0_10px_10px_-1px_rgba(0,85,255,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 cursor-pointer" onClick={() => setModalOpen(true)}>
      <div
        className="relative h-56 overflow-hidden rounded-[20px] border border-white/10 lg:h-60"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect();
          const x = event.clientX - bounds.left;
          const y = event.clientY - bounds.top;
          setCursor({ x, y });
        }}
      >
        {project.img && (
          <>
            <Image
              src={project.img}
              fill
              sizes=""
              alt={project.title}
              className="absolute h-full w-full object-cover"
            />

            <div className={`absolute inset-0 bg-gradient-to-br from-blue-400/20 opacity-70`} />
          </>
        )}
        
        {!project.img && (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
        )}

        <div className={`absolute ${project.img ? "" : "inset-0"} bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)]`} />

        <div className="absolute top-3.5 right-3.5">
          <span
            className="inline-flex items-center rounded-[16px] border border-blue-500/25 bg-[#0b1220] px-3.5 py-1.5 text-[12px] font-medium text-[#e5e7eb] shadow-[0_20px_50px_rgba(2,8,32,0.45),inset_0_10px_10px_-1px_rgba(0,85,255,0.1)] backdrop-blur-md transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_rgba(59,130,246,0.3)]"
          >
            {project.category}
          </span>
        </div>

        <span
          className="pointer-events-none absolute z-20 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black shadow-md transition-opacity duration-150"
          style={{
            left: cursor.x,
            top: cursor.y,
            transform: "translate(-50%, -50%)",
            opacity: isHovering ? 1 : 0,
          }}
        >
          Ver
        </span>

        <div className="absolute inset-x-3 bottom-3 rounded-[18px] border border-blue-500/20 bg-[linear-gradient(160deg,#0d1b35_0%,#060e1e_100%)] px-5 py-3.5 shadow-[0_20px_50px_rgba(2,8,32,0.45),inset_0_10px_10px_-1px_rgba(0,85,255,0.1)] backdrop-blur-xl transition-all duration-200 hover:shadow-[0_0_28px_rgba(59,130,246,0.22)]">
          <div className="flex items-center justify-between gap-3">
            <h3
              className="line-clamp-1 text-[15px] font-semibold text-white/95"
              data-tooltip-id={`tooltip-${project.title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '')}`}
              data-tooltip-content={project.title}
            >
              {project.title}
            </h3>
            <Tooltip
              id={`tooltip-${project.title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '')}`}
              place="top"
            />
            {project.year && false && (
              <span className="shrink-0 inline-flex items-center rounded-full border border-blue-500/25 bg-[#0b1220] px-2.5 py-1 text-[11px] font-medium text-[#c9d8f0] shadow-[0_0_8px_rgba(59,130,246,0.15),inset_0_1px_0_rgba(255,255,255,0.06)]">
                {project.year}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="px-3 pb-3 pt-4">
        <p className="mb-4 text-sm leading-relaxed text-white/45">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/55"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
    </>
  );
}