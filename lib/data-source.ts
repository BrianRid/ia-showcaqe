import type { Project, ProjectSummary } from "@/types/project";
import { parse } from "csv-parse/sync";
import fs from "fs";
import path from "path";
import { Client } from "@notionhq/client";

/**
 * Interface pour abstraire la source de données
 * Permet de switcher facilement entre CSV et Notion API
 */
interface DataSource {
  getAllProjects(): Promise<Project[]>;
  getProjectById(id: string): Promise<Project | null>;
  getProjectsSummary(): Promise<ProjectSummary[]>;
}

/**
 * Parse une ligne CSV en objet Project
 */
function parseCSVRowToProject(row: any, index: number): Project {
  return {
    id: `project-${index}`,
    titre: row["Titre"] || "",
    statut: row["Statut"] || "",
    cadreProjet: row["Cadre du projet"] || "",
    client: row["Client"] || "",
    secteurActivite: row["Secteur d'activité"] || "",
    metiersConernes: row["Métiers concernés"] || "",
    roleWiver: row["Role du Wiver"] || "",
    problemePrincipal: row["Problématique principale"] || "",
    limiteSolutionActuelle: row["Limite solution actuelle"] || "",
    objectifPrincipal: row["Objectif principal"] || "",
    objectifsSecondaires: row["Objectifs secondaires"] || "",
    solutionIA: row["Solution IA"] || "",
    typeSolution: row["Type de solution"] || "",
    casUsage: row["Cas d'usage"] || "",
    valeurApportee: row["Valeur apportée"] || "",
    niveauMaturite: row["Niveau de maturité"] || "",
    llmsUtilises: row["LLM(s) utilisé(s)"] || "",
    outilsFramework: row["Outils et framework"] || "",
    kpisSucces: row["KPIs de succès"] || "",
    northStar: row["North Star"] || "",
    hypotheseValidee: row["Hypothèse de valeur validée ?"] || "",
    enseignementsCles: row["Enseignements clés"] || "",
    replicabilite: row["Réplicabilité"] || "",
  };
}

/**
 * Utilitaires pour extraire les valeurs des propriétés Notion
 */
function getNotionPropertyValue(property: any): string {
  if (!property) return "";

  switch (property.type) {
    case "title":
      return property.title.map((t: any) => t.plain_text).join("");
    case "rich_text":
      return property.rich_text.map((t: any) => t.plain_text).join("");
    case "select":
      return property.select?.name || "";
    case "multi_select":
      return property.multi_select.map((s: any) => s.name).join(", ");
    case "number":
      return property.number?.toString() || "";
    case "checkbox":
      return property.checkbox ? "Oui" : "Non";
    case "date":
      return property.date?.start || "";
    case "url":
      return property.url || "";
    case "email":
      return property.email || "";
    case "phone_number":
      return property.phone_number || "";
    default:
      return "";
  }
}

/**
 * Parse une page Notion en objet Project
 */
