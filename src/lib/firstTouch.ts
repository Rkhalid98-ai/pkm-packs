/**
 * Where a visitor came from, recorded on their first page view so a launch-list
 * signup can say which link brought them (checklist 05). The first visit wins
 * and is kept in localStorage, or in memory when the browser blocks storage.
 * Browser-only: call these from effects and event handlers.
 */

export interface FirstTouch {
  utmSource: string | null;
  /** The referring site's host, e.g. www.tiktok.com. Null for our own pages. */
  referrer: string | null;
}

const KEY = "rwm:first-touch";
let inMemory: FirstTouch | null = null;

function read(): FirstTouch | null {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved) return JSON.parse(saved) as FirstTouch;
  } catch {
    // Storage blocked or unreadable; fall back to this page load's copy.
  }
  return inMemory;
}

/** Runs on every full page load (components/FirstTouch.tsx); only the first one is kept. */
export function captureFirstTouch() {
  if (read()) return;

  const utmSource = new URLSearchParams(window.location.search).get("utm_source")?.trim() || null;
  let referrer: string | null = null;
  try {
    const host = new URL(document.referrer).hostname;
    if (host !== window.location.hostname) referrer = host;
  } catch {
    // No referrer: typed in, a bookmark, or an app that doesn't send one.
  }

  inMemory = { utmSource, referrer };
  try {
    localStorage.setItem(KEY, JSON.stringify(inMemory));
  } catch {
    // Storage blocked; the in-memory copy covers this page load.
  }
}

export function getFirstTouch(): FirstTouch {
  return read() ?? { utmSource: null, referrer: null };
}
