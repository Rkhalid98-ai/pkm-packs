"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { getFirstTouch } from "@/lib/firstTouch";

type Status = "idle" | "sending" | "done" | "error";

const ERRORS: Record<string, string> = {
  email: "That email address doesn't look complete. Check it and try again.",
  default: "Your email didn't go through. Try again in a minute.",
};

/**
 * Launch list signup. Posts to the Cloudflare Pages Function at
 * functions/api/waitlist.ts, which saves it to D1 and pings our Discord. Under
 * `npm run dev` that function isn't running, so the signup is logged instead.
 */
export function WaitlistForm({ id = "launch-email" }: { id?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const startedAt = useRef(0);

  // Timed from page load, so a quick autofill-and-submit still counts as human.
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      email: String(form.get("email") ?? "").trim(),
      ideas: String(form.get("ideas") ?? "").trim(),
      company: String(form.get("company") ?? ""),
      elapsedMs: startedAt.current ? Date.now() - startedAt.current : null,
      page: window.location.pathname,
      ...getFirstTouch(),
    };

    setStatus("sending");
    setError("");

    if (process.env.NODE_ENV === "development") {
      console.info("[launch list] dev mode, not sent:", payload);
      setStatus("done");
      return;
    }

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !body.ok) throw new Error(body.error ?? "default");
      setStatus("done");
    } catch (err) {
      setError(ERRORS[(err as Error).message] ?? ERRORS.default);
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p role="status" className="flex items-start gap-3 rounded-xl bg-felt-hi px-5 py-4 text-lg font-semibold">
        <Check className="mt-1 size-5 shrink-0 text-gold" aria-hidden />
        You&apos;re on the list. We&apos;ll email you once, on the day we open.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor={id} className="block font-semibold">
        Email address
      </label>
      <input
        id={id}
        name="email"
        type="email"
        required
        autoComplete="email"
        inputMode="email"
        placeholder="you@example.com"
        aria-invalid={status === "error" || undefined}
        aria-describedby={`${id}-help${status === "error" ? ` ${id}-error` : ""}`}
        className="mt-2 min-h-12 w-full rounded-xl border-[1.5px] border-field bg-playmat-deep px-4 text-base text-sleeve placeholder:text-haze/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
      />
      {/* Bots fill this in; people never see it. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] size-px opacity-0"
      />
      <label htmlFor={`${id}-ideas`} className="mt-5 block font-semibold">
        What would you like to see? <span className="font-normal text-haze">(optional)</span>
      </label>
      <textarea
        id={`${id}-ideas`}
        name="ideas"
        rows={3}
        maxLength={500}
        placeholder="Sets you want us to stock, features you'd use, anything else"
        className="mt-2 block w-full resize-y rounded-xl border-[1.5px] border-field bg-playmat-deep px-4 py-3 text-base text-sleeve placeholder:text-haze/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
      />
      <button type="submit" className="btn btn-gold mt-4 w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? "Joining…" : "Join the launch list"}
      </button>
      <p id={`${id}-help`} className="mt-2 text-sm text-haze">
        One email when we open. Nothing else, and you can ask us to delete it any time.
      </p>
      {status === "error" && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm font-semibold text-rec">
          {error}
        </p>
      )}
    </form>
  );
}