function parseNotionPageToProject(page: any): Project {
  const props = page.properties;

  return {
    id: page.id,
    titre: getNotionPropertyValue(props["Titre"]),
    statut: getNotionPropertyValue(props["Statut"]),
    cadreProjet: getNotionPropertyValue(props["Cadre du projet"]),
    client: getNotionPropertyValue(props["Client"]),
    secteurActivite: getNotionPropertyValue(props["Secteur d'activité"]),
    metiersConernes: getNotionPropertyValue(props["Métiers concernés"]),
    roleWiver: getNotionPropertyValue(props["Role du Wiver"]),
    problemePrincipal: getNotionPropertyValue(props["Problématique principale"]),
    limiteSolutionActuelle: getNotionPropertyValue(
      props["Limite solution actuelle"]
    ),
    objectifPrincipal: getNotionPropertyValue(props["Objectif principal"]),
    objectifsSecondaires: getNotionPropertyValue(
      props["Objectifs secondaires"]
    ),
    solutionIA: getNotionPropertyValue(props["Solution IA"]),
    typeSolution: getNotionPropertyValue(props["Type de solution"]),
    casUsage: getNotionPropertyValue(props["Cas d'usage"]),
    valeurApportee: getNotionPropertyValue(props["Valeur apportée"]),
    niveauMaturite: getNotionPropertyValue(props["Niveau de maturité"]),
    llmsUtilises: getNotionPropertyValue(props["LLM(s) utilisé(s)"]),
    outilsFramework: getNotionPropertyValue(props["Outils et framework"]),
    kpisSucces: getNotionPropertyValue(props["KPIs de succès"]),
    northStar: getNotionPropertyValue(props["North Star"]),
    hypotheseValidee: getNotionPropertyValue(
      props["Hypothèse de valeur validée ?"]
    ),
    enseignementsCles: getNotionPropertyValue(props["Enseignements clés"]),
    replicabilite: getNotionPropertyValue(props["Réplicabilité"]),
  };
}

/**
 * Convertit un Project en ProjectSummary (données pour les cards)
 */
function projectToSummary(project: Project): ProjectSummary {
  return {
    id: project.id,
    titre: project.titre,
    statut: project.statut,
    client: project.client,
    secteurActivite: project.secteurActivite,
    typeSolution: project.typeSolution,
    niveauMaturite: project.niveauMaturite,
    casUsage: project.casUsage,
    valeurApportee: project.valeurApportee,
  };
}

/**
 * Implémentation CSV de la source de données
 */
class CSVDataSource implements DataSource {
  private csvPath: string;
  private projects: Project[] | null = null;

  constructor(csvPath: string) {
    this.csvPath = csvPath;
  }

  private loadProjects(): Project[] {
    if (this.projects !== null) {
      return this.projects;
    }

    const fileContent = fs.readFileSync(this.csvPath, "utf-8");
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    });

    this.projects = records.map((row: any, index: number) =>
      parseCSVRowToProject(row, index)
    );

    return this.projects;
  }

  async getAllProjects(): Promise<Project[]> {
    return this.loadProjects();
  }

  async getProjectById(id: string): Promise<Project | null> {
    const projects = this.loadProjects();
    return projects.find((p) => p.id === id) || null;
  }

  async getProjectsSummary(): Promise<ProjectSummary[]> {
    const projects = this.loadProjects();
    return projects.map(projectToSummary);
  }
}

/**
 * Implémentation Notion de la source de données
 */
class NotionDataSource implements DataSource {
  private notion: Client;
  private databaseId: string;
  private cache: Project[] | null = null;
  private cacheTimestamp: number | null = null;
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  constructor(notionToken: string, databaseId: string) {
    this.notion = new Client({ auth: notionToken });
    this.databaseId = databaseId;
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
        const response: any = await this.notion.dataSources.query({
          data_source_id: this.databaseId,
          start_cursor: startCursor,
          page_size: 100,
        });

        const pageProjects = response.results
          .filter((page: any) => "properties" in page)
          .map(parseNotionPageToProject);

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
        return parseNotionPageToProject(page);
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

/**
 * Factory pour créer la bonne source de données selon la config
 */
function createDataSource(): DataSource {
  const useNotion = process.env.USE_NOTION === "true";

  if (useNotion) {
    const notionToken = process.env.NOTION_TOKEN;
    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!notionToken || !databaseId) {
      throw new Error(
        "NOTION_TOKEN and NOTION_DATABASE_ID must be set when USE_NOTION=true"
      );
    }

    return new NotionDataSource(notionToken, databaseId);
  }

  // Par défaut, utiliser le CSV
  const csvPath = path.join(
    process.cwd(),
    "database.csv"
  );
  return new CSVDataSource(csvPath);
}

// Export de l'instance singleton
export const dataSource = createDataSource();

// Export des fonctions utilitaires
export { projectToSummary, type DataSource };
