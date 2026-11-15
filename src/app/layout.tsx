import type { Metadata, Viewport } from "next";
import { Sofia_Sans, Sofia_Sans_Extra_Condensed } from "next/font/google";
import { FirstTouch } from "@/components/FirstTouch";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const sofia = Sofia_Sans({
  variable: "--font-sofia",
  subsets: ["latin"],
  display: "swap",
});

const sofiaExtraCondensed = Sofia_Sans_Extra_Condensed({
  variable: "--font-sofia-xc",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Rip With Me: open your packs live, one-on-one",
    template: "%s | Rip With Me",
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1540",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sofia.variable} ${sofiaExtraCondensed.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <FirstTouch />
        <a
          href="#main"
          className="sr-only z-50 rounded-lg bg-gold px-4 py-3 font-bold text-playmat-deep focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
