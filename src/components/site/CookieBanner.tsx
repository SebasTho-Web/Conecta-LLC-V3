import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

/**
 * Custom Window interface to define third-party analytics globals and bypass ESLint explicit any.
 */
interface CustomWindow extends Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
  [key: string]: unknown;
}

/**
 * Storage key prefix to ensure cookie consent status persists in local storage.
 * Setting this custom state prevents showing the modal repeatedly on reload.
 */
const STORAGE_KEY = "conecta.cookieConsent";

/**
 * Inject real placeholder analytical tracking scripts once user chooses to accept cookies.
 */
function injectAnalytics() {
  if (typeof window === "undefined") return;
  const w = window as unknown as CustomWindow;

  // 1. Google Analytics (gtag.js) script injection
  if (!document.getElementById("gtag-script")) {
    const script = document.createElement("script");
    script.id = "gtag-script";
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-TRACKINGID";
    script.async = true;
    document.head.appendChild(script);

    w.dataLayer = w.dataLayer || [];
    w.gtag = function (...args: unknown[]) {
      w.dataLayer?.push(args);
    };
    w.gtag("js", new Date());
    w.gtag("config", "G-TRACKINGID", { anonymize_ip: true });
    console.log(
      "[GDPR Compliance] Affirmative consent given. Google Analytics initialized successfully.",
    );
  }

  // 2. Meta Pixel (fbq) script injection
  if (!document.getElementById("fbp-script")) {
    const fbScript = document.createElement("script");
    fbScript.id = "fbp-script";
    fbScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window,document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '123456789');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(fbScript);
    console.log(
      "[GDPR Compliance] Affirmative consent given. Meta Pixel tracker initialized successfully.",
    );
  }
}

/**
 * Remove any existing analytic tracking scripts and opt-out of cookies if user rejects.
 */
function removeAndClearAnalytics() {
  if (typeof window === "undefined") return;
  const w = window as unknown as CustomWindow;

  // Clear Gtag script
  const ga = document.getElementById("gtag-script");
  if (ga) ga.remove();

  // Clear Fb Pixel script
  const fb = document.getElementById("fbp-script");
  if (fb) fb.remove();

  // Turn off gtag tracking flag specifically
  w["ga-disable-G-TRACKINGID"] = true;

  // Delete globals
  delete w.gtag;
  delete w.fbq;
  delete w.dataLayer;

  // Purge tracking cookies (such as _ga, _gid, _fbp) to ensure absolute data sanitization
  try {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name =
        eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
      if (
        name.startsWith("_ga") ||
        name.startsWith("_gid") ||
        name.startsWith("_fbp")
      ) {
        document.cookie =
          name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie =
          name +
          "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" +
          window.location.hostname +
          ";";
      }
    }
  } catch (err) {
    console.error("Purging tracking cookies failed", err);
  }
  console.log(
    "[GDPR Compliance] Tracking scripts strictly BLOCKED. No cookies allowed.",
  );
}

/**
 * CookieBanner Component
 */
export function CookieBanner() {
  const { t, lang } = useLang();
  const [visible, setVisible] = useState(false);
  const [animatedVisible, setAnimatedVisible] = useState(false);

  // Read local storage on mount to determine if user has already made a selection.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
      const timer = setTimeout(() => {
        setAnimatedVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for custom reset event to re-open the banner dynamically
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleReset = () => {
      removeAndClearAnalytics();
      setVisible(true);
      setTimeout(() => {
        setAnimatedVisible(true);
      }, 50);
    };
    window.addEventListener("conecta-reset-cookie-consent", handleReset);
    return () => {
      window.removeEventListener("conecta-reset-cookie-consent", handleReset);
    };
  }, []);

  // Synchronize dynamic script-loading state on change/load
  useEffect(() => {
    if (typeof window === "undefined") return;
    const consent = localStorage.getItem(STORAGE_KEY);
    if (consent === "accepted") {
      injectAnalytics();
    } else {
      // Explicitly block and clear tracking by default if declined or if no choice has been made yet
      removeAndClearAnalytics();
    }
  }, [visible]);

  /**
   * Persists the user's decision inside local storage and dismisses the layout with fade-out.
   */
  const decide = (value: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, value);
    if (value === "accepted") {
      injectAnalytics();
    } else if (value === "declined") {
      removeAndClearAnalytics();
    }
    setAnimatedVisible(false);
    setTimeout(() => {
      setVisible(false);
    }, 450); // wait for fade and slide transition to finish
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-hidden={!animatedVisible}
      aria-label="Cookie consent"
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
              Utilizamos cookies para mejorar tu experiencia. Al continuar
              navegando, aceptas nuestra{" "}
              <Link
                to="/privacy-policy"
                id="cookie-banner-privacy-link"
                className="text-primary underline font-medium w-max inline-block hover:text-primary/80"
              >
                Política de Privacidad
              </Link>{" "}
              y el uso de cookies. También puedes leer nuestra{" "}
              <Link
                to="/cookie-policy"
                id="cookie-banner-policy-link"
                className="text-primary underline font-medium w-max inline-block hover:text-primary/80"
              >
                Política de Cookies
              </Link>
              .
            </>
          ) : (
            <>
              We use cookies to improve your experience. By continuing to
              browse, you agree to our{" "}
              <Link
                to="/privacy-policy"
                id="cookie-banner-privacy-link"
                className="text-primary underline font-medium w-max inline-block hover:text-primary/80"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                to="/cookie-policy"
                id="cookie-banner-policy-link"
                className="text-primary underline font-medium w-max inline-block hover:text-primary/80"
              >
                Cookie Policy
              </Link>
              .
            </>
          )}
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            id="cookie-banner-decline-button"
            onClick={() => decide("declined")}
            className="cursor-pointer rounded-full border border-border px-4 py-2 text-sm text-foreground transition hover:bg-muted font-sans"
          >
            {t("cookie.banner.decline")}
          </button>
          <button
            id="cookie-banner-accept-button"
            onClick={() => decide("accepted")}
            className="cursor-pointer rounded-full bg-gradient-purple px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition hover:shadow-glow font-sans"
          >
            {t("cookie.banner.accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
