import type { Project } from "@/types/project";
import type { CSVRow } from "@/types/csv";

/**
 * Parse une ligne CSV en objet Project
 */
export function parseCSVRowToProject(row: CSVRow, index: number): Project {
  return {
    id: `project-${index}`,
    titre: row["Titre"] || "",
    cadreProjet: row["Cadre du projet"] || "",
    client: row["Client"] || "",
    secteurActivite: row["Secteur d'activité"] || "",
    metiersConcernes: row["Métiers concernés"] || "",
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
