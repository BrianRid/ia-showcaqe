import type { DataSource } from "./data-source.interface";
import { NotionDataSource } from "./sources/notion-source";

/**
 * Factory pour créer la source de données Notion
 */
export function createDataSource(): DataSource {
  const notionToken = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!notionToken || !databaseId) {
    throw new Error(
      "NOTION_TOKEN and NOTION_DATABASE_ID must be set"
    );
  }

  return new NotionDataSource(notionToken, databaseId);
}
