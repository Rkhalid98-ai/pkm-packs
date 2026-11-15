import type { Metadata } from "next";
import Link from "next/link";
import { PolicyPage } from "@/components/PolicyPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Sale" };

export default function TermsPage() {
  return (
    <PolicyPage title="Terms of Sale" updated="November 15, 2026">
      <h2>What you&apos;re buying</h2>
      <p>
        A specific, factory-sealed product, opened live with you on a video call. The product and
        every card in it belong to you. We don&apos;t offer buy-backs, store credit, or anything
        randomized.
      </p>

      <h2>When it&apos;s opened</h2>
      <p>
        Whenever you&apos;re ready. We&apos;re always open: start your opening in our Discord and an
        opener joins your private call.
      </p>

      <h2>What we ship</h2>
      <p>
        At the end of your call, tell us to ship everything or only the cards you pick. Cards you
        don&apos;t have shipped stay with us. Shipping is one flat price, set at checkout based on
        your order.
      </p>

      <h2>Calls are recorded</h2>
      <p>
        We record every call, start to finish, to protect both sides. Joining the call means you
        agree to the recording. We keep recordings for at least 6 months.
      </p>

      <h2>Cancellations and refunds</h2>
      <p>
        Full refund if you cancel within 14 days of purchase and your order hasn&apos;t been opened.
        No refunds after opening. See our <Link href="/refunds/">Refund Policy</Link>.
      </p>

      <h2>Unopened after 30 days</h2>
      <p>
        If your order is still unopened 30 days after purchase, we open it on a recorded call, send
        you the video, and ship everything.
      </p>

      <h2>Condition</h2>
      <p>Cards are sent as pulled. We can&apos;t guarantee centering, edges, or surface.</p>

      <h2>Tampered products</h2>
      <p>If a pack or box looks tampered with on camera, we replace it before opening.</p>

      <h2>Shipping</h2>
      <p>US addresses only. Orders ship within 3 business days of the opening, with tracking.</p>

      <h2>Age</h2>
      <p>Buyers must be 18 or older, or have a parent or guardian place the order.</p>

      <h2>Conduct</h2>
      <p>Be respectful on calls. We can end a call that isn&apos;t.</p>

      <h2>Problems</h2>
      <p>
        Contact us first at <a href={`mailto:${site.email}`}>{site.email}</a>. We keep recordings
        for at least 6 months, so we can look at exactly what happened.
      </p>
    </PolicyPage>
  );
}
