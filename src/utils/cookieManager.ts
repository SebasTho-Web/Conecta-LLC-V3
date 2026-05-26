/**
 * CookieManager - GDPR script & cookie management utility.
 *
 * Responsibilities:
 *  - Read/write consent in localStorage under the key `cookieConsent`.
 *  - Inject third-party analytics/marketing scripts ONLY after explicit consent.
 *  - Remove scripts and purge known tracking cookies when consent is revoked.
 *
 * Consent shape (stored under `cookieConsent`):
 *   {
 *     consented: boolean,
 *     analytics: boolean,
 *     marketing: boolean,
 *     preferences: boolean,
 *     timestamp: string (ISO-8601)
 *   }
 */

export const CONSENT_STORAGE_KEY = "cookieConsent";

export type ConsentCategory = "analytics" | "marketing" | "preferences";

export interface CookieConsent {
  consented: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  timestamp: string;
}

interface CustomWindow extends Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: ((...args: unknown[]) => void) & {
    callMethod?: (...args: unknown[]) => void;
    queue?: unknown[];
    push?: unknown;
    loaded?: boolean;
    version?: string;
  };
  _fbq?: unknown;
  [key: string]: unknown;
}

/** Build a fresh consent object with all categories set to `value`. */
export function buildConsent(value: boolean): CookieConsent {
  return {
    consented: true,
    analytics: value,
    marketing: value,
    preferences: value,
    timestamp: new Date().toISOString(),
  };
}

/** Read consent from localStorage. Returns null if not yet set. */
export function readConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookieConsent>;
    return {
      consented: Boolean(parsed.consented),
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      preferences: Boolean(parsed.preferences),
      timestamp: parsed.timestamp ?? new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

/** True if the user has answered the banner at least once. */
export function hasStoredConsent(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(CONSENT_STORAGE_KEY) !== null;
}

/** Persist consent and dispatch a `cookieConsent:change` event for listeners. */
export function writeConsent(consent: CookieConsent): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(
    new CustomEvent<CookieConsent>("cookieConsent:change", { detail: consent }),
  );
}

/* ============================================================
 * Analytics (Google Analytics) - loaded only when analytics === true
 * ============================================================ */
function loadGoogleAnalytics() {
  if (typeof window === "undefined") return;
  if (document.getElementById("gtag-script")) return;
  const w = window as unknown as CustomWindow;

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
}

function unloadGoogleAnalytics() {
  if (typeof window === "undefined") return;
  const w = window as unknown as CustomWindow;
  document.getElementById("gtag-script")?.remove();
  w["ga-disable-G-TRACKINGID"] = true;
  delete w.gtag;
  delete w.dataLayer;
}

/* ============================================================
 * Marketing (Meta Pixel) - loaded only when marketing === true
 * ============================================================ */
function loadMetaPixel() {
  if (typeof window === "undefined") return;
  if (document.getElementById("fbp-script")) return;

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
}

function unloadMetaPixel() {
  if (typeof window === "undefined") return;
  const w = window as unknown as CustomWindow;
  document.getElementById("fbp-script")?.remove();
  delete w.fbq;
  delete w._fbq;
}

/* ============================================================
 * Cookie purge helpers
 * ============================================================ */
const TRACKING_COOKIE_PREFIXES = ["_ga", "_gid", "_gat", "_fbp", "_fbc"];

/** Delete known non-essential tracking cookies. */
export function purgeTrackingCookies(): void {
  if (typeof document === "undefined") return;
  try {
    const cookies = document.cookie.split(";");
    for (const raw of cookies) {
      const eqPos = raw.indexOf("=");
      const name = eqPos > -1 ? raw.substring(0, eqPos).trim() : raw.trim();
      if (!TRACKING_COOKIE_PREFIXES.some((p) => name.startsWith(p))) continue;
      const expire = "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = name + expire;
      document.cookie =
        name + expire.replace(";", `; domain=${window.location.hostname};`);
    }
  } catch (err) {
    console.error("[CookieManager] Failed to purge tracking cookies", err);
  }
}

/**
 * Reconcile loaded scripts with the current consent object.
 * Loads scripts whose category is `true`, unloads (and purges cookies for)
 * categories that are `false`.
 */
export function applyConsent(consent: CookieConsent | null): void {
  if (typeof window === "undefined") return;

  if (!consent || !consent.consented) {
    unloadGoogleAnalytics();
    unloadMetaPixel();
    return;
  }

  if (consent.analytics) loadGoogleAnalytics();
  else unloadGoogleAnalytics();

  if (consent.marketing) loadMetaPixel();
  else unloadMetaPixel();

  // If anything was rejected, sweep up its cookies.
  if (!consent.analytics || !consent.marketing) {
    purgeTrackingCookies();
  }
}
