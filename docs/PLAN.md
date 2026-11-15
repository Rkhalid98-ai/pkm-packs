# Rip With Me: Project Plan

**Status:** Draft v0.4 (2026-11-15). The pre-launch website is live at ripwithme.com (section 10, Phase 0). Everything else is still planning. Progress is tracked in [checklist/](../checklist/README.md).
**What changed in v0.4:** we're building the website before buying the domain. It's a static pre-launch site on Cloudflare Pages (free), with a launch list, placeholder products, and draft policies. It moves to Railway with the bot once checkout needs a server.

## 1. Overview

We buy sealed Pokémon TCG products at retail and resell them sealed on the secondary market. Rip With Me sells them through our own website. Instead of shipping the sealed product, we open it with the buyer on a live one-on-one video call: they see that it's sealed, watch every card come out, and talk to the person opening it the whole time. Then we ship them their cards. The hobby calls this "rip and ship."

**Why our own site instead of Whatnot, TikTok Live, or eBay Live:** lower fees, we own the customer relationships (email list, Discord community), and we control the format and brand. The trade-off is that those platforms come with buyers and we don't, so bringing in traffic is on us (section 9).

**v1 is done when:**
- A buyer can go from checkout to a live call with an opener, with no manual work on our side beyond the call itself and shipping.
- Every opening is recorded and tied to its order.
- We can see profit per order: sale price minus product cost, Stripe fees, and postage.

## 2. How it works

### Buyer journey
1. **Shop.** Browse recent packs, Elite Trainer Boxes (ETBs), and booster boxes, and check out through Stripe (card, Apple Pay, Google Pay). Shipping is a flat price based on what's in the cart. No account or Discord is needed to buy.
2. **Confirmation.** The page and email show the order number, a **Connect Discord** button, and a claim code.
3. **Link Discord.** One click adds them to our server with the `Buyer` role and drops them in `#start-here`. Anyone already in the server can type `/claim` with their code instead.
4. **Start the opening.** Whenever they're ready, day or night, they press **Start my opening** in `#start-here`. The bot opens a private call channel for them and tells them their place in line.
5. **The call.** An opener joins within minutes. The buyer checks the seal on camera, watches every card come out, and talks with the opener throughout. At the end, they choose whether we ship everything or only the cards they pick.
6. **Results.** The opener reads back the hits, and the buyer gets an email listing them.
7. **Delivery.** We ship their cards (hits sleeved and toploaded) with tracking.

### Team workflow
1. Add stock in the admin dashboard: product, quantity, cost.
2. Someone is on duty at all hours. Openers switch themselves **on duty** when their shift starts.
3. When a buyer starts an opening, on-duty openers get a ping in `#opener-queue`. The first to press **Take it** gets the call.
4. The opener runs the call with the opener console open: what to open, hits entry, the shipping choice, and **Done**.
5. Each order's cards go into their own labeled bag. We ship on fixed days and enter tracking numbers.

### How the pieces connect (D4)
The website and the Discord bot are two front doors to one system, and they share one database:
- **Website:** everything up to payment. No Discord needed.
- **Linking:** after paying, the buyer connects Discord once, by button or `/claim` code. From then on, the bot knows which orders are theirs.
- **Discord bot:** everything after linking. It opens call channels, assigns openers, and saves who did the opening, the hits, and the recording to that same order.
- **Admin dashboard:** both halves in one place, with an **Orders** view (paid, opened, shipped) and an **Openings** view (waiting, in a call, done).

Nobody has to match the two halves up by hand.

### Discord server layout
| Channel | Who can see it | Purpose |
|---|---|---|
| `#welcome`, `#rules` | Everyone | How it works, link to the shop |
| `#start-here` | Everyone | The **Start my opening** button |
| `#hits` | Everyone | Hits from finished openings, if the buyer agrees to posting them |
| `#support` | Everyone | Order questions |
| `opening-RWM-1042` (one per opening) | That buyer and the team | The private call; deleted afterward |
| `#opener-queue` | Team | New opening requests, each with a **Take it** button |

Roles: `Team` (openers and moderators) and `Buyer` (anyone who has linked an order; they keep it).

## 3. Decisions

