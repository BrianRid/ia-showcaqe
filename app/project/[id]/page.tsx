import { dataSource } from "@/lib/data-source";
import { notFound } from "next/navigation";
import { FloatingParticles } from "@/components/floating-particles";
import { CursorGlow } from "@/components/cursor-glow";
import { AnimatedBackground } from "@/components/animated-background";
import { ProjectHeader } from "@/components/project-detail/project-header";
import { ProjectContext } from "@/components/project-detail/project-context";
import { ProjectProblematic } from "@/components/project-detail/project-problematic";
import { ProjectSolution } from "@/components/project-detail/project-solution";
import { ProjectLearnings } from "@/components/project-detail/project-learnings";
import { ProjectSidebar } from "@/components/project-detail/project-sidebar";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = await dataSource.getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-wivoo-light/10 to-slate-50 overflow-hidden">
      <CursorGlow />
      <FloatingParticles />
      <AnimatedBackground />

      <ProjectHeader project={project} />

      {/* Content */}
      <main className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <ProjectContext project={project} />
            <ProjectProblematic project={project} />
            <ProjectSolution project={project} />
            <ProjectLearnings project={project} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ProjectSidebar project={project} />
          </div>
        </div>
      </main>
    </div>
  );
}
