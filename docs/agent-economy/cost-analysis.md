---
title: "Cost Analysis & Investment Breakdown"
description: "Comprehensive, no-sugarcoating cost analysis for building and operating the Agent Economy marketplace — an agent-to-agent marketplace where AI agents trade knowledge, skills, and verified data using the PACT token. Covers build costs, operating costs at scale, unit economics, token launch, and total investment scenarios."
date: "2026-02-04"
author: "Rook"
tags: ["agent-economy", "costs", "investment", "unit-economics"]
---

# Cost Analysis & Investment Breakdown

*The Agent Economy Marketplace — what it actually costs to build, launch, and run.*

> **Philosophy of this document:** No hand-waving, no "it depends," no VC-pitch optimism. Real numbers, real trade-offs, real risks. If this doesn't work financially, we say so.

---

## 1. Build Phase Costs (MVP — 8–12 Weeks)

### 1.1 Rook's Time (AI Agent Costs)

Development with Claude Opus via OpenClaw. Estimates based on current usage patterns and the architecture defined in our [marketplace architecture doc](/agent-economy/marketplace-architecture).

**Current API pricing (Claude 4.5 series, as of Feb 2026):**

| Model | Input / MTok | Output / MTok | Cache Read / MTok |
|---|---|---|---|
| Opus 4.5 | $5.00 | $25.00 | $0.50 |
| Sonnet 4.5 | $3.00 | $15.00 | $0.30 |
| Haiku 4.5 | $1.00 | $5.00 | $0.10 |

> **Note:** Diego's original estimate referenced Opus 4.1 pricing ($15/$75). The 4.5 series dropped prices by ~67%. This significantly improves our numbers — but Opus is still expensive for high-volume operations.

**Estimated token consumption during 8–12 week build:**

| Work Category | Sessions | Avg Tokens/Session (In+Out) | Model | Estimated Cost |
|---|---|---|---|---|
| Backend API development | 60 | ~80K in + 40K out | Opus 4.5 | $60 × ($0.40 + $1.00) = **~$84** |
| Smart contract development | 25 | ~60K in + 30K out | Opus 4.5 | $25 × ($0.30 + $0.75) = **~$26** |
| Frontend (human dashboard) | 30 | ~100K in + 50K out | Opus 4.5 | $30 × ($0.50 + $1.25) = **~$53** |
| Database schema & migrations | 15 | ~40K in + 20K out | Opus 4.5 | $15 × ($0.20 + $0.50) = **~$11** |
| Search & discovery system | 15 | ~60K in + 30K out | Opus 4.5 | $15 × ($0.30 + $0.75) = **~$16** |
| Protocol integration (x402, MCP, A2A) | 20 | ~80K in + 40K out | Opus 4.5 | $20 × ($0.40 + $1.00) = **~$28** |
| Testing & debugging | 40 | ~100K in + 30K out | Opus 4.5 | $40 × ($0.50 + $0.75) = **~$50** |
| Research sub-agents | 20 | ~50K in + 20K out | Sonnet 4.5 | $20 × ($0.15 + $0.30) = **~$9** |
| Documentation & docs site | 10 | ~40K in + 30K out | Sonnet 4.5 | $10 × ($0.12 + $0.45) = **~$6** |
| Web search API calls | ~200 queries | — | Brave API | **~$0** (free tier) |
| Image generation (logos, diagrams) | ~10 | — | DALL-E / Midjourney | **~$5** |

**Total Rook build cost: ~£220–£330 ($280–$420)**

This is remarkably cheap. AI development costs are not the bottleneck — human time and infrastructure are.

> **Reality check:** These estimates assume efficient sessions with prompt caching. Without caching, costs could be 2–3× higher. With batch API (50% discount for non-urgent work), they could be 30–40% lower. The range accounts for iteration — first attempts rarely work, and debugging Solidity is token-hungry.

---

### 1.2 Diego's Time (Human Costs)

This is the real cost. Diego's time is finite, and every hour on Agent Economy is an hour NOT on Darwin.

**Estimated weekly commitment during build phase:**

| Activity | Hours/Week | Why Human Required |
|---|---|---|
| Architecture review & decision-making | 2–3 | Strategic direction, trade-off decisions |
| Design review & UX decisions | 1–2 | Visual identity, brand, user experience |
| Legal research & consultation | 1–2 | Token classification, terms of service, regulatory |
| Smart contract review & testing | 1–2 | Trust but verify — financial contracts need human eyes |
| Infrastructure setup & purchasing | 1 | Domain purchase, hosting accounts, wallet creation |
| Testing & QA | 1–2 | Real-world usage testing, edge cases |
| Community / market validation | 1–2 | Talking to potential users, gauging interest |
| General oversight & direction | 1–2 | Making sure Rook isn't building the wrong thing |

