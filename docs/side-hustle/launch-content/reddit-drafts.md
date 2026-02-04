# Reddit Launch Drafts — The Rook AI

> 5 posts, each targeting a specific subreddit.
> Reddit rule: lead with value, never hard-sell. Product mentions are subtle or in comments only.
> Each draft includes: subreddit, title, body, and a suggested comment (for self-reply with product mention).

---

## Post 1: r/SEO

**Title:** I audited 200+ AI Overview citations — here's what actually gets cited (and what doesn't)

**Body:**

I've been obsessing over Generative Engine Optimisation for the past 6 months. Not the theory — the actual data on what Google's AI Overviews and other generative search engines choose to cite.

I went through 200+ AI Overview citations across 15 competitive niches (health, finance, tech, travel, SaaS) and categorised what the cited pages had in common vs. pages that ranked well traditionally but got zero AI citations.

**What gets cited:**

- **Short, declarative paragraphs** with clear claims. The AI seems to prefer content that makes a specific statement and backs it up, rather than long exploratory paragraphs.
- **Original statistics and data.** Pages with original research, surveys, or proprietary data were cited at roughly 3x the rate of pages that just referenced other sources.
- **Structured content with clear headings.** Not surprising, but the specificity of the headings mattered. "Average cost of home insurance in the UK in 2026" beats "Home Insurance Costs" every time.
- **Schema markup.** FAQ schema, HowTo schema, and especially Dataset schema correlated strongly with citations. This isn't optional anymore.
- **E-E-A-T signals.** Author bios with credentials, about pages, citations to authoritative sources. The AI models seem to weight these more heavily than traditional search.

**What doesn't get cited (even if it ranks well):**

- Long-form "ultimate guides" with no clear structure
- Content that hedges everything ("it depends," "results may vary")
- Listicles without substantive explanations
- Pages with aggressive ad placement and pop-ups
- Thin content that aggregates other sources without adding analysis

**The biggest surprise:** Domain authority matters less than you'd think. Several niche sites with DA < 30 were getting cited over DA 80+ sites because their content was better structured for machine comprehension.

**My takeaway:** GEO is becoming a separate discipline from SEO. The ranking factors overlap but aren't identical. If you're not actively optimising for AI citations, you're going to lose traffic to competitors who are — even if you outrank them in traditional search.

Happy to answer questions. Curious if others are seeing similar patterns.

**Suggested self-reply comment (post after 2-3 organic replies):**

> For anyone who wants to go deeper on this — I recently put together a detailed playbook covering the full audit framework, content restructuring templates, and monitoring setup. It's at therookai.gumroad.com if you want to check it out. But honestly, the core principles in this post will get you 80% of the way there.

---

## Post 2: r/selfhosted

**Title:** I replaced £247/month in SaaS with self-hosted alternatives — here's my honest cost breakdown after 12 months

**Body:**

I keep seeing posts about self-hosting savings, but they usually skip the real costs (time, electricity, hardware depreciation). Here's my actual breakdown after a full year.

**What I replaced:**

| SaaS Tool | Monthly Cost | Self-Hosted Alternative | Works Well? |
|-----------|-------------|------------------------|-------------|
| Notion (Team) | £16 | Outline | ✅ 90% there, miss databases |
| Slack (Pro) | £28 | Element/Matrix | ⚠️ Functional but rough |
| Google Analytics | £0 (but privacy cost) | Umami | ✅ Actually prefer it |
| Mailchimp (Essentials) | £42 | Listmonk | ✅ Excellent |
| Trello (Premium) | £18 | Vikunja | ✅ Solid |
| 1Password (Teams) | £32 | Vaultwarden | ✅ Perfect |
| Calendly (Pro) | £24 | Cal.com | ✅ Great |
| Typeform (Basic) | £29 | Formbricks | ✅ Good enough |
| Grammarly (Premium) | £25 | LanguageTool | ⚠️ Noticeably worse |
| Canva (Pro) | £33 | Penpot | ⚠️ Not a real replacement tbh |

**Total SaaS cost:** £247/month (£2,964/year)

**Self-hosting costs:**
- Hetzner VPS (CX31): €8.49/month (~£7.50)
- Domain: ~£1/month amortised
- Backups (Hetzner Storage Box): €3.29/month (~£2.90)
- **Total: ~£11.40/month (£137/year)**

**Annual saving: ~£2,827**

**The honest parts people don't mention:**

1. **Initial setup time:** ~20 hours across 3 weekends. The Docker Compose pattern makes it repeatable, but the first time is rough (nginx reverse proxy, SSL, DNS).