Everything is settled. D9 and D10 are deferred until they become a problem; the defaults listed are what v1 does in the meantime.

- **D1. After the opening:** the product and every card in it belong to the buyer. They choose to have everything shipped or only the cards they pick, and they pay for shipping. No buy-backs, store credit, or other options.
- **D2. The opening:** a live one-on-one video call, like FaceTime, in a private Discord voice channel that only the buyer and our team can see. The opener's overhead camera shows the desk. Buyers can talk and type, but their camera stays off to protect younger viewers. Every call is recorded on our side. If requiring Discord turns buyers away, the fallback is an in-browser call on our own site, using a video-call service such as Daily or LiveKit.
- **D3. Timing:** on demand; the buyer starts their opening whenever they're ready. Openings take about 1–2 minutes per pack, so roughly 15 minutes for an ETB and up to an hour for a booster box.
- **D4. Tracking:** no Discord needed to buy. One system with two front doors (the website and the Discord bot) and one database tracks each order from payment to shipping.
- **D5. Name:** Rip With Me. ripwithme.com is registered and live (2026-11-15); the trademark search is still to do (section 8).
- **D6. Market:** US only. That means USD, USPS, US sales tax, and US state rules on recording calls.
- **D7. Inventory:** all shared. We record what each product cost, not who contributed it.
- **D8. Products:** booster packs, ETBs, and booster boxes released in the past 12 months, managed in the admin dashboard.
- **D9. Shipping choice (deferred):** for now, one shipping price at checkout based on what's in the cart, and the buyer chooses on the call.
- **D10. What counts as a hit (deferred):** for now, the buyer decides on the call which cards they want.
- **D11. Hours:** always open. If nobody takes a request within 5 minutes, the bot pings the whole team.
- **D12. Unopened orders:** full refund if canceled within 14 days of purchase. Reminders go out at 7 and 21 days. After 30 days, we open the order on a recorded call, send the buyer the video, and ship everything. Buyers can also ask us to open without them at any time.

## 4. Launch scope (MVP)

**In v1**
- Shop: a catalog of packs, ETBs, and booster boxes with price and stock left, product pages, and a cart. Stripe Checkout with flat shipping priced from the cart, US addresses only, tax, and a required terms checkbox.
- Stock is held while someone is checking out, so hot products can't be oversold.
- Confirmation page and email with the Connect Discord button and claim code.
- A private order page (secret link in the email) showing status, hits, and tracking. No customer accounts.
- Discord: linking (button and `/claim`), the `Buyer` role, **Start my opening**, private call channels, the opener queue with **Take it**, results messages, and channel cleanup.
- Opener console (a team-only page on the website): on-duty switch, queue, current opening, hits entry, shipping choice, and **Done**.
- Admin dashboard: products and stock, orders, openings, and shipping (mark shipped, add tracking).
- Emails: confirmation, reminders for unopened orders, results, and shipped with tracking.
- The 30-day rule: orders still unopened after 30 days go into the opener queue automatically.
- Every call recorded, with the recording file noted on the opening.
- Terms of Sale, Privacy Policy, and Refund Policy pages.

**Later (not in v1)**
- In-browser calls on our own site (the D2 fallback).
- Sending buyers a link to their recording automatically.
- Booking a time slot for long openings such as booster boxes.
- Shipping-label integration, and combining shipping across orders.
- Customer accounts and order history.
- Public streams and highlight clips for marketing, only with the buyer's permission.
- Anything randomized (group breaks, mystery bundles), buy-backs, or giveaways tied to purchases. These need legal review first (section 8).

## 5. Policies (draft)

These become our Terms of Sale; get them reviewed before launch.

- **What you're buying:** a specific sealed product, opened live with you on a video call. Everything in it is yours.
- **When it's opened:** whenever you're ready. We're always open.
- **What we ship:** at the end of your call, tell us to ship everything or only the cards you pick. Cards you don't have shipped stay with us. Shipping is a flat price based on your order.
- **Calls are recorded** to protect both sides. Joining the call means you agree to the recording.
- **Cancellations and refunds:** full refund within 14 days of purchase if your order hasn't been opened. No refunds after opening.
- **Unopened after 30 days:** we open it on a recorded call, send you the video, and ship everything.
- **Condition:** cards are sent as pulled. We can't guarantee centering, edges, or surface.
- **Tampered products:** if a pack or box looks tampered with on camera, we replace it before opening.
- **Shipping:** US only. Orders ship within 3 business days of the opening, with tracking.
- **Age:** buyers must be 18 or older, or have a parent or guardian place the order.
- **Conduct:** be respectful on calls; we can end a call that isn't.
- **Problems:** contact us first. We keep recordings for at least 6 months.

