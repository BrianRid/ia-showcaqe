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
import { MAX_USAGE_PREVIEW_LENGTH } from "@/lib/constants";
import { getBadgeStyle } from "@/lib/utils/badge-color";
import { Building2, Target, Sparkles, TrendingUp } from "lucide-react";

interface ProjectCardProps {
  project: ProjectSummary;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/project/${project.id}`} className="block h-full group">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-wivoo-primary/20 hover:border-wivoo-primary/40 bg-white overflow-hidden relative">
        {/* Subtle background accent */}
        <div className="absolute inset-0 bg-linear-to-br from-wivoo-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Maturity badge - minimal top right */}
        {project.niveauMaturite && (
          <div className="absolute top-4 right-4 z-10">
            <Badge 
              variant="outline"
              className="text-xs px-2.5 py-1 font-medium bg-white border-wivoo-primary/30 text-wivoo-primary group-hover:scale-105 group-hover:border-wivoo-primary/50 transition-all duration-200"
            >
              {project.niveauMaturite}
            </Badge>
          </div>
        )}

        <CardHeader className="relative z-10 pb-3">
          <CardTitle className="text-xl font-semibold line-clamp-2 text-wivoo-dark group-hover:text-wivoo-primary transition-all duration-200 mb-4 pr-24 leading-snug group-hover:translate-x-0.5">
            {project.titre}
          </CardTitle>
          
          <CardDescription className="space-y-2.5">
            {project.client && (
              <div className="flex items-center gap-2.5 group-hover:translate-x-1 transition-transform duration-200">
                <Building2 className="w-3.5 h-3.5 text-wivoo-primary/60 shrink-0 group-hover:text-wivoo-primary transition-colors" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-wivoo-primary/60">Client</span>
                  <span className="text-sm text-foreground">{project.client}</span>
                </div>
              </div>
            )}
            {project.secteurActivite && (
              <div className="flex items-center gap-2.5 group-hover:translate-x-1 transition-transform duration-200" style={{ transitionDelay: '50ms' }}>
                <TrendingUp className="w-3.5 h-3.5 text-wivoo-primary/60 shrink-0 group-hover:text-wivoo-primary transition-colors" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-wivoo-primary/60">Secteur</span>
                  <span className="text-sm text-foreground">{project.secteurActivite}</span>
                </div>
              </div>
            )}
          </CardDescription>
        </CardHeader>

        {project.casUsage && (
          <CardContent className="relative z-10 pb-4">
            <div className="relative p-4 rounded-lg bg-wivoo-light/20 border border-wivoo-primary/20 group-hover:border-wivoo-primary/30 group-hover:bg-wivoo-light/30 transition-all duration-200">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-3.5 h-3.5 text-wivoo-primary/70 group-hover:text-wivoo-primary transition-colors" />
                <span className="text-xs text-wivoo-primary/70 font-medium">Cas d&apos;usage</span>
              </div>
              
              <p className="text-sm text-foreground/80 line-clamp-3 leading-relaxed">
                {project.casUsage.length > MAX_USAGE_PREVIEW_LENGTH
                  ? project.casUsage.substring(0, MAX_USAGE_PREVIEW_LENGTH) + '...'
                  : project.casUsage}
              </p>
            </div>
          </CardContent>
        )}

        <CardFooter className="relative z-10 pt-2 pb-4">
          {project.typeSolution && (
            <div className="flex items-center gap-2 w-full group-hover:translate-x-1 transition-transform duration-200">
              <Sparkles className="w-3.5 h-3.5 text-wivoo-primary/60 shrink-0 group-hover:text-wivoo-primary transition-colors" />
              <Badge
                variant="outline"
                className="text-xs px-2.5 py-1 font-medium transition-all duration-200 group-hover:scale-105"
                style={getBadgeStyle(project.typeSolution)}
              >
                {project.typeSolution}
              </Badge>
            </div>
          )}
        </CardFooter>

        {/* Minimal bottom accent with animation */}
        <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
          <div className="h-full bg-gradient-wivoo -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
        </div>
      </Card>
    </Link>
  );
}
