import type { Project, ProjectSummary } from "@/types/project";
import type { NotionDatabaseQueryResponse, NotionPage } from "@/types/notion";
import { Client } from "@notionhq/client";
import { parseNotionPageToProject } from "../parsers/notion-parser";
import { projectToSummary } from "../utils/project-mapper";
import { CACHE_DURATION_MS, NOTION_PAGE_SIZE } from "../constants";
import type { DataSource } from "../data-source.interface";

/**
 * Implémentation Notion de la source de données
 */
export class NotionDataSource implements DataSource {
  private notion: Client;
  private databaseId: string;
  private dataSourceId: string | null = null;
  private cache: Project[] | null = null;
  private cacheTimestamp: number | null = null;
  private readonly CACHE_DURATION = CACHE_DURATION_MS;

  constructor(notionToken: string, databaseId: string) {
    this.notion = new Client({
      auth: notionToken,
      notionVersion: '2025-09-03'
    });
    this.databaseId = databaseId;
  }

  private async ensureDataSourceId(): Promise<string> {
    if (this.dataSourceId) return this.dataSourceId;

    const response = await this.notion.request({
      method: "get",
      path: `databases/${this.databaseId}`,
    }) as unknown as { data_sources: { id: string }[] };

    if (!response.data_sources || response.data_sources.length === 0) {
      throw new Error("No data sources found in database");
    }

    this.dataSourceId = response.data_sources[0].id;
    return this.dataSourceId;
  }

  private isCacheValid(): boolean {
    if (!this.cache || !this.cacheTimestamp) return false;
    return Date.now() - this.cacheTimestamp < this.CACHE_DURATION;
  }

  async getAllProjects(): Promise<Project[]> {
    if (this.isCacheValid() && this.cache) {
      return this.cache;
    }

    try {
      const dataSourceId = await this.ensureDataSourceId();
      const projects: Project[] = [];
      let hasMore = true;
      let startCursor: string | undefined = undefined;

      while (hasMore) {
        const response = await this.notion.request({
          method: "post",
          path: `data_sources/${dataSourceId}/query`,
          body: {
            start_cursor: startCursor,
            page_size: NOTION_PAGE_SIZE,
          }
        }) as unknown as NotionDatabaseQueryResponse;

        const pageProjects = response.results.map(parseNotionPageToProject);
        projects.push(...pageProjects);

        hasMore = response.has_more;
        startCursor = response.next_cursor ?? undefined;
      }

      this.cache = projects;
      this.cacheTimestamp = Date.now();

      return projects;
    } catch (error) {
      console.error("Error fetching projects from Notion:", error);
      throw new Error(
        `Failed to fetch projects from Notion: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }

  async getProjectById(id: string): Promise<Project | null> {
    try {
      const projects = await this.getAllProjects();
      const cachedProject = projects.find((p) => p.id === id);
      if (cachedProject) return cachedProject;

      const page = await this.notion.pages.retrieve({ page_id: id });

      if ("properties" in page) {
        return parseNotionPageToProject(page as unknown as NotionPage);
      }

      return null;
    } catch (error) {
      console.error(`Error fetching project ${id}:`, error);
      return null;
    }
  }

  async getProjectsSummary(): Promise<ProjectSummary[]> {
    const projects = await this.getAllProjects();
    const filtered = projects.filter(p => p.published);
    return filtered.map(projectToSummary);
  }
}
