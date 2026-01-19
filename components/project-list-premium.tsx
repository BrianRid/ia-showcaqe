"use client";

import type { ProjectSummary } from "@/types/project";
import { ProjectCard } from "./project-card";
import { motion } from "framer-motion";
import { Frown } from "lucide-react";

interface ProjectListPremiumProps {
  projects: ProjectSummary[];
}

export function ProjectListPremium({ projects }: ProjectListPremiumProps) {
  if (projects.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-20"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4">
          <Frown className="w-10 h-10 text-text-light" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          Aucun projet trouvé
        </h3>
        <p className="text-text-secondary">
          Essayez d'ajuster vos filtres de recherche
        </p>
      </motion.div>
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
