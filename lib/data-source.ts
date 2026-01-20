/**
 * Interface pour abstraire la source de données
 * Permet de switcher facilement entre CSV et Notion API
 */

import { createDataSource } from "./data-source-factory";

export type { DataSource } from "./sources/csv-source";
export { projectToSummary } from "./utils/project-mapper";

// Export de l'instance singleton
export const dataSource = createDataSource();
