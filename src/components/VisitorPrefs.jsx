import { useEffect, useRef, useState } from "react";


const STORAGE_KEY = "koloshan_cookie_consent_v1";
export const OPEN_SETTINGS_EVENT = "koloshan:open-cookie-settings";

/** Read the saved choice. Returns null if nothing valid is stored. */
function readConsent() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved || saved.version !== 1) return null;
    return {
      necessary: true,
      analytics: saved.analytics === true,
      marketing: saved.marketing === true,
      savedAt: saved.savedAt || null,
    };
  } catch {
    return null;
  }
}

/**
 * Activate optional scripts that were left in the page as
 *   <script type="text/plain" data-cookie-category="analytics|marketing" ...>
 * Only categories the visitor has allowed are run.
 */
function loadConsentedScripts(consent) {
  document
    .querySelectorAll('script[type="text/plain"][data-cookie-category]')
    .forEach((placeholder) => {
      const category = placeholder.dataset.cookieCategory;
      if (!consent[category] || placeholder.dataset.cookieLoaded === "true") return;

      const script = document.createElement("script");
      for (const attr of placeholder.attributes) {
        if (
          attr.name === "type" ||
          attr.name === "data-cookie-category" ||
          attr.name === "data-cookie-loaded"
        ) {
          continue;
        }
        script.setAttribute(attr.name, attr.value);
      }
      if (!placeholder.src) script.textContent = placeholder.textContent;
      placeholder.dataset.cookieLoaded = "true";
      placeholder.parentNode.insertBefore(script, placeholder.nextSibling);
    });
}

function VisitorPrefs() {
  const [consent, setConsent] = useState(() => {
    const existing = readConsent();
    if (existing) window.koloshanCookieConsent = existing;
    return existing;
  });
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const panelRef = useRef(null);
  const lastFocusRef = useRef(null);

  // Re-run gated scripts for a previously saved choice.
  useEffect(() => {
    if (consent) loadConsentedScripts(consent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openPreferences = () => {
    lastFocusRef.current = document.activeElement;
    setAnalytics(!!(consent && consent.analytics));
    setMarketing(!!(consent && consent.marketing));
    setPrefsOpen(true);
  };

  const closePreferences = () => {
    setPrefsOpen(false);
    const el = lastFocusRef.current;
    if (el && typeof el.focus === "function") el.focus();
  };

  const applyConsent = (choice) => {
    const safe = {
      necessary: true,
      analytics: choice.analytics === true,
      marketing: choice.marketing === true,
      savedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, ...safe }));
    } catch {
      /* Storage unavailable: the choice still applies for this page view. */
    }
    window.koloshanCookieConsent = safe;
    loadConsentedScripts(safe);
    window.dispatchEvent(new CustomEvent("koloshan:consent", { detail: safe }));
    setConsent(safe);
    setPrefsOpen(false);
  };

  // Let other parts of the site (e.g. footer link) open the settings dialog.
  useEffect(() => {
    const handler = () => openPreferences();
    window.addEventListener(OPEN_SETTINGS_EVENT, handler);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [consent]);

  // Focus the dialog, trap Tab, close on Escape.
  useEffect(() => {
    if (!prefsOpen) return undefined;
    const panel = panelRef.current;
    if (panel) panel.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closePreferences();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const focusable = [
        ...panel.querySelectorAll("button, input:not(:disabled), a[href]"),
      ];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [prefsOpen]);

  const showBanner = !consent;

  return (
    <div id="ko-vp-root">
      {showBanner && (
        <section
          id="ko-vp-banner"
          role="region"
          aria-label="Cookie consent"
          aria-describedby="ko-vp-copy"
        >
          <div>
            <h2>We use cookies and similar technologies</h2>
            <p id="ko-vp-copy">
              Necessary cookies help this website work and remember your
              choices. With your permission, optional analytics and marketing
              cookies may help us understand site use and measure advertising.
              You can change your choice at any time in Cookie Settings.{" "}
              <a href="/privacy">Privacy Policy</a>
            </p>
          </div>
          <div className="ko-vp-actions" aria-label="Cookie choices">
            <button
              type="button"
              onClick={() => applyConsent({ analytics: false, marketing: false })}
            >
              Reject optional
            </button>
            <button type="button" onClick={openPreferences}>
              Manage preferences
            </button>
            <button
              type="button"
              className="ko-primary"
              onClick={() => applyConsent({ analytics: true, marketing: true })}
            >
              Accept all
            </button>
          </div>
        </section>
      )}

      {!showBanner && !prefsOpen && (
        <button
          id="ko-vp-settings-trigger"
          type="button"
          aria-haspopup="dialog"
          onClick={openPreferences}
        >
          Cookie Settings
        </button>
      )}

      {prefsOpen && (
        <div
          id="ko-vp-backdrop"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closePreferences();
          }}
        >
          <section
            id="ko-vp-preferences"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="ko-vp-title"
            aria-describedby="ko-vp-pref-copy"
            tabIndex={-1}
          >
            <h2 id="ko-vp-title">Cookie preferences</h2>
            <p id="ko-vp-pref-copy" className="ko-vp-pref-intro">
              Necessary cookies support core website functions and remember
              your privacy choices. With your permission, we may also use
              optional cookies for analytics and marketing. You can change or
              withdraw your choice at any time through Cookie Settings.
            </p>

            <label className="ko-vp-category">
              <span>
                <strong>Necessary</strong>
                <small>
                  Core website functions, security and saving your privacy
                  choices. Always active.
                </small>
              </span>
              <input
                type="checkbox"
                checked
                disabled
                readOnly
                aria-label="Necessary cookies, always active"
              />
            </label>

            <label className="ko-vp-category">
              <span>
                <strong>Analytics</strong>
                <small>
                  Helps us understand how visitors use the website so we can
                  improve it.
                </small>
              </span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                aria-label="Allow analytics cookies"
              />
            </label>

            <label className="ko-vp-category">
              <span>
                <strong>Marketing</strong>
                <small>
                  May help measure advertising or recognise a browser across
                  websites, where enabled.
                </small>
              </span>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                aria-label="Allow marketing cookies"
              />
            </label>

            <div className="ko-vp-pref-actions">
              <button
                type="button"
                onClick={() => applyConsent({ analytics: false, marketing: false })}
              >
                Reject optional
              </button>
              <button
                type="button"
                onClick={() => applyConsent({ analytics, marketing })}
              >
                Save my choices
              </button>
              <button
                type="button"
                className="ko-primary"
                onClick={() => applyConsent({ analytics: true, marketing: true })}
              >
                Accept all
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default VisitorPrefs;
