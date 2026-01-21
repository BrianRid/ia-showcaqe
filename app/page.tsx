import { dataSource } from "@/lib/data-source";
import { ProjectCard } from "@/components/project-card";
import { FloatingParticles } from "@/components/floating-particles";
import { CursorGlow } from "@/components/cursor-glow";
import { AnimatedBackground } from "@/components/animated-background";
import Image from "next/image";

export default async function HomePage() {
  const projects = await dataSource.getProjectsSummary();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-wivoo-light/10 to-slate-50 overflow-hidden flex flex-col">
      <CursorGlow />
      <FloatingParticles />
      <AnimatedBackground />

      {/* Header */}
      <header className="backdrop-blur-xl bg-white/90 border-b border-wivoo-primary/20 sticky top-0 z-50 shadow-lg animate-slide-up">
        <div className="absolute inset-0 bg-linear-to-r from-wivoo-primary/5 to-transparent" />
        <div className="container mx-auto px-4 py-6 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 animate-fade-in">
              <Image
                src="/wi-logo.svg"
                alt="Wivoo Logo"
                width={50}
                height={50}
                className="drop-shadow-sm"
              />
              <div className="space-y-1">
                <h1 className="text-3xl font-semibold text-wivoo-primary drop-shadow-sm">
                  IA Showcase
                </h1>
                <p className="text-sm text-slate-600">
                  Retours d&apos;expérience & réalisations IA by <span className="font-semibold text-wivoo-primary">Wivoo</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-wivoo-primary/10 border border-wivoo-primary/30 shadow-wivoo-md hover:shadow-wivoo-glow transition-all duration-300 hover:scale-105">
              <div className="relative">
                <span className="text-2xl font-semibold text-wivoo-primary">
                  {projects.length}
                </span>
                <div className="absolute -inset-1 bg-wivoo-primary/20 blur-lg -z-10 opacity-50" />
              </div>
              <span className="text-sm font-medium text-wivoo-dark">{projects.length > 1 ? 'missions' : 'mission'}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative container mx-auto px-4 py-16 flex-1">
        <div className="mb-16 text-center space-y-6 animate-slide-up">
          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-3">
              Nos Missions{" "}
              <span className="relative inline-block">
                <span className="text-wivoo-primary">
                  IA
                </span>
                <div className="absolute -inset-2 bg-wivoo-primary/20 blur-xl -z-10 animate-pulse-glow" />
              </span>
            </h2>
            <div className="flex justify-center mt-4 gap-2">
              <div className="h-1 w-20 bg-gradient-wivoo rounded-full animate-bounce-subtle" />
              <div className="h-1 w-20 bg-gradient-wivoo rounded-full animate-bounce-subtle" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up-delayed">
            Découvrez nos missions et retours d&apos;expérience <span className="text-wivoo-primary font-medium">Data & IA</span> au service de la{" "}
            <span className="relative inline-block">
              <span className="text-wivoo-primary font-medium">transformation</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-wivoo" />
            </span>{" "}
            de nos clients
          </p>

          {/* Floating decorative elements */}
          <div className="flex justify-center gap-6 mt-8">
            <div className="w-2 h-2 rounded-full bg-wivoo-primary animate-bounce-subtle shadow-wivoo-glow" />
            <div className="w-2 h-2 rounded-full bg-wivoo-light animate-bounce-subtle shadow-wivoo-glow" style={{ animationDelay: '0.3s' }} />
            <div className="w-2 h-2 rounded-full bg-wivoo-primary animate-bounce-subtle shadow-wivoo-glow" style={{ animationDelay: '0.6s' }} />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-scale-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'backwards'
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative mt-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-wivoo-light/30 via-wivoo-primary/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(69,29,199,0.1),transparent_70%)]" />

        <div className="relative container mx-auto px-4 py-12 border-t border-wivoo-primary/20">
          <div className="text-center space-y-4">
            <div className="inline-block group">
              <a
                href="https://www.wivoo.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <p className="text-4xl font-semibold text-wivoo-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                  Wivoo
                </p>
                <div className="flex justify-center gap-2">
                  <div className="h-1 w-12 bg-gradient-wivoo rounded-full animate-pulse" />
                  <div className="h-1 w-12 bg-gradient-wivoo rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                </div>
              </a>
            </div>
            <p className="text-base text-foreground/70 max-w-md mx-auto">
              Un collectif d&apos;experts en <span className="text-wivoo-primary font-medium">Produit</span>,{" "}
              <span className="text-wivoo-primary font-medium">Data</span> et{" "}
              <span className="text-wivoo-primary font-medium">IA</span><br />
              au service de la transformation de votre entreprise
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