## 6. Opening call runbook

**Opener setup (once per opener):** an overhead camera on an arm, two soft lights angled to cut glare on holos, a matte playmat, and OBS. OBS shows the order number on screen, records each call locally with the call audio, and feeds the video into Discord. Discord Nitro on opener accounts allows HD video. Recordings save to a shared, synced team folder. Make test calls until cards are easy to read on a phone.

**Going on duty:** keep a simple rota so someone is on duty at every hour. Switch on duty, keep sleeves, toploaders, and labeled bags within reach, and make sure the recordings folder is syncing.

**Each call**
1. Press **Take it**, join the call channel, and **start recording before anything else**. The console won't start an opening until "Recording on" is checked. No recording, no opening.
2. Greet the buyer, say the order number, and tell them the call is recorded.
3. Show the sealed product all the way around (shrink wrap on ETBs and boxes, crimps on packs) and ask the buyer to confirm it looks sealed.
4. Open on camera without cutting away. Show every card one at a time and call out hits.
5. Hits go straight into a sleeve and toploader.
6. At the end, ask whether to ship everything or only the cards they pick, and put whatever's shipping in the order's labeled bag.
7. Read back the hits, enter them and the shipping choice in the console, ask whether it's OK to post them in `#hits`, and press **Done**.

**Openings without the buyer** (the 30-day rule, or when a buyer asks): the same steps, recorded as always. Ship everything and send the buyer the video.

**After the call**
- Stop recording and check that the file synced.
- The results email goes out and the call channel closes automatically.
- Ship on the next shipping day and enter the tracking number, which sends the shipped email.

**Always:** calls happen only in our server's call channels, never in DMs or on other apps. Openers never ask for personal information, and real names and addresses never come up on calls or in channels.

## 7. System design

### Components
- **Website (Next.js):** the shop, checkout, order pages, admin dashboard, opener console, the endpoints Stripe calls, and the Discord sign-in callback.
- **Discord bot:** a small always-on program that handles linking, `/claim`, **Start my opening**, call channels, the opener queue, results, and cleanup. It stays connected so it can see when a buyer joins or leaves a call. It lives in the same codebase and uses the same database as the website.
- **Postgres database:** the single source of truth.
- **Stripe:** payments, shipping, tax, the terms checkbox, fraud screening, and disputes.
- **Resend:** email.
- **Discord calls + OBS:** the video and the local recordings.

### Proposed stack
| Layer | Choice | Why |
|---|---|---|
| Website | Next.js + TypeScript | One codebase for the shop, admin, opener console, and API |
| Bot | discord.js (TypeScript), always on | Shares code and the database with the website |
| Database | Postgres + Prisma | Orders, stock, and openings are relational data |
| Payments | Stripe Checkout + Stripe Tax | Hosted payment page, so card details never touch our servers; shipping, US sales tax, terms checkbox, and dispute tools built in |
| Email | Resend + React Email | Simple API; templates written as components |
| Admin sign-in | Sign in with Discord, limited to the team's accounts | Reuses the Discord app |
| Hosting | Railway (website, bot, and database together) | One place for everything, including the always-on bot. Until then, the pre-launch site is a static export on Cloudflare Pages (free) |
| Calls | Discord voice channels + OBS | See D2 |
| Recordings | OBS → shared synced folder in v1 | Automatic upload later |

Railway replaced v0.1's Vercel and Neon because the bot has to run all the time.

### Order lifecycle
```
pending ──► paid ──► opened ──► shipped
   │          │
   ▼          ▼
expired    refunded
```
- **pending:** checkout started and stock held. If unpaid after 30 minutes, the order expires and the stock is released.
- **paid:** waiting for the buyer to start their opening, or for the 30-day rule.
- **refunded:** only before opening, within 14 days of purchase.
- **opened:** every product in the order has been opened, hits recorded, results email sent.
- **shipped:** tracking number entered, shipped email sent.

