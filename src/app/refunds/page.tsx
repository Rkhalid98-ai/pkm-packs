import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Refund Policy" };

export default function RefundsPage() {
  return (
    <PolicyPage title="Refund Policy" updated="November 15, 2026">
      <h2>Before your order is opened</h2>
      <p>
        Cancel within <strong>14 days of purchase</strong> for a full refund, as long as nothing in
        the order has been opened. Email us at <a href={`mailto:${site.email}`}>{site.email}</a>{" "}
        with your order number.
      </p>

      <h2>After opening</h2>
      <p>
        Opened products can&apos;t be refunded. You watched the seal check and every card come out on
        a recorded call, and the cards are yours.
      </p>

      <h2>Reminders, and the 30-day rule</h2>
      <ul>
        <li>We&apos;ll remind you at 7 and 21 days if your order hasn&apos;t been opened.</li>
        <li>After 14 days, an unopened order can no longer be canceled.</li>
        <li>
          After 30 days, we open it for you on a recorded call, send you the video, and ship
          everything.
        </li>
        <li>You can also ask us to open without you at any time.</li>
      </ul>

      <h2>Tampered or damaged product</h2>
      <p>
        If a pack or box looks tampered with when we show it on camera, we replace it before
        opening, at no cost to you.
      </p>
    </PolicyPage>
  );
}
