/**
 * Retourne la couleur pour un badge selon le type de solution
 */
export function getBadgeColor(typeSolution: string): string {
  const type = typeSolution.toLowerCase();
  
  if (type.includes('automatisation') || type.includes('automation')) {
    return '#04f06a'; // green
  }
  
  if (type.includes('assistant') || type.includes('chatbot') || type.includes('conversationnel')) {
    return '#4682b4'; // blue
  }
  
  if (type.includes('génératif') || type.includes('generatif') || type.includes('generation')) {
    return '#8f00ff'; // purple
  }
  
  // Couleur par défaut (violet principal)
  return '#451ec7';
}

/**
 * Retourne les styles inline pour un badge
 */
export function getBadgeStyle(typeSolution: string) {
  const color = getBadgeColor(typeSolution);
  return {
    borderColor: color,
    color: color,
    backgroundColor: `${color}1a`, // 10% opacity
  };
}
