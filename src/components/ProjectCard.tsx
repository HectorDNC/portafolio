"use client";

import { useState } from "react";
import type { Project } from "@/utils/data/projectsData";
import { Tooltip } from "react-tooltip";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  return (
    <article className="group rounded-[26px] border border-blue-500/20 bg-[#030716] p-2 shadow-[0_20px_50px_rgba(2,8,32,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40">
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
          <Image
            src={project.img}
            fill
            sizes=""
            alt={project.title}
            className="absolute h-full w-full object-cover"
          />
        )}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)]" />
        <a href={project.link} className="absolute inset-0" aria-label={`Ver ${project.title}`} />

        <div className="absolute top-4 right-4">
          <span
            className="rounded-2xl border border-[#25467a]/55 bg-[#06112a]/78 px-4 py-2 text-sm font-medium text-[#d9e6ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-xl"
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

        <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-[#1f4580]/45 bg-[linear-gradient(180deg,rgba(7,19,48,0.88)_0%,rgba(2,10,30,0.9)_100%)] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_26px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <h3
              className="line-clamp-1 text-base font-semibold text-[#e8efff]"
              data-tooltip-id={`tooltip-${project.title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '')}`}
              data-tooltip-content={project.title}
            >
              {project.title}
            </h3>
            <Tooltip
              id={`tooltip-${project.title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '')}`}
              place="top"
            />
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
  );
}