Whether the buyer has linked Discord is tracked separately.

### Opening lifecycle
```
waiting ──► in call ──► done
   │
   ▼
canceled (the buyer left before an opener joined)
```
An opening covers one or more unopened products from the buyer's orders. The buyer picks which (default: all of them).

### Data model (first sketch)
```
Product       name, set, type (pack / ETB / booster box), price, image, active
InventoryLot  product, quantity, cost per unit, acquired on
Order         order number (public, e.g. RWM-1042), claim code (secret), page token (secret),
              email, shipping address, status, totals, Stripe IDs, Discord user ID,
              shipping choice (everything / picked cards, set on the call), terms accepted at
OrderItem     order, product, quantity, unit price, opening
Opening       buyer's Discord user ID, opener, status, requested at, started at, ended at,
              Discord channel ID, recording file, OK to post hits
Pull          opening, order item, card name, card number, notes, photo
Opener        team member, Discord user ID, on duty
Shipment      order(s), carrier, tracking number, postage cost, shipped at
```

### Integration notes
- **Checkout:** create a pending order and hold the stock, then open a Stripe Checkout session (30-minute expiry, US addresses only, a flat shipping rate priced from the cart, automatic tax, required terms checkbox). The `checkout.session.completed` webhook marks the order paid and sends the confirmation email; `checkout.session.expired` releases the stock. Webhook handling must be safe to run twice for the same event.
- **Connect Discord:** OAuth2 with the `identify` and `guilds.join` scopes. On callback, link the Discord user to the order, add them to the server with the `Buyer` role (or just add the role if they're already a member), and redirect them to `#start-here`. The bot needs the Create Invite, Manage Roles, and Manage Channels permissions, and its role must sit above `Buyer`.
- **Start my opening:** the bot lists the buyer's unopened products, creates a private voice channel (the buyer can join, talk, and type, but not share video), and posts the request in `#opener-queue` with **Take it**, pinging on-duty openers. If nobody takes it within 5 minutes, it pings the whole team and updates the buyer.
- **Done:** saves the hits and shipping choice, marks the products opened, posts results in the call channel (and in `#hits` if the buyer agreed), sends the results email, and deletes the channel a few minutes later.
- **Reminders and the 30-day rule:** a daily job emails reminders at 7 and 21 days and puts orders still unopened after 30 days into the opener queue.
- **Disputes:** on `charge.dispute.created`, flag the order and pull together the evidence: the terms acceptance, the recording, and tracking.

### Security, privacy, and safety
- Claim codes and order-page links are random and unguessable. A claim code works once and ties the order to one Discord account.
- Verify Stripe webhook signatures. Keep the bot token and API keys out of the code. Turn on 2FA for Stripe, Discord, email, hosting, and the domain registrar.
- Stripe handles card details; we store only what we need (email, shipping address, Discord ID).
- Call channels are visible only to the buyer and the team, calls never move to DMs, every call is recorded, and buyers can't turn on video.
- The admin dashboard and opener console are limited to the team's Discord accounts.

## 8. Before launch: business and legal

This isn't legal advice. It's the list of things to settle, with an accountant and a lawyer where needed, before taking real money. Track progress in [checklist/02-business-and-legal.md](../checklist/02-business-and-legal.md).

- Search "Rip With Me" in the USPTO trademark database (tmsearch.uspto.gov) and register the matching social handles. (ripwithme.com is registered.)
- Form the business (an LLC is common), get an EIN, and open a business bank account.
- Register for sales tax in our home state (if it has one) and set up Stripe Tax, which also flags when sales in other states cross their thresholds.
- Apply to Stripe with an accurate description (we sell specific sealed products and open them live with the buyer, who receives the cards) and confirm it fits their terms. Payment processors restrict anything that looks like a game of chance.
- Have a lawyer review the Terms of Sale, especially the recording notice and the 30-day rule (D12). Some states, California among them, require everyone on a call to agree to it being recorded. Review is a must before adding anything randomized, buy-backs, or giveaways tied to purchases: in most states, a prize plus chance plus a required purchase is the legal definition of a lottery.
- Publish the Terms of Sale, Privacy Policy, and Refund Policy.
- Set up the Discord server: channels, roles, rules, moderation, 2FA for the team, and Nitro for opener accounts.
- Put together opener kits: camera, lights, playmat, OBS profile, and supplies.
- Shipping: a USPS label service, mailers and boxes, and a rule for insuring high-value hits (for example, over $100).
- Start bookkeeping on day one: cost per product, revenue, Stripe fees, and postage per order.

## 9. Risks

| Risk | Mitigation |
|---|---|
| No built-in audience: unlike Whatnot or TikTok Live, nobody finds us by default | Start with our existing resale customers and communities; post short clips of big hits (with the buyer's permission) |
| Payment processor holds funds or closes the account | Accurate application, the D1 model, clear policies, and a low dispute rate; keep a cash buffer and know which backup processor we'd use |
| Chargebacks after a bad pull | Required terms checkbox, a recording of every call, tracked shipping, and Stripe Radar; answer every dispute with evidence |
| A call doesn't get recorded | "No recording, no opening": the console won't start an opening without it; spot-check recordings weekly |
| Being always open (D11) means someone has to be on duty every hour | A simple on-duty rota; buyers see their place in line; the whole team gets pinged if a request waits 5 minutes |
| Buyers who won't use Discord | "Open it without me" (D12); in-browser calls later (D2) |
| One-on-one calls with younger viewers | Server channels only, always recorded, buyer video off, and a code of conduct for openers |
| Trademark complaint | A brand without Pokémon marks (D5), a trademark search before launch, and our own product photos |
| Overselling hot products | Stock held during checkout; this system is the single source of truth for stock, including anything we still sell sealed elsewhere |
| Lost or damaged shipments | Tracking on everything; insurance above the threshold |

## 10. Roadmap

### Phase 0: Set up and validate
- **Pre-launch website (built):** home, how it works, shop with placeholder products, product pages, FAQ, and draft Terms, Refund, and Privacy pages, plus a launch-list signup that posts to Discord. A static Next.js export on Cloudflare Pages; see the README to run or deploy it. Before launch, swap in real products and our own photos.
- **Hype and the launch list:** while the rest of Phase 0 happens, build an audience on short-form video and in Discord, and grow the launch list toward a signup goal. The launch list gets a 24-hour head start on launch day. Details in [checklist/05](../checklist/05-hype-and-launch-list.md).
- Run the trademark search, register ripwithme.com, and work through the checklist in section 8.
- Set up the Discord server and one opener station, and make test calls until the video and recordings are solid.
- Recommended: run a few manual pilot openings with friends or existing customers, using Stripe Payment Links, a spreadsheet, and voice channels set up by hand. Time real calls and weigh real packages for each product type, so queue estimates and shipping prices come from real numbers.

### Phase 1: MVP (section 4)
1. **Foundation:** one repo for the website and bot, database schema, admin sign-in, products and stock.
2. **Checkout:** shop pages, Stripe Checkout in test mode, webhooks, stock holds, confirmation email, order page.
3. **Discord linking:** Connect Discord, `/claim`, the `Buyer` role.
4. **Openings:** Start my opening, call channels, the opener queue and console, hits, results email, cleanup, reminders, and the 30-day rule.
5. **Shipping and launch:** shipping workflow, legal pages, a full end-to-end test call, then Stripe live mode.

### Phase 2: Polish
Recording links for buyers, shipping-label integration, combined shipping, booking time slots for booster boxes, sales and profit reports, and in-browser calls if Discord turns out to be a barrier.

### Phase 3: Growth
Public streams and highlight clips, referrals, and more product types.

## 11. Next steps
The live list is in [checklist/README.md](../checklist/README.md). In short:
1. Build hype and grow the launch list (checklist 05), starting with measuring signups by source.
2. Finish the website launch: a test signup and the contact email.
3. Trademark search, social handles, and 2FA on every account.
4. Phase 0: the Discord server, an opener station, test calls, and pilot openings.
5. When we're ready to build, Phase 1 starts with the foundation milestone.