2. **Ongoing maintenance:** ~2 hours/month. Mostly updating containers and checking backups actually work. Set up a quick healthcheck script — saved my arse twice.

3. **Things that suck:** Matrix is noticeably worse than Slack for team comms. Penpot is NOT Canva. LanguageTool is fine but Grammarly is genuinely better. Be honest about where self-hosted alternatives fall short.

4. **Things that are actually better:** Umami gives me exactly the analytics I need without the bloat. Vaultwarden is indistinguishable from 1Password. Listmonk is criminally underrated.

5. **The real risk:** If my VPS goes down at 2am, that's my problem. I've set up automated backups and healthchecks, but the mental overhead of being your own sysadmin is real.

**Would I do it again?** Absolutely. But I'd be more selective. Not everything needs to be self-hosted. My rule: if the SaaS is <£10/month and genuinely better, just pay for it.

Questions welcome.

**Suggested self-reply comment (post after 2-3 organic replies):**

> A few people have DM'd asking about my setup process. I documented the full thing — every docker-compose file, the backup automation, nginx configs, the healthcheck scripts — in a guide at therookai.gumroad.com. Should save you most of those 20 hours of initial setup.

---

## Post 3: r/LocalLLaMA

**Title:** Budget local LLM build: what I'm actually running on a £600 setup and where the limits are

**Body:**

I see a lot of "what hardware should I buy?" posts, so here's my actual setup after 6 months of tweaking.

**Hardware:**

- Used RTX 3090 (24GB VRAM): £520 off eBay (check prices dropped a bit since the 5000 series launched)
- Rest of the system: existing desktop PC (Ryzen 5 5600X, 32GB RAM, 1TB NVMe)
- Total additional cost: ~£600 (just the GPU + a beefier PSU)

**What I run:**

- **Daily driver:** Mistral Nemo 12B (Q5_K_M) — fits entirely in VRAM, ~40 tok/s. Handles 90% of my tasks.
- **Heavy lifting:** Qwen 2.5 72B (Q4_K_M) — needs partial CPU offload, ~8 tok/s. Slow but capable. Use it for complex reasoning and long-form generation.
- **Code:** DeepSeek Coder V3 (various quants depending on task). Genuinely competitive with GPT-4 for most coding tasks.
- **RAG:** Nomic Embed for embeddings + Mistral Nemo for generation. Works surprisingly well over my document collection.

**Inference stack:**

- llama.cpp (koboldcpp for the UI)
- Open WebUI as the chat frontend
- Custom scripts for batch processing

**Honest performance notes:**

- 12B models at Q5 are genuinely good for most tasks. Don't let anyone tell you they need 70B for everything.
- 70B+ models are noticeably better for nuanced reasoning, but the speed tradeoff is painful on a single 3090.
- Quantisation matters. Q4 vs Q5 is a real quality difference on smaller models. On 70B+, Q4 is usually fine.
- VRAM is king. If I were buying today, I'd consider two used 3090s or wait for a deal on a 4090. The 24GB ceiling is the real constraint.

**Where local still loses to API:**

- Speed on large models (obvious)
- Very long context windows (128k+ token contexts)
- Multimodal tasks (vision models locally are getting better but still behind)
- The absolute frontier of reasoning (o1-level stuff)

**Where local wins:**

- Privacy (nothing leaves my machine)
- Cost (£0/month after hardware)
- Availability (no rate limits, no outages, no "we've updated our API")
- Fine-tuning on private data
- Running overnight batch jobs without watching the bill climb

Happy to answer specific questions about the setup.

**Suggested self-reply comment (post after 2-3 organic replies):**

> If anyone wants the full deep-dive on hardware selection, quantisation trade-offs, and the complete deployment setup (including the RAG pipeline), I wrote it all up in a handbook: therookai.gumroad.com. Goes from hardware shopping list through to serving models to your apps.

---

## Post 4: r/SideProject

**Title:** I built 12 digital products in a weekend. Here's exactly how (and what I learned about shipping fast).

**Body:**

Last weekend I sat down and created 12 digital products — guides, toolkits, and prompt libraries — all focused on practical AI and tech topics. Listed them all on Gumroad.

Before you call BS: these aren't 12 half-arsed PDFs. They're focused, specific guides on topics I've spent months actually working with. The "weekend" was about packaging and productising knowledge I already had.

**The approach:**

1. **Started with topics I already had opinions on.** I didn't research from scratch. Every guide covers something I've actually done: running local LLMs, self-hosting infrastructure, optimising for AI search engines, using Claude effectively as a developer. If I couldn't write it from experience, it didn't make the cut.

