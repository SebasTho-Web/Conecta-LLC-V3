import { LanguageProvider, useLang } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Link } from "react-router-dom";
import { X, ShieldCheck, Mail, Info, FileText } from "lucide-react";

/**
 * Privacy Policy Page Component
 *
 * Provides a highly professional, GDPR-compliant legal disclosure for Malta-based Conecta All Nations.
 * Resolves the active locale programmatically using useLang() to switch between English and Spanish.
 *
 * Future developers can easily update legal clauses by modifying the EN and ES structures below.
 */
function PrivacyPolicyContent() {
  const { lang, t } = useLang();

  return (
    <main className="mx-auto max-w-4xl px-4 pb-24 pt-32 sm:px-6 lg:px-8 font-sans">
      {/* Return to Home FAB Button */}
      <Link
        to="/"
        id="dismiss-privacy"
        aria-label="Close and return to home"
        className="fixed right-5 top-24 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-soft backdrop-blur transition-all duration-3xl hover:bg-background hover:scale-105 active:scale-95"
      >
        <X className="h-5 w-5" />
      </Link>

      <div className="rounded-3xl border border-border/60 bg-[var(--cream)]/30 p-6 sm:p-10 md:p-12 shadow-card backdrop-blur-sm">
        {/* Decorative Header Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
          <ShieldCheck className="h-4 w-4" />
          <span>EU GDPR Compliant • Malta Jurisdiction</span>
        </div>

        {lang === "en" ? (
          /* ==================== ENGLISH PRIVACY POLICY ==================== */
          <article className="prose prose-slate dark:prose-invert max-w-none">
            <h1
              className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground"
              id="privacy-title"
            >
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-muted-foreground font-mono">
              Last updated: May 2026
            </p>

            <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/90">
              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <Info className="h-5 w-5 text-primary shrink-0" />
                  1. Introduction & Data Controller
                </h2>
                <p>
                  Conecta All Nations (operating as <strong>Conecta</strong>,
                  "we", "us", "our") takes your privacy and data protection
                  rights with extreme seriousness. In compliance with the{" "}
                  <strong>
                    General Data Protection Regulation (EU) 2016/679 (GDPR)
                  </strong>{" "}
                  and the{" "}
                  <strong>
                    Data Protection Act (Chapter 586 of the Laws of Malta)
                  </strong>
                  , we act as the Data Controller for any personal information
                  you provide to us through this website.
                </p>
                <p>
                  Our legal entity is established in Malta. If you have any
                  inquiries regarding our identity, this policy, or your data,
                  you can contact us directly at{" "}
                  <a
                    className="text-primary underline font-medium hover:text-primary-glow"
                    href="mailto:students.conecta@gmail.com"
                  >
                    students.conecta@gmail.com
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <FileText className="h-5 w-5 text-primary shrink-0" />
                  2. Personal Data We Collect
                </h2>
                <p>
                  We only collect personal information that is voluntarily
                  submitted by you via our contact and query forms, or through
                  direct interaction. This data includes:
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    <strong>Identity Information:</strong> Your full name.
                  </li>
                  <li>
                    <strong>Contact Details:</strong> Your email address and/or
                    WhatsApp phone number (if you initiate communication).
                  </li>
                  <li>
                    <strong>Demographics & Travel Interest:</strong> Country of
                    origin (e.g., Colombia, Mexico, or other), your preferred
                    service pathway (Assesment, Academic, Career, Add-Ons, or
                    Premium).
                  </li>
                  <li>
                    <strong>Communication History:</strong> Any specific
                    requests, resumes, or background details you voluntarily
                    supply inside the message field.
                  </li>
                  <li>
                    <strong>Functional Cookie Preferences:</strong> Your
                    selected UI language preference and light/dark theme
                    preference, which are stored locally on your device in your
                    browser.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  3. Legal Basis & Purposes for Data Processing
                </h2>
                <p>
                  Under GDPR Article 6, our processing of your personal data
                  rests on the following defined legal bases:
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    <strong>Consent (Art. 6(1)(a)):</strong> You have given
                    clear, explicit consent for us to process your data by
                    selecting the consent checkbox prior to submitting our
                    contact form.
                  </li>
                  <li>
                    <strong>Pre-Contractual Measures (Art. 6(1)(b)):</strong>{" "}
                    Processing is necessary to take specific exploratory actions
                    prior to entering into a formal service contract, such as
                    evaluating your candidacy for partnerships with schools
                    (e.g., London School of Commerce) or internships with
                    Maltese employers.
                  </li>
                </ul>
                <p>
                  We use your personal data <strong>solely</strong> to reply to
                  your inquiry, perform mobility and academic profile analysis,
                  arrange free introductory consultation appointments, and
                  provide career transition mentoring within Malta. We{" "}
                  <strong>do not</strong> sell, lease, or rent your personal
                  details to third parties for marketing purposes.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  4. Data Retention Period
                </h2>
                <p>
                  We store your personal data only as long as is necessary to
                  process and respond to your inquiry, evaluate your educational
                  placement opportunities, or fulfill contractual agreements.
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    General contact requests are deleted after{" "}
                    <strong>two (2) years</strong> of relative inactivity,
                    unless you sign up for one of our programs.
                  </li>
                  <li>
                    If you become an active student or client, your information
                    will be retained in accordance with legal requirements under
                    Maltese consumer and taxation regulations.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  5. Cross-Border Data Transfers
                </h2>
                <p>
                  Conecta connects Latin American students (such as from
                  Colombia and Mexico) with placements in Malta (European
                  Union). Consequently, your contact details may be accessed by
                  our staff operating between these territories. We take strict
                  security measures to ensure that all data is kept safe,
                  secure, and encrypted, adhering to GDPR-approved Standard
                  Contractual Clauses (SCCs) to guarantee an equivalent level of
                  protection wherever the data is processed.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  6. Your Explicit Rights Under GDPR
                </h2>
                <p>
                  You possess the following statutory rights in connection with
                  the personal data we store:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Right of Access (Art. 15):</strong> Request a copy
                    of the personal details we hold about you.
                  </li>
                  <li>
                    <strong>Right to Rectification (Art. 16):</strong> Ask us to
                    correct inaccurate or incomplete details.
                  </li>
                  <li>
                    <strong>
                      Right to Erasure / Right to be Forgotten (Art. 17):
                    </strong>{" "}
                    Request the full deletion of your records from our systems,
                    provided there is no conflicting legal obligation to retain
                    them.
                  </li>
                  <li>
                    <strong>Right to Restriction (Art. 18):</strong> Limit how
                    we process your information.
                  </li>
                  <li>
                    <strong>Right to Data Portability (Art. 20):</strong>{" "}
                    Request your data in a structured, machine-readable format.
                  </li>
                  <li>
                    <strong>Right to Object (Art. 21):</strong> Object to any
                    processing based on legitimate interests.
                  </li>
                  <li>
                    <strong>Right to Withdraw Consent (Art. 7(3)):</strong>{" "}
                    Withdraw your consent at any time. This will not affect the
                    lawfulness of processing based on consent before its
                    withdrawal.
                  </li>
                </ul>
                <p>
                  To exercise any of these options, simply email us at{" "}
                  <a
                    className="text-primary underline font-medium hover:text-primary-glow"
                    href="mailto:students.conecta@gmail.com"
                  >
                    students.conecta@gmail.com
                  </a>
                  .
                </p>
                <p className="bg-primary/5 p-4 rounded-2xl border border-primary/10 mt-3">
                  <strong>Right to Lodge a Complaint:</strong> If you believe we
                  processed your data unlawfully, you have the right to lodge a
                  formal complaint with the supervisory authority in Malta:
                  <br />
                  <span className="font-medium">
                    Information and Data Protection Commissioner (IDPC)
                  </span>
                  <br />
                  Office Address: Level 2, Airways House, High Street, Sliema
                  SLM 1549, Malta.
                  <br />
                  Website:{" "}
                  <a
                    className="text-primary underline"
                    href="https://idpc.org.mt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://idpc.org.mt
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  7. Legal & Contact Information
                </h2>
                <p>
                  For any privacy inquiries or legal issues, write to us at:
                  <br />
                  <strong>Conecta All Nations</strong>
                  <br />
                  Malta Base Contact Node
                  <br />
                  Email:{" "}
                  <a
                    className="text-primary underline"
                    href="mailto:students.conecta@gmail.com"
                  >
                    students.conecta@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </article>
        ) : (
          /* ==================== SPANISH PRIVACY POLICY ==================== */
          <article className="prose prose-slate dark:prose-invert max-w-none">
            <h1
              className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground"
              id="privacy-title"
            >
              Política de Privacidad
            </h1>
            <p className="mt-3 text-sm text-muted-foreground font-mono">
              Última actualización: Mayo de 2026
            </p>

            <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/90">
              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <Info className="h-5 w-5 text-primary shrink-0" />
                  1. Introducción y Responsable del Tratamiento
                </h2>
                <p>
                  Conecta All Nations (operando como <strong>Conecta</strong>,
                  "nosotros", "nuestro/a") se toma la privacidad y los derechos
                  de protección de datos con extrema responsabilidad. En
                  conformidad con el{" "}
                  <strong>
                    Reglamento General de Protección de Datos (UE) 2016/679
                    (RGPD)
                  </strong>{" "}
                  y la{" "}
                  <strong>
                    Ley de Protección de Datos (Capítulo 586 de las Leyes de
                    Malta)
                  </strong>
                  , actuamos como el Responsable del Tratamiento para cualquier
                  información personal que nos proporcione a través de este
                  sitio web.
                </p>
                <p>
                  Nuestra entidad legal se encuentra en Malta. Si tiene alguna
                  consulta sobre nuestra identidad, esta política o sus datos,
                  puede ponerse en contacto con nosotros en{" "}
                  <a
                    className="text-primary underline font-medium hover:text-primary-glow"
                    href="mailto:students.conecta@gmail.com"
                  >
                    students.conecta@gmail.com
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <FileText className="h-5 w-5 text-primary shrink-0" />
                  2. Datos Personales que Recopilamos
                </h2>
                <p>
                  Solo recopilamos información personal que usted envía
                  voluntariamente a través de nuestro formulario de contacto o
                  consulta directa:
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    <strong>Datos de Identidad:</strong> Su nombre completo.
                  </li>
                  <li>
                    <strong>Información de Contacto:</strong> Su dirección de
                    correo electrónico y/o número de WhatsApp (si inicia
                    comunicación directa).
                  </li>
                  <li>
                    <strong>Demografía e Intereses de Viaje:</strong> País de
                    origen (e.g., Colombia, México, u otro) y su ruta de
                    servicio de interés (Evaluación, Academia, Carrera,
                    Complementos o Plan Premium).
                  </li>
                  <li>
                    <strong>Historial de Comunicación:</strong> Consultas
                    específicas, hojas de vida (CV) o detalles que comparta
                    voluntariamente en el campo de texto libre.
                  </li>
                  <li>
                    <strong>Preferencias del Sitio:</strong> Su idioma
                    seleccionado y tema visual (claro/oscuro), almacenados de
                    forma local en su navegador.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  3. Bases Legales y Propósito del Tratamiento
                </h2>
                <p>
                  Conforme al Artículo 6 del RGPD, el procesamiento de sus datos
                  se rige por:
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    <strong>Consentimiento (Art. 6(1)(a)):</strong> Al marcar
                    explícitamente la casilla antes de enviar nuestro
                    formulario.
                  </li>
                  <li>
                    <strong>Medidas Precontractuales (Art. 6(1)(b)):</strong>{" "}
                    Tratamiento necesario para evaluar su perfil académico para
                    admisiones internacionales (e.g. en London School of
                    Commerce) o pasantías laborales en Malta.
                  </li>
                </ul>
                <p>
                  Utilizamos su información <strong>únicamente</strong> para
                  gestionar su consulta, estructurar su ruta de estudio/trabajo,
                  agendar la consulta gratuita y brindarle mentoría en Malta.{" "}
                  <strong>No vendemos</strong> ni comercializamos sus datos con
                  terceros con fines de lucro.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  4. Periodo de Retención de Datos
                </h2>
                <p>
                  Almacenamos sus datos únicamente durante el periodo pertinente
                  para dar respuesta a su consulta o planificar su viaje:
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    Las solicitudes de información se eliminan tras{" "}
                    <strong>dos (2) años</strong> de inactividad, a menos que
                    proceda a matricularse en alguno de nuestros programas.
                  </li>
                  <li>
                    Si se convierte en estudiante activo o cliente, sus datos se
                    almacenarán en concordancia con los tiempos exigidos por las
                    regulaciones comerciales y tributarias de Malta.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  5. Transferencia Internacional de Datos
                </h2>
                <p>
                  Para conectar estudiantes latinoamericanos con programas en
                  Europa, la información puede ser evaluada por asesores
                  operando entre ambos territorios. Implementamos estrictos
                  mecanismos técnicos de seguridad y Cláusulas Contractuales
                  Tipo (SCCs) avaladas por la Comisión Europea para garantizar
                  que su información mantenga un nivel de seguridad y cifrado
                  equivalente en todo momento.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  6. Sus Derechos Explícitos Bajo el RGPD
                </h2>
                <p>
                  Usted cuenta con los siguientes derechos en virtud de la
                  normativa de protección de datos:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Acceso (Art. 15):</strong> Solicitar copia de sus
                    datos que conservamos.
                  </li>
                  <li>
                    <strong>Rectificación (Art. 16):</strong> Corregir
                    información inexacta o incompleta.
                  </li>
                  <li>
                    <strong>Supresión / Derecho al Olvido (Art. 17):</strong>{" "}
                    Solicitar la eliminación total de sus registros, siempre que
                    no existan mandatos legales que obliguen a retenerlos.
                  </li>
                  <li>
                    <strong>Limitación del Tratamiento (Art. 18):</strong>{" "}
                    Restringir el uso que hacemos de sus datos.
                  </li>
                  <li>
                    <strong>Portabilidad (Art. 20):</strong> Recibir sus datos
                    en formato estructurado y de fácil lectura.
                  </li>
                  <li>
                    <strong>Oposición (Art. 21):</strong> Oponerse al
                    tratamiento por fines específicos.
                  </li>
                  <li>
                    <strong>Retiro de Consentimiento (Art. 7(3)):</strong>{" "}
                    Cancelar su consentimiento en cualquier momento, sin efectos
                    retroactivos.
                  </li>
                </ul>
                <p>
                  Para ejercer estos derechos, envíe su requerimiento a{" "}
                  <a
                    className="text-primary underline font-medium hover:text-primary-glow"
                    href="mailto:students.conecta@gmail.com"
                  >
                    students.conecta@gmail.com
                  </a>
                  .
                </p>
                <p className="bg-primary/5 p-4 rounded-2xl border border-primary/10 mt-3">
                  <strong>Derecho a Reclamar ante la Autoridad:</strong> Si
                  considera que hemos vulnerado sus derechos de datos, puede
                  interponer una denuncia oficial ante la entidad reguladora de
                  Malta:
                  <br />
                  <span className="font-medium">
                    Information and Data Protection Commissioner (IDPC)
                  </span>
                  <br />
                  Dirección: Level 2, Airways House, High Street, Sliema SLM
                  1549, Malta.
                  <br />
                  Sitio web:{" "}
                  <a
                    className="text-primary underline"
                    href="https://idpc.org.mt/en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://idpc.org.mt
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  7. Información de Contacto Legal
                </h2>
                <p>
                  Para consultas sobre privacidad u otros asuntos legales:
                  <br />
                  <strong>Conecta All Nations</strong>
                  <br />
                  Sede Malta
                  <br />
                  Correo:{" "}
                  <a
                    className="text-primary underline"
                    href="mailto:students.conecta@gmail.com"
                  >
                    students.conecta@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </article>
        )}
      </div>
    </main>
  );
}

export default function PrivacyPolicy() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <PrivacyPolicyContent />
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}
