/** A real-length Elite Trainer Box call (docs/PLAN.md §6 runbook), start to finish. */
const MOMENTS = [
  {
    time: "00:00",
    title: "Recording starts first",
    body: "Before anything else. Your opener says your order number on camera. No recording, no opening.",
  },
  {
    time: "00:30",
    title: "You check the seal",
    body: "We turn the box all the way around: shrink wrap, corners, seams. You tell us it looks right. If anything looks tampered with, we swap it for a new one before opening.",
  },
  {
    time: "01:15",
    title: "Pack 1 of 9",
    body: "Crimps shown, then torn open on camera. Every card is shown one at a time, and the camera never cuts away.",
  },
  {
    time: "Every hit",
    title: "Straight into a sleeve",
    body: "Hits go from the pack into a penny sleeve and toploader without leaving the frame.",
  },
  {
    time: "14:00",
    title: "You choose what ships",
    body: "Everything, bulk and code cards included, or only the cards you pick.",
  },
  {
    time: "15:00",
    title: "Your hits, read back",
    body: "We read your hits back to you, then email you the list. Your cards ship within 3 business days.",
  },
];

export function CallLog() {
  return (
    <ol className="relative">
      {MOMENTS.map((m) => (
        <li
          key={m.time}
          className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-seam/70 py-6 first:pt-0 last:border-0 last:pb-0 sm:grid-cols-[7rem_1fr]"
        >
          <span className="pt-1 font-semibold tabular-nums text-gold">{m.time}</span>
          <div>
            <h3 className="title text-[1.625rem]">{m.title}</h3>
            <p className="mt-2 text-haze">{m.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
