import type { Project, ProjectSummary } from "@/types/project";
import type { CSVRow } from "@/types/csv";
import { parse } from "csv-parse/sync";
import fs from "fs";
import { parseCSVRowToProject } from "../parsers/csv-parser";
import { projectToSummary } from "../utils/project-mapper";

export interface DataSource {
  getAllProjects(): Promise<Project[]>;
  getProjectById(id: string): Promise<Project | null>;
  getProjectsSummary(): Promise<ProjectSummary[]>;
}

/**
 * Implémentation CSV de la source de données
 */
export class CSVDataSource implements DataSource {
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
    }) as CSVRow[];

    this.projects = records.map((row, index) =>
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
