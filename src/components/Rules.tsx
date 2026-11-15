import { Ban, CameraOff, Lock, RotateCcw, Truck, Video } from "lucide-react";

const RULES = [
  {
    icon: Video,
    title: "Every call is recorded",
    body: "Start to finish, and we keep recordings for at least 6 months. It protects you and us.",
  },
  {
    icon: Ban,
    title: "Nothing randomized",
    body: "No breaks, spots, auctions, or timers. You buy one specific product at a fixed price, and everything in it is yours.",
  },
  {
    icon: CameraOff,
    title: "Your camera stays off",
    body: "You talk and type. Only our desk is on video, so younger collectors and shy rippers are never on camera.",
  },
  {
    icon: Lock,
    title: "Private, and in our server only",
    body: "Your call channel is visible only to you and our team. Calls never move to DMs or other apps.",
  },
  {
    icon: RotateCcw,
    title: "Changed your mind? 14 days",
    body: "Cancel any unopened order within 14 days of buying for a full refund.",
  },
  {
    icon: Truck,
    title: "Tracked shipping",
    body: "Every order ships with tracking, hits sleeved and toploaded, within 3 business days of your opening.",
  },
];

export function Rules() {
  return (
    <ul className="grid gap-x-12 sm:grid-cols-2">
      {RULES.map(({ icon: Icon, title, body }) => (
        <li key={title} className="flex gap-4 border-t border-seam/70 py-6">
          <Icon className="mt-1 size-6 shrink-0 text-gold" aria-hidden strokeWidth={1.75} />
          <div>
            <h3 className="font-sans text-lg font-bold leading-snug">{title}</h3>
            <p className="mt-1.5 text-haze">{body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
