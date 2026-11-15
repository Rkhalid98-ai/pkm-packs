import Link from "next/link";
import { nav } from "@/lib/site";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-seam/60 bg-playmat/90 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center rounded-md" aria-label="Rip With Me home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-lg px-3 py-2 font-semibold text-haze transition-colors hover:text-sleeve"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#launch-list" className="btn btn-gold hidden min-h-11 px-4 sm:inline-flex">
            Join the launch list
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
