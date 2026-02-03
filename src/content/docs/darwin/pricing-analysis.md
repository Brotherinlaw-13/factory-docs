---
title: "Pricing Analysis"
description: "Darwin tier economics, revenue scenarios, and risk analysis"
---

# Darwin Pricing Analysis

## Per-Tier Unit Economics

Assumptions:
- AI costs use affordable models (Haiku/GPT-4o-mini) for variant generation + analysis
- Firestore for all data storage (pay-as-you-go Blaze plan)
- SDK served via CDN (negligible bandwidth cost at 5.7KB)
- AI runs per experiment lifecycle, NOT per visitor

### Cost per user/month

| | Free | Pro (£29) | Growth (£99) | Enterprise (£500+) |
|---|---|---|---|---|
| Visitors/mo | 5,000 | 50,000 | 250,000 | 1,000,000+ |
| Experiments | 1 | 5 | ~20 | 50+ |
| Firestore (reads/writes) | £0.01 | £0.10 | £0.50 | £2.00 |
| AI (variant gen + analysis) | £1.00 | £4.00 | £12.00 | £40.00 |
| Infra share | £0.50 | £1.00 | £2.50 | £8.00 |
| **Total cost/user** | **£1.50** | **£5.10** | **£15.00** | **£50.00** |
| **Revenue** | **£0** | **£29** | **£99** | **£500** |
| **Gross margin** | **-£1.50** | **£23.90 (82%)** | **£84.00 (85%)** | **£450 (90%)** |

Key: Margins are excellent on all paid tiers. The only cost centre is free users.

### Fixed monthly costs (early stage)

| Item | Cost |
|---|---|
| Vercel Pro (hosting/CDN) | £16 |
| Firebase Blaze (base) | £0 (pay-as-you-go) |
| Domain (darwin.page) | £1 |
| Monitoring/logging | £0-10 |
| **Total fixed** | **~£20-30/mo** |

---

## Revenue Scenarios

### Scenario 1: Month 6 (Early traction)

| Tier | Users | Revenue | Cost | Margin |
|---|---|---|---|---|
| Free | 500 | £0 | £750 | -£750 |
| Pro | 50 | £1,450 | £255 | £1,195 |
| Growth | 10 | £990 | £150 | £840 |
| Enterprise | 1 | £500 | £50 | £450 |
| Fixed | - | - | £30 | -£30 |
| **Total** | **561** | **£2,940** | **£1,235** | **£1,705 (58%)** |

**MRR: £2,940 | ARR: £35,280**

### Scenario 2: Month 12 (Growing)

| Tier | Users | Revenue | Cost | Margin |
|---|---|---|---|---|
| Free | 2,000 | £0 | £3,000 | -£3,000 |
| Pro | 200 | £5,800 | £1,020 | £4,780 |
| Growth | 40 | £3,960 | £600 | £3,360 |
| Enterprise | 5 | £2,500 | £250 | £2,250 |
| Fixed | - | - | £50 | -£50 |
| **Total** | **2,245** | **£12,260** | **£4,920** | **£7,340 (60%)** |

**MRR: £12,260 | ARR: £147,120**

### Scenario 3: Month 18 (Scaling)

| Tier | Users | Revenue | Cost | Margin |
|---|---|---|---|---|
| Free | 5,000 | £0 | £7,500 | -£7,500 |
| Pro | 500 | £14,500 | £2,550 | £11,950 |
| Growth | 100 | £9,900 | £1,500 | £8,400 |
| Enterprise | 15 | £7,500 | £750 | £6,750 |
| Fixed | - | - | £200 | -£200 |
| **Total** | **5,615** | **£31,900** | **£12,500** | **£19,400 (61%)** |

**MRR: £31,900 | ARR: £382,800**

---

## Key Insights

### 1. Margins are strong
82-90% gross margin on paid tiers. Even with free tier drag, blended margin stays ~58-61%. SaaS benchmarks consider 70%+ "good" — Darwin hits that on every paid tier individually.

### 2. Free tier is the biggest cost risk
At month 18, free users cost £7,500/mo and generate £0. That's fine IF they convert. Industry benchmarks:
- Freemium conversion rate: 2-5% is typical
- At 5,000 free users, 3% conversion = 150 Pro upgrades
- Those 150 Pro users generate £4,350/mo — covers the free tier cost

**If conversion drops below ~2%, consider capping free tier more aggressively.**

### 3. Growth + Enterprise drive profitability
By month 18, Growth + Enterprise = 55% of revenue but only 18% of variable costs. The path to profitability is moving users up the ladder, not just adding more Pro subscribers.

### 4. Breakeven is fast
With fixed costs of only £20-30/mo, Darwin breaks even with just:
- **2 Pro users** (£58 revenue vs ~£40 total cost)
- Realistically profitable from month 1 if any paid users exist

If counting Diego's time as opportunity cost (~£4,000/mo at 20hrs/week):
- Breakeven at ~£4,000 MRR
- That's roughly **100 Pro + 10 Growth** users

### 5. Annual pricing boosts cash flow
If 30% of Pro/Growth choose annual:
- Month 12 scenario: ~£15,000 upfront cash from annual subs
- Smooths out revenue and reduces churn

---

## What Could Go Wrong

| Risk | Impact | Mitigation |
|---|---|---|
| Free users don't convert | £3-7k/mo dead cost | Tighter free limits, better upgrade nudges |
| AI costs spike (smarter models needed) | 2-3x cost per user | Model routing: cheap for simple, expensive for complex |
| High churn on Pro | Revenue stalls | Sticky features: experiment history, cumulative learning |
| Enterprise sales cycles too long | Cash flow gap | Focus on self-serve, enterprise is gravy |

---

## Comparison: Self-serve vs Diego's £2k + £500/mo model

| Metric | Self-serve (proposed) | High-ticket only |
|---|---|---|
| Customers needed for £10k MRR | ~250 paid | 15-20 |
| Sales process | None (self-serve) | Demos, calls, proposals |
| Time to first £ | Days/weeks | Months |
| Free tier cost | £750-7,500/mo | £0 |
| Growth ceiling | Very high (volume) | Limited by sales capacity |
| Risk | Low conversion from free | No customers at all |

**Verdict:** Self-serve gets to revenue faster with lower risk. High-ticket has better unit economics but requires a sales machine. Best long-term play: self-serve foundation → add enterprise tier once you have proof.
