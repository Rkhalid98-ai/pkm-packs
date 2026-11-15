# Rip With Me

Live one-on-one Pokémon TCG openings. Buyers purchase sealed packs, ETBs, and booster boxes on our site, open them with one of us on a private video call in Discord, and get their cards shipped.

**Status:** pre-launch website (design and copy), no checkout yet. The full plan is in [docs/PLAN.md](docs/PLAN.md).

- **Site:** Next.js 16 static export (`src/`). `next build` writes plain HTML/CSS/JS to `out/`.
- **Launch list:** `functions/api/waitlist.ts`, a Cloudflare Pages Function that validates an email and posts it to a Discord channel through a webhook.
- **Hosting:** Cloudflare Pages (free tier). When v1 needs checkout and the Discord bot, the plan moves the app to Railway (PLAN §7); drop `output: "export"` in `next.config.ts` then.

## Run it locally

```sh
npm install
npm run dev        # http://localhost:3000, the quickest way to work on the design
```

Under `npm run dev` the Cloudflare function isn't running, so a launch-list signup is logged to the browser console instead of being sent. To test the real endpoint:

```sh
cp .dev.vars.example .dev.vars   # then paste your Discord webhook URL into it
npm run cf:dev                   # builds, then serves site + function at http://localhost:8788
```

## Where to change things

| What | File |
| --- | --- |
| Hero headline and copy | `src/app/page.tsx` |
| Hero call window and foil card | `src/components/CallWindow.tsx`, `.holo*` styles in `src/app/globals.css` |
| Products, sets, prices, stock (placeholders for now) | `src/data/products.ts` |
| Product drawings (until we have photos) | `src/components/ProductArt.tsx` |
| The four steps / the call timeline | `src/components/Steps.tsx`, `src/components/CallLog.tsx` |
| "The rules we open by" | `src/components/Rules.tsx` |
| FAQ | `src/data/faq.ts` |
| Terms, Refund, Privacy (drafts) | `src/app/terms/`, `src/app/refunds/`, `src/app/privacy/` |
| Site name, URL, contact email, nav | `src/lib/site.ts` |
| Colors, type scale, buttons | `src/app/globals.css` |

## Design system ("Playmat")

- **Grounds:** the deep violet of a playmat (`--color-playmat`), with raised panels in `--color-felt`. One dark theme, on purpose.
- **Type:** Sofia Sans, self-hosted through `next/font`. Headlines use the Extra Condensed cut at heavy weights (`.display-hero`, `.display-section`, `.title`), like the lettering on a pack; body text uses the normal width.
- **Color:** gold (`--color-gold`) is for primary buttons, step numbers, and hit markers. Red (`--color-rec`) only marks recording. The holo spectrum (`--color-holo-*`) appears only on foil: the hero card and the launch-list edge.
- **One bold moment:** the hero's call window, where a foil card rises on load and catches the light as you move across it. Everything else stays quiet. Motion respects `prefers-reduced-motion`.
- **Shapes:** buttons have a card-corner radius (12px); filter chips are pills; panels and the call window have larger radii.
- **Words:** say what happens, in collectors' terms (rip, hits, sealed, toploader). Never use gambling language (odds, win, mystery, guaranteed hits, break, spots), and never imply Pokémon endorsement. The footer carries the not-affiliated notice.
- **Accessibility:** text pairs are 6.7:1 or better (`--color-haze` on every ground), form-field edges use `--color-field` (3:1+), and focus rings are gold.

## Deploy to Cloudflare Pages

1. Push this repo to GitHub.
2. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**, pick the repo. Build command `npm run build`, output directory `out`. `.nvmrc` pins Node 22.
3. **Settings → Variables and Secrets**: add `DISCORD_WEBHOOK_URL` as a **Secret** (Discord: Server Settings → Integrations → Webhooks).
4. Add the custom domain once ripwithme.com is registered, and update `url` in `src/lib/site.ts` if it differs.

`scripts/fix-export-segments.mjs` runs after every build. It works around a Next 16.4 bug that misnames prefetch files when building on Windows; on Cloudflare's Linux builds it does nothing.
