import type { Metadata } from "next";
import Link from "next/link";
import { Info } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ShopGrid } from "@/components/ShopGrid";

export const metadata: Metadata = {
  title: "Shop sealed product",
  description:
    "Booster packs, Elite Trainer Boxes, and booster boxes from the past 12 months, each opened live with you on a private call.",
};

export default function ShopPage() {
  return (
    <>
      <PageHeader
        title="Shop sealed product"
        lead="Booster packs, Elite Trainer Boxes, and booster boxes from sets released in the past 12 months. Each one is opened live with you on a private call."
      >
        <p className="mt-8 flex max-w-2xl items-start gap-3 rounded-xl border border-seam bg-felt px-4 py-3 text-sm text-haze">
          <Info className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
          <span>
            Checkout opens at launch. The products, prices, and stock below are examples.{" "}
            <Link href="/#launch-list" className="text-link font-semibold">
              Join the launch list
            </Link>{" "}
            to hear when we open.
          </span>
        </p>
      </PageHeader>
      <section aria-label="Products" className="wrap pb-24">
        <ShopGrid />
      </section>
    </>
  );
}
