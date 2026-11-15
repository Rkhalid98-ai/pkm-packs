/**
 * Catalog. These are placeholders for designing the shop: swap in real sets,
 * prices, stock, and product photos before launch. Per docs/PLAN.md D8 we sell
 * booster packs, ETBs, and booster boxes from sets released in the past 12 months.
 */

export type ProductType = "pack" | "etb" | "box";

export const PRODUCT_TYPES: Record<
  ProductType,
  { label: string; plural: string; packs: number; callLength: string; contents: string }
> = {
  pack: {
    label: "Booster pack",
    plural: "Booster packs",
    packs: 1,
    callLength: "About 2 minutes",
    contents: "One factory-sealed booster pack.",
  },
  etb: {
    label: "Elite Trainer Box",
    plural: "Elite Trainer Boxes",
    packs: 9,
    callLength: "About 15 minutes",
    contents:
      "9 booster packs, plus everything else in the box: the promo card, sleeves, dice, and the storage box itself.",
  },
  box: {
    label: "Booster box",
    plural: "Booster boxes",
    packs: 36,
    callLength: "About an hour",
    contents: "36 booster packs in a factory-sealed display box.",
  },
};

export interface ProductSet {
  id: string;
  name: string;
  released: string;
  /** Two colors for the placeholder product art, until we have photos. */
  colors: [string, string];
}

export const SETS: ProductSet[] = [
  { id: "set-a", name: "Example Set A", released: "September 2026", colors: ["#54e0ff", "#6b4dff"] },
  { id: "set-b", name: "Example Set B", released: "June 2026", colors: ["#ff9a4d", "#d9245e"] },
  { id: "set-c", name: "Example Set C", released: "March 2026", colors: ["#6ee7b0", "#1b7f86"] },
];

export interface Product {
  slug: string;
  set: string;
  type: ProductType;
  priceCents: number;
  stock: number;
}

export const PRODUCTS: Product[] = [
  { slug: "example-set-a-booster-pack", set: "set-a", type: "pack", priceCents: 699, stock: 48 },
  { slug: "example-set-a-elite-trainer-box", set: "set-a", type: "etb", priceCents: 6499, stock: 6 },
  { slug: "example-set-a-booster-box", set: "set-a", type: "box", priceCents: 17999, stock: 2 },
  { slug: "example-set-b-booster-pack", set: "set-b", type: "pack", priceCents: 599, stock: 120 },
  { slug: "example-set-b-elite-trainer-box", set: "set-b", type: "etb", priceCents: 5499, stock: 11 },
  { slug: "example-set-b-booster-box", set: "set-b", type: "box", priceCents: 15999, stock: 4 },
  { slug: "example-set-c-booster-pack", set: "set-c", type: "pack", priceCents: 549, stock: 0 },
  { slug: "example-set-c-elite-trainer-box", set: "set-c", type: "etb", priceCents: 4999, stock: 3 },
];

export const setFor = (product: Product) => SETS.find((s) => s.id === product.set)!;

export const productName = (product: Product) =>
  `${setFor(product).name} ${PRODUCT_TYPES[product.type].label}`;

export const lowestPrice = (type: ProductType) =>
  Math.min(...PRODUCTS.filter((p) => p.type === type).map((p) => p.priceCents));

export const stockLabel = (stock: number) =>
  stock === 0 ? "Sold out" : stock <= 5 ? `Only ${stock} left` : `${stock} in stock`;
