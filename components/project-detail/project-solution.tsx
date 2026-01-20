import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types/project";

interface ProjectSolutionProps {
  project: Project;
}

export function ProjectSolution({ project }: ProjectSolutionProps) {
  return (
    <Card className="group border-2 border-wivoo-primary/50 bg-white hover:bg-white shadow-wivoo-lg hover:shadow-wivoo-glow-lg transition-all duration-500 hover:-translate-y-1 animate-scale-in overflow-hidden relative" style={{ animationDelay: '0.2s' }}>
      <div className="absolute inset-0 bg-linear-to-br from-wivoo-primary/15 via-wivoo-light/25 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-shimmer-gradient opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-wivoo opacity-20 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:translate-x-24 group-hover:-translate-y-24 transition-transform duration-700" />

      <CardHeader className="relative">
        <CardTitle className="text-3xl font-black flex items-center gap-3 text-wivoo-primary">
          <div className="w-2 h-8 bg-gradient-wivoo-animated gradient-animated rounded-full shadow-wivoo-glow" />
          Solution IA
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 relative">
        {project.solutionIA && (
          <div className="relative p-8 bg-linear-to-br from-wivoo-light/50 via-wivoo-primary/15 to-wivoo-light/30 border-2 border-wivoo-primary rounded-2xl shadow-wivoo-lg group-hover:shadow-wivoo-glow transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-wivoo-animated gradient-animated shadow-wivoo-glow" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-wivoo-primary/20 rounded-full blur-2xl" />
            <p className="text-base text-foreground whitespace-pre-wrap leading-relaxed relative z-10 font-semibold">
              {project.solutionIA}
            </p>
          </div>
        )}
        {project.casUsage && (
          <div>
            <h4 className="text-sm font-bold text-wivoo-primary/90 mb-1">Cas d'usage</h4>
            <p className="text-sm text-foreground/80">
              {project.casUsage}
            </p>
          </div>
        )}
        {project.llmsUtilises && (
          <div>
            <h4 className="text-sm font-bold text-wivoo-primary/90 mb-1">
              LLM(s) utilisé(s)
            </h4>
            <p className="text-sm text-foreground/80">
              {project.llmsUtilises}
            </p>
          </div>
        )}
        {project.outilsFramework && (
          <div>
            <h4 className="text-sm font-bold text-wivoo-primary/90 mb-1">
              Outils et framework
            </h4>
            <p className="text-sm text-foreground/80">
              {project.outilsFramework}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
