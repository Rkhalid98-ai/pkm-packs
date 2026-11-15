import Link from "next/link";
import { Clock } from "lucide-react";
import { PRODUCT_TYPES, setFor, stockLabel, type Product } from "@/data/products";
import { usd } from "@/lib/site";
import { ProductArt } from "./ProductArt";

export function ProductCard({ product }: { product: Product }) {
  const set = setFor(product);
  const type = PRODUCT_TYPES[product.type];
  const soldOut = product.stock === 0;

  return (
    <Link
      href={`/shop/${product.slug}/`}
      className="group flex h-full flex-col rounded-[1.25rem] border border-seam/80 bg-felt transition-colors hover:border-haze/60"
    >
      <div
        className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-t-[1.25rem]"
        style={{
          background: `radial-gradient(70% 70% at 50% 60%, ${set.colors[1]}55, transparent 70%), var(--color-playmat-deep)`,
        }}
      >
        <ProductArt
          type={product.type}
          colors={set.colors}
          uid={product.slug}
          className={`h-[82%] transition-transform duration-300 group-hover:-translate-y-1 ${soldOut ? "opacity-50 grayscale" : ""}`}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-haze">{set.name}</p>
        <h3 className="title mt-1 text-[1.75rem]">{type.label}</h3>
        <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-haze">
          <Clock className="size-4" aria-hidden />
          {type.callLength} live
        </p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <span className="text-2xl font-bold tabular-nums">{usd(product.priceCents)}</span>
          <span className={`text-sm font-semibold ${soldOut ? "text-haze" : product.stock <= 5 ? "text-gold" : "text-haze"}`}>
            {stockLabel(product.stock)}
          </span>
        </div>
      </div>
    </Link>
  );
}
