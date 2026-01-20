import type { Project, ProjectSummary } from "@/types/project";
import type { NotionDatabaseQueryResponse } from "@/types/notion";
import { Client } from "@notionhq/client";
import { parseNotionPageToProject } from "../parsers/notion-parser";
import { projectToSummary } from "../utils/project-mapper";
import { CACHE_DURATION_MS, NOTION_PAGE_SIZE } from "../constants";
import type { DataSource } from "./csv-source";

/**
 * Implémentation Notion de la source de données
 */
export class NotionDataSource implements DataSource {
  private notion: Client;
  private dataSourceId: string;
  private cache: Project[] | null = null;
  private cacheTimestamp: number | null = null;
  private readonly CACHE_DURATION = CACHE_DURATION_MS;

  constructor(notionToken: string, dataSourceId: string) {
    this.notion = new Client({ auth: notionToken });
    this.dataSourceId = dataSourceId;
  }

  private isCacheValid(): boolean {
    if (!this.cache || !this.cacheTimestamp) return false;
    return Date.now() - this.cacheTimestamp < this.CACHE_DURATION;
  }

  async getAllProjects(): Promise<Project[]> {
    // Utiliser le cache si valide
    if (this.isCacheValid() && this.cache) {
      return this.cache;
    }

    try {
      const projects: Project[] = [];
      let hasMore = true;
      let startCursor: string | undefined = undefined;

      // Notion API pagine les résultats (max 100 par requête)
      while (hasMore) {
        const response = await this.notion.dataSources.query({
          data_source_id: this.dataSourceId,
          start_cursor: startCursor,
          page_size: NOTION_PAGE_SIZE,
        }) as unknown as NotionDatabaseQueryResponse;

        const pageProjects = response.results.map(parseNotionPageToProject);

        projects.push(...pageProjects);

        hasMore = response.has_more;
        startCursor = response.next_cursor ?? undefined;
      }

      // Mettre en cache
      this.cache = projects;
      this.cacheTimestamp = Date.now();

      return projects;
    } catch (error) {
      console.error("Erreur lors de la récupération des projets Notion:", error);
      throw new Error(
        `Impossible de récupérer les projets depuis Notion: ${error instanceof Error ? error.message : "Erreur inconnue"}`
      );
    }
  }

  async getProjectById(id: string): Promise<Project | null> {
    try {
      // Essayer d'abord de récupérer depuis le cache
      const projects = await this.getAllProjects();
      const cachedProject = projects.find((p) => p.id === id);
      if (cachedProject) return cachedProject;

      // Si pas dans le cache, récupérer directement la page
      const page = await this.notion.pages.retrieve({ page_id: id });

      if ("properties" in page) {
        return parseNotionPageToProject(page as any);
      }

      return null;
    } catch (error) {
      console.error(`Erreur lors de la récupération du projet ${id}:`, error);
      return null;
    }
  }

  async getProjectsSummary(): Promise<ProjectSummary[]> {
    const projects = await this.getAllProjects();
    return projects.map(projectToSummary);
  }
}
