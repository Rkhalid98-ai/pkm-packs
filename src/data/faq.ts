/** FAQ. Answers follow docs/PLAN.md (§2 buyer journey, §3 decisions, §5 policies). */

export interface FaqItem {
  q: string;
  a: string;
  /** Shown in the short list on the home page. */
  home?: boolean;
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

export const FAQ: FaqGroup[] = [
  {
    title: "Buying",
    items: [
      {
        q: "Is this a group break?",
        a: "No. You buy one specific sealed product, and it's opened for you alone. There are no spots, no auctions, and nothing randomized. The product and every card in it are yours.",
        home: true,
      },
      {
        q: "Do I need Discord to buy?",
        a: "No. You can check out without Discord or an account. You'll need Discord for the live call. If you'd rather skip the call, we'll open your order on camera without you and send you the video.",
        home: true,
      },
      {
        q: "Who can buy?",
        a: "Anyone in the US who's 18 or older. A parent or guardian can place an order for a younger collector.",
      },
      {
        q: "Can I cancel?",
        a: "Yes, any time before your order is opened, up to 14 days after you buy, for a full refund. Once a product is opened, it can't be refunded.",
      },
    ],
  },
  {
    title: "Your opening",
    items: [
      {
        q: "When can I open?",
        a: "Whenever you're ready, day or night. We're always open. Press Start my opening in our Discord and an opener joins your private call within minutes.",
        home: true,
      },
      {
        q: "How long does it take?",
        a: "About one to two minutes per pack, so roughly 2 minutes for a booster pack, 15 for an Elite Trainer Box, and about an hour for a booster box.",
      },
      {
        q: "How do I know the product is sealed?",
        a: "Before anything is opened, your opener turns the product all the way around on camera: the shrink wrap on boxes, and the crimps and seams on packs. You confirm it looks right. If anything looks tampered with, we replace it before opening.",
        home: true,
      },
      {
        q: "Will my camera be on?",
        a: "No. You can talk and type, but only our desk is on video. Your camera stays off on every call.",
      },
      {
        q: "Are calls recorded?",
        a: "Every call, start to finish. Recording protects you and us, and we keep recordings for at least 6 months. Joining the call means you agree to it being recorded.",
      },
      {
        q: "What if I never start my opening?",
        a: "We'll remind you at 7 and 21 days. If your order is still unopened after 30 days, we open it for you on a recorded call, send you the video, and ship everything.",
      },
    ],
  },
  {
    title: "Shipping",
    items: [
      {
        q: "What gets shipped?",
        a: "At the end of your call, you choose: ship everything, or only the cards you pick. Your hits go out in a penny sleeve and toploader. Cards you don't have shipped stay with us.",
        home: true,
      },
      {
        q: "How much is shipping, and how fast?",
        a: "One flat price at checkout, based on what's in your cart. Orders ship within 3 business days of your opening, with tracking. US addresses only.",
      },
      {
        q: "What condition are the cards in?",
        a: "Exactly as pulled. We sleeve hits straight from the pack, but we can't promise centering, edges, or surface.",
      },
    ],
  },
  {
    title: "About us",
    items: [
      {
        q: "Are you affiliated with Pokémon or Nintendo?",
        a: "No. Rip With Me is an independent shop that sells genuine, factory-sealed Pokémon TCG products. We aren't affiliated with or endorsed by Nintendo, The Pokémon Company, Creatures, or GAME FREAK.",
      },
    ],
  },
];

export const HOME_FAQ = FAQ.flatMap((g) => g.items).filter((i) => i.home);
