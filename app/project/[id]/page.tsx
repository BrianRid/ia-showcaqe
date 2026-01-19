import { dataSource } from "@/lib/data-source";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FloatingParticles } from "@/components/floating-particles";
import { CursorGlow } from "@/components/cursor-glow";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = await dataSource.getProjectById(id);

  if (!project) {
    notFound();
  }

  function getStatusVariant(statut: string) {
    const statusLower = statut.toLowerCase();
    if (statusLower.includes("production")) return "default";
    if (statusLower.includes("cours")) return "secondary";
    return "outline";
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-wivoo-light/10 to-slate-50 overflow-hidden">
      <CursorGlow />
      <FloatingParticles />

      {/* Ultra animated background with more depth */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-gradient-radial from-wivoo-primary/30 via-wivoo-primary/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-wivoo-light/50 via-wivoo-light/15 to-transparent rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-radial from-purple-400/25 via-purple-300/8 to-transparent rounded-full blur-3xl animate-float-delayed" />
        
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-gradient-radial from-wivoo-primary/15 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />

        <div className="absolute top-1/4 right-1/3 w-64 h-64 border-2 border-wivoo-primary/20 rounded-full animate-rotate-slow shadow-wivoo-md" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 border-2 border-wivoo-light/30 rounded-full animate-rotate-slow shadow-wivoo-md" style={{ animationDirection: 'reverse' }} />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(69,29,199,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(69,29,199,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Header */}
      <header className="relative backdrop-blur-2xl bg-white/95 border-b-2 border-wivoo-primary/20 animate-slide-up shadow-wivoo-md">
        <div className="absolute inset-0 bg-gradient-to-r from-wivoo-primary/3 via-transparent to-wivoo-light/5" />
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
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
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
              <div className="relative group">
                <Badge
                  variant={getStatusVariant(project.statut)}
                  className="shrink-0 bg-wivoo-light text-wivoo-dark border-2 border-wivoo-primary text-lg px-6 py-2 font-black shadow-wivoo-glow group-hover:shadow-wivoo-glow-lg transition-all duration-300 group-hover:scale-110"
                >
                  {project.statut}
                </Badge>
                <div className="absolute -inset-2 bg-wivoo-primary/30 blur-xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 animate-slide-up-delayed">
              {project.client && (
                <Badge variant="outline" className="border-2 border-wivoo-primary text-wivoo-dark bg-wivoo-light/60 hover:bg-wivoo-light transition-all duration-300 hover:shadow-wivoo-md hover:scale-105 text-sm px-4 py-2 font-bold">
                  <span className="font-black">Client:</span> {project.client}
                </Badge>
              )}
              {project.secteurActivite && (
                <Badge variant="outline" className="border-2 border-wivoo-primary text-wivoo-dark bg-wivoo-light/60 hover:bg-wivoo-light transition-all duration-300 hover:shadow-wivoo-md hover:scale-105 text-sm px-4 py-2 font-bold">
                  <span className="font-black">Secteur:</span> {project.secteurActivite}
                </Badge>
              )}
              {project.typeSolution && (
                <Badge variant="outline" className="border-2 border-wivoo-primary text-wivoo-dark bg-wivoo-light/60 hover:bg-wivoo-light transition-all duration-300 hover:shadow-wivoo-md hover:scale-105 text-sm px-4 py-2 font-bold">
                  <span className="font-black">Type:</span> {project.typeSolution}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contexte */}
            <Card className="group border-2 border-wivoo-primary/50 bg-white hover:bg-white shadow-wivoo-lg hover:shadow-wivoo-glow transition-all duration-500 hover:-translate-y-1 animate-scale-in overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-wivoo-primary/10 via-wivoo-light/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-wivoo opacity-15 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:translate-x-24 group-hover:-translate-y-24 transition-transform duration-700" />

              <CardHeader className="relative">
                <CardTitle className="text-3xl font-black flex items-center gap-3 text-wivoo-primary">
                  <div className="w-2 h-8 bg-gradient-wivoo-animated gradient-animated rounded-full shadow-wivoo-glow" />
                  Contexte du projet
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                {project.cadreProjet && (
                  <div>
                    <h4 className="text-sm font-bold text-wivoo-primary/90 mb-1">
                      Cadre du projet
                    </h4>
                    <p className="text-sm text-foreground/80">
                      {project.cadreProjet}
                    </p>
                  </div>
                )}
                {project.metiersConernes && (
                  <div>
                    <h4 className="text-sm font-bold text-wivoo-primary/90 mb-1">
                      Métiers concernés
                    </h4>
                    <p className="text-sm text-foreground/80">
                      {project.metiersConernes}
                    </p>
                  </div>
                )}
                {project.roleWiver && (
                  <div>
                    <h4 className="text-sm font-bold text-wivoo-primary/90 mb-1">
                      Rôle du Wiver
                    </h4>
                    <p className="text-sm text-foreground/80">
                      {project.roleWiver}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Problématique */}
            <Card className="group border-2 border-wivoo-primary/50 bg-white hover:bg-white shadow-wivoo-lg hover:shadow-wivoo-glow transition-all duration-500 hover:-translate-y-1 animate-scale-in overflow-hidden relative" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-wivoo-primary/10 via-wivoo-light/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-wivoo opacity-15 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:translate-x-24 group-hover:-translate-y-24 transition-transform duration-700" />

              <CardHeader className="relative">
                <CardTitle className="text-3xl font-black flex items-center gap-3 text-wivoo-primary">
                  <div className="w-2 h-8 bg-gradient-wivoo-animated gradient-animated rounded-full shadow-wivoo-glow" />
                  Problématique & Objectifs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                {project.problemePrincipal && (
                  <div>
                    <h4 className="text-sm font-bold text-wivoo-primary/90 mb-1">
                      Problématique principale
                    </h4>
                    <p className="text-sm text-foreground/80">
                      {project.problemePrincipal}
                    </p>
                  </div>
                )}
                {project.limiteSolutionActuelle && (
                  <div>
                    <h4 className="text-sm font-bold text-wivoo-primary/90 mb-1">
                      Limite solution actuelle
                    </h4>
                    <p className="text-sm text-foreground/80">
                      {project.limiteSolutionActuelle}
                    </p>
                  </div>
                )}
                {project.objectifPrincipal && (
                  <div>
                    <h4 className="text-sm font-bold text-wivoo-primary/90 mb-1">
                      Objectif principal
                    </h4>
                    <p className="text-sm text-foreground/80">
                      {project.objectifPrincipal}
                    </p>
                  </div>
                )}
                {project.objectifsSecondaires && (
                  <div>
                    <h4 className="text-sm font-bold text-wivoo-primary/90 mb-1">
                      Objectifs secondaires
                    </h4>
                    <p className="text-sm text-foreground/80 whitespace-pre-wrap">
                      {project.objectifsSecondaires}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="group border-2 border-wivoo-primary/50 bg-white hover:bg-white shadow-wivoo-lg hover:shadow-wivoo-glow-lg transition-all duration-500 hover:-translate-y-1 animate-scale-in overflow-hidden relative" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-wivoo-primary/15 via-wivoo-light/25 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-shimmer-gradient opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-wivoo opacity-20 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:translate-x-24 group-hover:-translate-y-24 transition-transform duration-700" />

              <CardHeader className="relative">
                <CardTitle className="text-3xl font-black flex items-center gap-3 text-wivoo-primary">
                  <div className="w-2 h-8 bg-gradient-wivoo-animated gradient-animated rounded-full shadow-wivoo-glow" />
                  Solution IA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                {project.solutionIA && (
                  <div className="relative p-8 bg-gradient-to-br from-wivoo-light/50 via-wivoo-primary/15 to-wivoo-light/30 border-2 border-wivoo-primary rounded-2xl shadow-wivoo-lg group-hover:shadow-wivoo-glow transition-all duration-500 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-wivoo-animated gradient-animated shadow-wivoo-glow" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-wivoo-primary/20 rounded-full blur-2xl" />
                    <p className="text-base text-foreground whitespace-pre-wrap leading-relaxed relative z-10 font-semibold">
                      {project.solutionIA}
                    </p>
                  </div>
                )}
                {project.casUsage && (
                  <div>
                    <h4 className="text-sm font-bold text-wivoo-primary/90 mb-1">Cas d'usage</h4>
                    <p className="text-sm text-foreground/80">
                      {project.casUsage}
                    </p>
                  </div>
                )}
                {project.llmsUtilises && (
                  <div>
                    <h4 className="text-sm font-bold text-wivoo-primary/90 mb-1">
                      LLM(s) utilisé(s)
                    </h4>
                    <p className="text-sm text-foreground/80">
                      {project.llmsUtilises}
                    </p>
                  </div>
                )}
                {project.outilsFramework && (
                  <div>
                    <h4 className="text-sm font-bold text-wivoo-primary/90 mb-1">
                      Outils et framework
                    </h4>
                    <p className="text-sm text-foreground/80">
                      {project.outilsFramework}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Apprentissages */}
            <Card className="group border-2 border-wivoo-primary/50 bg-white hover:bg-white shadow-wivoo-lg hover:shadow-wivoo-glow transition-all duration-500 hover:-translate-y-1 animate-scale-in overflow-hidden relative" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-wivoo-primary/10 via-wivoo-light/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-wivoo opacity-15 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:translate-x-24 group-hover:-translate-y-24 transition-transform duration-700" />

              <CardHeader className="relative">
                <CardTitle className="text-3xl font-black flex items-center gap-3 text-wivoo-primary">
                  <div className="w-2 h-8 bg-gradient-wivoo-animated gradient-animated rounded-full shadow-wivoo-glow" />
                  Apprentissages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                {project.enseignementsCles && (
                  <div>
                    <h4 className="text-sm font-bold text-wivoo-primary/90 mb-1">
                      Enseignements clés
                    </h4>
                    <p className="text-sm text-foreground/80">
                      {project.enseignementsCles}
                    </p>
                  </div>
                )}
                {project.replicabilite && (
                  <div>
                    <h4 className="text-sm font-bold text-wivoo-primary/90 mb-1">
                      Réplicabilité
                    </h4>
                    <p className="text-sm text-foreground/80">
                      {project.replicabilite}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-8">
              {/* Valeur */}
              <Card className="group border-2 border-wivoo-primary/60 bg-white hover:bg-white shadow-wivoo-glow hover:shadow-wivoo-glow-lg transition-all duration-500 animate-scale-in overflow-hidden relative" style={{ animationDelay: '0.4s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-wivoo-primary/15 via-wivoo-light/25 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
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
                  <div className="absolute inset-0 bg-gradient-to-br from-wivoo-primary/15 via-wivoo-light/25 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
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
          </div>
        </div>
      </main>
    </div>
  );
}
