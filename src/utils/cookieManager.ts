/**
 * CookieManager - GDPR script & cookie management utility.
 *
 * Categories: analytics, preferences. (No marketing/ads.)
 *
 * Consent shape (stored under `cookieConsent`):
 *   {
 *     consented: boolean,
 *     analytics: boolean,
 *     preferences: boolean,
 *     timestamp: string (ISO-8601)
 *   }
 */

export const CONSENT_STORAGE_KEY = "cookieConsent";

/** Replace with your real Google Analytics 4 Measurement ID (e.g. "G-XXXXXXXXXX"). */
export const GA_MEASUREMENT_ID = "G-TRACKINGID";

export type ConsentCategory = "analytics" | "preferences";

export interface CookieConsent {
  consented: boolean;
  analytics: boolean;
  preferences: boolean;
  timestamp: string;
}

interface CustomWindow extends Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  [key: string]: unknown;
}

export function buildConsent(value: boolean): CookieConsent {
  return {
    consented: true,
    analytics: value,
    preferences: value,
    timestamp: new Date().toISOString(),
  };
}

export function readConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookieConsent>;
    return {
      consented: Boolean(parsed.consented),
      analytics: Boolean(parsed.analytics),
      preferences: Boolean(parsed.preferences),
      timestamp: parsed.timestamp ?? new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function hasStoredConsent(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(CONSENT_STORAGE_KEY) !== null;
}

export function writeConsent(consent: CookieConsent): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(
    new CustomEvent<CookieConsent>("cookieConsent:change", { detail: consent }),
  );
}

/* ============================================================
 * Google Analytics 4 - loaded only when analytics === true
 * ============================================================ */
function loadGoogleAnalytics() {
  if (typeof window === "undefined") return;
  if (document.getElementById("gtag-script")) return;
  const w = window as unknown as CustomWindow;

  const script = document.createElement("script");
  script.id = "gtag-script";
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  w.dataLayer = w.dataLayer || [];
  w.gtag = function (...args: unknown[]) {
    w.dataLayer?.push(args);
  };
  w.gtag("js", new Date());
  w.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
}

function unloadGoogleAnalytics() {
  if (typeof window === "undefined") return;
  const w = window as unknown as CustomWindow;
  document.getElementById("gtag-script")?.remove();
  w[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  delete w.gtag;
  delete w.dataLayer;
}

const TRACKING_COOKIE_PREFIXES = ["_ga", "_gid", "_gat"];

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

export function applyConsent(consent: CookieConsent | null): void {
  if (typeof window === "undefined") return;

  if (!consent || !consent.consented) {
    unloadGoogleAnalytics();
    return;
  }

  if (consent.analytics) {
    loadGoogleAnalytics();
  } else {
    unloadGoogleAnalytics();
    purgeTrackingCookies();
  }
}
