import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";
import { getBadgeStyle } from "@/lib/utils/badge-color";

interface ProjectHeaderProps {
  project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <header className="relative bg-white border-b border-wivoo-primary/20">
      <div className="absolute inset-0 bg-linear-to-r from-wivoo-primary/5 to-transparent" />
      <div className="container mx-auto px-4 py-8 relative">
        <Button
          variant="ghost"
          asChild
          className="mb-6 hover:bg-wivoo-light/20 hover:text-wivoo-primary transition-colors"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux missions
          </Link>
        </Button>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3 text-wivoo-primary">
              {project.titre}
            </h1>
            <div className="h-1 w-20 bg-gradient-wivoo rounded-full" />
          </div>

          <div className="flex flex-wrap gap-2">
            {project.client && (
              <Badge 
                variant="outline" 
                className="text-xs px-3 py-1 font-medium"
                style={{ borderColor: '#451ec7', color: '#451ec7', backgroundColor: '#451ec708' }}
              >
                Client: {project.client}
              </Badge>
            )}
            {project.secteurActivite && (
              <Badge 
                variant="outline" 
                className="text-xs px-3 py-1 font-medium"
                style={{ borderColor: '#4682b4', color: '#4682b4', backgroundColor: '#4682b408' }}
              >
                Secteur: {project.secteurActivite}
              </Badge>
            )}
            {project.typeSolution && (
              <Badge 
                variant="outline" 
                className="text-xs px-3 py-1 font-medium"
                style={getBadgeStyle(project.typeSolution)}
              >
                Type: {project.typeSolution}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
