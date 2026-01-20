import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types/project";

interface ProjectSolutionProps {
  project: Project;
}

export function ProjectSolution({ project }: ProjectSolutionProps) {
  return (
    <Card className="border border-wivoo-primary/40 bg-white hover:border-wivoo-primary/50 hover:shadow-wivoo-lg hover:-translate-y-1 transition-all duration-300 group animate-scale-in overflow-hidden relative" style={{ animationDelay: '0.2s' }}>
      <div className="absolute inset-0 bg-linear-to-br from-wivoo-primary/10 via-wivoo-light/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 bg-shimmer-gradient opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-wivoo opacity-15 rounded-full blur-3xl transform translate-x-24 -translate-y-24 group-hover:translate-x-20 group-hover:-translate-y-20 transition-transform duration-700" />

      <CardHeader className="relative">
        <CardTitle className="text-2xl font-semibold flex items-center gap-2.5 text-wivoo-primary group-hover:translate-x-1 transition-transform duration-200">
          <div className="w-1.5 h-6 bg-gradient-wivoo-animated gradient-animated rounded-full shadow-wivoo-md" />
          Solution IA
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 relative">
        {project.solutionIA && (
          <div className="relative p-5 bg-wivoo-light/20 border border-wivoo-primary/40 rounded-xl group-hover:bg-wivoo-light/30 group-hover:border-wivoo-primary/50 group-hover:shadow-wivoo-sm transition-all duration-200 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-wivoo-animated gradient-animated shadow-wivoo-sm" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-wivoo-primary/10 rounded-full blur-2xl" />
            <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed relative z-10">
              {project.solutionIA}
            </p>
          </div>
        )}
        {project.casUsage && (
          <div>
            <h4 className="text-sm font-medium text-wivoo-primary/70 mb-1">Cas d&apos;usage</h4>
            <p className="text-sm text-foreground/80">
              {project.casUsage}
            </p>
          </div>
        )}
        {project.llmsUtilises && (
          <div>
            <h4 className="text-sm font-medium text-wivoo-primary/70 mb-1">
              LLM(s) utilisé(s)
            </h4>
            <p className="text-sm text-foreground/80">
              {project.llmsUtilises}
            </p>
          </div>
        )}
        {project.outilsFramework && (
          <div>
            <h4 className="text-sm font-medium text-wivoo-primary/70 mb-1">
              Outils et framework
            </h4>
            <p className="text-sm text-foreground/80">
              {project.outilsFramework}
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
