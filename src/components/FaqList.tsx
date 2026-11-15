import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/data/faq";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-t border-seam/70">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-seam/70">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-bold [&::-webkit-details-marker]:hidden">
            {item.q}
            <ChevronDown
              className="size-5 shrink-0 text-gold transition-transform duration-200 group-open:rotate-180"
              aria-hidden
            />
          </summary>
          <p className="max-w-[65ch] pb-6 text-haze">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
