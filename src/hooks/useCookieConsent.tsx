import { useCallback, useEffect, useState } from "react";
import {
  applyConsent,
  buildConsent,
  hasStoredConsent,
  purgeTrackingCookies,
  readConsent,
  writeConsent,
  type ConsentCategory,
  type CookieConsent,
} from "@/utils/cookieManager";

/**
 * useCookieConsent - GDPR consent hook.
 *
 * Returns:
 *  - consent: current consent object (or null if not yet given)
 *  - hasConsent: true if localStorage already holds a `cookieConsent` entry
 *  - acceptAll(): set every category to true
 *  - rejectAll(): set every category to false (and purge tracking cookies)
 *  - updateCategory(category, value): toggle a single category
 *  - openSettings()/closeSettings(): control the settings modal
 *  - settingsOpen: modal visibility state
 */
export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieConsent | null>(() =>
    readConsent(),
  );
  const [hasConsent, setHasConsent] = useState<boolean>(() =>
    hasStoredConsent(),
  );
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Sync across tabs / programmatic resets.
  useEffect(() => {
    const sync = () => {
      setConsent(readConsent());
      setHasConsent(hasStoredConsent());
    };
    window.addEventListener("storage", sync);
    window.addEventListener("cookieConsent:change", sync);
    window.addEventListener("cookieConsent:reset", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("cookieConsent:change", sync);
      window.removeEventListener("cookieConsent:reset", sync);
    };
  }, []);

  const persist = useCallback((next: CookieConsent) => {
    writeConsent(next);
    applyConsent(next);
    setConsent(next);
    setHasConsent(true);
  }, []);

  const acceptAll = useCallback(() => {
    persist(buildConsent(true));
  }, [persist]);

  const rejectAll = useCallback(() => {
    purgeTrackingCookies();
    persist(buildConsent(false));
  }, [persist]);

  const updateCategory = useCallback(
    (category: ConsentCategory, value: boolean) => {
      const base =
        readConsent() ?? {
          consented: true,
          analytics: false,
          marketing: false,
          preferences: false,
          timestamp: new Date().toISOString(),
        };
      const next: CookieConsent = {
        ...base,
        consented: true,
        [category]: value,
        timestamp: new Date().toISOString(),
      };
      persist(next);
    },
    [persist],
  );

  const openSettings = useCallback(() => setSettingsOpen(true), []);
  const closeSettings = useCallback(() => setSettingsOpen(false), []);

  return {
    consent,
    hasConsent,
    settingsOpen,
    acceptAll,
    rejectAll,
    updateCategory,
    openSettings,
    closeSettings,
  };
}