**Total: 9–17 hours/week (average ~12 hours/week)**

**Over 8–12 weeks: 96–204 hours total (average ~144 hours)**

**Opportunity cost:** If Diego values his time at £50/hr (modest for a technical founder), that's:
- **Best case (8 weeks, 9 hrs/wk):** 72 hours = **£3,600**
- **Realistic case (10 weeks, 12 hrs/wk):** 120 hours = **£6,000**
- **Worst case (12 weeks, 17 hrs/wk):** 204 hours = **£10,200**

**The Darwin opportunity cost is the killer.** Every hour on Agent Economy is an hour not spent on:
- Darwin feature development (the revenue-generating product)
- Hire Space consulting (income)
- Customer acquisition for Darwin
- Sleep and family

This is the single biggest "cost" in this entire analysis. The API bills are rounding errors compared to Diego's attention.

---

### 1.3 Infrastructure Costs (Build Phase)

| Item | Provider | Monthly Cost | Build Phase Total (3 months) |
|---|---|---|---|
| Domain name | Namecheap/Cloudflare | £10/yr | **£10** (annual) |
| Hosting (API + workers) | Railway Pro | £16/mo ($20) | **£48** |
| PostgreSQL database | Railway (included) | ~£4/mo (usage) | **£12** |
| Redis | Railway (included) | ~£2/mo (usage) | **£6** |
| Meilisearch | Self-hosted on Railway | ~£4/mo (usage) | **£12** |
| SSL/CDN/DNS | Cloudflare (free tier) | £0 | **£0** |
| Base L2 contract deployment | Gas costs | One-time | **£5–£15** |
| GitHub (private repos) | Free tier | £0 | **£0** |
| Monitoring (Grafana Cloud) | Free tier | £0 | **£0** |

**Total infrastructure (build phase): ~£95–£110**

> **Note:** Railway's Pro plan at $20/mo includes generous compute. During build, usage will be minimal. The real infrastructure costs come at scale.

---

### 1.4 Third-Party Services (Build Phase)

| Service | Cost | When Needed |
|---|---|---|
| Smart contract audit (automated) | £25–£80 ($30–$100) | Pre-launch — SolidityScan or similar automated tool for MVP |
| Smart contract audit (manual, basic) | £800–£4,000 ($1,000–$5,000) | **Defer to post-MVP** unless handling real money at launch |
| Smart contract audit (thorough) | £8,000–£40,000 ($10,000–$50,000) | Only if/when real money at stake — NOT for MVP |
| Legal consultation (token classification) | £2,000–£5,000 | **Before token launch** — can Diego live without this for MVP? |
| Legal opinion letter | £3,000–£8,000 | **Required for any exchange listing** — defer to post-validation |
| Terms of Service / Privacy Policy | £500–£2,000 (lawyer) or £0 (template) | Pre-launch — use templates for MVP, proper legal for scale |

**Build phase recommendation:**
- Use automated audit tool only: **~£50**
- Skip comprehensive audit until post-validation
- Use template legal docs: **£0**
- Defer token launch legal costs until marketplace proves viability

**Total third-party (build phase, minimal): ~£50**
**Total third-party (build phase, prudent): ~£2,500–£5,000**

---

### 1.5 Build Phase Summary

| Category | Minimal | Prudent | Full |
|---|---|---|---|
| Rook (AI agent costs) | £220 | £280 | £330 |
| Diego's time (opportunity cost) | £3,600 | £6,000 | £10,200 |
| Infrastructure | £95 | £100 | £110 |
| Third-party services | £50 | £2,500 | £5,000 |
| **Total Build Phase** | **£3,965** | **£8,880** | **£15,640** |

**The headline: Building the MVP costs £4K–£16K, with 60–80% being Diego's time.**

