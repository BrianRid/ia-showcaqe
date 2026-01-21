/**
 * Source de données principale basée sur Notion
 */

import { createDataSource } from "./data-source-factory";

export type { DataSource } from "./data-source.interface";
export { projectToSummary } from "./utils/project-mapper";

// Export de l'instance singleton
export const dataSource = createDataSource();
