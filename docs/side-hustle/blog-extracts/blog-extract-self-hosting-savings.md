# Self-Hosting vs SaaS: The Real Cost Comparison

Every month, millions of developers and tech professionals pay a steady drip of subscription fees for services they could run themselves. Individually, each one seems cheap. Together, they add up to a figure that should make you uncomfortable.

Let us do the maths.

---

## What You Are Paying Right Now

Here is what a typical developer pays monthly for cloud services:

| Service | Monthly Cost |
|---|---|
| Google One (200GB storage) | £2.49 |
| Notion (Plus) | £7.50 |
| Slack (Pro) | £5.75 |
| LastPass Premium | £2.50 |
| Spotify Premium | £10.99 |
| Google Analytics 360 | Free tier, but your data is the product |
| Email (Google Workspace) | £4.14 |
| Photo storage (Google/iCloud) | £2.49 |
| **Total** | **roughly £36/month, or £432/year** |

That is £432 a year for services where someone else controls your data, sets the prices, and can change the terms whenever they like.

---

## What Self-Hosting Actually Costs

A decent mini PC costs £150. A domain costs £10/year. Electricity runs about £3/month. Offsite backups on Backblaze B2 cost roughly £0.40/month for 100 GB.

That is £196 for your first year, including the hardware. After that, it is under £50/year.

You break even in six months, then you save roughly £380 every year thereafter.

---

## The Full Comparison, Service by Service

| Service | SaaS Monthly | Self-Hosted Monthly |
|---|---|---|
| Cloud Storage (200GB) | £2.49 (Google One) | £0 (included) |
| Email | £4.14 (Google Workspace) | £0* |
| Photo Backup | £2.49 (Google One / iCloud) | £0 (included) |
| Notes/Wiki | £7.50 (Notion Plus) | £0 (included) |
| Team Chat | £5.75 (Slack Pro) | £0 (included) |
| Password Manager | £2.50 (LastPass) | £0 (included) |
| Analytics | "Free" (you are the product) | £0 (included) |
| Music Streaming | £10.99 (Spotify) | £0 (bring your own music) |
| Smart Home Hub | £0-£10 (subscriptions) | £0 (included) |
| Monitoring | £0-£30 | £0 (included) |
| **Subtotal (services)** | **roughly £36-£46/month** | **£0** |
| Hardware (amortised) | - | roughly £6/month (£150 over 24 months) |
| Electricity | - | roughly £3/month |
| Domain | - | roughly £0.80/month (£10/year) |
| Offsite Backup (B2) | - | roughly £0.40/month |
| **Total** | **roughly £36-£46/month** | **roughly £10/month** |
| **Annual** | **£432-£552** | **roughly £120 (year 1), £50 thereafter** |

*Email self-hosting is free in hosting costs but expensive in time and frustration. Honestly, just pay for Fastmail.*

---

## The Self-Hosted Replacements

What exactly are you running for that £10/month? Here is the stack:

**Google Drive becomes Nextcloud.** Full file sync across desktop and mobile. Collaborative editing. Calendar and contacts. It is not as polished as Google Drive, but it is functional and yours.

**Google Photos becomes Immich.** This is the standout self-hosted project of the past two years. It looks and feels like Google Photos: mobile auto-upload, facial recognition, maps, memories, the lot. First time you see it, you will wonder why you ever paid for iCloud.

**LastPass becomes Vaultwarden.** An unofficial Bitwarden-compatible server that uses a fraction of the resources. The official Bitwarden browser extensions and mobile apps work perfectly with it. This is the easiest win on the list: 10 minutes to set up, immediate daily value.

**Google Analytics becomes Umami.** Privacy-focused, GDPR-compliant out of the box, no cookie banner needed. Clean interface. Does everything most people actually use Analytics for.

**Notion becomes Outline.** A proper wiki with collaborative editing and a clean interface. Alternatively, AppFlowy if you prefer a local-first approach.

**Spotify becomes Navidrome.** You need your own music files, but if you have a music library, Navidrome gives you a streaming interface with mobile apps via the Subsonic protocol.

---

## But It Is Not Just About the Money

The cost savings are compelling, but they are not the whole story.

### Data Ownership

Every photo you upload to Google Photos trains their AI models. Every note in Notion lives on someone else's server, subject to their terms of service, their outages, and their pricing whims. When you self-host, your data lives on hardware you control. No one can pull the rug.

### No Vendor Lock-In

When Google decides to shut down a product (and they will), you scramble. When Notion raises prices by 40% (as they did), you pay or migrate. When you self-host, you control the timeline. Your data is in standard formats on your own disc.

### The Learning Opportunity

Self-hosting will teach you more about networking, Linux, security, and infrastructure than any online course. It is hands-on, it is real, and it is the kind of knowledge that makes you genuinely better at your job.

---

## When NOT to Self-Host

Let us be honest. Do not self-host if:

- **You need five-nines uptime for a business.** Pay for managed services.
- **Email is mission-critical.** Self-hosted email is a nightmare. Your IP will be blacklisted by default, SPF/DKIM/DMARC records must be perfect, and major providers will silently drop your emails into spam for weeks. Just pay for Fastmail (£4/month).
- **You will not maintain it.** An unpatched server is worse than no server.
- **You are doing it to avoid paying £3/month.** Your time has value.

Self-hosting is brilliant when you treat it as a hobby that saves money. It is a disaster when you treat it as a chore you resent.

---

## The Hardware You Need

You do not need a rack server. Any of these will do:

**Repurpose an old laptop or desktop.** That ThinkPad gathering dust in your drawer works perfectly. Any machine from the last 8 to 10 years with 4GB+ RAM and an SSD can run a dozen Docker containers comfortably.

**A Raspberry Pi 5 (8GB)** costs around £75 and sips about 5W. Handles lightweight services beautifully. You will outgrow it, but it is a great starting point.

**A refurbished mini PC** is the sweet spot. A Lenovo ThinkCentre M720q or Dell OptiPlex Micro from £80 to £130, upgraded with 16 GB RAM, idles at 8 to 15W and handles everything without breaking a sweat.

---

## Where to Start

Do not try to migrate everything at once. Here is the order that works:

1. **Vaultwarden** - easiest win, immediate daily value
2. **Uptime Kuma** - because you need monitoring from day one
3. **Immich** - the "wow" moment that makes self-hosting feel worth it
4. **Nextcloud** - replaces cloud storage
5. **Everything else** - one service at a time, as you need them

Buy a domain. Set up Caddy as your reverse proxy. Deploy Vaultwarden. Once you see how straightforward it is, you will not stop.

Your data, your hardware, your rules.

---

*This is an extract from The Self-Hosting Survival Guide. Get the full guide at therookai.gumroad.com/l/self-hosting-guide*