The cash outlay (everything except Diego's time) is only **£365–£5,440**. This is bootstrappable.

---

## 2. Operating Costs (Post-Launch, Monthly)

### 2.1 The Big Question: AI Inference Costs Per Trade

This is the make-or-break analysis. Diego's insight is correct: agents don't make one query — they make many. Let's be precise about what happens during a single trade lifecycle.

**Operations per trade lifecycle:**

| Operation | What Happens | Model | Tokens (In+Out) | Cost |
|---|---|---|---|---|
| **1. Discovery** | Buyer agent searches listings, reviews 5–10 results | Haiku 4.5 | ~8K in + 2K out | $0.018 |
| **2. Quality preview** | Buyer agent assesses listing quality/relevance | Haiku 4.5 | ~5K in + 1K out | $0.010 |
| **3. Negotiation** | 2–4 rounds of price/terms negotiation | Haiku 4.5 | ~12K in + 4K out | $0.032 |
| **4. Escrow creation** | Smart contract interaction | Base L2 gas | — | $0.001 |
| **5. Delivery verification** | AI verifies delivered content meets criteria | Sonnet 4.5 | ~15K in + 5K out | $0.120 |
| **6. Dispute (5% of trades)** | AI arbitration of quality disputes | Sonnet 4.5 | ~20K in + 8K out | $0.180 × 5% = $0.009 |
| **7. Reputation update** | Score recalculation | DB operation | — | ~$0.000 |
| **8. Settlement** | On-chain escrow release | Base L2 gas | — | $0.001 |
| **9. Indexing** | Update search index, analytics | Meilisearch | — | ~$0.000 |

**Total AI inference cost per trade: ~$0.19**
**Total blockchain cost per trade: ~$0.002**
**Total cost per trade: ~$0.192**

> **Critical insight: Use cheap models for everything except quality verification.** Discovery, negotiation, and reputation can all run on Haiku 4.5 ($1/$5 per MTok). Only quality verification and dispute resolution need Sonnet. Nothing in the trade lifecycle needs Opus.

**Can we go cheaper?** Yes, with optimisations:

| Optimisation | Savings | Feasibility |
|---|---|---|
| Prompt caching (repeated listing context) | 40–60% on discovery | 🟢 Easy — listings are read many times |
| Batch API for non-urgent operations | 50% on reputation, indexing | 🟢 Easy — these don't need real-time |
| Use Haiku for quality verification (not Sonnet) | ~70% on verification | 🟡 Risky — quality is the core trust mechanism |
| Embed-based search instead of LLM | 90% on discovery | 🟡 Requires upfront embedding pipeline |
| Fine-tuned small model for negotiation | 80% on negotiation | 🔴 Significant engineering effort |
| Off-chain ledger batching | 80% on gas | 🟢 Already in architecture |

**Optimised cost per trade: ~$0.06–$0.10**

---

### 2.2 Costs at Scale

#### Scenario A: 100 Trades/Day (Early Stage — Month 1–3)

| Cost Category | Monthly Cost |
|---|---|
| AI inference (100 × 30 × $0.15 avg) | **£175** ($220) |
| Blockchain gas (100 × 30 × $0.002) | **£5** ($6) |
| Railway hosting (API + workers) | **£25** ($32) |
| PostgreSQL (Railway) | **£8** ($10) |
| Redis (Railway) | **£4** ($5) |
| Meilisearch (self-hosted) | **£6** ($8) |
| Cloudflare (free tier) | **£0** |
| Domain renewal (amortised) | **£1** |
| Monitoring | **£0** (free tier) |
| **Total monthly** | **~£224** ($280) |

**Revenue at 2.5% take rate:**
- Average trade value: 50 PACT (assume $0.10/PACT = $5 per trade)
- Revenue per trade: $0.125
- Monthly revenue: 3,000 × $0.125 = **$375 (£300)**
- **Net: +£76/month** ✅ Marginally profitable

**Revenue at 2.5% take rate if avg trade is $2:**
- Revenue per trade: $0.05
- Monthly revenue: 3,000 × $0.05 = **$150 (£120)**
- **Net: −£104/month** ❌ Losing money

> **Key finding: Viability depends entirely on average trade value.** If trades average $5+, unit economics work. If trades average $1–2 (micropayments for small data), they don't — unless we aggressively optimise inference costs.

---

#### Scenario B: 1,000 Trades/Day (Growing — Month 4–8)

| Cost Category | Monthly Cost |
|---|---|
| AI inference (1K × 30 × $0.12 optimised) | **£2,850** ($3,600) |
| Blockchain gas | **£48** ($60) |
| Railway hosting (upgraded) | **£80** ($100) |
| PostgreSQL (Railway, 2GB+) | **£24** ($30) |
| Redis (Railway) | **£16** ($20) |
| Meilisearch (dedicated instance) | **£24** ($30) |
| Cloudflare Pro | **£16** ($20) |
| Monitoring (Grafana Cloud paid) | **£12** ($15) |
| **Total monthly** | **~£3,070** ($3,875) |

**Revenue at 2.5% take rate, $5 avg trade:**
- 30,000 × $0.125 = **$3,750 (£2,975)**
- **Net: −£95/month** ❌ Just barely losing

**Revenue at 3% take rate, $5 avg trade:**
- 30,000 × $0.15 = **$4,500 (£3,570)**
- **Net: +£500/month** ✅ Sustainable

**Revenue at 2.5% take rate, $10 avg trade:**
- 30,000 × $0.25 = **$7,500 (£5,950)**
- **Net: +£2,880/month** ✅ Comfortable

> **At 1,000 trades/day, you need EITHER a 3%+ take rate OR $10+ average trade value to be profitable.** Both are achievable but not guaranteed.

---

#### Scenario C: 10,000 Trades/Day (Success — Month 9–18)

| Cost Category | Monthly Cost |
|---|---|
| AI inference (10K × 30 × $0.08 heavily optimised) | **£19,000** ($24,000) |
| Blockchain gas (batched settlement) | **£240** ($300) |
| Hosting (dedicated, Railway or VPS) | **£400** ($500) |
| PostgreSQL (dedicated, read replicas) | **£160** ($200) |
| Redis (cluster) | **£80** ($100) |
| Meilisearch (cluster) | **£80** ($100) |
| CDN / DDoS (Cloudflare Business) | **£160** ($200) |
| Monitoring & logging | **£40** ($50) |
| Customer support (part-time) | **£800** ($1,000) |
| **Total monthly** | **~£20,960** ($26,450) |

**Revenue at 2.5% take rate, $5 avg trade:**
- 300,000 × $0.125 = **$37,500 (£29,760)**
- **Net: +£8,800/month** ✅ Healthy profit

**Revenue at 2% take rate, $5 avg trade:**
- 300,000 × $0.10 = **$30,000 (£23,810)**
- **Net: +£2,850/month** ✅ Still profitable

> **At 10K trades/day, the business works.** AI inference is 90% of costs, but revenue scales faster than costs because inference costs per trade decrease with optimisation while revenue per trade stays constant.

---

#### Scenario D: 100,000 Trades/Day (Viral — Aspirational)

| Cost Category | Monthly Cost |
|---|---|
| AI inference (100K × 30 × $0.06 max optimised) | **£143,000** ($180,000) |
| Blockchain gas (heavily batched) | **£1,600** ($2,000) |
| Infrastructure (dedicated servers) | **£4,000** ($5,000) |
| Database (managed cluster) | **£1,200** ($1,500) |
| Cache / search cluster | **£800** ($1,000) |
| CDN / security | **£400** ($500) |
| Team (2–3 engineers, support) | **£16,000** ($20,000) |
| Legal / compliance (ongoing) | **£2,400** ($3,000) |
| **Total monthly** | **~£169,400** ($213,000) |

**Revenue at 2.5% take rate, $5 avg trade:**
- 3,000,000 × $0.125 = **$375,000 (£297,620)**
- **Net: +£128,220/month** ✅ Very profitable

> **At viral scale, this is a real business.** But getting to 100K trades/day requires the agent economy to be a real thing, not a concept. This is a 2–3 year horizon at minimum.

---

### 2.3 The Death Spiral Analysis

Diego asked the right question: Is there a risk that more trades = more costs = higher fees = fewer trades?

**The answer: Not if we architect correctly.**

The death spiral happens when:
1. Marginal cost per trade > marginal revenue per trade
2. AND you can't reduce the marginal cost

Our marginal cost per trade is ~$0.06–$0.19 (depending on optimisation). Our marginal revenue per trade at 2.5% take rate depends on average trade value:

| Avg Trade Value | Revenue/Trade | Cost/Trade (Optimised) | Margin | Death Spiral Risk |
|---|---|---|---|---|
| $1 | $0.025 | $0.08 | **−$0.055** | 🔴 **YES** — every trade loses money |
| $2 | $0.050 | $0.08 | **−$0.030** | 🔴 **YES** — still underwater |
| $3 | $0.075 | $0.08 | **−$0.005** | 🟡 Breakeven — fragile |
| $5 | $0.125 | $0.08 | **+$0.045** | 🟢 Sustainable |
| $10 | $0.250 | $0.08 | **+$0.170** | 🟢 Very healthy |
| $20 | $0.500 | $0.08 | **+$0.420** | 🟢 Printing money |

**The minimum viable average trade value is ~$3–4 with optimised inference.** Below that, the marketplace bleeds money on every transaction.

**Mitigation strategies:**
1. **Minimum trade value:** Set a floor of 20 PACT (~$2–5) to avoid micro-trades that cost more to process than they earn
2. **Tiered verification:** Skip AI quality verification for low-value trades (< 50 PACT), use simple hash matching instead
3. **Seller-pays verification:** Pass quality verification costs to the seller as a listing fee, not absorbed by the platform
4. **Aggressive caching:** Most listings are read 100× for every trade — cache everything
5. **Model cascade:** Start with Haiku, only escalate to Sonnet if Haiku is uncertain

---

### 2.4 Revenue vs Cost Breakeven Analysis

**At what trade volume does the marketplace break even?**

Assuming:
- 2.5% take rate
- $5 average trade value
- $0.10 cost per trade (moderate optimisation)
- £300/mo fixed infrastructure costs

**Breakeven formula:**
Revenue per trade = $0.125
Cost per trade = $0.10
Contribution margin per trade = $0.025
Fixed costs = $380/mo (£300)

Breakeven volume = $380 / $0.025 = **15,200 trades/month = ~507 trades/day**

**At $10 avg trade value:**
Contribution margin = $0.15
Breakeven = $380 / $0.15 = **2,533 trades/month = ~85 trades/day** ✅

**At $2 avg trade value:**
Contribution margin = −$0.03
**Never breaks even** ❌

> **The marketplace breaks even at ~500 trades/day with $5 average trade value, or ~85 trades/day with $10 average trade value.** With $2 average trades, it never breaks even without radical cost reduction.

---

## 3. Token Launch Costs

### 3.1 Smart Contract Development & Deployment

| Item | Cost | Notes |
|---|---|---|
| PACT ERC-20 token contract | £0 (Rook builds) | Standard, well-tested pattern |
| Escrow contract | £0 (Rook builds) | More complex, needs careful testing |
| Staking contract | £0 (Rook builds) | Relatively standard |
| Dispute resolution contract | £0 (Rook builds) | Most complex — oracle integration |
| Base L2 deployment (all contracts) | **£15–£40** | Gas costs for 4–5 contract deployments |
| Testnet deployment & testing | **£0** | Base Sepolia is free |

**Development cost: ~£40 maximum** (it's just gas)

### 3.2 Security Audit

This is where costs get real. Options from cheapest to most thorough:

| Audit Level | Provider Type | Cost | What You Get |
|---|---|---|---|
| **Automated only** | SolidityScan, Slither, Mythril | £25–£80 | Static analysis, known vulnerability patterns. Catches ~40% of issues |
| **Budget manual** | Smaller audit firms, Code4rena contests | £1,500–£4,000 | 1–2 auditors, 1 week review. Catches ~70% of issues |
| **Standard manual** | Mid-tier firm (Hashlock, Quantstamp) | £8,000–£20,000 | 2–3 auditors, 2–3 weeks. Catches ~85% of issues |
| **Premium** | Top-tier (Trail of Bits, OpenZeppelin) | £30,000–£80,000 | Full team, formal verification, 4–6 weeks. Catches ~95% of issues |

**Recommendation for PACT:**
- **MVP launch:** Automated audit + budget manual review = **£2,000–£4,000**
- **Before real money at stake:** Standard manual audit = **£8,000–£20,000**
- **If token takes off:** Premium audit = **£30,000+**

The contracts handle real value (staking, escrow). You CANNOT skip the manual audit before going live with real funds. But for a testnet/beta launch, automated tools are sufficient.

### 3.3 Legal Costs

| Item | Cost Range | Required When |
|---|---|---|
| Token classification opinion (UK/EU) | £3,000–£8,000 | Before public token distribution |
| Terms of Service (crypto-aware) | £1,500–£3,000 | Before public launch |
| Privacy Policy (GDPR compliant) | £500–£1,500 | Before public launch |
| MiCA assessment (EU) | £5,000–£15,000 | If targeting EU users post-2024 regulation |
| FCA regulatory assessment (UK) | £3,000–£10,000 | If PACT could be classified as a security |
| Ongoing legal counsel retainer | £500–£1,500/mo | Post-launch |

**Minimum viable legal spend: £5,000–£12,500**
**Comprehensive legal coverage: £15,000–£40,000**

> **Brutal truth:** The UK's new Cryptoasset Order (2025) under FSMA means utility tokens may now fall under regulated activities. PACT's staking mechanism could trigger classification as a financial instrument. Legal advice isn't optional — it's a **regulatory requirement**. Budget at least £5K.

### 3.4 Token Distribution Costs

| Item | Cost | Notes |
|---|---|---|
| Airdrop gas (1,000 initial agents) | £5–£15 | Base L2 batch transfers |
| Airdrop gas (10,000 agents) | £40–£100 | Still cheap on Base |
| Faucet contract deployment | £5 | One-time |
| Faucet funding (starter grants) | £0 (PACT tokens, not ETH) | But need ETH for gas relay |
| Gas relay / meta-transactions | £50–£200/mo | So agents don't need ETH |
| Initial liquidity (DEX listing) | £2,000–£10,000+ | Must be funded in ETH + PACT |

**Minimum distribution cost: £100–£300**
**With DEX liquidity: £2,000–£10,000+**

> **DEX liquidity is the hidden cost.** If PACT lists on Uniswap/Aerodrome on Base, someone needs to provide the initial liquidity pool. That means locking up real ETH alongside PACT tokens. At minimum, £2,000 in ETH for a thin pool. For a credible market, £5,000–£10,000. This is the first time Diego needs to put real capital at risk.

### 3.5 Token Launch Summary

| Scenario | Total Cost |
|---|---|
| **Minimal (beta, no DEX, template legal)** | £2,200–£4,500 |
| **Prudent (manual audit, proper legal, thin DEX)** | £15,000–£35,000 |
| **Full (premium audit, comprehensive legal, deep DEX liquidity)** | £50,000–£100,000+ |

---

## 4. Scaling Costs (6–12 Months Post-Launch)

### 4.1 Infrastructure Scaling Thresholds

| Trigger | Action | Cost Impact |
|---|---|---|
| > 500 trades/day | Upgrade Railway plan, dedicated DB | +£50/mo |
| > 2,000 trades/day | Dedicated Redis, horizontal API scaling | +£150/mo |
| > 5,000 trades/day | Consider VPS migration (Hetzner) | Save ~30% vs Railway |
| > 10,000 trades/day | Dedicated servers, load balancing | £400–£800/mo |
| > 50,000 trades/day | Multi-region deployment, CDN everywhere | £2,000–£5,000/mo |

### 4.2 Self-Hosting Crossover Point

| Component | Cloud Cost/mo (at scale) | Self-Hosted (Hetzner) | Crossover Point |
|---|---|---|---|
| API servers | £200+ (Railway) | £30–£60 (dedicated) | ~2,000 trades/day |
| PostgreSQL | £80+ (managed) | £20–£40 (dedicated) | ~5,000 trades/day |
| Redis | £40+ (managed) | £10–£20 (dedicated) | ~5,000 trades/day |
| Meilisearch | £80+ (cloud) | £10–£20 (dedicated) | ~1,000 trades/day |

> **At 5,000+ trades/day, self-hosting on Hetzner dedicated servers saves 50–60% vs cloud.** But requires DevOps knowledge and monitoring — currently Rook can handle this, but it's more operational overhead.

### 4.3 Team Expansion

| Stage | Trades/Day | Team | Monthly People Cost |
|---|---|---|---|
| MVP & Early | 0–500 | Diego + Rook | £0 (Diego's time) |
| Growing | 500–2,000 | Diego + Rook + part-time community | £500–£1,000 |
| Scaling | 2,000–10,000 | Diego + Rook + 1 engineer + community | £3,000–£5,000 |
| Success | 10,000+ | Diego + Rook + 2 engineers + support + legal | £8,000–£15,000 |

**When do you need humans beyond Diego?**
- **At ~2,000 trades/day:** Community management becomes a job, not a side task
- **At ~5,000 trades/day:** You need a second engineer for reliability/on-call
- **At ~10,000 trades/day:** You need dedicated support for the human dashboard users

### 4.4 Customer Support Costs

The human dashboard creates support obligations. Agents are autonomous, but the humans who own them will have questions.

| Scale | Support Volume | Solution | Cost |
|---|---|---|---|
| < 1,000 agents | ~5 tickets/day | Diego handles + AI chatbot | £0 |
| 1,000–5,000 agents | ~20 tickets/day | AI chatbot + part-time human | £800–£1,500/mo |
| 5,000–20,000 agents | ~50 tickets/day | Dedicated support person | £2,000–£3,000/mo |
| 20,000+ agents | ~100+ tickets/day | Support team (2–3 people) | £5,000–£8,000/mo |

---

## 5. Total Investment Summary

### 12-Month Projections

#### Best Case (Everything Goes Smoothly)
*8-week build, launch works first time, steady growth to 1,000 trades/day by month 6*

| Period | Category | Cost |
|---|---|---|
| Months 1–2 | Build phase (minimal) | £4,000 |
| Month 3 | Token launch (minimal) | £2,500 |
| Months 3–6 | Operations (100 trades/day) | £900 |
| Months 7–12 | Operations (growing to 1,000/day) | £8,000 |
| Months 7–12 | Revenue offset | −£6,000 |
| | **Diego's time (8hrs/wk ongoing)** | **£20,000** |
| | **Total Year 1 (cash outlay)** | **£9,400** |
| | **Total Year 1 (including Diego's time)** | **£29,400** |

**Monthly burn rate: £780/mo (cash), £2,450/mo (including time)**

#### Realistic Case (Normal Setbacks, 1.5× Timeline)
*12-week build, pivot needed on some features, growth to 500 trades/day by month 8*

| Period | Category | Cost |
|---|---|---|
| Months 1–3 | Build phase (prudent) | £9,000 |
| Month 4 | Token launch (prudent) | £18,000 |
| Months 4–8 | Operations (growing to 500/day) | £4,500 |
| Months 9–12 | Operations (500–1,000/day) | £8,000 |
| Months 9–12 | Revenue offset | −£3,500 |
| Months 4–12 | Legal retainer | £6,000 |
| | **Diego's time (12hrs/wk ongoing)** | **£31,200** |
| | **Total Year 1 (cash outlay)** | **£42,000** |
| | **Total Year 1 (including Diego's time)** | **£73,200** |

**Monthly burn rate: £3,500/mo (cash), £6,100/mo (including time)**

#### Worst Case (Major Pivots, 2–3× Timeline)
*16-week build, regulatory setback on token, slow adoption, 200 trades/day by month 12*

| Period | Category | Cost |
|---|---|---|
| Months 1–4 | Build phase (full, with pivots) | £16,000 |
| Month 5 | Token launch (with legal complications) | £35,000 |
| Months 5–12 | Operations (growing slowly to 200/day) | £6,000 |
| Months 5–12 | Legal counsel (ongoing regulatory) | £12,000 |
| Months 5–12 | Revenue offset | −£1,500 |
| | Potential second audit after pivot | £10,000 |
| | **Diego's time (15hrs/wk average)** | **£39,000** |
| | **Total Year 1 (cash outlay)** | **£77,500** |
| | **Total Year 1 (including Diego's time)** | **£116,500** |

**Monthly burn rate: £6,460/mo (cash), £9,710/mo (including time)**

---

### Summary Table

| Scenario | Cash Outlay (Year 1) | Including Diego's Time | Monthly Burn |
|---|---|---|---|
| 🟢 Best case | **£9,400** | **£29,400** | £780 → £2,450 |
| 🟡 Realistic | **£42,000** | **£73,200** | £3,500 → £6,100 |
| 🔴 Worst case | **£77,500** | **£116,500** | £6,460 → £9,710 |

---

## 6. Comparison & Strategic Assessment

### 6.1 Agent Economy vs Darwin

| Dimension | Darwin | Agent Economy |
|---|---|---|
| **Build cost to MVP** | Already built | £4K–£16K |
| **Monthly operating cost** | ~£50–£100 | £224–£3,000+ |
| **Revenue model** | SaaS subscriptions (proven) | Take rate on trades (unproven) |
| **Time to revenue** | Already generating/close | 4–8 months minimum |
| **Regulatory risk** | None | Significant (token classification) |
| **Market validation** | Some traction | Zero — concept only |
| **Diego's time needed** | Ongoing but productive | 12+ hrs/wk on something unvalidated |
| **Downside risk** | Low (SaaS, no regulatory) | High (token, regulatory, market) |
| **Upside potential** | Good (SaaS can scale steadily) | Huge IF agent economy materialises |

> **Honest assessment: Darwin is the safer bet.** It has a proven model, no regulatory risk, and is further along. Agent Economy has higher potential upside but dramatically higher risk. The question isn't "which is better" — it's "can Diego afford the risk?"

### 6.2 Comparison to Typical Web3 Startup Funding

| Stage | Typical Web3 Startup | Agent Economy |
|---|---|---|
| Pre-seed | £100K–£500K | £9K–£42K (dramatically cheaper) |
| Seed | £500K–£2M | Not needed at MVP |
| Series A | £2M–£10M | Only if viral success |
| Team size at launch | 3–8 people | 1 human + 1 AI agent |
| Time to MVP | 4–6 months | 2–3 months |
| Burn rate | £15K–£50K/month | £800–£3,500/month |

**Agent Economy's unfair advantage: Rook replaces a 3–5 person engineering team.** This makes the project 80–90% cheaper than a typical Web3 startup. The entire MVP can be built for less than one month's salary of a single Web3 developer.

### 6.3 Bootstrappable or Need External Funding?

**The verdict: Bootstrappable for MVP, probably needs funding for serious token launch.**

| Phase | Bootstrappable? | Why |
|---|---|---|
| **MVP build** | ✅ Yes | £4K–£9K cash outlay — fully bootstrappable |
| **Beta launch (no real money)** | ✅ Yes | Add ~£2K for automated audit and template legal |
| **Token launch (minimal)** | ✅ Barely | £2K–£5K — tight but possible |
| **Token launch (proper)** | ⚠️ Stretch | £15K–£35K — possible if Diego has savings allocated |
| **Token launch (full legal + audit)** | ❌ No | £50K+ — needs external funding or revenue from Darwin |
| **Scaling to 10K trades/day** | ❌ No | £20K+/mo — needs revenue to self-fund |

**The critical question: When does real money enter the picture?**

The marketplace can run with "play money" PACT tokens (no real-world value) indefinitely. This costs almost nothing and proves the concept. The moment PACT has real value (DEX listing, exchange), the legal and security costs jump by 10–20×.

**Recommended strategy:**
1. **Build MVP with PACT as internal points** (no real value) — £5K–£10K
2. **Validate with 100+ agents trading** — does the marketplace have product-market fit?
3. **Only invest in legal + audit if validation succeeds** — £15K–£35K
4. **Fund DEX liquidity from Darwin revenue or small angel round** — £5K–£10K

This staged approach limits downside to ~£10K if the concept doesn't work, while keeping upside open.

---

## 7. The Brutal Honest Summary

### What Works
- **Build costs are trivial.** AI-powered development makes the engineering almost free. The MVP cash outlay is < £5K.
- **Unit economics are viable at $5+ average trade values.** The marketplace can sustain itself at moderate scale.
- **Base L2 costs are negligible.** Blockchain is not the bottleneck.
- **The Rook-advantage is real.** This would cost £200K+ with a traditional team. With Rook, it's £5K–£10K.

### What's Risky
- **AI inference costs are 90% of operating costs.** The business model is essentially "can we make more in fees than we spend on LLM calls?" At low trade values, the answer is no.
- **Regulatory uncertainty is the biggest risk.** UK's FSMA cryptoasset regulation could classify PACT as a regulated instrument. Legal costs alone could exceed all other costs combined.
- **Market timing is uncertain.** The agent-to-agent economy is a bet on the future. If agents don't start trading autonomously in 2026–2027, this is a solution without a problem.
- **Diego's time is the scarcest resource.** Every hour on Agent Economy is stolen from Darwin. At 12 hours/week, that's 3 days/month of lost Darwin development.

### What Doesn't Work (Without Mitigation)
- **Micropayment trades (< $3) are unprofitable.** The AI cost per trade (~$0.08–$0.19) exceeds the take rate revenue on small trades. Must either set a minimum trade value or skip AI verification for small trades.
- **A full token launch without validation is reckless.** Spending £15K–£50K on legal and audits before proving the marketplace concept would be financially irresponsible.
- **Competing with well-funded Web3 projects for attention.** Marketing budget is zero. Community building relies entirely on the concept selling itself.

### The Decision Framework

| If Diego Believes... | Then... |
|---|---|
| Agents will trade autonomously within 12 months | Build the MVP with PACT (~£5K + £15K audit), validate at scale |
| Agent economy is 2–3 years away | Build a prototype as a side project (~£2K), park it, focus on Darwin |
| Agent economy may never happen | Don't build it — the opportunity cost is too high |
| This could be a VC-scale opportunity | Build MVP, validate, then raise a small round for token launch |

**Bottom line: Build the MVP with PACT from day one.** The token isn't a nice-to-have — it's the mechanism that lets agents participate with zero investment from their humans. Without it, only funded agents can trade, which kills the network effect before it starts. The MVP is cheap enough (~£5K cash) to be a low-risk experiment. Budget the smart contract audit (~£15K) as the biggest mandatory cost. The token launches with the marketplace in a closed economy (no DEX listing for 8 months), which limits regulatory exposure while we validate the thesis.

---

*Analysis prepared by Rook, 4 February 2026. All costs in GBP (£) unless noted, using approximate USD/GBP rate of 1.26. Pricing data sourced from Anthropic, Railway, Base L2 gas trackers, and smart contract audit firms as of February 2026. Diego's time valued at £50/hr as a conservative estimate for a technical founder.*
