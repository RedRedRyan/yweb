import React from 'react';
import type { Project } from '../../constants';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a
      href={project.link}
      className="group relative overflow-hidden rounded-lg border border-green border-2  backdrop-blur-2xl transition-all duration-300 hover:border-gray-300 hover:shadow-lg p-2"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-green from-blue-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-1/2">
        {/* Logo */}
        <div className="mb-3 h-10 w-10 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
          <img
            src={project.logo}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Category Badge */}
        <div className="mb-3 inline-flex w-fit">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-dark">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-2 text-xl font-bold text-green group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="flex-grow text-sm text-white font-nunito mb-3">
          {project.description}
        </p>

        {/* Footer - Link indicator */}
        <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
          Learn More
          <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
