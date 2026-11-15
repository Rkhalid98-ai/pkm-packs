# 03: Discord server, opener station, and pilot openings

**Goal:** prove the opening itself works before we build software for it (PLAN §10 Phase 0). We run
real calls by hand and collect the numbers v1 needs.

**Done when:** one opener station makes calls where cards are easy to read on a phone, recordings
sync reliably, and a handful of pilot openings have given us real call lengths and package weights.

## P0: The Discord server

- [ ] **(you)** Create the Rip With Me server with the channels in PLAN §2: `#welcome`, `#rules`,
      `#start-here`, `#hits`, `#support`, and a private `#opener-queue`.
- [ ] **(you)** Create the `Team` and `Buyer` roles, write the rules, set up moderation, and require
      2FA for the team.
- [ ] **(you)** Move the launch-list webhook into a private team channel in this server, and update
      `DISCORD_WEBHOOK_URL` in Cloudflare (Settings → Variables and Secrets, then redeploy).
- [ ] **(you)** Discord Nitro on opener accounts, for HD video.

## P0: One opener station (PLAN §6)

- [ ] **(you)** Overhead camera on an arm, two soft lights angled to cut glare on holos, and a matte
      playmat.
- [ ] **(you)** OBS: show the order number on screen, record each call locally with the call audio,
      and feed the video into Discord.
- [ ] **(you)** A shared, synced recordings folder.
- [ ] **(you)** Test calls until cards are easy to read on a phone and every recording syncs.

## P1: Pilot openings

- [ ] **(you)** Run a few openings by hand with friends or existing customers: Stripe Payment Links, a
      spreadsheet, and voice channels set up by hand.
  - [ ] Time real calls for each product type. These replace the site's "about 2 / 15 / 60 minutes".
  - [ ] Weigh real packages for each product type. These set the flat shipping prices (D9).
  - [ ] Note anything about the call flow that the runbook (PLAN §6) gets wrong.
- [ ] **(you)** Draft the on-duty rota. We're always open (D11), so someone needs to cover every hour.
