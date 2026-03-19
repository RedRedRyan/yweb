import React from 'react';
import type { Project } from '../../constants';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a
      href={project.link}
      className="group relative flex min-h-48 flex-col overflow-hidden rounded-4xl border border-white/8 bg-[#141414] p-7 text-white shadow-purple transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#181818] sm:p-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_42%)] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-1 flex-col">
        <div className="flex items-end gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-black/70 ring-1 ring-white/10">
            <img
              src={project.logo}
              alt={project.title}
              className="h-9 w-9 object-contain"
            />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-white/90">
              {project.title}
            </h3>
            <div className="mt-2 inline-flex w-fit items-center rounded-full bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#111111]">
              {project.category}
            </div>
          </div>
        </div>

        <div className="mt-auto max-w-[28ch] pt-12">
          <p className="text-lg leading-8 text-white/92 sm:text-[1.35rem]">
            {project.description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
