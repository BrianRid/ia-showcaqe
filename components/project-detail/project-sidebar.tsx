import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

interface ProjectSidebarProps {
  project: Project;
}

export function ProjectSidebar({ project }: ProjectSidebarProps) {
  return (
    <div className="sticky top-6 space-y-8">
      {/* Valeur */}
      <Card className="group border-2 border-wivoo-primary/60 bg-white hover:bg-white shadow-wivoo-glow hover:shadow-wivoo-glow-lg transition-all duration-500 animate-scale-in overflow-hidden relative" style={{ animationDelay: '0.4s' }}>
        <div className="absolute inset-0 bg-linear-to-br from-wivoo-primary/15 via-wivoo-light/25 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -inset-1 bg-gradient-wivoo opacity-30 blur-2xl -z-10 group-hover:opacity-50 transition-opacity duration-500" />

        <CardHeader className="relative">
          <CardTitle className="text-2xl font-black flex items-center gap-3 text-wivoo-primary">
            <div className="w-2 h-7 bg-gradient-wivoo-animated gradient-animated rounded-full shadow-wivoo-glow" />
            Valeur & Impact
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 relative">
          {project.valeurApportee && (
            <div>
              <h4 className="text-sm font-bold text-wivoo-primary/90 mb-2">
                Valeur apportée
              </h4>
              <p className="text-sm text-foreground/80">
                {project.valeurApportee}
              </p>
            </div>
          )}
          {project.kpisSucces && (
            <>
              <Separator />
              <div>
                <h4 className="text-sm font-bold text-wivoo-primary/90 mb-2">
                  KPIs de succès
                </h4>
                <p className="text-sm text-foreground/80">
                  {project.kpisSucces}
                </p>
              </div>
            </>
          )}
          {project.northStar && (
            <>
              <Separator />
              <div>
                <h4 className="text-sm font-bold text-wivoo-primary/90 mb-2">
                  North Star
                </h4>
                <p className="text-sm text-foreground/80">
                  {project.northStar}
                </p>
              </div>
            </>
          )}
          {project.hypotheseValidee && (
            <>
              <Separator />
              <div>
                <h4 className="text-sm font-bold text-wivoo-primary/90 mb-2">
                  Hypothèse validée
                </h4>
                <p className="text-sm text-foreground/80">
                  {project.hypotheseValidee}
                </p>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Maturité */}
      {project.niveauMaturite && (
        <Card className="group border-2 border-wivoo-primary/60 bg-white hover:bg-white shadow-wivoo-glow hover:shadow-wivoo-glow-lg transition-all duration-500 animate-scale-in overflow-hidden relative" style={{ animationDelay: '0.5s' }}>
          <div className="absolute inset-0 bg-linear-to-br from-wivoo-primary/15 via-wivoo-light/25 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -inset-1 bg-gradient-wivoo opacity-30 blur-2xl -z-10 group-hover:opacity-50 transition-opacity duration-500" />

          <CardHeader className="relative">
            <CardTitle className="text-2xl font-black flex items-center gap-3 text-wivoo-primary">
              <div className="w-2 h-7 bg-gradient-wivoo-animated gradient-animated rounded-full shadow-wivoo-glow" />
              Maturité
            </CardTitle>
          </CardHeader>
          <CardContent className="relative">
            <div className="text-center py-6">
              <div className="relative inline-block group">
                <Badge variant="outline" className="text-lg px-8 py-3 border-2 border-wivoo-primary text-wivoo-dark bg-wivoo-light shadow-wivoo-md group-hover:shadow-wivoo-glow group-hover:scale-110 transition-all duration-300 font-black">
                  {project.niveauMaturite}
                </Badge>
                <div className="absolute -inset-2 bg-wivoo-primary/40 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
