import type { Metadata } from "next";
import { FaqList } from "@/components/FaqList";
import { PageHeader } from "@/components/PageHeader";
import { FAQ } from "@/data/faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about buying, live openings, shipping, refunds, and safety at Rip With Me.",
};

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

export default function FaqPage() {
  return (
    <>
      <PageHeader title="Questions, answered" lead="Buying, your opening, and shipping. Can't find yours?">
        <p className="mt-3">
          <a href={`mailto:${site.email}`} className="text-link font-semibold">
            Email us at {site.email}
          </a>
        </p>
      </PageHeader>
      <div className="wrap space-y-16 pb-24">
        {FAQ.map((group) => (
          <section
            key={group.title}
            aria-labelledby={`faq-${slug(group.title)}`}
            className="grid gap-6 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16"
          >
            <h2 id={`faq-${slug(group.title)}`} className="title text-4xl">
              {group.title}
            </h2>
            <FaqList items={group.items} />
          </section>
        ))}
      </div>
    </>
  );
}
