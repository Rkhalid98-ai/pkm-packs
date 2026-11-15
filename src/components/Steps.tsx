const STEPS = [
  {
    title: "Buy it sealed",
    body: "Pick a booster pack, Elite Trainer Box, or booster box and check out with card, Apple Pay, or Google Pay. No account needed.",
  },
  {
    title: "Connect Discord",
    body: "One button in your confirmation email adds you to our server. Already a member? Type /claim with your code.",
  },
  {
    title: "Start your opening",
    body: "Whenever you're ready, day or night, press Start my opening. An opener joins your private call within minutes.",
  },
  {
    title: "Get your cards",
    body: "Ship everything or just your picks. Hits go out sleeved and toploaded, with tracking, within 3 business days.",
  },
];

export function Steps() {
  return (
    <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {STEPS.map((step, i) => (
        <li key={step.title} className="border-t-2 border-seam pt-5">
          <span className="font-display text-6xl font-[850] leading-none text-gold" aria-hidden>
            {i + 1}
          </span>
          <h3 className="title mt-4">
            <span className="sr-only">Step {i + 1}: </span>
            {step.title}
          </h3>
          <p className="mt-3 text-haze">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
