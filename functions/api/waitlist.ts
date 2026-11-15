/**
 * POST /api/waitlist — Cloudflare Pages Function.
 *
 * Validates a launch-list signup and posts it to a Discord channel through a
 * webhook. Set DISCORD_WEBHOOK_URL as an encrypted variable in the Pages
 * project (Settings → Variables and Secrets) and in .dev.vars locally.
 */

interface Env {
  DISCORD_WEBHOOK_URL?: string;
}

interface Context {
  request: Request;
  env: Env;
}

const MAX_BODY_BYTES = 2_000;
/** Nobody types an email address this fast; treat it as a bot. */
const MIN_HUMAN_MS = 1_500;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

const text = (value: unknown, max: number) =>
  typeof value === "string" ? value.replace(/\s+/g, " ").trim().slice(0, max) : "";

/** Escape Discord markdown so typed text can't restyle the message. */
const md = (value: string) => value.replace(/[\\*_~`|>#[\]()-]/g, "\\$&");

export const onRequestPost = async ({ request, env }: Context): Promise<Response> => {
  const origin = request.headers.get("Origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return json({ ok: false, error: "forbidden" }, 403);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return json({ ok: false, error: "too_large" }, 413);

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  // Bots fill the hidden "company" field or submit instantly. Answer as if it
  // worked so they don't learn anything, and drop the signup.
  const elapsed = Number(body.elapsedMs);
  if (body.company || (Number.isFinite(elapsed) && elapsed < MIN_HUMAN_MS)) {
    return json({ ok: true });
  }

  const email = text(body.email, 120).toLowerCase();
  if (!EMAIL_RE.test(email)) return json({ ok: false, error: "email" }, 422);
  const page = text(body.page, 200) || "/";

  if (!env.DISCORD_WEBHOOK_URL) {
    console.error("DISCORD_WEBHOOK_URL is not set; signup not delivered.");
    return json({ ok: false, error: "not_configured" }, 500);
  }

  const res = await fetch(env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "Rip With Me Launch List",
      allowed_mentions: { parse: [] },
      content: `New launch-list signup: **${md(email)}** (from ${md(page)})`,
    }),
  });

  if (!res.ok) {
    console.error("Discord webhook failed", res.status, await res.text());
    return json({ ok: false, error: "delivery_failed" }, 502);
  }
  return json({ ok: true });
};
