"use client";

import { useEffect, useState } from "react";
import { PRODUCT_TYPES, PRODUCTS, type ProductType } from "@/data/products";
import { ProductCard } from "./ProductCard";

type Filter = "all" | ProductType;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "Everything" },
  { value: "pack", label: PRODUCT_TYPES.pack.plural },
  { value: "etb", label: PRODUCT_TYPES.etb.plural },
  { value: "box", label: PRODUCT_TYPES.box.plural },
];

const isFilter = (v: string | null): v is Filter => FILTERS.some((f) => f.value === v);

export function ShopGrid() {
  const [filter, setFilter] = useState<Filter>("all");

  // The home page links to /shop/?type=etb and so on.
  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get("type");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading the URL once on mount
    if (isFilter(type)) setFilter(type);
  }, []);

  function choose(value: Filter) {
    setFilter(value);
    const url = new URL(window.location.href);
    if (value === "all") url.searchParams.delete("type");
    else url.searchParams.set("type", value);
    window.history.replaceState(null, "", url);
  }

  const shown = PRODUCTS.filter((p) => filter === "all" || p.type === filter);

  return (
    <div>
      <div role="group" aria-label="Filter by product" className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            aria-pressed={filter === f.value}
            onClick={() => choose(f.value)}
            className="min-h-11 cursor-pointer rounded-full border-[1.5px] border-seam px-4 font-semibold text-haze transition-colors hover:border-haze hover:text-sleeve aria-pressed:border-gold aria-pressed:bg-gold aria-pressed:text-playmat-deep"
          >
            {f.label}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {shown.length} products
      </p>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {shown.map((p) => (
          <li key={p.slug}>
            <ProductCard product={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
