import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types/project";

interface ProjectContextProps {
  project: Project;
}

export function ProjectContext({ project }: ProjectContextProps) {
  return (
    <Card className="group border-2 border-wivoo-primary/50 bg-white hover:bg-white shadow-wivoo-lg hover:shadow-wivoo-glow transition-all duration-500 hover:-translate-y-1 animate-scale-in overflow-hidden relative">
      <div className="absolute inset-0 bg-linear-to-br from-wivoo-primary/10 via-wivoo-light/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-wivoo opacity-15 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:translate-x-24 group-hover:-translate-y-24 transition-transform duration-700" />

      <CardHeader className="relative">
        <CardTitle className="text-3xl font-black flex items-center gap-3 text-wivoo-primary">
          <div className="w-2 h-8 bg-gradient-wivoo-animated gradient-animated rounded-full shadow-wivoo-glow" />
          Contexte de la mission
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 relative">
        {project.cadreProjet && (
          <div>
            <h4 className="text-sm font-bold text-wivoo-primary/90 mb-1">
              Cadre de la mission
            </h4>
            <p className="text-sm text-foreground/80">
              {project.cadreProjet}
            </p>
          </div>
        )}
        {project.metiersConcernes && (
          <div>
            <h4 className="text-sm font-bold text-wivoo-primary/90 mb-1">
              Métiers concernés
            </h4>
            <p className="text-sm text-foreground/80">
              {project.metiersConcernes}
            </p>
          </div>
        )}
        {project.roleWiver && (
          <div>
            <h4 className="text-sm font-bold text-wivoo-primary/90 mb-1">
              Rôle du Wiver
            </h4>
            <p className="text-sm text-foreground/80">
              {project.roleWiver}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
