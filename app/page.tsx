import { dataSource } from "@/lib/data-source";
import { ProjectCard } from "@/components/project-card";
import { FloatingParticles } from "@/components/floating-particles";
import { CursorGlow } from "@/components/cursor-glow";
import { AnimatedBackground } from "@/components/animated-background";
import { ANIMATION_DELAY_STEP } from "@/lib/constants";

export default async function HomePage() {
  const projects = await dataSource.getProjectsSummary();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-wivoo-light/10 to-slate-50 overflow-hidden">
      <CursorGlow />
      <FloatingParticles />
      <AnimatedBackground />

      {/* Header with enhanced glass effect and better contrast */}
      <header className="backdrop-blur-2xl bg-white/95 border-b-2 border-wivoo-primary/20 sticky top-0 z-50 animate-slide-up shadow-wivoo-md">
        <div className="absolute inset-0 bg-linear-to-r from-wivoo-primary/3 via-transparent to-wivoo-light/5" />
        <div className="container mx-auto px-4 py-8 relative">
          <div className="flex items-center justify-between">
            <div className="space-y-2 animate-fade-in">
              <h1 className="text-4xl font-bold text-wivoo-primary drop-shadow-sm">
                IA Showcase
              </h1>
              <p className="text-sm text-slate-600">
                Réalisations & projets IA by <span className="font-bold text-wivoo-primary">Wivoo</span>
              </p>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-wivoo-primary/10 border-2 border-wivoo-primary/40 shadow-wivoo-glow">
              <div className="relative">
                <span className="text-3xl font-bold text-wivoo-primary">
                  {projects.length}
                </span>
                <div className="absolute -inset-2 bg-wivoo-primary/20 blur-xl -z-10" />
              </div>
              <span className="text-sm font-bold text-wivoo-dark">projets</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative container mx-auto px-4 py-24">
        <div className="mb-20 text-center space-y-8 animate-slide-up">
          <div className="relative inline-block">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
              Nos Projets{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-wivoo-animated gradient-animated bg-clip-text text-transparent">
                  IA
                </span>
                <div className="absolute -inset-2 bg-wivoo-primary/20 blur-2xl -z-10 animate-pulse-glow" />
              </span>
            </h2>
            {/* Animated underline */}
            <div className="flex justify-center gap-2 mt-6">
              <div className="h-2 w-20 bg-gradient-wivoo rounded-full animate-bounce-subtle" />
              <div className="h-2 w-20 bg-gradient-wivoo rounded-full animate-bounce-subtle" style={{ animationDelay: '0.2s' }} />
              <div className="h-2 w-20 bg-gradient-wivoo rounded-full animate-bounce-subtle" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light animate-slide-up-delayed">
            Découvrez notre portfolio de solutions d'<span className="text-wivoo-primary font-semibold">Intelligence Artificielle</span> conçues pour{" "}
            <span className="relative inline-block">
              <span className="text-wivoo-primary font-semibold">transformer</span>
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-wivoo block" />
            </span>{" "}
            votre business
          </p>

          {/* Floating decorative elements */}
          <div className="flex justify-center gap-8 mt-12">
            <div className="w-3 h-3 rounded-full bg-wivoo-primary animate-bounce-subtle shadow-wivoo-glow" />
            <div className="w-3 h-3 rounded-full bg-wivoo-light animate-bounce-subtle shadow-wivoo-glow" style={{ animationDelay: '0.3s' }} />
            <div className="w-3 h-3 rounded-full bg-wivoo-primary animate-bounce-subtle shadow-wivoo-glow" style={{ animationDelay: '0.6s' }} />
          </div>
        </div>

        {/* Projects Grid with enhanced spacing and staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * ANIMATION_DELAY_STEP}s`, animationFillMode: 'backwards' }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </main>

      {/* Footer with enhanced gradient */}
      <footer className="relative mt-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-wivoo-light/40 via-wivoo-primary/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(69,29,199,0.15),transparent_70%)]" />

        <div className="relative container mx-auto px-4 py-16 border-t-2 border-wivoo-primary/30">
          <div className="text-center space-y-6">
            <div className="inline-block group">
              <p className="text-5xl font-black bg-gradient-wivoo-animated gradient-animated bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                Wivoo
              </p>
              <div className="flex justify-center gap-2">
                <div className="h-1.5 w-10 bg-gradient-wivoo rounded-full animate-pulse shadow-wivoo-glow" />
                <div className="h-1.5 w-10 bg-gradient-wivoo rounded-full animate-pulse shadow-wivoo-glow" style={{ animationDelay: '0.2s' }} />
                <div className="h-1.5 w-10 bg-gradient-wivoo rounded-full animate-pulse shadow-wivoo-glow" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
            <p className="text-lg text-foreground/70 max-w-md mx-auto">
              Communauté d'experts en <span className="text-wivoo-primary font-bold">Produit</span>,{" "}
              <span className="text-wivoo-primary font-bold">Data</span> et{" "}
              <span className="text-wivoo-primary font-bold">IA</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
