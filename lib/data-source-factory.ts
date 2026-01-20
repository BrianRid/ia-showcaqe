import path from "path";
import type { DataSource } from "./sources/csv-source";
import { CSVDataSource } from "./sources/csv-source";
import { NotionDataSource } from "./sources/notion-source";

/**
 * Factory pour créer la bonne source de données selon la config
 */
export function createDataSource(): DataSource {
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
  const csvPath = path.join(process.cwd(), "database.csv");
  return new CSVDataSource(csvPath);
}
