import type { Project, ProjectSummary } from "@/types/project";

/**
 * Convertit un Project en ProjectSummary (données pour les cards)
 */
export function projectToSummary(project: Project): ProjectSummary {
  return {
    id: project.id,
    titre: project.titre,
    client: project.client,
    secteurActivite: project.secteurActivite,
    typeSolution: project.typeSolution,
    niveauMaturite: project.niveauMaturite,
    casUsage: project.casUsage,
    valeurApportee: project.valeurApportee,
  };
}
