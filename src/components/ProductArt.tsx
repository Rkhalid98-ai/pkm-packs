import type { ProductType } from "@/data/products";

/**
 * Drawn stand-ins for product photos: a crimped foil pack, an ETB, and a
 * booster box, tinted with the set's two colors. Replace with real photos of
 * our own stock before launch (docs/PLAN.md §9, trademark row).
 */

type Props = {
  type: ProductType;
  colors: [string, string];
  /** Unique per instance on a page; used for SVG gradient ids. */
  uid: string;
  torn?: boolean;
  className?: string;
};

/** Points for a crimped edge: alternating between base and peak every half period. */
function crimp(x0: number, x1: number, base: number, peak: number, period = 6) {
  const pts: string[] = [];
  for (let x = x0, i = 0; x <= x1 + 0.01; x += period / 2, i++) {
    pts.push(`${x.toFixed(1)},${i % 2 === 0 ? base : peak}`);
  }
  return pts;
}

/** A ragged tear line, deterministic so server and client renders match. */
function tear(x0: number, x1: number, y: number) {
  const offsets = [0, -4, 2, -6, -1, -7, 1, -3, -8, -2, -5, 0, -4];
  const step = (x1 - x0) / (offsets.length - 1);
  return offsets.map((o, i) => `${(x0 + i * step).toFixed(1)},${y + o}`);
}

function Emblem({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const rays = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI) / 4;
    const inner = r * 0.35;
    const outer = r * 0.78;
    return `M${(cx + Math.cos(a) * inner).toFixed(1)} ${(cy + Math.sin(a) * inner).toFixed(1)}L${(cx + Math.cos(a) * outer).toFixed(1)} ${(cy + Math.sin(a) * outer).toFixed(1)}`;
  }).join("");
  return (
    <g stroke="white" strokeLinecap="round" fill="none">
      <circle cx={cx} cy={cy} r={r} strokeOpacity="0.75" strokeWidth="3" />
      <path d={rays} strokeOpacity="0.6" strokeWidth="2.5" />
    </g>
  );
}

function Pack({ uid, torn }: { uid: string; torn?: boolean }) {
  const x0 = 58;
  const x1 = 142;
  const top = torn ? tear(x0, x1, 46) : crimp(x0, x1, 27, 22);
  const bottom = crimp(x0, x1, 173, 178).reverse();
  const outline = `M${[...top, ...bottom].join("L")}Z`;

  return (
    <g>
      <ellipse cx="100" cy="184" rx="52" ry="7" fill="black" opacity="0.28" />
      <path d={outline} fill={`url(#${uid}-g)`} />
      {torn ? (
        <path d={`M${tear(x0, x1, 46).join("L")}L${x1},54L${x0},54Z`} fill="black" opacity="0.32" />
      ) : (
        <rect x={x0} y="27" width={x1 - x0} height="12" fill="white" opacity="0.16" />
      )}
      <rect x={x0} y="161" width={x1 - x0} height="12" fill="white" opacity="0.16" />
      <path d={`M${x0} 120L${x1} 70V92L${x0} 142Z`} fill="white" opacity="0.13" />
      <Emblem cx={100} cy={torn ? 104 : 98} r={21} />
      <rect x="76" y="134" width="48" height="6" rx="3" fill="white" opacity="0.6" />
      <rect x="86" y="146" width="28" height="5" rx="2.5" fill="white" opacity="0.35" />
    </g>
  );
}

function Etb({ uid }: { uid: string }) {
  return (
    <g>
      <ellipse cx="108" cy="178" rx="78" ry="8" fill="black" opacity="0.28" />
      {/* side, top, front */}
      <path d="M158 74L182 56V154L158 172Z" fill={`url(#${uid}-g)`} />
      <path d="M158 74L182 56V154L158 172Z" fill="black" opacity="0.32" />
      <path d="M34 74L58 56H182L158 74Z" fill={`url(#${uid}-g)`} />
      <path d="M34 74L58 56H182L158 74Z" fill="white" opacity="0.24" />
      <rect x="34" y="74" width="124" height="98" fill={`url(#${uid}-g)`} />
      {/* lid edge */}
      <path d="M34 99H158L182 81" stroke="black" strokeOpacity="0.3" strokeWidth="2" fill="none" />
      {/* shrink-wrap glare */}
      <path d="M48 172L104 74H122L66 172Z" fill="white" opacity="0.1" />
      <Emblem cx={96} cy={130} r={20} />
      <rect x="68" y="158" width="56" height="5" rx="2.5" fill="white" opacity="0.5" />
    </g>
  );
}

function Box({ uid }: { uid: string }) {
  return (
    <g>
      <ellipse cx="104" cy="174" rx="92" ry="8" fill="black" opacity="0.28" />
      <path d="M164 100L190 78V146L164 168Z" fill={`url(#${uid}-g)`} />
      <path d="M164 100L190 78V146L164 168Z" fill="black" opacity="0.32" />
      <path d="M18 100L44 78H190L164 100Z" fill={`url(#${uid}-g)`} />
      <path d="M18 100L44 78H190L164 100Z" fill="white" opacity="0.24" />
      {/* tear-open display lid */}
      <path
        d="M31 89H177"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        fill="none"
      />
      <rect x="18" y="100" width="146" height="68" fill={`url(#${uid}-g)`} />
      <path d="M40 168L80 100H96L56 168Z" fill="white" opacity="0.1" />
      <Emblem cx={58} cy={134} r={18} />
      <rect x="90" y="124" width="56" height="7" rx="3.5" fill="white" opacity="0.6" />
      <rect x="90" y="138" width="36" height="5" rx="2.5" fill="white" opacity="0.35" />
    </g>
  );
}

export function ProductArt({ type, colors, uid, torn, className }: Props) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${uid}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={colors[0]} />
          <stop offset="1" stopColor={colors[1]} />
        </linearGradient>
      </defs>
      {type === "pack" && <Pack uid={uid} torn={torn} />}
      {type === "etb" && <Etb uid={uid} />}
      {type === "box" && <Box uid={uid} />}
    </svg>
  );
}
