import Link from "next/link";
import type { ProjectSummary } from "@/types/project";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: ProjectSummary;
}

function getStatusVariant(statut: string) {
  const statusLower = statut.toLowerCase();
  if (statusLower.includes("production")) return "default";
  if (statusLower.includes("cours")) return "secondary";
  return "outline";
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/project/${project.id}`} className="block h-full group perspective-1000">
      <Card className="h-full transition-all duration-500 shadow-wivoo-lg hover:shadow-wivoo-glow-lg border-2 border-wivoo-primary/50 bg-white hover:bg-white hover:border-wivoo-primary overflow-hidden relative preserve-3d group-hover:-translate-y-4 group-hover:scale-[1.02]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-wivoo-primary/10 via-wivoo-light/20 to-transparent opacity-50 group-hover:opacity-100 transition-all duration-500" />

        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 bg-shimmer-gradient opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />

        {/* Enhanced glow effect */}
        <div className="absolute -inset-2 bg-gradient-wivoo opacity-20 group-hover:opacity-40 blur-2xl transition-all duration-500 -z-10 rounded-xl" />

        {/* Corner accent with glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-wivoo opacity-20 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 group-hover:opacity-30 transition-all duration-500 blur-xl" />
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-wivoo opacity-30 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500" />

        <CardHeader className="relative z-10">
          <div className="flex items-start justify-between gap-2 mb-3">
            <CardTitle className="text-xl font-bold line-clamp-2 text-wivoo-dark group-hover:text-wivoo-primary transition-all duration-300 group-hover:translate-x-1 flex-1">
              {project.titre}
            </CardTitle>
            <Badge
              variant={getStatusVariant(project.statut)}
              className="shrink-0 bg-wivoo-light text-wivoo-dark border-2 border-wivoo-primary/60 group-hover:shadow-wivoo-glow group-hover:scale-110 transition-all duration-300 font-bold"
            >
              {project.statut}
            </Badge>
          </div>
          <CardDescription className="space-y-2">
            {project.client && (
              <div className="text-sm flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300">
                <span className="font-bold text-wivoo-primary min-w-[60px]">Client:</span>
                <span className="text-foreground/70">{project.client}</span>
              </div>
            )}
            {project.secteurActivite && (
              <div className="text-sm flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: '50ms' }}>
                <span className="font-bold text-wivoo-primary min-w-[60px]">Secteur:</span>
                <span className="text-foreground/70">{project.secteurActivite}</span>
              </div>
            )}
          </CardDescription>
        </CardHeader>

        {project.casUsage && (
          <CardContent className="relative z-10">
            <div className="relative p-4 rounded-lg bg-gradient-to-br from-wivoo-light/40 to-wivoo-primary/10 border-2 border-wivoo-primary/40 group-hover:border-wivoo-primary group-hover:shadow-wivoo-md transition-all duration-300 group-hover:from-wivoo-light/60 group-hover:to-wivoo-primary/20">
              <div className="absolute inset-0 bg-gradient-wivoo opacity-5 group-hover:opacity-10 rounded-lg transition-opacity duration-300" />
              <p className="text-sm text-foreground/90 line-clamp-3 leading-relaxed relative font-medium">
                {project.casUsage.length > 150 ? project.casUsage.substring(0, 150) + '...' : project.casUsage}
              </p>
            </div>
          </CardContent>
        )}

        <CardFooter className="relative z-10 flex items-center justify-between gap-2 pt-6">
          {project.typeSolution && (
            <Badge variant="outline" className="text-xs border-2 border-wivoo-primary/60 text-wivoo-primary bg-wivoo-light/50 group-hover:bg-wivoo-light group-hover:border-wivoo-primary group-hover:shadow-wivoo-sm transition-all duration-300 font-bold">
              {project.typeSolution}
            </Badge>
          )}
          {project.niveauMaturite && (
            <span className="text-xs text-wivoo-dark font-bold group-hover:text-wivoo-primary transition-colors duration-300">
              {project.niveauMaturite}
            </span>
          )}
        </CardFooter>

        {/* Animated bottom accent with enhanced glow */}
        <div className="absolute bottom-0 left-0 right-0 h-2.5 overflow-hidden">
          <div className="h-full bg-gradient-wivoo-animated gradient-animated transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out shadow-wivoo-glow" />
          <div className="absolute inset-0 bg-gradient-wivoo blur-md opacity-30 group-hover:opacity-80 transition-opacity duration-700" />
        </div>

        {/* Floating particles */}
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-wivoo-primary/40 opacity-0 group-hover:opacity-100 group-hover:animate-bounce-subtle transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-wivoo-light/60 opacity-0 group-hover:opacity-100 group-hover:animate-bounce-subtle transition-opacity duration-300" style={{ animationDelay: '0.2s' }} />
      </Card>
    </Link>
  );
}
