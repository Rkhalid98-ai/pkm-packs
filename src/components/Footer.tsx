import Link from "next/link";
import { legal, nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-seam/60 bg-playmat-deep">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-haze">
            Live one-on-one openings of sealed Pokémon TCG products. US only. Buyers must be 18 or
            older, or have a parent or guardian order for them.
          </p>
          <p className="mt-4">
            <a href={`mailto:${site.email}`} className="text-link">
              {site.email}
            </a>
          </p>
        </div>

        <nav aria-label="Site">
          <h2 className="font-sans text-sm font-bold text-sleeve">Site</h2>
          <ul className="mt-3 space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-block py-1 text-haze hover:text-sleeve">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Policies">
          <h2 className="font-sans text-sm font-bold text-sleeve">Policies</h2>
          <ul className="mt-3 space-y-1">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-block py-1 text-haze hover:text-sleeve">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-seam/60">
        <p className="wrap py-6 text-sm leading-relaxed text-haze">
          © {new Date().getFullYear()} Rip With Me. An independent shop, not affiliated with,
          sponsored, or endorsed by Nintendo, The Pokémon Company, Creatures, or GAME FREAK. Pokémon
          and its trademarks belong to their respective owners.
        </p>
      </div>
    </footer>
  );
}
