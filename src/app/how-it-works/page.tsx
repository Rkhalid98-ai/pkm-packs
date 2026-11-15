import type { Metadata } from "next";
import Link from "next/link";
import { CallLog } from "@/components/CallLog";
import { PageHeader } from "@/components/PageHeader";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Buy sealed, connect Discord, start your opening whenever you're ready, and get your cards shipped. Here's every step, and what happens on the call.",
};

const JOURNEY = [
  {
    title: "Buy it sealed",
    points: [
      "Pick a booster pack, Elite Trainer Box, or booster box, and check out with card, Apple Pay, or Google Pay.",
      "Shipping is one flat price based on your cart. US addresses only.",
      "No account or Discord needed to buy.",
    ],
  },
  {
    title: "Connect Discord",
    points: [
      "Your confirmation page and email show your order number, a Connect Discord button, and a claim code.",
      "One click adds you to our server and drops you in #start-here.",
      "Already in our server? Type /claim with your code instead.",
    ],
  },
  {
    title: "Start your opening",
    points: [
      "Whenever you're ready, day or night, press Start my opening in #start-here.",
      "You get a private call channel and your place in line. An opener joins within minutes.",
      "Open everything you've bought, or pick which products to open now.",
    ],
  },
  {
    title: "Open it live",
    points: [
      "You check the seal on camera, watch every card come out, and talk with your opener the whole time.",
      "At the end, choose to ship everything or only the cards you pick.",
    ],
  },
  {
    title: "Get your cards",
    points: [
      "We read your hits back and email you the list.",
      "Your cards ship within 3 business days, hits sleeved and toploaded, with tracking.",
    ],
  },
];

const TIMELINE = [
  { day: "Day 0", body: "You buy. Start your opening whenever you like." },
  { day: "Day 7", body: "A reminder that your order is waiting." },
  { day: "Day 14", body: "Last day to cancel an unopened order for a full refund." },
  { day: "Day 21", body: "One more reminder." },
  {
    day: "Day 30",
    body: "We open it for you on a recorded call, send you the video, and ship everything.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How it works"
        lead="From checkout to your mailbox. Every product is opened live with you on a private video call, and every card in it is yours."
      />

      <section aria-label="Steps" className="wrap pb-20">
        <ol className="border-t border-seam/70">
          {JOURNEY.map((step, i) => (
            <li
              key={step.title}
              className="grid gap-4 border-b border-seam/70 py-8 md:grid-cols-[6rem_1fr_1.4fr] md:gap-8"
            >
              <span className="font-display text-6xl font-[850] leading-none text-gold" aria-hidden>
                {i + 1}
              </span>
              <h2 className="title text-[2.25rem]">
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h2>
              <ul className="space-y-2 text-haze">
                {step.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section id="the-call" aria-labelledby="call-title" className="wrap scroll-mt-24 pb-20">
        <div className="grid gap-12 rounded-[2rem] border border-seam/70 bg-felt px-6 py-12 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:p-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 id="call-title" className="display-section">
              The call
            </h2>
            <p className="lead mt-6">
              A private voice and video channel in our Discord that only you and our team can see.
              Our overhead camera shows the desk. You can talk and type; your camera stays off.
            </p>
            <h3 className="mt-10 font-sans text-lg font-bold">What you&apos;ll need</h3>
            <ul className="mt-3 space-y-2 text-haze">
              <li>A free Discord account, on your phone or computer.</li>
              <li>Sound on, so you can talk with your opener.</li>
              <li>About 2 minutes per pack: roughly 15 for an ETB, an hour for a booster box.</li>
            </ul>
          </div>
          <CallLog />
        </div>
      </section>

      <section aria-labelledby="without-title" className="wrap grid gap-12 pb-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 id="without-title" className="display-section">
            Rather skip the call?
          </h2>
          <p className="lead mt-6">
            Ask us to open your order without you, any time. We follow the same steps, on camera and
            recorded as always, then send you the video and ship everything.
          </p>
        </div>
        <div>
          <h2 className="title text-[2.25rem]">If your order sits unopened</h2>
          <ol className="mt-6 border-l-2 border-seam">
            {TIMELINE.map((t) => (
              <li key={t.day} className="relative pb-6 pl-6 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[7px] top-2 size-3 rounded-full border-2 border-playmat bg-gold"
                />
                <span className="font-bold tabular-nums">{t.day}</span>
                <p className="mt-1 text-haze">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="safety-title" className="wrap pb-20">
        <div className="grid gap-10 border-t border-seam/70 pt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <h2 id="safety-title" className="display-section">
              For parents
            </h2>
            <p className="lead mt-6">
              Buyers must be 18 or older. A parent or guardian can place an order for a younger
              collector.
            </p>
          </div>
          <ul className="space-y-5 text-haze">
            <li>
              <strong className="text-sleeve">The buyer&apos;s camera stays off.</strong> Only our
              desk is ever on video.
            </li>
            <li>
              <strong className="text-sleeve">Calls happen only in our server.</strong> Each call
              channel is visible only to the buyer and our team, and calls never move to DMs or other
              apps.
            </li>
            <li>
              <strong className="text-sleeve">Every call is recorded</strong>, and we keep recordings
              for at least 6 months.
            </li>
            <li>
              <strong className="text-sleeve">No personal details on calls.</strong> Our openers never
              ask for personal information, and real names and addresses never come up on calls or in
              channels.
            </li>
            <li>
              <strong className="text-sleeve">Nothing randomized.</strong> You buy a specific sealed
              product at a fixed price. There are no breaks, auctions, or timers.
            </li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="hiw-launch-title" className="wrap pb-24">
        <div className="grid gap-10 rounded-[2rem] border border-seam/70 bg-felt px-6 py-12 sm:px-10 lg:grid-cols-2 lg:items-end lg:p-16">
          <div>
            <h2 id="hiw-launch-title" className="display-section">
              Be first in line when we open
            </h2>
            <p className="lead mt-6">
              One email on launch day.{" "}
              <Link href="/faq/" className="text-link">
                Read the FAQ
              </Link>{" "}
              while you wait.
            </p>
          </div>
          <WaitlistForm id="hiw-email" />
        </div>
      </section>
    </>
  );
}
