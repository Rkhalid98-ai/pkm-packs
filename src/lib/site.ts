export const site = {
  name: "Rip With Me",
  // Not registered yet (docs/PLAN.md §8). Used for canonical URLs and share cards.
  url: "https://ripwithme.com",
  email: "hello@ripwithme.com",
  description:
    "Buy sealed Pokémon TCG packs, ETBs, and booster boxes, then open them live with us on a private one-on-one video call. Every card is yours, and we ship the ones you want.",
};

export const nav = [
  { href: "/how-it-works/", label: "How it works" },
  { href: "/shop/", label: "Shop" },
  { href: "/faq/", label: "FAQ" },
];

export const legal = [
  { href: "/terms/", label: "Terms of Sale" },
  { href: "/refunds/", label: "Refund Policy" },
  { href: "/privacy/", label: "Privacy Policy" },
];

export const usd = (cents: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);
