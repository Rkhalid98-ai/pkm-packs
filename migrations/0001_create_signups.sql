/* Launch-list signups (checklist 05). One row per email: a repeat signup keeps the first row.
   utm_source is lowercased, referrer is the referring site's host, created_at is UTC.
   Uses block comments only, so it still works when pasted into the D1 dashboard console. */
CREATE TABLE IF NOT EXISTS signups (
  email TEXT PRIMARY KEY,
  utm_source TEXT,
  referrer TEXT,
  page TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