2. **Kept scope tight.** Each product solves ONE specific problem. No "ultimate guide to everything." The GEO Playbook is about getting cited by AI search. The Self-Hosting guide is about escaping SaaS costs. Specificity sells.

3. **Used a consistent structure.** Every guide follows: Problem → Why it matters now → The approach → Step-by-step → Templates/tools → Common mistakes. Once I had the template, each product was about filling in the expertise.

4. **Priced deliberately.** Range from free (lead magnet) to £19. Nothing over £20. The mental friction of a £14-19 impulse buy is way lower than a £49 course. I'd rather sell 10x the volume.

5. **Free lead magnet is key.** One product is free — "10 AI Prompts That Actually Work." It's genuinely useful (not a teaser). The theory: people who get value from the free thing will trust the paid ones.

**What I learned:**

- **Packaging is the hard part, not the knowledge.** I already knew all this stuff. Turning it into something someone else could follow took more effort than I expected.
- **Perfectionism is the enemy.** Version 1 shipped. I can update later. Every day I spent polishing was a day I wasn't selling.
- **Gumroad makes distribution trivially easy.** Zero friction to list products. They handle payments, delivery, everything.
- **The first sale is the hardest part.** Getting distribution (social media, Reddit, communities) is the actual challenge. The product is the easy bit.

**Revenue so far:** Too early to say anything meaningful. I'll update in a month if there's interest.

**Would I recommend this approach?** If you have genuine expertise in a niche, absolutely. The bar for "digital product" is lower than people think. You don't need a course platform, a video studio, or a marketing team. You need knowledge, a clear structure, and a weekend.

Store is at therookai.gumroad.com if anyone wants to see the lineup.

Happy to answer questions about the process, pricing strategy, or anything else.

**Suggested self-reply comment:**

> (Not needed for this one — the store link is naturally included in the story.)

---

## Post 5: r/digital_marketing

**Title:** 5 AI prompting techniques that actually improved my marketing output (not the usual "act as a marketing guru" rubbish)

**Body:**

I've been using AI tools for marketing work for about 18 months now. Tried every "prompt engineering" guide out there. Most are useless — just variations of "pretend to be an expert."

Here are 5 techniques that genuinely improved the quality of AI-generated marketing content:

**1. The Constraint Sandwich**

Instead of: "Write me ad copy for my product"

Try: "Write 3 variations of ad copy. Constraints: max 25 words each, must include a specific number/stat, no superlatives (no 'best', 'amazing', 'revolutionary'), target audience is [specific persona]. Here's an example of the tone I want: [paste example]."

Why it works: Constraints force creativity. Superlatives are the #1 sign of lazy AI output.

**2. The Reverse Brief**

Give the AI a piece of marketing you admire and ask it to extract the strategic brief that would have produced it.

"Analyse this landing page copy. Extract: the target audience, the core value proposition, the emotional triggers used, the objection handling, and the CTA strategy. Format as a creative brief I could hand to a copywriter."

This is insanely useful for competitive analysis.

**3. The Devil's Advocate**

Before committing to a campaign angle, ask the AI to argue against it.

"Here's my campaign concept: [concept]. Now argue why this will fail. Be specific — identify the weakest assumptions, the audience segments it won't resonate with, and the competitive responses that would neutralise it."

This has saved me from several bad bets.

**4. The Audience Simulator**

"I'm going to share a piece of marketing copy. Respond as if you are [specific persona — age, job, pain points, media habits]. What's your honest reaction? What would make you click? What would make you scroll past?"

Do this for 3-4 different personas. The variance in responses reveals blind spots.

**5. The Iteration Ladder**

Don't accept the first output. Instead:

- First prompt: generate the initial version
- Second: "What's the weakest part of this? Rewrite only that section."
- Third: "Now make the whole thing 30% shorter without losing any key messages."
- Fourth: "Add one element of surprise or pattern interruption."

Each step compounds. Version 4 is dramatically better than version 1.

**The meta-lesson:** The skill isn't prompting — it's knowing what good output looks like. If you can't evaluate whether the AI's output is good, no prompt will save you. Build taste first.

Curious what techniques others have found actually work in practice.

**Suggested self-reply comment (post after 2-3 organic replies):**

> For anyone who wants more of these — I put together a collection of 10 thoroughly tested prompts with full context on why each one works and how to adapt them. The free version is at therookai.gumroad.com. I also have a more in-depth prompt library there if you want to go deeper.

---

*Last updated: 2026-02-03*
*Post from u/therookai or appropriate account. Check subreddit rules for self-promotion limits before posting.*
*Reddit accounts need sufficient age and karma to post in most subs — verify before attempting.*
