import { FileWarning } from "lucide-react";

/** Shared shell for Terms, Refund, and Privacy. All three are drafts until legal review (docs/PLAN.md §8). */
export function PolicyPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="wrap pb-24 pt-12 lg:pt-20">
      <h1 className="display-section">{title}</h1>
      <p className="mt-4 text-haze">Last updated {updated}</p>
      <p className="mt-8 flex max-w-2xl items-start gap-3 rounded-xl border border-gold/40 bg-felt px-4 py-3 text-sm text-haze">
        <FileWarning className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
        Draft. This policy is being reviewed and may change before we take our first order.
      </p>
      <div className="prose-rwm mt-6">{children}</div>
    </div>
  );
}
