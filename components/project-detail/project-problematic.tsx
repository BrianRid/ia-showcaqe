import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types/project";

interface ProjectProblematicProps {
  project: Project;
}

export function ProjectProblematic({ project }: ProjectProblematicProps) {
  return (
    <Card className="border border-wivoo-primary/30 bg-white hover:border-wivoo-primary/40 hover:shadow-wivoo-md hover:-translate-y-1 transition-all duration-300 group animate-scale-in overflow-hidden relative" style={{ animationDelay: '0.1s' }}>
      <div className="absolute inset-0 bg-linear-to-br from-wivoo-primary/8 via-wivoo-light/15 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-wivoo opacity-10 rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:translate-x-16 group-hover:-translate-y-16 transition-transform duration-700" />

      <CardHeader className="relative">
        <CardTitle className="text-2xl font-semibold flex items-center gap-2.5 text-wivoo-primary group-hover:translate-x-1 transition-transform duration-200">
          <div className="w-1.5 h-6 bg-gradient-wivoo-animated gradient-animated rounded-full shadow-wivoo-sm" />
          Enjeux & Objectifs
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 relative">
        {project.problemePrincipal && (
          <div>
            <h4 className="text-sm font-medium text-wivoo-primary/70 mb-1">
              Enjeu principal
            </h4>
            <p className="text-sm text-foreground/80">
              {project.problemePrincipal}
            </p>
          </div>
        )}
        {project.limiteSolutionActuelle && (
          <div>
            <h4 className="text-sm font-medium text-wivoo-primary/70 mb-1">
              Limite solution actuelle
            </h4>
            <p className="text-sm text-foreground/80">
              {project.limiteSolutionActuelle}
            </p>
          </div>
        )}
        {project.objectifPrincipal && (
          <div>
            <h4 className="text-sm font-medium text-wivoo-primary/70 mb-1">
              Objectif principal
            </h4>
            <p className="text-sm text-foreground/80">
              {project.objectifPrincipal}
            </p>
          </div>
        )}
        {project.objectifsSecondaires && (
          <div>
            <h4 className="text-sm font-medium text-wivoo-primary/70 mb-1">
              Objectifs secondaires
            </h4>
            <p className="text-sm text-foreground/80 whitespace-pre-wrap">
              {project.objectifsSecondaires}
            </p>
          </div>
        )}
      </CardContent>
      
      {/* Bottom accent animation */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden">
        <div className="h-full bg-gradient-wivoo -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
      </div>
    </Card>
  );
}
