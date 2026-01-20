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
    <header className="relative backdrop-blur-2xl bg-white/95 border-b-2 border-wivoo-primary/20 animate-slide-up shadow-wivoo-md">
      <div className="absolute inset-0 bg-linear-to-r from-wivoo-primary/3 via-transparent to-wivoo-light/5" />
      <div className="container mx-auto px-4 py-8 relative">
        <Button
          variant="ghost"
          asChild
          className="mb-8 group hover:bg-wivoo-light/30 hover:text-wivoo-primary transition-all duration-300 hover:translate-x-1 hover:shadow-wivoo-sm"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Retour aux projets
          </Link>
        </Button>

        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 text-wivoo-primary drop-shadow-lg">
              {project.titre}
            </h1>
            {/* Animated accent line */}
            <div className="flex gap-2">
              <div className="h-2.5 w-24 bg-gradient-wivoo rounded-full animate-bounce-subtle shadow-wivoo-glow" />
              <div className="h-2.5 w-16 bg-gradient-wivoo rounded-full animate-bounce-subtle shadow-wivoo-glow" style={{ animationDelay: '0.2s' }} />
              <div className="h-2.5 w-12 bg-gradient-wivoo rounded-full animate-bounce-subtle shadow-wivoo-glow" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 animate-slide-up-delayed">
            {project.client && (
              <Badge 
                variant="outline" 
                className="border-2 transition-all duration-300 hover:shadow-wivoo-md hover:scale-105 text-sm px-4 py-2 font-bold"
                style={{ borderColor: '#451ec7', color: '#451ec7', backgroundColor: '#451ec71a' }}
              >
                <span className="font-black">Client:</span> {project.client}
              </Badge>
            )}
            {project.secteurActivite && (
              <Badge 
                variant="outline" 
                className="border-2 transition-all duration-300 hover:shadow-wivoo-md hover:scale-105 text-sm px-4 py-2 font-bold"
                style={{ borderColor: '#4682b4', color: '#4682b4', backgroundColor: '#4682b41a' }}
              >
                <span className="font-black">Secteur:</span> {project.secteurActivite}
              </Badge>
            )}
            {project.typeSolution && (
              <Badge 
                variant="outline" 
                className="border-2 transition-all duration-300 hover:shadow-wivoo-md hover:scale-105 text-sm px-4 py-2 font-bold"
                style={getBadgeStyle(project.typeSolution)}
              >
                <span className="font-black">Type:</span> {project.typeSolution}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
