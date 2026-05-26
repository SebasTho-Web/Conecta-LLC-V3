import { LanguageProvider, useLang } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import {
  X,
  FileText,
  Scale,
  CheckCircle2,
  AlertTriangle,
  ShieldAlert,
} from "lucide-react";

function TermsOfServiceContent() {
  const { lang } = useLang();

  return (
    <main className="mx-auto max-w-4xl px-4 pb-24 pt-32 sm:px-6 lg:px-8 font-sans">
      {/* Return to Home FAB Button */}
      <Link
        to="/"
        id="dismiss-terms"
        aria-label="Close and return to home"
        className="fixed right-5 top-24 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-soft backdrop-blur transition-all duration-3xl hover:bg-background hover:scale-105 active:scale-95"
      >
        <X className="h-5 w-5" />
      </Link>

      <div className="rounded-3xl border border-border/60 bg-[var(--cream)]/30 p-6 sm:p-10 md:p-12 shadow-card backdrop-blur-sm">
        {/* Decorative Header Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
          <Scale className="h-4 w-4" />
          <span>EU Regulations • Malta Jurisdiction</span>
        </div>

        {lang === "en" ? (
          /* ==================== ENGLISH TERMS OF SERVICE ==================== */
          <article className="prose prose-slate dark:prose-invert max-w-none">
            <h1
              className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground"
              id="terms-title"
            >
              Terms of Service
            </h1>
            <p className="mt-3 text-sm text-muted-foreground font-mono">
              Last updated: May 2026
            </p>

            <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/90">
              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing and using the website of{" "}
                  <strong>Conecta All Nations</strong> ("Conecta", "we", "us",
                  or "our"), you agree to comply with and be bound by these
                  Terms of Service. If you do not agree to these terms, please
                  do not use our services or website.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <FileText className="h-5 w-5 text-primary shrink-0" />
                  2. Description of Advisory Services
                </h2>
                <p>
                  Conecta is an advisory service helping young professionals and
                  students from Latin America navigate opportunities to study,
                  work, or intern in Malta. We coordinate language courses,
                  degree programs, assessment consultations, and other strategic
                  roadmaps through our educational and professional partners.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <AlertTriangle className="h-5 w-5 text-primary shrink-0" />
                  3. Advisory Disclaimer
                </h2>
                <p>
                  You acknowledge and agree that Conecta acts solely as an
                  intermediary and consultant. We do not award degrees, issue
                  visas, secure employment, or grant admissions natively. All
                  final outcomes and decisions regarding visa applications,
                  local hiring, and academic admittance are governed
                  independently by the appropriate embassies, government
                  regulatory bodies, or university departments.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <ShieldAlert className="h-5 w-5 text-primary shrink-0" />
                  4. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by the laws of Malta, Conecta
                  All Nations and its affiliates cannot be held liable for any
                  direct, indirect, or consequential losses, academic
                  rejections, visa denials, or career changes resulting from
                  recommendations or documents hosted or delivered under our
                  consulting packages.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <Scale className="h-5 w-5 text-primary shrink-0" />
                  5. Governing Law & Jurisdiction
                </h2>
                <p>
                  These terms shall be governed by, and construed in accordance
                  with, the laws of <strong>Malta</strong>. Any dispute arising
                  under or in connection with these Terms of Service shall be
                  subject to the exclusive jurisdiction of the Maltese courts.
                </p>
              </section>
            </div>
          </article>
        ) : (
          /* ==================== SPANISH TERMS OF SERVICE ==================== */
          <article className="prose prose-slate dark:prose-invert max-w-none">
            <h1
              className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground"
              id="terms-title"
            >
              Términos de Servicio
            </h1>
            <p className="mt-3 text-sm text-muted-foreground font-mono">
              Última actualización: Mayo de 2026
            </p>

            <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/90">
              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  1. Aceptación de los Términos
                </h2>
                <p>
                  Al acceder y utilizar el sitio web de{" "}
                  <strong>Conecta All Nations</strong> ("Conecta", "nosotros" o
                  "nuestro"), usted acepta cumplir y estar sujeto a estos
                  Términos de Servicio. Si no está de acuerdo con estos
                  términos, le solicitamos abstenerse de utilizar el sitio web o
                  nuestros servicios.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <FileText className="h-5 w-5 text-primary shrink-0" />
                  2. Descripción de los Servicios de Asesoría
                </h2>
                <p>
                  Conecta es un servicio de asesoría y mentoría profesional que
                  ayuda a estudiantes y jóvenes profesionales de América Latina
                  a explorar opciones de estudio, trabajo o pasantías en Malta.
                  Facilitamos la conexión con programas de idiomas y títulos
                  universitarios de negocios mediante convenios estratégicos con
                  aliados educativos.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <AlertTriangle className="h-5 w-5 text-primary shrink-0" />
                  3. Descargo de Responsabilidad de Asesoría
                </h2>
                <p>
                  Usted reconoce y acepta que Conecta actúa estrictamente como
                  intermediario y asesor. No emitimos visados, no otorgamos
                  títulos directos ni garantizamos contratación laboral. Las
                  decisiones de aprobación académica, asignación de visas y
                  contratación son competencia exclusiva de las embajadas,
                  entidades gubernamentales e instituciones educativas
                  reguladas.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <ShieldAlert className="h-5 w-5 text-primary shrink-0" />
                  4. Limitación de Responsabilidad
                </h2>
                <p>
                  En la medida máxima permitida por las leyes de Malta, Conecta
                  All Nations y sus representantes no se harán responsables por
                  decisiones de denegación de visados, rechazos de admisión
                  académica de terceros o cambios en los términos laborales
                  derivados del uso de este sitio o del asesoramiento brindado.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <Scale className="h-5 w-5 text-primary shrink-0" />
                  5. Ley Aplicable y Jurisdicción
                </h2>
                <p>
                  Estos Términos de Servicio se rigen e interpretan de acuerdo
                  con las leyes vigentes de <strong>Malta</strong>. Cualquier
                  disputa o reclamación relativa a estos términos se someterá a
                  la jurisdicción exclusiva de los tribunales de Malta.
                </p>
              </section>
            </div>
          </article>
        )}
      </div>
    </main>
  );
}

export default function TermsOfService() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <TermsOfServiceContent />
        <Footer />
        <CookieBanner />
      </LanguageProvider>
    </ThemeProvider>
  );
}
