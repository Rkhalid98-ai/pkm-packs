"use client";

import { useRef } from "react";
import { CameraOff, Mic } from "lucide-react";
import { LogoMark } from "./Logo";
import { ProductArt } from "./ProductArt";

/**
 * The hero: what a buyer sees on their call. An overhead view of the opener's
 * playmat, with a foil card that catches the light as you move across it.
 */
export function CallWindow() {
  const feed = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = card.current;
    const box = feed.current?.getBoundingClientRect();
    if (!el || !box) return;
    const x = (e.clientX - box.left) / box.width;
    const y = (e.clientY - box.top) / box.height;
    el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--rx", `${((x - 0.5) * 18).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${((0.5 - y) * 14).toFixed(2)}deg`);
    }
  }

  function onPointerLeave() {
    const el = card.current;
    if (!el) return;
    for (const prop of ["--mx", "--my", "--rx", "--ry"]) el.style.removeProperty(prop);
  }

  return (
    <figure className="relative">
      <div
        ref={feed}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        className="call-feed relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-seam shadow-[0_40px_80px_-40px_rgb(5_3_20/0.9)] sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[1/1]"
      >
        {/* Face-down stack, bottom left */}
        <div aria-hidden className="absolute bottom-[9%] left-[7%] w-[24%] -rotate-[14deg]">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute inset-0 aspect-[63/88] rounded-[8%/6%] border border-holo-violet/30 bg-felt-hi"
              style={{ transform: `translate(${i * 5}%, ${-i * 4}%)` }}
            />
          ))}
          <div className="relative grid aspect-[63/88] translate-x-[10%] -translate-y-[8%] place-items-center rounded-[8%/6%] border border-holo-violet/40 bg-[radial-gradient(circle_at_50%_45%,#3b3290,#231c52)]">
            <LogoMark className="w-1/2 text-gold/80" />
          </div>
        </div>

        {/* The opened wrapper, right */}
        <ProductArt
          type="pack"
          torn
          uid="hero-pack"
          colors={["#54e0ff", "#6b4dff"]}
          className="absolute bottom-[3%] right-[-4%] w-[46%] rotate-[16deg]"
        />

        {/* The pull */}
        <div className="absolute left-1/2 top-[13%] w-[50%] -translate-x-[56%] sm:w-[38%] lg:w-[46%] xl:w-[44%]">
          <div className="holo-rise">
            <div ref={card} className="holo -rotate-[3deg]">
              <div className="holo-inner flex flex-col">
                <div className="relative m-[6%] mb-0 aspect-[5/4] overflow-hidden rounded-[4%] bg-[radial-gradient(circle_at_50%_55%,#4a3fb0_0%,#2a2270_55%,#1b1550_100%)]">
                  <svg viewBox="0 0 100 80" className="absolute inset-0 size-full" aria-hidden>
                    <g stroke="#ffd66e" strokeOpacity="0.55" strokeWidth="0.8">
                      {Array.from({ length: 24 }, (_, i) => {
                        const a = (i / 24) * Math.PI * 2;
                        return (
                          <line
                            key={i}
                            x1={50 + Math.cos(a) * 12}
                            y1={44 + Math.sin(a) * 12}
                            x2={50 + Math.cos(a) * 70}
                            y2={44 + Math.sin(a) * 70}
                          />
                        );
                      })}
                    </g>
                    <circle cx="50" cy="44" r="15" fill="#ffd66e" fillOpacity="0.9" />
                    <circle cx="50" cy="44" r="22" fill="none" stroke="#f5f2ff" strokeOpacity="0.5" />
                  </svg>
                  <div className="holo-foil holo-foil--art" />
                </div>
                <div className="flex flex-1 flex-col justify-end gap-[0.35em] p-[8%] text-[clamp(0.7rem,1.3vw,0.95rem)]">
                  <span className="font-display text-[1.6em] font-[800] leading-none text-sleeve">
                    Your chase card
                  </span>
                  <span className="leading-tight text-haze">
                    Pulled live on order <span className="whitespace-nowrap">RWM-1042</span>
                  </span>
                  <span className="mt-[0.4em] flex gap-[0.25em] text-gold" aria-hidden>
                    <Star />
                    <Star />
                    <Star />
                  </span>
                </div>
              </div>
              <div className="holo-foil" />
              <div className="holo-glare" />
            </div>
          </div>
        </div>

        {/* Call overlays */}
        <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3 text-sm font-semibold sm:inset-x-5 sm:top-5">
          <span className="inline-flex items-center gap-2 rounded-lg bg-playmat-deep/80 px-3 py-1.5 backdrop-blur">
            <span className="rec-dot size-2.5 rounded-full bg-rec" />
            Recording <span className="tabular-nums text-haze">04:12</span>
          </span>
          <span className="rounded-lg bg-playmat-deep/80 px-3 py-1.5 tabular-nums backdrop-blur">
            Order RWM-1042
          </span>
        </div>

        <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-end justify-between gap-2 text-sm font-semibold sm:inset-x-5 sm:bottom-5">
          <span className="rounded-lg bg-playmat-deep/80 px-3 py-2 backdrop-blur">
            Pack 4 of 9
            <span className="mt-1.5 flex gap-1" aria-hidden>
              {Array.from({ length: 9 }, (_, i) => (
                <span key={i} className={`h-1 w-2.5 rounded-full sm:w-3 ${i < 4 ? "bg-gold" : "bg-seam"}`} />
              ))}
            </span>
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg bg-playmat-deep/80 px-3 py-2 text-haze backdrop-blur">
            <Mic className="size-4 text-sleeve" aria-hidden />
            <CameraOff className="size-4" aria-hidden />
            <span className="sm:hidden">Camera off</span>
            <span className="hidden sm:inline">Your camera is off</span>
          </span>
        </div>
      </div>
      <figcaption className="sr-only">
        An example opening call: the opener&apos;s overhead camera shows a foil card just pulled
        from pack 4 of 9 of an Elite Trainer Box. The call is recording, and the buyer&apos;s
        camera is off.
      </figcaption>
    </figure>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 20 20" className="size-[1.1em]" fill="currentColor">
      <path d="m10 1.5 2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15l-5.4 3 1.2-6L1.3 7.8l6.1-.7Z" />
    </svg>
  );
}
