import type { Project } from "@/types/project";
import type { NotionProperty, NotionPage } from "@/types/notion";

/**
 * Utilitaires pour extraire les valeurs des propriétés Notion
 */
export function getNotionPropertyValue(property: NotionProperty | undefined): string {
  if (!property) return "";

  switch (property.type) {
    case "title":
      return property.title.map((t) => t.plain_text).join("");
    case "rich_text":
      return property.rich_text.map((t) => t.plain_text).join("");
    case "select":
      return property.select?.name || "";
    case "multi_select":
      return property.multi_select.map((s) => s.name).join(", ");
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
export function parseNotionPageToProject(page: NotionPage): Project {
  const props = page.properties;

  return {
    id: page.id,
    titre: getNotionPropertyValue(props["Titre"]),
    cadreProjet: getNotionPropertyValue(props["Cadre du projet"]),
    client: getNotionPropertyValue(props["Client"]),
    secteurActivite: getNotionPropertyValue(props["Secteur d'activité"]),
    metiersConcernes: getNotionPropertyValue(props["Métiers concernés"]),
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
