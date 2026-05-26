import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { applyConsent, readConsent } from "@/utils/cookieManager";
import type { ConsentCategory } from "@/utils/cookieManager";

/**
 * CookieBanner - GDPR-compliant first-visit consent banner + settings modal.
 *
 * - Renders only when `localStorage.cookieConsent` does NOT exist.
 * - Exposes Accept All / Reject All / Settings actions.
 * - Settings modal allows independent toggles for analytics, marketing,
 *   and preferences with a focus trap and Escape-to-close.
 */
export function CookieBanner() {
  const { lang } = useLang();
  const {
    consent,
    hasConsent,
    settingsOpen,
    acceptAll,
    rejectAll,
    updateCategory,
    openSettings,
    closeSettings,
  } = useCookieConsent();

  const [animatedVisible, setAnimatedVisible] = useState(false);
  const showBanner = !hasConsent;

  // On mount: apply any stored consent so third-party scripts load (or stay blocked).
  useEffect(() => {
    applyConsent(readConsent());
  }, []);

  // Banner fade-in.
  useEffect(() => {
    if (!showBanner) {
      setAnimatedVisible(false);
      return;
    }
    const t = setTimeout(() => setAnimatedVisible(true), 100);
    return () => clearTimeout(t);
  }, [showBanner]);

  if (!showBanner && !settingsOpen) return null;

  return (
    <>
      {showBanner && (
        <BannerLayer
          lang={lang}
          animatedVisible={animatedVisible}
          onAccept={acceptAll}
          onReject={rejectAll}
          onOpenSettings={openSettings}
        />
      )}
      {settingsOpen && (
        <SettingsModal
          lang={lang}
          consent={consent}
          onClose={closeSettings}
          onAcceptAll={acceptAll}
          onRejectAll={rejectAll}
          onUpdateCategory={updateCategory}
        />
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Banner (first layer)                                                */
/* ------------------------------------------------------------------ */
interface BannerProps {
  lang: "en" | "es";
  animatedVisible: boolean;
  onAccept: () => void;
  onReject: () => void;
  onOpenSettings: () => void;
}

function BannerLayer({
  lang,
  animatedVisible,
  onAccept,
  onReject,
  onOpenSettings,
}: BannerProps) {
  return (
    <div
      role="region"
      aria-live="polite"
      aria-label={lang === "es" ? "Consentimiento de cookies" : "Cookie consent"}
      id="cookie-consent-banner"
      className={`fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-2xl border border-border bg-background/95 p-5 shadow-glow backdrop-blur-md transition-all duration-500 ease-out sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 ${
        animatedVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-12 opacity-0 scale-95"
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-foreground/90">
          {lang === "es" ? (
            <>
              Utilizamos cookies para mejorar tu experiencia. Consulta nuestra{" "}
              <Link
                to="/privacy-policy"
                className="text-primary underline font-medium hover:text-primary/80"
              >
                Política de Privacidad
              </Link>{" "}
              y{" "}
              <Link
                to="/cookie-policy"
                className="text-primary underline font-medium hover:text-primary/80"
              >
                Política de Cookies
              </Link>
              .
            </>
          ) : (
            <>
              We use cookies to improve your experience. See our{" "}
              <Link
                to="/privacy-policy"
                className="text-primary underline font-medium hover:text-primary/80"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                to="/cookie-policy"
                className="text-primary underline font-medium hover:text-primary/80"
              >
                Cookie Policy
              </Link>
              .
            </>
          )}
        </p>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            id="cookie-banner-settings-button"
            onClick={onOpenSettings}
            aria-label={lang === "es" ? "Abrir ajustes de cookies" : "Open cookie settings"}
            className="cursor-pointer rounded-full border border-border px-4 py-2 text-sm text-foreground transition hover:bg-muted font-sans"
          >
            {lang === "es" ? "Ajustes" : "Settings"}
          </button>
          <button
            type="button"
            id="cookie-banner-decline-button"
            onClick={onReject}
            aria-label={lang === "es" ? "Rechazar todas las cookies" : "Reject all cookies"}
            className="cursor-pointer rounded-full border border-border px-4 py-2 text-sm text-foreground transition hover:bg-muted font-sans"
          >
            {lang === "es" ? "Rechazar todo" : "Reject All"}
          </button>
          <button
            type="button"
            id="cookie-banner-accept-button"
            onClick={onAccept}
            aria-label={lang === "es" ? "Aceptar todas las cookies" : "Accept all cookies"}
            className="cursor-pointer rounded-full bg-gradient-purple px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition hover:shadow-glow font-sans"
          >
            {lang === "es" ? "Aceptar todo" : "Accept All"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Settings modal                                                      */
/* ------------------------------------------------------------------ */
interface SettingsProps {
  lang: "en" | "es";
  consent: ReturnType<typeof readConsent>;
  onClose: () => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onUpdateCategory: (category: ConsentCategory, value: boolean) => void;
}

interface DraftState {
  analytics: boolean;
}

function SettingsModal({
  lang,
  consent,
  onClose,
  onAcceptAll,
  onRejectAll,
  onUpdateCategory,
}: SettingsProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const [draft, setDraft] = useState<DraftState>({
    analytics: consent?.analytics ?? false,
  });
  const [announcement, setAnnouncement] = useState("");

  // Focus trap + Escape to close.
  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const node = dialogRef.current;
    const focusables = node?.querySelectorAll<HTMLElement>(
      'button, [href], input, [tabindex]:not([tabindex="-1"])',
    );
    focusables?.[0]?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      previouslyFocused.current?.focus?.();
    };
  }, [onClose]);

  const toggle = (key: ConsentCategory) => {
    setDraft((d) => {
      const next = { ...d, [key]: !d[key] };
      setAnnouncement(
        `${key} ${next[key] ? (lang === "es" ? "activado" : "enabled") : lang === "es" ? "desactivado" : "disabled"}`,
      );
      return next;
    });
  };

  const handleSave = () => {
    (Object.keys(draft) as ConsentCategory[]).forEach((k) =>
      onUpdateCategory(k, draft[k]),
    );
    setAnnouncement(
      lang === "es" ? "Preferencias guardadas" : "Preferences saved",
    );
    onClose();
  };

  const t = (en: string, es: string) => (lang === "es" ? es : en);

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-settings-title"
        aria-describedby="cookie-settings-desc"
        className="w-full max-w-lg rounded-2xl border border-border bg-background p-6 shadow-glow"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              id="cookie-settings-title"
              className="font-serif text-2xl text-foreground"
            >
              {t("Cookie Settings", "Ajustes de Cookies")}
            </h2>
            <p
              id="cookie-settings-desc"
              className="mt-1 text-sm text-muted-foreground"
            >
              {t(
                "Choose which categories you want to allow.",
                "Elige qué categorías deseas permitir.",
              )}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t("Close settings", "Cerrar ajustes")}
            className="cursor-pointer rounded-full p-2 text-foreground transition hover:bg-muted"
          >
            ✕
          </button>
        </div>

        <div className="mt-6 space-y-3">
          <ToggleRow
            id="cookie-toggle-essential"
            label={t("Essential", "Esenciales")}
            description={t(
              "Always on. Required for the site to work.",
              "Siempre activas. Necesarias para el funcionamiento del sitio.",
            )}
            checked
            disabled
            onChange={() => undefined}
          />
          <ToggleRow
            id="cookie-toggle-analytics"
            label={t("Analytics", "Analíticas")}
            description={t(
              "Help us understand how visitors use the site.",
              "Nos ayudan a entender cómo se usa el sitio.",
            )}
            checked={draft.analytics}
            onChange={() => toggle("analytics")}
          />
        </div>

        <div className="mt-6 flex flex-wrap justify-end gap-2">
          <button
            type="button"
            onClick={onRejectAll}
            className="cursor-pointer rounded-full border border-border px-4 py-2 text-sm text-foreground transition hover:bg-muted"
          >
            {t("Reject All", "Rechazar todo")}
          </button>
          <button
            type="button"
            onClick={onAcceptAll}
            className="cursor-pointer rounded-full border border-border px-4 py-2 text-sm text-foreground transition hover:bg-muted"
          >
            {t("Accept All", "Aceptar todo")}
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="cursor-pointer rounded-full bg-gradient-purple px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition hover:shadow-glow"
          >
            {t("Save Preferences", "Guardar preferencias")}
          </button>
        </div>

        <div role="status" aria-live="polite" className="sr-only">
          {announcement}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Toggle row                                                          */
/* ------------------------------------------------------------------ */
interface ToggleRowProps {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
}

function ToggleRow({
  id,
  label,
  description,
  checked,
  disabled,
  onChange,
}: ToggleRowProps) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-muted/30 p-4">
      <div className="min-w-0">
        <label htmlFor={id} className="block text-sm font-medium text-foreground">
          {label}
        </label>
        <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>
      </div>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${
          checked ? "bg-primary" : "bg-muted-foreground/30"
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-background shadow transition-transform ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
}
