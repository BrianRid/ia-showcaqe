"use client";

import type { ProjectSummary } from "@/types/project";
import { ProjectCard } from "./project-card";
import { Frown } from "lucide-react";

interface ProjectListProps {
  projects: ProjectSummary[];
  animated?: boolean;
}

export function ProjectList({ projects, animated = false }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-20 h-20 bg-linear-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4">
          <Frown className="w-10 h-10 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Aucun projet trouvé
        </h3>
        <p className="text-gray-600">
          Essayez d'ajuster vos filtres de recherche
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
