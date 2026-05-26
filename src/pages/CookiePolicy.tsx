import { LanguageProvider, useLang } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Link } from "react-router-dom";
import { X, Info, Cookie, ShieldCheck } from "lucide-react";

function CookiePolicyContent() {
  const { lang } = useLang();

  return (
    <main className="mx-auto max-w-4xl px-4 pb-24 pt-32 sm:px-6 lg:px-8 font-sans">
      {/* Return to Home FAB Button */}
      <Link
        to="/"
        id="dismiss-cookies"
        aria-label="Close and return to home"
        className="fixed right-5 top-24 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-soft backdrop-blur transition-all duration-3xl hover:bg-background hover:scale-105 active:scale-95"
      >
        <X className="h-5 w-5" />
      </Link>

      <div className="rounded-3xl border border-border/60 bg-[var(--cream)]/30 p-6 sm:p-10 md:p-12 shadow-card backdrop-blur-sm">
        {/* Decorative Header Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
          <Cookie className="h-4 w-4" />
          <span>EU ePrivacy Directive Compliant</span>
        </div>

        {lang === "en" ? (
          <article className="prose prose-slate dark:prose-invert max-w-none">
            <h1
              className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground"
              id="cookie-title"
            >
              Cookie Policy
            </h1>
            <p className="mt-3 text-sm text-muted-foreground font-mono">
              Last updated: May 2026
            </p>

            <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/90">
              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <Info className="h-5 w-5 text-primary shrink-0" />
                  Information about cookies &amp; personal data
                </h2>
                <p>
                  <strong>Cookies:</strong> We only use strictly necessary
                  functions (local storage) to remember your choice of language
                  and design theme (light/dark mode). We do not use any
                  tracking, statistical or marketing cookies, so you do not
                  have to worry about an annoying cookie banner with us.
                </p>
                <p>
                  <strong>Personal data:</strong> When you use our contact
                  form, your data is sent securely via our form service
                  Formspree. We only save your name, email address and message
                  to be able to answer your question. We never sell or share
                  your data with third parties.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <Cookie className="h-5 w-5 text-primary shrink-0" />
                  Local Storage Parameters We Use
                </h2>
                <div className="overflow-x-auto mt-4 rounded-xl border border-border">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-muted text-xs uppercase text-muted-foreground">
                      <tr>
                        <th className="px-4 py-3">Technical Name</th>
                        <th className="px-4 py-3">Type</th>
                        <th className="px-4 py-3">Purpose</th>
                        <th className="px-4 py-3">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-background">
                      <tr>
                        <td className="px-4 py-3 font-mono font-bold text-foreground">
                          conecta-lang
                        </td>
                        <td className="px-4 py-3">Local Storage</td>
                        <td className="px-4 py-3">
                          Preserves English ("en") or Spanish ("es") chosen UI
                          language.
                        </td>
                        <td className="px-4 py-3">Persistent until cleared</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-mono font-bold text-foreground">
                          conecta-theme
                        </td>
                        <td className="px-4 py-3">Local Storage</td>
                        <td className="px-4 py-3">
                          Saves Light or Dark mode view selection.
                        </td>
                        <td className="px-4 py-3">Persistent until cleared</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  Why Are These Essential?
                </h2>
                <p>
                  Under European Union General Data Protection Regulation and
                  the Malta electronic communications rules, strictly necessary
                  user preference identifiers do not require prior cookie
                  consent because without them, basic functions chosen
                  explicitly by the visitor (for example, switching language
                  from EN to ES, or enabling dark mode) cannot be fulfilled.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <Info className="h-5 w-5 text-primary shrink-0" />
                  Contact Us
                </h2>
                <p>
                  Our goal is to keep our digital footprint minimalist and
                  secure. For any questions surrounding our use of cookies or
                  personal data, you are invited to email our team directly at{" "}
                  <a
                    className="text-primary underline font-medium hover:text-primary-glow"
                    href="mailto:students.conecta@gmail.com"
                  >
                    students.conecta@gmail.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </article>
        ) : (
          <article className="prose prose-slate dark:prose-invert max-w-none">
            <h1
              className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground"
              id="cookie-title"
            >
              Política de Cookies
            </h1>
            <p className="mt-3 text-sm text-muted-foreground font-mono">
              Última actualización: Mayo de 2026
            </p>

            <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/90">
              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <Info className="h-5 w-5 text-primary shrink-0" />
                  Información sobre cookies y datos personales
                </h2>
                <p>
                  <strong>Cookies:</strong> Solo utilizamos funciones
                  estrictamente necesarias (almacenamiento local) para recordar
                  su elección de idioma y tema de diseño (modo claro/oscuro).
                  No utilizamos cookies de seguimiento, estadísticas ni
                  marketing, así que no tiene que preocuparse por un molesto
                  banner de cookies con nosotros.
                </p>
                <p>
                  <strong>Datos personales:</strong> Cuando utiliza nuestro
                  formulario de contacto, sus datos se envían de forma segura
                  a través de nuestro servicio de formularios Formspree. Solo
                  guardamos su nombre, dirección de correo electrónico y
                  mensaje para poder responder a su pregunta. Nunca vendemos ni
                  compartimos sus datos con terceros.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <Cookie className="h-5 w-5 text-primary shrink-0" />
                  Parámetros de almacenamiento local que empleamos
                </h2>
                <div className="overflow-x-auto mt-4 rounded-xl border border-border">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-muted text-xs uppercase text-muted-foreground">
                      <tr>
                        <th className="px-4 py-3">Nombre Técnico</th>
                        <th className="px-4 py-3">Tipo</th>
                        <th className="px-4 py-3">Propósito</th>
                        <th className="px-4 py-3">Duración</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-background">
                      <tr>
                        <td className="px-4 py-3 font-mono font-bold text-foreground">
                          conecta-lang
                        </td>
                        <td className="px-4 py-3">Local Storage</td>
                        <td className="px-4 py-3">
                          Preserva el idioma elegido por el usuario: inglés
                          ("en") o español ("es").
                        </td>
                        <td className="px-4 py-3">
                          Persistente hasta ser borrado
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-mono font-bold text-foreground">
                          conecta-theme
                        </td>
                        <td className="px-4 py-3">Local Storage</td>
                        <td className="px-4 py-3">
                          Resguarda la selección de visualización clara
                          (light) u oscura (dark).
                        </td>
                        <td className="px-4 py-3">
                          Persistente hasta ser borrado
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  ¿Por qué son indispensables?
                </h2>
                <p>
                  Bajo la directiva de Privacidad Electrónica (ePrivacy
                  Directive) de la Unión Europea y las leyes de comunicaciones
                  electrónicas de Malta, los registros que almacenan puramente
                  preferencias e idioma del visitante están exentos de la
                  obligación de consentimiento previo. Sin ellos, el sitio web
                  sería incapaz de recordar el idioma que usted ha seleccionado
                  explícitamente para ver la web de Conecta.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <Info className="h-5 w-5 text-primary shrink-0" />
                  Contáctenos
                </h2>
                <p>
                  Nuestro propósito es mantener una huella digital sobria,
                  minimalista y segura. Si le resta duda de las cookies de
                  preferencia que guardamos, puede escribirnos a{" "}
                  <a
                    className="text-primary underline font-medium hover:text-primary-glow"
                    href="mailto:students.conecta@gmail.com"
                  >
                    students.conecta@gmail.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </article>
        )}
      </div>
    </main>
  );
}

export default function CookiePolicy() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <CookiePolicyContent />
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}
