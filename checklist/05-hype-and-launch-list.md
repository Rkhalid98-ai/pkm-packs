# 05: Hype and the launch list

**Goal:** while the Discord server, the openers, and the business get set up in the background
([02](02-business-and-legal.md), [03](03-openings-and-pilot.md)), build an audience and grow the
launch list as big as we can. Then launch day starts with buyers instead of an empty shop. This is the
plan's biggest risk: unlike Whatnot or TikTok Live, nobody finds us by default (PLAN §9).

**Done when:** we've hit our signup goal, the launch date is announced, and launch day is planned.

## Ground rules

- **Keep the signup promise.** The site tells people they get one email, on the day we open. Hype
  happens on social and in Discord, not in their inbox. To send updates later, change the signup
  wording first; the change only covers people who sign up after it.
- **Use the site's words:** rip, hits, sealed, on camera, every card is yours. Never odds, win,
  mystery, guaranteed hits, break, or spots.
- **No giveaways or prize contests yet.** A prize, plus chance, plus a required entry can legally be a
  lottery (PLAN §8). A lawyer has to look at it first.
- **No Pokémon logos or character art** in our own branding, thumbnails, or banners. Showing real
  cards coming out of a pack on camera is normal in the hobby.

## P0: Set up to measure (this week)

- [ ] **(Claude)** Save every signup, and where it came from, in a free Cloudflare D1 database, and
      keep the Discord ping too. Today signups exist only as Discord messages, which makes them hard to
      count, compare by channel, or export for the launch email.
  - **(you)** Create the database in the Cloudflare dashboard; Claude will give you the steps.
- [ ] **(Claude)** Record where each signup came from: the `utm_source` tag and the referring site.
      Every link we post then gets its own tag, for example `ripwithme.com/?utm_source=tiktok`.
- [ ] **(you)** Turn on Cloudflare Web Analytics: Pages project → **Metrics** → enable Web Analytics.
- [ ] **(Claude)** Add a share image, so links posted anywhere show a preview card instead of a bare
      URL.
- [ ] **(you)** Claim the handles on TikTok, Instagram, YouTube, and X, and put ripwithme.com in every
      bio.
- [ ] **(you)** Set a signup goal for launch day (for example, 500).

## P1: Warm up (while 02 and 03 happen)

Short vertical video is where this hobby lives. Post each clip to TikTok, Instagram Reels, and
YouTube Shorts.

- [ ] **(you)** Pick a posting rhythm you can keep up (for example, 3 clips a week).
- [ ] **(you)** Show the format instead of describing it. Ideas:
  - What a Rip With Me call looks like, in 30 seconds.
  - Building the opener station: camera arm, lights, playmat.
  - The seal check: close-ups of shrink wrap and crimps.
  - Test calls with friends (with their OK), showing every card come out.
  - Our own rips of new sets, ending with "Launching soon. Join the list, link in bio."
- [ ] **(you)** Tell the people who already buy from us and the friends we have in the hobby. Check
      each selling platform's rules first, since some don't allow pointing buyers to outside sites.
- [ ] **(you)** Take part in collector communities (Reddit, TCG Discord servers, Facebook groups)
      before mentioning the site, and follow each one's self-promotion rules.
- [ ] **(you)** Once the server is ready ([03](03-openings-and-pilot.md)), open its public channels:
      `#welcome`, `#rules`, and a sneak-peek channel. Use polls ("Which set should we stock first?")
      to get people involved.
- [ ] **(Claude)** Add "Join our Discord" next to the launch list on the site once the server is
      public.
- [ ] **(you)** Check the numbers every week: signups by source. Do more of what works and drop what
      doesn't.

## P2: Countdown (when 02 and 03 are nearly done)

- [ ] **(you)** Pick a launch date 2–3 weeks out.
- [ ] **(Claude)** Put the date on the site, with a countdown in the hero.
- [ ] **(you)** Give the launch list a 24-hour head start: they can order before anyone else. It costs
      nothing and gives people a reason to join now. (The v1 build needs a private early-access link
      for this; see [04](04-build-v1.md).)
- [ ] **(you)** Announce the date everywhere, then post a reminder each week until launch.
- [ ] **(Claude)** Write the launch email.

## Launch day

- [ ] **(Claude)** Send the launch email to the whole list, with the early-access link.
- [ ] **(you)** 24 hours later, open to everyone: post everywhere and pin it in Discord.
- [ ] **(you)** Put extra openers on duty for the first rush.
