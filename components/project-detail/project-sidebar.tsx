import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

interface ProjectSidebarProps {
  project: Project;
}

export function ProjectSidebar({ project }: ProjectSidebarProps) {
  return (
    <div className="sticky top-6 space-y-6">
      {/* Valeur */}
      <Card className="border border-wivoo-primary/30 bg-white hover:border-wivoo-primary/40 hover:shadow-wivoo-md hover:-translate-y-1 transition-all duration-300 group animate-scale-in overflow-hidden relative" style={{ animationDelay: '0.4s' }}>
        <div className="absolute inset-0 bg-linear-to-br from-wivoo-primary/8 via-wivoo-light/15 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-wivoo opacity-10 rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:translate-x-16 group-hover:-translate-y-16 transition-transform duration-700" />

        <CardHeader className="relative">
          <CardTitle className="text-xl font-semibold flex items-center gap-2.5 text-wivoo-primary group-hover:translate-x-1 transition-transform duration-200">
            <div className="w-1.5 h-5 bg-gradient-wivoo-animated gradient-animated rounded-full shadow-wivoo-sm" />
            Valeur & Impact
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 relative">
          {project.valeurApportee && (
            <div>
              <h4 className="text-sm font-medium text-wivoo-primary/70 mb-1">
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
                <h4 className="text-sm font-medium text-wivoo-primary/70 mb-1">
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
                <h4 className="text-sm font-medium text-wivoo-primary/70 mb-1">
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
                <h4 className="text-sm font-medium text-wivoo-primary/70 mb-1">
                  Hypothèse validée
                </h4>
                <p className="text-sm text-foreground/80">
                  {project.hypotheseValidee}
                </p>
              </div>
            </>
          )}
        </CardContent>
        
        {/* Bottom accent animation */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden">
          <div className="h-full bg-gradient-wivoo -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
        </div>
      </Card>

      {/* Maturité */}
      {project.niveauMaturite && (
        <Card className="border border-wivoo-primary/30 bg-white hover:border-wivoo-primary/40 hover:shadow-wivoo-md hover:-translate-y-1 transition-all duration-300 group animate-scale-in overflow-hidden relative" style={{ animationDelay: '0.5s' }}>
          <div className="absolute inset-0 bg-linear-to-br from-wivoo-primary/8 via-wivoo-light/15 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-wivoo opacity-10 rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:translate-x-16 group-hover:-translate-y-16 transition-transform duration-700" />

          <CardHeader className="relative">
            <CardTitle className="text-xl font-semibold flex items-center gap-2.5 text-wivoo-primary group-hover:translate-x-1 transition-transform duration-200">
              <div className="w-1.5 h-5 bg-gradient-wivoo-animated gradient-animated rounded-full shadow-wivoo-sm" />
              Maturité
            </CardTitle>
          </CardHeader>
          <CardContent className="relative">
            <div className="text-center py-4">
              <Badge variant="outline" className="text-sm px-6 py-2 border-wivoo-primary/30 text-wivoo-primary bg-wivoo-light/30 font-medium group-hover:scale-105 group-hover:border-wivoo-primary/40 transition-all duration-200">
                {project.niveauMaturite}
              </Badge>
            </div>
          </CardContent>
          
          {/* Bottom accent animation */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden">
            <div className="h-full bg-gradient-wivoo -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          </div>
        </Card>
      )}
    </div>
  );
}
