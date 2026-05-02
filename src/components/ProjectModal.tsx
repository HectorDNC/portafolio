"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { Project } from "@/utils/data/projectsData";

type ProjectModalProps = {
    project: Project;
    onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = prev;
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-1 sm:p-2"
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Card modal - constrained to viewport */}
            <div className="relative max-h-[calc(100dvh-1rem)] overflow-y-auto z-10 w-full max-w-4xl p-3 mx-auto rounded-[22px] border border-blue-500/20 bg-[#030716] shadow-[0_20px_80px_rgba(2,8,32,0.8),inset_0_10px_10px_-1px_rgba(0,85,255,0.1)] animate-in fade-in duration-200">
                {/* Use a column flex so content area can scroll if necessary. Limit overall height to viewport minus paddings */}
                <div className="flex flex-col max-h-full rounded-[22px]">

                    {/* Imagen principal - ocupa la parte superior y se adapta a pantalla */}
                    <div className="relative w-full flex-shrink-0 overflow-hidden">
                        <div className="relative w-full flex justify-center" style={{ aspectRatio: '16/9', maxHeight: '70vh' }}>
                            {project.img ? (
                                <>
                                    <Image
                                        src={project.img}
                                        fill
                                        sizes="(max-width: 640px) 90vw, (max-width: 768px) 65vw, 700px"
                                        alt={project.title}
                                        priority
                                    />
                                </>
                            ) : (
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-100`} />
                            )}

                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)]" />

                            {/* Badge categoría y cerrar */}
                            <div className="absolute top-3.5 left-3.5">
                                <span className="inline-flex items-center rounded-[16px] border border-blue-500/25 bg-[#0b1220] px-3.5 py-1.5 text-[12px] font-medium text-[#e5e7eb] shadow-[0_20px_50px_rgba(2,8,32,0.45),inset_0_10px_10px_-1px_rgba(0,85,255,0.1)] backdrop-blur-md">
                                    {project.category}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Contenido */}
                    <div className="px-5 pb-5 pt-5">
                        <div className="mb-3 flex items-start justify-between gap-3">
                            <h2 className="text-xl font-semibold text-white/95 leading-snug">
                                {project.title}
                            </h2>
                            {project.year && (
                                <span className="shrink-0 inline-flex items-center rounded-full border border-blue-500/25 bg-[#0b1220] px-2.5 py-1 text-[11px] font-medium text-[#c9d8f0] shadow-[0_0_8px_rgba(59,130,246,0.15),inset_0_1px_0_rgba(255,255,255,0.06)]">
                                    {project.year}
                                </span>
                            )}
                        </div>

                        <p className="mb-5 text-sm leading-relaxed text-white/50">
                            {project.description}
                        </p>

                        <div className="mb-5 flex flex-wrap gap-2">
                            {project.tech.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/55"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>

                        {project.link && project.link !== "" && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-[14px] border border-blue-500/30 bg-[linear-gradient(160deg,#0d1b35_0%,#060e1e_100%)] px-5 py-2.5 text-sm font-medium text-white/85 shadow-[0_0_18px_rgba(59,130,246,0.15),inset_0_10px_10px_-1px_rgba(0,85,255,0.08)] transition-all duration-200 hover:border-blue-400/50 hover:shadow-[0_0_28px_rgba(59,130,246,0.3)] hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                                Ver proyecto
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <button
                onClick={onClose}
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-blue-500/25 bg-[#0b1220]/80 text-white/70 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-blue-400/50 hover:text-white"
                aria-label="Cerrar modal"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </button>
        </div>
    );
}
