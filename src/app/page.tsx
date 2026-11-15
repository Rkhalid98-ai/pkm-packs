import Link from "next/link";
import { CallLog } from "@/components/CallLog";
import { CallWindow } from "@/components/CallWindow";
import { FaqList } from "@/components/FaqList";
import { ProductArt } from "@/components/ProductArt";
import { Rules } from "@/components/Rules";
import { Steps } from "@/components/Steps";
import { WaitlistForm } from "@/components/WaitlistForm";
import { HOME_FAQ } from "@/data/faq";
import { lowestPrice, PRODUCT_TYPES, SETS, type ProductType } from "@/data/products";
import { usd } from "@/lib/site";

const TILES: { type: ProductType; colors: [string, string] }[] = [
  { type: "pack", colors: SETS[0].colors },
  { type: "etb", colors: SETS[1].colors },
  { type: "box", colors: SETS[2].colors },
];

export default function Home() {
  return (
    <>
      <section className="wrap grid items-center gap-12 pb-20 pt-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:pb-28 lg:pt-16">
        <div>
          <h1 className="display-hero">Rip your packs live, one-on-one.</h1>
          <p className="lead mt-6 max-w-xl">
            Buy sealed Pokémon TCG packs, Elite Trainer Boxes, and booster boxes. Then open them with
            one of us on a private video call, whenever you&apos;re ready. Every card is yours, and we
            ship the ones you want.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#launch-list" className="btn btn-gold">
              Join the launch list
            </Link>
            <Link href="/how-it-works/" className="btn btn-line">
              See how it works
            </Link>
          </div>
          <p className="mt-6 max-w-md text-sm text-haze">
            Opening soon in the US. Not a break: no auctions, no spots, nothing randomized.
          </p>
        </div>
        <CallWindow />
      </section>

      <section aria-labelledby="steps-title" className="wrap py-20 lg:py-28">
        <h2 id="steps-title" className="display-section max-w-3xl">
          From checkout to your mailbox
        </h2>
        <div className="mt-12">
          <Steps />
        </div>
      </section>

      <section aria-labelledby="call-title" className="wrap py-10 lg:py-16">
        <div className="grid gap-12 rounded-[2rem] border border-seam/70 bg-felt px-6 py-12 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:p-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 id="call-title" className="display-section">
              What happens on your call
            </h2>
            <p className="lead mt-6">
              Here&apos;s an Elite Trainer Box opening, about 15 minutes from hello to your hits. A
              booster pack takes about 2 minutes; a booster box, about an hour.
            </p>
            <p className="mt-6">
              <Link href="/how-it-works/#the-call" className="text-link font-semibold">
                More about the call
              </Link>
            </p>
          </div>
          <CallLog />
        </div>
      </section>

      <section aria-labelledby="products-title" className="wrap py-20 lg:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 id="products-title" className="display-section">
              Pick what you want to open
            </h2>
            <p className="lead mt-4 max-w-xl">
              Factory-sealed product from sets released in the past 12 months, at fixed prices.
            </p>
          </div>
          <Link href="/shop/" className="btn btn-line shrink-0 self-start sm:self-auto">
            Browse the shop
          </Link>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {TILES.map(({ type, colors }) => {
            const info = PRODUCT_TYPES[type];
            return (
              <li key={type}>
                <Link
                  href={`/shop/?type=${type}`}
                  className="group flex h-full flex-col rounded-[1.5rem] border border-seam/80 bg-felt p-6 transition-colors hover:border-haze/60"
                >
                  <ProductArt
                    type={type}
                    colors={colors}
                    uid={`tile-${type}`}
                    className="mx-auto h-52 transition-transform duration-300 group-hover:-translate-y-1"
                  />
                  <h3 className="title mt-6 text-[2rem]">{info.plural}</h3>
                  <p className="mt-2 text-haze">{info.contents}</p>
                  <dl className="mt-auto grid grid-cols-2 gap-4 border-t border-seam/70 pt-5 text-sm">
                    <div>
                      <dt className="text-haze">Your call</dt>
                      <dd className="mt-0.5 font-bold">{info.callLength}</dd>
                    </div>
                    <div>
                      <dt className="text-haze">From</dt>
                      <dd className="mt-0.5 font-bold tabular-nums">{usd(lowestPrice(type))}</dd>
                    </div>
                  </dl>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section aria-labelledby="rules-title" className="wrap py-20 lg:py-28">
        <h2 id="rules-title" className="display-section max-w-3xl">
          The rules we open by
        </h2>
        <p className="lead mt-4 max-w-xl">
          The point is that you can trust every pull. These hold on every call, for every order.
        </p>
        <div className="mt-12">
          <Rules />
        </div>
      </section>

      <section aria-labelledby="faq-title" className="wrap py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <h2 id="faq-title" className="display-section">
              Questions
            </h2>
            <p className="mt-6">
              <Link href="/faq/" className="text-link font-semibold">
                Read all the answers
              </Link>
            </p>
          </div>
          <FaqList items={HOME_FAQ} />
        </div>
      </section>

      <section id="launch-list" aria-labelledby="launch-title" className="wrap scroll-mt-24 pb-24 pt-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-seam/70 bg-felt px-6 py-12 sm:px-10 lg:p-16">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--color-holo-cyan),var(--color-holo-violet),var(--color-holo-pink),var(--color-holo-gold))]"
          />
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div>
              <h2 id="launch-title" className="display-section">
                Be first in line when we open
              </h2>
              <p className="lead mt-6 max-w-lg">
                We&apos;re getting the shop and our opening desks ready. Leave your email and
                we&apos;ll send one note on launch day.
              </p>
            </div>
            <WaitlistForm />
          </div>
        </div>
      </section>
    </>
  );
}
