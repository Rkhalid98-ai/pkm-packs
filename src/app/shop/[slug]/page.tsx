import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Package, Truck } from "lucide-react";
import { ProductArt } from "@/components/ProductArt";
import { ProductCard } from "@/components/ProductCard";
import { WaitlistForm } from "@/components/WaitlistForm";
import { PRODUCT_TYPES, PRODUCTS, productName, setFor, stockLabel } from "@/data/products";
import { usd } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

const find = (slug: string) => PRODUCTS.find((p) => p.slug === slug);

export async function generateMetadata({ params }: PageProps<"/shop/[slug]">): Promise<Metadata> {
  const product = find((await params).slug);
  if (!product) return {};
  return {
    title: productName(product),
    description: `${PRODUCT_TYPES[product.type].contents} Opened live with you on a private one-on-one call.`,
  };
}

export default async function ProductPage({ params }: PageProps<"/shop/[slug]">) {
  const product = find((await params).slug);
  if (!product) notFound();

  const set = setFor(product);
  const type = PRODUCT_TYPES[product.type];
  const soldOut = product.stock === 0;
  const related = PRODUCTS.filter((p) => p.set === product.set && p.slug !== product.slug);

  return (
    <>
      <div className="wrap pt-8">
        <Link
          href="/shop/"
          className="inline-flex items-center gap-2 py-2 font-semibold text-haze hover:text-sleeve"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to the shop
        </Link>
      </div>

      <article className="wrap grid gap-10 pb-20 pt-6 lg:grid-cols-2 lg:gap-16">
        <div
          className="grid aspect-square place-items-center rounded-[2rem] border border-seam/70 lg:sticky lg:top-24 lg:self-start"
          style={{
            background: `radial-gradient(65% 65% at 50% 58%, ${set.colors[1]}66, transparent 70%), var(--color-felt)`,
          }}
        >
          <ProductArt
            type={product.type}
            colors={set.colors}
            uid={`detail-${product.slug}`}
            className={`w-[78%] ${soldOut ? "opacity-50 grayscale" : ""}`}
          />
        </div>

        <div>
          <p className="text-haze">
            {set.name}, released {set.released}
          </p>
          <h1 className="display-section mt-2">{type.label}</h1>

          <div className="mt-6 flex items-baseline gap-4">
            <span className="text-4xl font-bold tabular-nums">{usd(product.priceCents)}</span>
            <span
              className={`font-semibold ${!soldOut && product.stock <= 5 ? "text-gold" : "text-haze"}`}
            >
              {stockLabel(product.stock)}
            </span>
          </div>

          <div className="mt-8 rounded-2xl border border-seam bg-felt p-6">
            <p className="font-bold">Checkout opens at launch.</p>
            <p className="mt-1 text-haze">
              Leave your email and we&apos;ll tell you the day you can order.
            </p>
            <div className="mt-5">
              <WaitlistForm id="product-email" />
            </div>
          </div>

          <dl className="mt-10 divide-y divide-seam/70 border-y border-seam/70">
            <div className="flex gap-4 py-5">
              <Package className="mt-1 size-5 shrink-0 text-gold" aria-hidden />
              <div>
                <dt className="font-bold">What&apos;s inside</dt>
                <dd className="mt-1 text-haze">{type.contents}</dd>
              </div>
            </div>
            <div className="flex gap-4 py-5">
              <Clock className="mt-1 size-5 shrink-0 text-gold" aria-hidden />
              <div>
                <dt className="font-bold">Your opening</dt>
                <dd className="mt-1 text-haze">
                  {type.callLength}, live with one of us on a private Discord video call. Start it
                  whenever you&apos;re ready, day or night.
                </dd>
              </div>
            </div>
            <div className="flex gap-4 py-5">
              <Truck className="mt-1 size-5 shrink-0 text-gold" aria-hidden />
              <div>
                <dt className="font-bold">Shipping</dt>
                <dd className="mt-1 text-haze">
                  One flat price at checkout. At the end of your call, choose to ship everything or
                  only the cards you pick. Ships within 3 business days, with tracking.
                </dd>
              </div>
            </div>
          </dl>

          <p className="mt-6">
            <Link href="/how-it-works/" className="text-link font-semibold">
              How openings work
            </Link>
          </p>
        </div>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="wrap pb-24">
          <h2 id="related-title" className="title text-4xl">
            More from {set.name}
          </h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <li key={p.slug}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
