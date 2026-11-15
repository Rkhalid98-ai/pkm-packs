# 04: Build v1

**Goal:** the MVP in PLAN §4. A buyer goes from checkout to a live call with no manual work from us
beyond the call itself and shipping.

**Starts when:** Stripe has approved us ([02](02-business-and-legal.md)) and the pilot openings are done
([03](03-openings-and-pilot.md)). Before each milestone, we agree its details in the plan, then build
it.

- [ ] **Foundation:** one repo for the website and the bot, the database schema, admin sign-in with
      Discord, and products and stock. Hosting moves to Railway, and the site stops being a static
      export (`output: "export"` in `next.config.ts`).
- [ ] **Checkout:** shop pages on real stock, Stripe Checkout in test mode, webhooks, stock holds, the
      confirmation email, and the order page.
- [ ] **Discord linking:** Connect Discord, `/claim`, and the `Buyer` role.
- [ ] **Openings:** Start my opening, call channels, the opener queue and console, hits, the results
      email, cleanup, reminders, and the 30-day rule.
- [ ] **Shipping and launch:** the shipping workflow, final legal pages, a full end-to-end test call,
      then Stripe live mode. A private early-access link for the launch list's 24-hour head start
      ([05](05-hype-and-launch-list.md)).
