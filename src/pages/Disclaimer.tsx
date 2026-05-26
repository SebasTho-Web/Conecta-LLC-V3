import { LanguageProvider, useLang } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import {
  X,
  AlertCircle,
  HelpCircle,
  FileWarning,
  ExternalLink,
} from "lucide-react";

function DisclaimerContent() {
  const { lang } = useLang();

  return (
    <main className="mx-auto max-w-4xl px-4 pb-24 pt-32 sm:px-6 lg:px-8 font-sans">
      {/* Return to Home FAB Button */}
      <Link
        to="/"
        id="dismiss-disclaimer"
        aria-label="Close and return to home"
        className="fixed right-5 top-24 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-soft backdrop-blur transition-all duration-3xl hover:bg-background hover:scale-105 active:scale-95"
      >
        <X className="h-5 w-5" />
      </Link>

      <div className="rounded-3xl border border-border/60 bg-[var(--cream)]/30 p-6 sm:p-10 md:p-12 shadow-card backdrop-blur-sm">
        {/* Decorative Header Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1.5 text-xs font-medium text-yellow-600 dark:text-yellow-400">
          <AlertCircle className="h-4 w-4" />
          <span>Informational Disclaimer • Descargo de Responsabilidad</span>
        </div>

        {lang === "en" ? (
          /* ==================== ENGLISH DISCLAIMER ==================== */
          <article className="prose prose-slate dark:prose-invert max-w-none">
            <h1
              className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground"
              id="disclaimer-title"
            >
              Disclaimer
            </h1>
            <p className="mt-3 text-sm text-muted-foreground font-mono">
              Last updated: May 2026
            </p>

            <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/90">
              <section className="space-y-4 bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 pb-1 text-yellow-700 dark:text-yellow-300">
                  <FileWarning className="h-5 w-5 shrink-0" />
                  Core Notice
                </h2>
                <p className="text-foreground/95 antialiased font-medium leading-relaxed">
                  The company acts as an advisor/intermediary. Decisions
                  regarding admissions, visas, or employment are exclusively
                  made by the respective universities/institutions, and the
                  company cannot guarantee specific outcomes or results.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                  1. Information Accuracy
                </h2>
                <p>
                  The contents of this website, including insights, schedules,
                  estimates, tuition costs, and visas timelines, are presented
                  strictly for general educational and informational guidance.
                  While we verify information aggressively, immigration
                  processes, foreign policies, school curricula, and fees
                  fluctuate independently. Conecta All Nations assumes no
                  absolute responsibility for omissions or modifications made by
                  third-party academic institutions or government bureaus.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <ExternalLink className="h-5 w-5 text-primary shrink-0" />
                  2. Third-Party Websites & Relationships
                </h2>
                <p>
                  Any links on this website pointing to external resources,
                  schools, embassies, or job directories are included as helpful
                  shortcuts. We have no programmatic control over the
                  availability, reliability, or cookie tracking policies of
                  those domains. Linking to outside services does not represent
                  high-level endorsement of all policies hosted there.
                </p>
              </section>
            </div>
          </article>
        ) : (
          /* ==================== SPANISH DISCLAIMER ==================== */
          <article className="prose prose-slate dark:prose-invert max-w-none">
            <h1
              className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground"
              id="disclaimer-title"
            >
              Descargo de Responsabilidad
            </h1>
            <p className="mt-3 text-sm text-muted-foreground font-mono">
              Última actualización: Mayo de 2026
            </p>

            <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/90">
              <section className="space-y-4 bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 pb-1 text-yellow-700 dark:text-yellow-300">
                  <FileWarning className="h-5 w-5 shrink-0" />
                  Aviso Fundamental
                </h2>
                <p className="text-foreground/95 antialiased font-medium leading-relaxed">
                  La empresa actúa como asesora/intermediaria. Las decisiones
                  relativas a admisiones, visados o empleo son tomadas
                  exclusivamente por las respectivas universidades u
                  instituciones, y la empresa no puede garantizar resultados o
                  desenlaces específicos.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                  1. Exactitud de la Información
                </h2>
                <p>
                  El contenido expuesto en este sitio web se presenta únicamente
                  con fines informativos y orientativos de carácter general.
                  Aunque verificamos con rigurosidad la información publicada
                  —como tarifas de cursos de idiomas o requisitos de visados de
                  estudios en Malta— las políticas de inmigración y de matrícula
                  institucional son dinámicas y pueden variar sin previo aviso.
                  Conecta All Nations no se responsabiliza de los cambios que
                  implementen de forma externa las universidades y entes de
                  control migratorio de Malta.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <ExternalLink className="h-5 w-5 text-primary shrink-0" />
                  2. Enlaces a Terceros
                </h2>
                <p>
                  Los enlaces externos que faciliten acceso a portales
                  gubernamentales, sitios de aerolíneas o páginas de
                  universidades tienen el único fin de agilizar su navegación
                  técnica. No ejercemos poder o control sobre la veracidad,
                  políticas de privacidad o cookies de dominios ajenos, por lo
                  que recomendamos leer las declaraciones oficiales de cada
                  portal que visite.
                </p>
              </section>
            </div>
          </article>
        )}
      </div>
    </main>
  );
}

export default function Disclaimer() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <DisclaimerContent />
        <Footer />
        <CookieBanner />
      </LanguageProvider>
    </ThemeProvider>
  );
}
