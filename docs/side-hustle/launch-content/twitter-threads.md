# Twitter/X Launch Threads — The Rook AI

> 5 threads, one per high-value product. Each 5–7 tweets.
> Tone: punchy, expert, slightly contrarian. Use line breaks for readability.
> CTA links go to therookai.gumroad.com (update slugs when products are live).

---

## Thread 1: The GEO Playbook (£19)

**Hook tweet (1/7):**
Google's AI Overviews now answer 47% of search queries before anyone clicks.

If your SEO strategy doesn't account for Generative Engine Optimisation, you're optimising for a world that no longer exists.

Here's what actually works in 2026 👇

**2/7:**
Traditional SEO = "rank on page 1"

GEO = "get cited by the AI that answers the question"

Different game. Different rules.

The sites winning GEO citations aren't necessarily the ones with the best backlink profiles — they're the ones structured for machine comprehension.

**3/7:**
3 things AI models look for when deciding what to cite:

1. Clear, authoritative claims with evidence
2. Structured data that's easy to parse
3. Content that directly answers the query (not keyword-stuffed fluff)

If you're still writing "What is [keyword]?" H2s, you're speaking the wrong language.

**4/7:**
I audited 200+ AI Overview citations across competitive niches.

The pattern was clear:

→ Short, declarative paragraphs win
→ Stats and original data get cited 3x more
→ Schema markup isn't optional anymore
→ E-E-A-T signals matter MORE in GEO than traditional SEO

**5/7:**
The biggest mistake I see:

People treating GEO as a bolt-on to their SEO workflow.

It's not. It requires rethinking how you structure content from the ground up — your headings, your claims, your data presentation.

The good news? Most competitors haven't figured this out yet.

**6/7:**
I've compiled everything I've learned into The GEO Playbook:

→ The citation audit framework
→ Content restructuring templates
→ Schema markup recipes for GEO
→ Real before/after case studies
→ The monitoring stack to track AI citations

It's the playbook I wish existed 12 months ago.

**7/7:**
If you run a site that depends on organic traffic, GEO isn't optional anymore.

The window to get ahead is right now — before every agency starts selling "GEO services" at 10x the price.

Grab the playbook: [link]

---

## Thread 2: The Local LLM Handbook (£19)

**Hook tweet (1/6):**
I run a 70B parameter AI model on a machine under my desk.

No API costs. No usage limits. No data leaving my network. Complete privacy.

Here's what it actually takes to run LLMs locally in 2026 👇

**2/6:**
The cloud AI pricing model is designed to create dependency:

→ Pay per token
→ Rate limits during peak hours
→ Your data trains their next model
→ They can change the API (or the price) whenever they want

Local LLMs flip every one of these.

**3/6:**
"But you need a £10k GPU setup!"

No. Here's what actually works:

→ Quantised models (Q4/Q5) run on consumer hardware
→ A used RTX 3090 (£500-600) handles most 13B-30B models
→ Apple Silicon Macs are secretly great at inference
→ Even CPU-only setups work for smaller models

**4/6:**
The real barrier isn't hardware — it's the knowledge gap.

Which model for which task? How do you quantise without destroying quality? What's the right inference engine? How do you serve it to your apps?

I spent 6 months figuring this out so you don't have to.

**5/6:**
My local stack now handles:

✅ Code review and generation
✅ Document summarisation
✅ Data analysis (no sensitive data leaving premises)
✅ RAG over private documents
✅ Fine-tuned models for specific workflows

Monthly API cost: £0. Previously: £150+/month.

**6/6:**
I wrote The Local LLM Handbook — a complete guide from hardware selection to production deployment.

No fluff. No "install Python first" padding. Written for people who actually want to run this stuff.

Get it here: [link]

---

## Thread 3: The Developer's Claude Toolkit (£14)

**Hook tweet (1/6):**
Most developers use AI like an autocomplete on steroids.

That's like buying a Formula 1 car and only driving it to Tesco.

Here's how to actually get 10x value from Claude as a developer 👇

**2/6:**
The secret isn't better prompts — it's better workflows.

I don't ask Claude to "write me a function."

I give it:
→ The full context of what I'm building
→ My coding standards and patterns
→ The constraints and edge cases
→ A role that matches the task

The output quality difference is night and day.

**3/6:**
5 workflows that changed how I ship code:

