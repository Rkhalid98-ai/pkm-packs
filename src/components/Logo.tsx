/** Mark: a booster pack with crimped ends and a play button, for "opened live". */
export function LogoMark({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 9 10 6.5 12 9 14 6.5 16 9 18 6.5 20 9 22 6.5 24 9V23L22 25.5 20 23 18 25.5 16 23 14 25.5 12 23 10 25.5 8 23ZM14 12.25V19.75L19.75 16Z"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="inline-flex items-center gap-2">
      <LogoMark className="size-8 text-gold" />
      <span className="font-display text-[1.625rem] font-[800] leading-none tracking-[0.005em]">
        Rip With Me
      </span>
    </span>
  );
}
