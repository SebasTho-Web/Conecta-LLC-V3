import { LanguageProvider, useLang } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CookieBanner } from "@/components/site/CookieBanner";
import { Link } from "react-router-dom";
import { X, Info, Cookie, Settings, ShieldCheck } from "lucide-react";

/**
 * Cookie Policy Page Component
 *
 * Explains localized cookie rules and local storage parameters. Satisfies the EU ePrivacy Directive ("Cookie Law").
 * Switches dynamically between English and Spanish based on user i18n selections.
 */
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
          /* ==================== ENGLISH COOKIE POLICY ==================== */
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
                  1. What Are Cookies and Local Storage?
                </h2>
                <p>
                  A cookie is a small text file placed onto your device when you
                  browse websites. Similar to cookies, we use browser{" "}
                  <strong>Local Storage</strong> keys to store preference
                  variables locally. These technologies help websites memorize
                  your inputs, layouts, and preference variables over a duration
                  of time so you do not have to reconfigure them when reloading
                  or switching pages.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <Cookie className="h-5 w-5 text-primary shrink-0" />
                  2. Cookies & Local Storage Parameters We Use
                </h2>
                <p>
                  Conecta All Nations respects your privacy. We{" "}
                  <strong>only</strong> employ strictly functional, necessary
                  first-party cookies and local storage items on this website.
                  We do not place third-party advertising cookies, performance
                  trackers, or behavioral profiling markers.
                </p>

                {/* Visual Storage Parameters Table */}
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
                      <tr>
                        <td className="px-4 py-3 font-mono font-bold text-foreground">
                          conecta.cookieConsent
                        </td>
                        <td className="px-4 py-3">Local Storage</td>
                        <td className="px-4 py-3">
                          Remembers if you declined ("declined") or accepted
                          ("accepted") this banner overlay.
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
                  3. Why Are These Essential?
                </h2>
                <p>
                  Under European Union General Data Protection Regulation and
                  the Malta electronic communications rules, strictly necessary
                  user preference identifiers **do not** require prior cookie
                  consent because without them, basic functions chosen
                  explicitly by the visitor (for example, switching language
                  from EN to ES, or enabling dark mode) cannot be fulfilled.
                </p>
                <p>
                  However, we believe in complete transparency, which is why we
                  provide a quick accept/decline action so you have total
                  autonomy of what values reside in your browser's persistent
                  cache.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <Settings className="h-5 w-5 text-primary shrink-0" />
                  4. How Can You Control and Clear Cookies?
                </h2>
                <p>
                  You can inspect, clear, delete, or disable all stored
                  parameters by diving into your browser's safety and
                  configuration settings. Clearing your browser cache or site
                  data will immediately wipe all persistent local
                  configurations, returning Conecta back to its original default
                  values (English and Light theme). Below are short guides on
                  where to locate these options:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-sm">
                  <li>
                    <strong>Google Chrome:</strong> Settings {">"} Privacy and
                    Security {">"} Third-party cookies {">"} See all site data
                    and permissions.
                  </li>
                  <li>
                    <strong>Apple Safari:</strong> Settings / Preferences {">"}{" "}
                    Advanced {">"} Privacy {">"} Manage Website Data.
                  </li>
                  <li>
                    <strong>Mozilla Firefox:</strong> Settings {">"} Privacy &
                    Security {">"} Cookies and Site Data.
                  </li>
                  <li>
                    <strong>Microsoft Edge:</strong> Settings {">"} Cookies and
                    site permissions {">"} Manage and delete cookies and site
                    data.
                  </li>
                </ul>

                {/* Interactive preference reset section */}
                <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-sm">
                  <h4 className="font-serif text-lg text-foreground font-semibold flex items-center gap-2">
                    <Cookie className="h-5 w-5 text-primary" />
                    Instantly Adjust Your Choice
                  </h4>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                    Would you like to change your previous selection? Clearing
                    your consent status will immediately bring back the
                    interactive cookie banner, letting you grant or reject
                    tracking permissions again.
                  </p>
                  <button
                    onClick={() => {
                      localStorage.removeItem("conecta.cookieConsent");
                      window.dispatchEvent(
                        new CustomEvent("conecta-reset-cookie-consent"),
                      );
                    }}
                    className="cursor-pointer mt-4 inline-flex items-center justify-center rounded-full bg-gradient-purple px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:scale-[1.02] hover:shadow-glow active:scale-[0.98]"
                  >
                    Reset Cookie Preferences
                  </button>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <Settings className="h-5 w-5 text-primary shrink-0" />
                  5. Contact Us
                </h2>
                <p>
                  Our goal is to keep our digital footprint minimalist and
                  secure. For any questions surrounding our use of cookies or
                  technical storage, you are invited to email our team directly
                  at{" "}
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
          /* ==================== SPANISH COOKIE POLICY ==================== */
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
                  1. ¿Qué son las Cookies y el Almacenamiento Local?
                </h2>
                <p>
                  Una cookie es un pequeño archivo de texto que se coloca en su
                  dispositivo al navegar por un sitio web. Al igual que las
                  cookies tradicionales, utilizamos el{" "}
                  <strong>Almacenamiento Local (Local Storage)</strong> de su
                  navegador para guardar variables de personalización de forma
                  100% local. Estas tecnologías facilitan que el sitio memorice
                  su idioma, tema y respuestas para que no tenga que volver a
                  configurarlos al recargar el portal.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <Cookie className="h-5 w-5 text-primary shrink-0" />
                  2. Cookies y Parámetros que Empleamos
                </h2>
                <p>
                  Conecta All Nations valora su privacidad. En este portal{" "}
                  <strong>únicamente</strong> utilizamos elementos técnicos de
                  almacenamiento de primera parte estrictamente necesarios. No
                  insertamos cookies de publicidad externa, ni sistemas
                  analíticos de monitoreo de comportamento de terceros.
                </p>

                {/* Visual Storage Parameters Table ES */}
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
                          Resguarda la selección de visualización clara (light)
                          o oscura (dark).
                        </td>
                        <td className="px-4 py-3">
                          Persistente hasta ser borrado
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-mono font-bold text-foreground">
                          conecta.cookieConsent
                        </td>
                        <td className="px-4 py-3">Local Storage</td>
                        <td className="px-4 py-3">
                          Determina si rechazó ("declined") o aceptó
                          ("accepted") el aviso inferior.
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
                  3. ¿Por qué son indispensables?
                </h2>
                <p>
                  Bajo la directiva de Privacidad Electrónica (ePrivacy
                  Directive) de la Unión Europea y las leyes de comunicaciones
                  electrónicas de Malta, los registros que almacenan puramente
                  preferencias e idioma del visitante **están exentos** de la
                  obligación de consentimiento previo. Sin ellos, el sitio web
                  sería incapaz de recordar el idioma que usted ha seleccionado
                  explícitamente para ver la web de Conecta.
                </p>
                <p>
                  Aun así, por transparencia total, incorporamos un panel
                  inferior donde puede manifestar su conformidad o negar el
                  almacenamiento local.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <Settings className="h-5 w-5 text-primary shrink-0" />
                  4. Control de Cookies y Cómo Eliminarlas
                </h2>
                <p>
                  Usted tiene plena autonomía para borrar, bloquear o vaciar los
                  parámetros configurados en este portal ingresando en la
                  sección de seguridad de su explorador de internet. Al vaciar
                  sus archivos temporales de navegación, el sitio web se
                  reiniciará a sus predefinidos básicos (idioma inglés, tema
                  claro). He aquí dónde hallar estos controles en los
                  navegadores principales:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-sm">
                  <li>
                    <strong>Google Chrome:</strong> Configuración {">"}{" "}
                    Privacidad y seguridad {">"} Cookies de terceros {">"} Ver
                    todos los datos y permisos de sitios.
                  </li>
                  <li>
                    <strong>Apple Safari:</strong> Ajustes / Preferencias {">"}{" "}
                    Privacidad {">"} Gestionar datos de sitios web.
                  </li>
                  <li>
                    <strong>Mozilla Firefox:</strong> Ajustes {">"} Privacidad &
                    Seguridad {">"} Cookies y datos del sitio.
                  </li>
                  <li>
                    <strong>Microsoft Edge:</strong> Configuración {">"} Cookies
                    y permisos del sitio {">"} Ver cookies y datos del sitio.
                  </li>
                </ul>

                {/* Interactive preference reset section in Spanish */}
                <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-sm">
                  <h4 className="font-serif text-lg text-foreground font-semibold flex items-center gap-2">
                    <Cookie className="h-5 w-5 text-primary" />
                    Cambiar su Elección Al Instante
                  </h4>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                    ¿Desea cambiar su selección anterior? El borrado de su
                    preferencia actual de consentimiento restablecerá
                    inmediatamente el panel interactivo, permitiéndole aceptar o
                    revocar los permisos de análisis de nuevo.
                  </p>
                  <button
                    onClick={() => {
                      localStorage.removeItem("conecta.cookieConsent");
                      window.dispatchEvent(
                        new CustomEvent("conecta-reset-cookie-consent"),
                      );
                    }}
                    className="cursor-pointer mt-4 inline-flex items-center justify-center rounded-full bg-gradient-purple px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:scale-[1.02] hover:shadow-glow active:scale-[0.98]"
                  >
                    Restablecer Preferencias de Cookies
                  </button>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <Settings className="h-5 w-5 text-primary shrink-0" />
                  5. Contáctenos
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
        <CookieBanner />
      </LanguageProvider>
    </ThemeProvider>
  );
}