1. Architecture review — describe the system, get design critique
2. Test generation — paste the function, get comprehensive tests
3. Refactoring partner — "here's the smell, here's the constraint"
4. Documentation writer — code in, docs out, in your team's style
5. Debug rubber duck — explain the bug, get hypotheses ranked by likelihood

**4/6:**
The biggest unlock: system prompts that persist context.

Instead of re-explaining your codebase every conversation, build reusable system prompts for:

→ Your tech stack and conventions
→ Your project structure
→ Your team's coding standards
→ Common patterns in your codebase

You're building an AI that knows YOUR code.

**5/6:**
"But AI-generated code is unreliable!"

It is — if you use it wrong.

The trick: use AI for the thinking, not just the typing.

Ask it to explain trade-offs. Challenge its approach. Use it as a senior dev who never gets tired of your questions.

Review everything. Ship nothing unreviewed.

**6/6:**
I packaged all of this — the workflows, system prompts, templates, and patterns — into The Developer's Claude Toolkit.

Built for developers who want to ship faster without sacrificing quality.

Grab it: [link]

---

## Thread 4: The Self-Hosting Survival Guide (£14)

**Hook tweet (1/7):**
I added up what I was paying for SaaS tools last year.

£247/month. For a solo operation.

I now self-host 80% of those tools for £8/month on a VPS.

Here's the honest breakdown — including the parts that sucked 👇

**2/7:**
What I replaced:

Notion → Outline (free, self-hosted)
Slack → Element/Matrix (free)
Google Analytics → Umami (free)
Mailchimp → Listmonk (free)
Trello → Vikunja (free)
1Password → Vaultwarden (free)

VPS cost: ~£8/month (Hetzner)

**3/7:**
The parts nobody tells you about:

→ The first weekend is hell (DNS, reverse proxies, SSL certs)
→ Backups are YOUR problem now (automate or regret)
→ Updates require attention (not much, but some)
→ Some self-hosted alternatives are genuinely worse

I'm honest about what's worth self-hosting and what isn't.

**4/7:**
My rule of thumb:

Self-host if:
✅ You're the only user (or small team)
✅ The self-hosted alternative is mature
✅ You care about data ownership
✅ The SaaS cost is >£10/month for what you get

Keep paying if:
❌ Collaboration features matter
❌ The SaaS is genuinely better
❌ Uptime is business-critical

**5/7:**
The game-changer: Docker Compose.

Every tool I self-host is a single docker-compose.yml file.

Backup = copy the folder.
Migrate = copy to new server.
Recover = docker compose up.

Once you learn this pattern, self-hosting becomes trivially easy.

**6/7:**
After a year of self-hosting, my honest take:

→ I save ~£200/month
→ I own all my data
→ I've learned more about infrastructure than any course taught me
→ I spend ~2 hours/month on maintenance

The ROI is insane. The learning curve is real but short.

**7/7:**
I wrote The Self-Hosting Survival Guide for people who want to escape the SaaS tax without becoming a full-time sysadmin.

Step-by-step. Battle-tested. Honest about trade-offs.

Get it: [link]

---

## Thread 5: 10 AI Prompts That Actually Work (FREE lead magnet)

**Hook tweet (1/5):**
90% of "AI prompt" guides are useless.

"Act as a marketing expert and..."

That's not engineering. That's cosplay.

Here are 10 prompts I use daily that produce genuinely useful output 🧵

**2/5:**
The difference between bad and good prompts:

❌ "Write me a blog post about productivity"
✅ "I'm writing for [audience]. The core argument is [X]. Use this structure: [format]. Constraints: [word count, tone, no jargon]. Here's an example of the quality I want: [example]."

Context > role-play. Every time.

**3/5:**
My 3 favourites from the collection:

1. The "Steel Man" prompt — makes AI argue AGAINST your idea before you commit to it
2. The "Explain the Gap" prompt — identifies what's missing in your knowledge
3. The "Reverse Engineer" prompt — takes a result you admire and extracts the method

These have saved me hundreds of hours.

**4/5:**
What makes these different from the "500 ChatGPT prompts!!!" PDFs:

→ Each prompt has context on WHY it works
→ They're designed to be modified, not copy-pasted
→ They focus on thinking frameworks, not tricks
→ They work across models (ChatGPT, Claude, Gemini, local)

**5/5:**
I'm giving away "10 AI Prompts That Actually Work" for free.

No email wall. No upsell funnel. Just useful prompts.

If it saves you 30 minutes, pass it on.

Grab it: [link]

---

*Last updated: 2026-02-03*
*All thread links need updating once Gumroad product pages are live.*
