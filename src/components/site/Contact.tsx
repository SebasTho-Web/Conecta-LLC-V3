import { useState, useEffect, useRef, type FormEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useForm } from "@formspree/react";
import { z } from "zod";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { CheckCircle2, Loader2, Send, X } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  country: z.string().min(1),
  service: z.string().min(1),
  message: z.string().trim().min(1).max(2000),
  agree: z.literal(true),
});

const inputCls =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30";

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

export function Contact() {
  const { t, lang } = useLang();
  const [formKey, setFormKey] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [clientError, setClientError] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [formState, handleFormspreeSubmit] = useForm("mqejgkwy");

  /* Show our success modal whenever Formspree reports success */
  useEffect(() => {
    if (formState.succeeded) {
      setShowSuccess(true);
      setAgreed(false);
    }
  }, [formState.succeeded]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!agreed) {
      setClientError(
        lang === "en"
          ? "Please accept the privacy policy."
          : "Por favor acepta la política de privacidad."
      );
      return;
    }

    const f = new FormData(e.currentTarget);
    const data = {
      name: String(f.get("name") ?? ""),
      email: String(f.get("email") ?? ""),
      country: String(f.get("country") ?? ""),
      service: String(f.get("service") ?? ""),
      message: String(f.get("message") ?? ""),
      agree: agreed,
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      setClientError(
        lang === "en"
          ? "Please complete all fields correctly."
          : "Por favor completa todos los campos correctamente."
      );
      return;
    }

    setClientError(null);
    handleFormspreeSubmit(e);
  };

  const closeSuccess = () => {
    setShowSuccess(false);
    setFormKey((k) => k + 1);
  };

  const sendingText = lang === "en" ? "Sending…" : "Enviando…";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--cream)] py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <Reveal className="lg:col-span-2">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            {t("contact.eyebrow")}
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
            {t("contact.title")}
          </h2>
          <p className="mt-6 text-muted-foreground">{t("contact.sub")}</p>
          <div className="mt-8 space-y-3 text-sm">
            <div>
              <span className="text-muted-foreground">Email · </span>
              <a
                className="text-primary"
                href="mailto:students.conecta@gmail.com"
              >
                students.conecta@gmail.com
              </a>
            </div>
            <div>
              <span className="text-muted-foreground">WhatsApp · </span>
              <a className="text-primary" href="https://wa.me/35699319746">
                +356 99319746
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-3">
          <form
            key={formKey}
            ref={formRef}
            onSubmit={onSubmit}
            className="rounded-3xl border border-border/70 bg-background p-6 shadow-card sm:p-10"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label={t("form.name")}>
                <input
                  name="name"
                  required
                  maxLength={120}
                  className={inputCls}
                />
              </Field>
              <Field label={t("form.email")}>
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  className={inputCls}
                />
              </Field>
              <Field label={t("form.country")}>
                <select
                  name="country"
                  required
                  defaultValue=""
                  className={inputCls}
                >
                  <option value="" disabled>
                    {t("form.country.placeholder")}
                  </option>
                  <option value="Colombia">{t("form.country.co")}</option>
                  <option value="Mexico">{t("form.country.mx")}</option>
                  <option value="Other">{t("form.country.other")}</option>
                </select>
              </Field>
              <Field label={t("form.service")}>
                <select
                  name="service"
                  required
                  defaultValue=""
                  className={inputCls}
                >
                  <option value="" disabled>
                    {t("form.service.placeholder")}
                  </option>
                  <option value="assess">{t("form.service.assess")}</option>
                  <option value="academic">{t("form.service.academic")}</option>
                  <option value="career">{t("form.service.career")}</option>
                  <option value="addons">{t("form.service.addons")}</option>
                  <option value="premium">{t("form.service.premium")}</option>
                  <option value="unsure">{t("form.service.unsure")}</option>
                </select>
              </Field>
            </div>
            <Field label={t("form.message")} className="mt-5">
              <textarea
                name="message"
                required
                maxLength={2000}
                rows={5}
                className={inputCls}
              />
            </Field>
            <label className="mt-5 flex items-start gap-4 text-sm text-muted-foreground select-none cursor-pointer">
              <input
                type="checkbox"
                name="agree"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 rounded accent-[oklch(0.71_0.115_300)]"
              />
              <span className="leading-relaxed">
                {lang === "en" ? (
                  <>
                    I have read and accept the{" "}
                    <Link
                      to="/privacy-policy"
                      id="checkbox-privacy-link"
                      className="text-primary font-medium hover:underline hover:text-primary/90 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Privacy Policy
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    He leído y acepto la{" "}
                    <Link
                      to="/privacy-policy"
                      id="checkbox-privacy-link"
                      className="text-primary font-medium hover:underline hover:text-primary/90 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Política de Privacidad
                    </Link>
                    .
                  </>
                )}
              </span>
            </label>

            {clientError && (
              <p className="mt-3 text-sm text-destructive">{clientError}</p>
            )}
            {formState.errors && formState.errors.length > 0 && (
              <p className="mt-3 text-sm text-destructive">
                {formState.errors.map((err) => err.message).join(", ")}
              </p>
            )}

            <button
              type="submit"
              disabled={!agreed || formState.submitting}
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-purple px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-glow hover:scale-[1.02] disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed"
            >
              {formState.submitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {formState.submitting ? sendingText : t("form.submit")}
            </button>
          </form>
        </Reveal>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-3xl bg-background p-8 text-center shadow-glow">
            <button
              onClick={closeSuccess}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="font-serif text-2xl">{t("form.success")}</h3>
          </div>
        </div>
      )}
    </section>
  );
}
