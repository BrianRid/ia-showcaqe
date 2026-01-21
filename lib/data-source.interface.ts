import type { Project, ProjectSummary } from "@/types/project";

/**
 * Interface pour abstraire la source de données
 */
export interface DataSource {
  getAllProjects(): Promise<Project[]>;
  getProjectById(id: string): Promise<Project | null>;
  getProjectsSummary(): Promise<ProjectSummary[]>;
}
