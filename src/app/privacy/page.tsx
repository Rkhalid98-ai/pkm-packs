import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <PolicyPage title="Privacy Policy" updated="November 15, 2026">
      <p>
        We collect only what we need to sell you a product, open it with you, and ship your cards.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Launch list:</strong> your email address, if you join the list before we open.
        </li>
        <li>
          <strong>Orders:</strong> your email, shipping address, and what you bought.
        </li>
        <li>
          <strong>Discord:</strong> your Discord user ID, once you connect it to an order.
        </li>
        <li>
          <strong>Calls:</strong> a recording of each opening. Your camera stays off, so the
          recording has our video, your voice, and anything you type in the call channel.
        </li>
      </ul>

      <h2>What we don&apos;t collect</h2>
      <p>
        Card details. Payments are handled by Stripe, and your card number never reaches our
        servers.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To process your order, run your opening, and ship your cards.</li>
        <li>To email you about your order: confirmation, reminders, results, and tracking.</li>
        <li>To email you once when we launch, if you joined the launch list.</li>
        <li>To resolve problems and payment disputes, using call recordings.</li>
      </ul>
      <p>We don&apos;t sell your information.</p>

      <h2>Who we share it with</h2>
      <p>
        Only the services that run the shop: Stripe for payments, our email provider, Discord for
        calls, and the carrier that delivers your order.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Order records for as long as we need them for taxes and bookkeeping. Call recordings for at
        least 6 months.
      </p>

      <h2>Your choices</h2>
      <p>
        Email <a href={`mailto:${site.email}`}>{site.email}</a> to see, correct, or delete your
        information, or to leave the launch list.
      </p>
    </PolicyPage>
  );
}
