export interface Project {
  id: string;
  titre: string;
  statut: string;
  cadreProjet: string;
  client: string;
  secteurActivite: string;
  metiersConernes: string;
  roleWiver: string;
  problemePrincipal: string;
  limiteSolutionActuelle: string;
  objectifPrincipal: string;
  objectifsSecondaires: string;
  solutionIA: string;
  typeSolution: string;
  casUsage: string;
  valeurApportee: string;
  niveauMaturite: string;
  llmsUtilises: string;
  outilsFramework: string;
  kpisSucces: string;
  northStar: string;
  hypotheseValidee: string;
  enseignementsCles: string;
  replicabilite: string;
}

export interface ProjectSummary {
  id: string;
  titre: string;
  statut: string;
  client: string;
  secteurActivite: string;
  typeSolution: string;
  niveauMaturite: string;
  casUsage: string;
  valeurApportee: string;
}
