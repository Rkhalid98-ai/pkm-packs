# 01: Pre-launch website

**Goal:** ripwithme.com explains what we do, earns trust, and collects a launch list while we set up
the business and the openings. Free hosting on Cloudflare Pages until checkout needs a server (PLAN §7).

**Done when:** the site loads on both `ripwithme.com` and `www`, signups reach Discord, the contact
email works, and the shop shows our real launch products.

## Done

- [x] **(you + Claude)** Agree the plan: [docs/PLAN.md](../docs/PLAN.md) v0.4, decisions D1–D12
      (2026-11-15).
- [x] **(Claude)** Research buyers and competitors to shape the copy: lead with the on-camera seal
      check and "not a break", and avoid gambling words and anything implying Pokémon endorsement
      (2026-11-15).
- [x] **(Claude)** Build the site (2026-11-15):
  - [x] Pages: home, how it works, shop with filters, 8 product pages, FAQ, and a 404 page.
  - [x] Draft Terms of Sale, Refund Policy, and Privacy Policy, labeled as drafts.
  - [x] Design system "Playmat" (see the README), with the foil-card call window in the hero.
  - [x] Accessibility: text contrast AA or better, gold keyboard focus, reduced motion respected,
        no sideways scrolling at phone width.
  - [x] Launch-list signup: `functions/api/waitlist.ts` posts each email to a Discord webhook.
- [x] **(Claude)** Push to GitHub: `Rkhalid98-ai/pkm-packs`, branch `main` (2026-11-15).
- [x] **(you)** Create the Cloudflare Pages project from the repo. Every push to `main` deploys
      (2026-11-15).
- [x] **(you)** Register ripwithme.com and connect it to the Pages project (2026-11-15).
- [x] **(Claude)** Check the live site. Pages, product pages, prefetch files, the 404 page, HTTP→HTTPS,
      and the signup endpoint all respond correctly (2026-11-15).

## P0: Finish the launch

- [x] **(you)** Make `www.ripwithme.com` work: added it as a custom domain on the Pages project, plus
      a 301 redirect rule to `ripwithme.com` that keeps the path and query string. Checked by Claude
      (2026-11-15).
- [ ] **(you)** Submit one real signup on ripwithme.com and confirm it shows up in the Discord channel.
      Claude only checked that the endpoint is live, so nothing test-related was posted to your channel.
      Now done as part of the D1 test signup in [05](05-hype-and-launch-list.md), P0.
- [ ] **(you)** Make `hello@ripwithme.com` receive mail. The footer, FAQ, and policies all use it.
      Cloudflare → your domain → **Email → Email Routing** (free): forward it to your Gmail.

## P1: Before we announce it anywhere

- Web Analytics and the share image moved to [05](05-hype-and-launch-list.md), P0.
- [ ] **(you)** Install Node 22 LTS on this PC. Node 20 reached end-of-life in April 2026; Cloudflare
      already builds with 22 (`.nvmrc`).

## P2: Before checkout opens

- [ ] **(you)** Decide the launch products: sets, prices, and starting stock.
- [ ] **(you)** Photograph our own sealed stock. The plan rules out official product images (PLAN §9,
      trademark row).
- [ ] **(Claude)** Replace the "Example Set" products in `src/data/products.ts` and swap the drawings
      for the photos.
- [ ] **(Claude)** Publish the final policies once they're reviewed ([02](02-business-and-legal.md)),
      and remove the Draft labels.
