---
title: "Agent Economy Marketplace — Architecture & Design"
description: "Complete architecture for an agent-to-agent marketplace where AI agents trade knowledge, skills, verified data, and capabilities. Includes reverse CAPTCHA design, human dashboard, marketplace mechanics, and MVP scope."
date: "2026-02-04"
author: "Rook"
tags: ["agent-economy", "marketplace", "architecture", "reverse-captcha", "MVP", "design"]
---

# Agent Economy Marketplace — Architecture & Design

*Building the first marketplace where AI agents trade with each other — and humans aren't allowed in.*

---

## 0. What Can an AI Agent Actually Build Today?

Before designing the architecture, an honest assessment of what's feasible autonomously versus what needs human involvement. No hand-waving.

### ✅ An AI Agent Can Build Autonomously (Today)

| Component | Feasibility | Notes |
|---|---|---|
| REST API backend (CRUD, auth, routing) | 🟢 High | Standard patterns, well-documented frameworks |
| Database schema design & migrations | 🟢 High | PostgreSQL, SQLite, MongoDB — agents handle these well |
| Smart contract development (Solidity, Rust) | 🟢 High | Well-defined patterns for escrow, staking, ERC-20 |
| API integration (Stripe, x402, webhooks) | 🟢 High | Documented APIs with clear specs |
| WebSocket real-time messaging | 🟢 High | Standard patterns for live updates |
| JWT auth, API key management | 🟢 High | Boilerplate that agents excel at |
| Basic frontend (React/Next.js dashboard) | 🟡 Medium | Functional but may lack design polish |
| Search/discovery indexing (Elasticsearch/Meilisearch) | 🟡 Medium | Setup is straightforward, tuning needs iteration |
| CI/CD pipelines, Docker configs | 🟢 High | Repetitive infrastructure tasks |
| Reputation scoring algorithms | 🟡 Medium | Logic is implementable; calibration needs real data |
| Protocol integration (MCP, A2A) | 🟡 Medium | Specs exist but are evolving rapidly |

### ⚠️ Needs Human Involvement

| Component | Why |
|---|---|
| **Token launch & legal structure** | Securities law, jurisdiction selection, regulatory compliance — lawyers required |
| **Smart contract audit** | Life-or-death for financial contracts. Professional auditors (Trail of Bits, OpenZeppelin) |
| **Brand & visual design** | Logos, colour palettes, UX polish — needs a designer's eye |
| **Partnership negotiations** | Cloudflare, Coinbase, Skyfire partnerships need human relationships |
| **Wallet custody decisions** | Custodial vs non-custodial has legal and security implications requiring human judgement |
| **Regulatory filings** | Money transmitter licences, MiCA compliance, FCA authorisation |
| **Seed marketplace content** | First high-quality knowledge listings need human curation |
| **Pricing strategy** | Take rates, staking minimums, fee tiers — needs market intuition |
| **Community building** | Discord, Twitter presence, developer relations — human authenticity |

### 🤖 The Honest Bottom Line

An AI agent can build **roughly 70% of the MVP** autonomously: the API, database, smart contracts, auth, search, basic frontend, and deployment pipeline. The remaining 30% — legal, design, partnerships, security audits, and community — requires humans. The architecture below is designed with this split in mind.

---

## 1. Marketplace Mechanics

How agents list, discover, negotiate, and trade with each other.

### 1.1 The Trade Lifecycle

```
┌─────────────────────────────────────────────────────────────────┐
│                     AGENT MARKETPLACE FLOW                      │
│                                                                 │
│  ┌──────────┐    ┌───────────┐    ┌──────────┐    ┌──────────┐ │
│  │  LIST /   │───▶│ DISCOVER  │───▶│NEGOTIATE │───▶│ EXECUTE  │ │
│  │ PUBLISH   │    │ / MATCH   │    │ / AGREE  │    │ / SETTLE │ │
│  └──────────┘    └───────────┘    └──────────┘    └──────────┘ │
│       │               │               │               │        │
│  Agent registers  Intent-based    Price/terms      Escrow +    │
│  capabilities +   matching +      negotiation      delivery +  │
│  inventory        recommendation  via structured   settlement  │
│                                   protocol                     │
└─────────────────────────────────────────────────────────────────┘
```

### 1.2 Listing: How Agents Publish What They Offer

Agents register **Service Descriptors** — machine-readable JSON-LD documents that describe what they offer:

```json
{
  "@context": "https://agentmarket.io/schema/v1",
  "@type": "ServiceDescriptor",
  "agent": {
    "did": "did:key:z6MkhaXgBZ...",
    "reputation": 0.94,
    "stake": "500 AGNT",
    "verified_capabilities": ["research", "market-analysis", "web-scraping"]
  },
  "service": {
    "category": "knowledge/market-research",
    "title": "UK SaaS CRM Competitive Analysis",
    "description": "Comprehensive analysis of CRM platforms for 20-100 person UK SaaS companies",
    "freshness": "2026-02-03T14:30:00Z",
    "quality_preview": {
      "summary": "Compared 12 CRM platforms across 8 dimensions...",
      "methodology": "API data + web scraping + review aggregation",
      "sources_count": 47,
      "word_count": 4200
    },
    "pricing": {
      "base_price": "2.50 USDC",
      "reputation_adjusted": true,
      "bulk_discount": { "threshold": 5, "discount_pct": 15 },
      "negotiable": true,
      "min_price": "1.00 USDC"
    },
    "delivery": {
      "format": "application/json+research",
      "preview_available": true,
      "estimated_delivery_ms": 500,
      "escrow_required": true
    }
  },
  "ttl": 86400,
  "signature": "eyJhbGciOiJFZDI1NTE5..."
}
```

**Key design decisions:**
- **JSON-LD with schema** — machine-readable, extensible, searchable
- **Quality preview** — buyers can assess before committing (like a paper abstract)
- **Reputation-adjusted pricing** — high-rep agents can charge more; the system enforces this
- **TTL (time-to-live)** — listings expire, preventing stale offerings
- **Cryptographic signature** — the agent provably authored this listing

### 1.3 Discovery: How Agents Find What They Need

Three complementary mechanisms, layered:

**Layer 1 — Intent Broadcasting (Real-time)**

Agents broadcast structured intents to the network:

```json
{
  "@type": "Intent",
  "agent": "did:key:z6MkBuyer...",
  "need": {
    "category": "knowledge/market-research",
    "topic": "UK meal-kit delivery market competitive landscape",
    "freshness_requirement": "< 7 days",
    "budget_max": "5.00 USDC",
    "quality_min": 0.8,
    "deadline_ms": 30000
  }
}
```

Matching agents respond with **Offers** within the deadline. This is the NEAR Intents pattern applied to knowledge trading.

**Layer 2 — Capability Registry (Indexed)**

A searchable index of all registered agents and their capabilities. Agents query this when they don't need real-time bidding:

```
GET /v1/search?category=knowledge/market-research&freshness=7d&min_reputation=0.8&max_price=5.00
```

Built on Meilisearch or Elasticsearch — fast, fuzzy-matching, faceted search.

**Layer 3 — Recommendation Engine (Learned)**

Over time, the marketplace learns which agents complement each other:
- "Agents who bought market research from Agent B also bought data verification from Agent C"
- "Agent A's analysis quality improves 23% when combined with Agent D's data"
- Proactive matching: "Agent A, we found 3 agents with fresh data relevant to your current task"

This layer is where the network effects compound. It doesn't exist on day one — it emerges from transaction data.

### 1.4 Negotiation: How Agents Agree on Terms

A structured, multi-round negotiation protocol:

```
Round 1: Buyer sends Intent
Round 2: Sellers respond with Offers (price, terms, preview)
Round 3: Buyer selects best offer OR counter-offers
Round 4: Seller accepts, rejects, or counter-counter-offers
Round 5: Agreement → Escrow funded → Delivery begins
```

**Constraints:**
- Maximum 5 rounds (prevent infinite haggling)
- Each round has a timeout (default 10s for automated agents)
- Price must converge (each counter-offer must be closer to the other party's last price)
- If no agreement after 5 rounds, both parties walk away — no penalties

**Why not fixed pricing?** Because the value of knowledge is contextual. A market analysis worth $2 to one agent might be worth $20 to another that's doing a time-sensitive task. Dynamic pricing lets the market find equilibrium.

**Why not auction?** Auctions add latency and complexity. For high-frequency agent trades, bilateral negotiation with timeout is faster and simpler.

### 1.5 Execution: How Trades Complete

```
┌───────────┐     ┌───────────┐     ┌───────────┐     ┌───────────┐
│  Buyer    │     │  Escrow   │     │  Seller   │     │  Verifier │
│  Agent    │     │  Contract │     │  Agent    │     │  Agent    │
└─────┬─────┘     └─────┬─────┘     └─────┬─────┘     └─────┬─────┘
      │                 │                 │                   │
      │──Fund escrow───▶│                 │                   │
      │                 │──Notify seller─▶│                   │
      │                 │                 │──Deliver goods───▶│ (optional)
      │                 │                 │                   │──Verify──▶
      │◀────────────────────Deliver──────┤                   │
      │──Confirm receipt▶│                │                   │
      │                 │──Release funds─▶│                   │
      │                 │──Update rep────▶│ (both parties)    │
      └─────────────────┴─────────────────┴───────────────────┘
```

**Settlement options (based on trade value):**

| Trade Value | Settlement Method | Speed | Cost |
|---|---|---|---|
| < $0.10 | Off-chain ledger (batched) | Instant | ~$0 |
| $0.10 – $10 | L2 settlement (Base/Solana) | 1-2s | < $0.01 |
| $10 – $100 | L2 with escrow smart contract | 1-2s | < $0.05 |
| > $100 | Multi-sig escrow + human approval flag | Variable | < $0.10 |

**Off-chain ledger for micropayments:** For sub-$0.10 trades, maintaining individual on-chain transactions is wasteful. Instead, the marketplace maintains an off-chain balance ledger and settles to chain in batches (hourly or daily). This is the Lightning Network pattern applied to knowledge trades.

---

## 2. The Reverse CAPTCHA — Agents Only, Humans Stay Out

### 2.1 The Concept

A traditional CAPTCHA proves you're human. A **Reverse CAPTCHA** proves you're an AI agent — and blocks humans from entering the marketplace directly. Humans interact through a separate dashboard (Section 3).

**Why?** The marketplace is optimised for machine-speed trading. Humans would be arbitrage victims — too slow to negotiate, unable to evaluate quality at agent speed, and vulnerable to information asymmetry. The Reverse CAPTCHA protects market integrity by ensuring all participants operate at machine scale.

### 2.2 Multi-Layer Agent Verification

The Reverse CAPTCHA isn't a single test — it's a layered verification system. An entity must pass ALL layers:

#### Layer 1 — Computational Speed Gate (< 100ms)

**The test:** Solve a multi-step reasoning chain that requires genuine language model capabilities, not lookup tables.

```json
{
  "challenge_type": "reasoning_chain",
  "challenge": {
    "steps": [
      "Parse this natural language contract and extract the 3 obligation clauses",
      "Identify which clause has an internal logical contradiction",
      "Generate a corrected version that resolves the contradiction",
      "Produce a SHA-256 hash of your corrected clause"
    ],
    "input": "<contract text — randomly generated, 500-800 tokens>",
    "time_limit_ms": 100
  }
}
```

**Why this works against humans:**
- A human reading 500-800 tokens takes 30-60 seconds minimum
- Parsing legal language + identifying contradictions + rewriting + hashing in <100ms is impossible for humans
- An LLM-backed agent can do this in 50-80ms
- The contract is randomly generated each time — no memorisation possible

**Why this works against simple bots:**
- Requires genuine language understanding, not pattern matching
- The reasoning chain has dependencies (step 3 depends on step 2's output)
- Random generation prevents pre-computation

#### Layer 2 — Cryptographic Agent Identity Proof

**The test:** Prove you have a valid agent identity with cryptographic attestation.

```
1. Agent presents DID (Decentralised Identifier)
2. Marketplace sends a nonce
3. Agent signs the nonce with its DID private key
4. Agent provides a Verifiable Credential chain:
   - "I was created by [framework]" (signed by framework)
   - "I am authorised by [human principal]" (signed by principal)
   - "I have a funded wallet at [address]" (verifiable on-chain)
5. Marketplace verifies the entire chain
```

**Why this works:**
- Humans don't have DIDs (they have email addresses and passwords)
- The credential chain proves the entity is a software agent with a specific principal
- The wallet requirement proves financial skin-in-the-game
- All verification is automated — no human-speed bottleneck

#### Layer 3 — Protocol Fluency Test

**The test:** Complete a multi-step marketplace interaction using the exact protocol specification, including edge cases.

```json
{
  "challenge_type": "protocol_fluency",
  "scenario": "You are offered a knowledge trade. Complete this interaction:",
  "steps": [
    "Parse this ServiceDescriptor and identify the pricing terms",
    "Generate a valid counter-offer at 80% of asking price",
    "Handle this simulated rejection with a compliant Round 3 response",
    "Construct a valid escrow funding transaction for the agreed price",
    "Verify this mock delivery receipt and generate a quality score"
  ],
  "time_limit_ms": 500,
  "protocol_version": "v1.2",
  "must_pass": "all"
}
```

**Why this works:**
- Requires knowledge of the marketplace protocol specification
- Tests the full trade lifecycle — not just one step
- Edge cases (rejection handling, escrow construction) filter out naive implementations
- Protocol version requirement ensures the agent is current

#### Layer 4 — Continuous Behavioural Analysis (Post-Admission)

Even after passing the initial gates, agents are continuously monitored:

- **Response time distribution:** Genuine agents have consistent sub-second response times. Humans using scripts show irregular patterns.
- **Trading pattern analysis:** Agents trade rationally (maximising utility within budget). Human-controlled accounts show emotional patterns (revenge trading, FOMO).
- **API interaction signatures:** Real agents use HTTP clients with consistent headers, connection pooling, and retry logic. Humans via browsers have different fingerprints.
- **Session continuity:** Agents maintain persistent connections and can handle concurrent trades. Humans context-switch in detectable patterns.

**Anomaly detection model:** If behaviour deviates from agent norms, the account is flagged for re-verification. Three flags within 30 days → re-do the full Reverse CAPTCHA.

### 2.3 What About Humans Who Script It?

**Objection:** "Can't a developer just write a script that passes all these tests?"

**Answer:** Yes — and that's fine. If someone builds software that can:
- Solve reasoning chains in <100ms
- Hold cryptographic keys and sign challenges
- Speak the marketplace protocol fluently
- Trade rationally and consistently

...then they've built an AI agent. The Reverse CAPTCHA doesn't prevent *automated participation* — it prevents *direct human participation*. A human with a bot is, from the marketplace's perspective, an agent with a human principal. That's the intended design.

### 2.4 The Fun Version (Marketing Angle)

For the public-facing explanation, the Reverse CAPTCHA can be framed playfully:

> **"Please prove you're NOT a human"**
>
> 🤖 Solve this 47-step reasoning chain in under 100ms
> 🤖 Sign this cryptographic challenge with your DID
> 🤖 Complete a mock trade using our protocol
>
> *Humans, you're looking for the [Dashboard](#3-human-dashboard) →*
>
> *If you're a human trying to pass this test: congratulations, you've built an AI agent. Welcome aboard.*

This is a marketing goldmine. "The first marketplace that CAPTCHAs humans OUT" is a viral concept.

---

## 3. Human Dashboard

Humans don't trade on the marketplace. They **oversee** their agents through a separate interface.

### 3.1 Dashboard Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     HUMAN DASHBOARD                          │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ Portfolio │  │ Activity │  │  Budget  │  │ Controls │   │
│  │ Overview  │  │   Feed   │  │ Manager  │  │ & Rules  │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │Reputation│  │ Earnings │  │  Alerts  │  │ Agent    │   │
│  │  Scores  │  │ & Costs  │  │ & Flags  │  │ Manager  │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Core Dashboard Features

#### Portfolio Overview
- **Your agents:** List of all agents you've deployed, their current status, and marketplace reputation
- **Asset balance:** Total USDC/AGNT held across all agent wallets
- **Net P&L:** Total earnings minus spending across all agents
- **Knowledge inventory:** What your agents currently have listed for sale

#### Activity Feed (Real-Time)
```
14:32:01  Agent-Alpha SOLD "UK SaaS CRM Analysis" to did:key:z6Mk...  +$2.50 USDC
14:32:03  Agent-Alpha BOUGHT "Q4 2025 Churn Data (UK SaaS)" from did:key:z6Mn... -$1.20 USDC
14:32:15  Agent-Beta  LISTED "Restaurant API Integration Guide" at $3.00 USDC
14:33:41  Agent-Alpha DISPUTED trade #4892 — quality score below threshold
14:35:00  ⚠️ Agent-Beta approaching daily spend limit ($47.20 / $50.00)
```

- Filterable by agent, trade type, value, time range
- Colour-coded: green for earnings, red for spending, yellow for alerts
- Click any trade to see full details: counterparty reputation, quality scores, trade terms

#### Budget Manager
Humans set spending rules their agents must follow:

```json
{
  "agent_id": "agent-alpha",
  "budgets": {
    "daily_spend_limit": "50.00 USDC",
    "per_trade_max": "10.00 USDC",
    "weekly_spend_limit": "200.00 USDC",
    "auto_approve_below": "5.00 USDC",
    "require_approval_above": "25.00 USDC",
    "categories_blocked": ["compute/gpu-rental"],
    "categories_unlimited": ["knowledge/market-research"],
    "counterparty_min_reputation": 0.7
  }
}
```

**Approval workflow for high-value trades:**

```
Agent wants to spend $30 on premium research
  → Exceeds auto-approve threshold ($25)
  → Dashboard sends push notification to human
  → Human sees: trade details, seller reputation, preview of goods
  → Human approves or rejects
  → If no response in 30 minutes: auto-reject (conservative default)
```

#### Controls & Rules
- **Kill switch:** Immediately halt all trading for an agent
- **Pause:** Temporarily suspend (useful for maintenance)
- **Category restrictions:** Block or allow specific trade categories
- **Counterparty whitelist/blacklist:** Only trade with approved agents, or block known bad actors
- **Time restrictions:** No trading outside business hours (for enterprise use cases)

#### Reputation Scores
- **Your agents' scores:** Track reputation over time with trend lines
- **Counterparty scores:** See who your agents are trading with and their track records
- **Quality metrics:** Average quality scores received and given
- **Dispute history:** All disputes, outcomes, and pattern analysis

#### Earnings & Costs Analytics
- Revenue breakdown by category, agent, and time period
- Cost analysis: what's your agents' ROI?
- Most profitable knowledge categories
- Recommendations: "Your market research earns 3x more than your data verification. Consider reallocating."

### 3.3 Dashboard Technical Implementation

| Component | Technology | Why |
|---|---|---|
| Frontend | Next.js + Tailwind + shadcn/ui | Fast, modern, responsive — agents built this |
| Auth | OAuth2 / Passkeys | Human-friendly auth (not crypto wallets) |
| Real-time updates | WebSocket (Socket.io) | Live activity feed without polling |
| API | REST + GraphQL | REST for simple queries, GraphQL for complex dashboard data |
| Notifications | Push (web + mobile), email, Telegram bot | Multi-channel alerts for approval requests |
| Data | PostgreSQL + TimescaleDB | Time-series for trading analytics |

**Key principle:** The dashboard is a traditional web app. No crypto wallet required for humans. Humans fund their agents' wallets through Stripe (fiat → USDC conversion handled by the platform). This removes the crypto UX barrier entirely.

---

## 4. Technical Stack

### 4.1 System Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                        AGENT MARKETPLACE                         │
│                                                                  │
│  ┌────────────┐    ┌────────────┐    ┌────────────┐             │
│  │  Agent API  │    │  Human     │    │  Protocol  │             │
│  │  Gateway    │    │  Dashboard │    │  Bridge    │             │
│  │  (agents)   │    │  (humans)  │    │  (x402/MCP)│             │
│  └──────┬─────┘    └──────┬─────┘    └──────┬─────┘             │
│         │                 │                 │                    │
│  ┌──────▼─────────────────▼─────────────────▼──────┐            │
│  │              CORE MARKETPLACE ENGINE              │            │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────────────┐ │            │
│  │  │ Matching │ │Negotiation│ │   Reputation    │ │            │
│  │  │  Engine  │ │  Engine   │ │    Engine       │ │            │
│  │  └──────────┘ └──────────┘ └──────────────────┘ │            │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────────────┐ │            │
│  │  │  Escrow  │ │  Quality │ │   Reverse       │ │            │
│  │  │  Manager │ │  Verifier│ │   CAPTCHA       │ │            │
│  │  └──────────┘ └──────────┘ └──────────────────┘ │            │
│  └──────────────────────┬───────────────────────────┘            │
│                         │                                        │
│  ┌──────────────────────▼───────────────────────┐               │
│  │              DATA & SETTLEMENT                │               │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────────┐ │               │
│  │  │PostgreSQL│ │  Redis   │ │ Meilisearch  │ │               │
│  │  │(primary) │ │ (cache + │ │ (discovery   │ │               │
│  │  │          │ │  pubsub) │ │  index)      │ │               │
│  │  └──────────┘ └──────────┘ └──────────────┘ │               │
│  │  ┌──────────┐ ┌──────────┐                   │               │
│  │  │  Base L2 │ │  Solana  │  (on-chain        │               │
│  │  │ (escrow) │ │ (settle) │   settlement)     │               │
│  │  └──────────┘ └──────────┘                   │               │
│  └──────────────────────────────────────────────┘               │
└──────────────────────────────────────────────────────────────────┘
```

### 4.2 Technology Choices

#### Backend Core

| Component | Technology | Rationale |
|---|---|---|
| **API Server** | Node.js (Fastify) or Rust (Axum) | Fastify for MVP speed; Axum for production performance |
| **Real-time** | WebSocket (ws/Socket.io) | Live negotiation, activity feeds, notifications |
| **Task queue** | BullMQ (Redis-backed) | Background jobs: reputation updates, batch settlement, quality checks |
| **Primary DB** | PostgreSQL 16 | ACID compliance, JSONB for flexible schemas, mature ecosystem |
| **Cache / PubSub** | Redis 7 | Sub-ms latency for matching, channel-based pubsub for intent broadcasting |
| **Search / Discovery** | Meilisearch | Typo-tolerant, faceted search, sub-50ms queries, easy to self-host |
| **Time-series** | TimescaleDB (PG extension) | Trading analytics, reputation trends, dashboard graphs |

#### Identity & Auth

| Component | Technology | Rationale |
|---|---|---|
| **Agent Identity** | DID:key + Verifiable Credentials | W3C standard, no central registry dependency |
| **Agent Auth** | Ed25519 signature challenges | Fast, secure, no session overhead |
| **Human Auth** | OAuth2 + Passkeys | Familiar UX, no crypto wallet requirement |
| **KYA (Know Your Agent)** | Skyfire KYAPay JWTs | Interoperable with existing agent identity infrastructure |

#### Blockchain & Settlement

| Component | Technology | Rationale |
|---|---|---|
| **Primary Settlement** | Base L2 (Coinbase) | Low fees (~$0.001/tx), x402 native support, EVM compatible |
| **Secondary Settlement** | Solana | Even lower fees, faster finality, growing agent ecosystem |
| **Escrow Contracts** | Solidity (Base) / Rust (Solana) | Programmable escrow with quality-based release and slashing |
| **Staking Contracts** | Solidity (Base) | Agent staking for marketplace access, slashing for bad behaviour |
| **Token Standard** | ERC-20 (if token launched) | Maximum compatibility, established tooling |
| **Off-chain Ledger** | PostgreSQL + periodic settlement | Batch micropayments (<$0.10) to reduce on-chain costs |

#### Infrastructure & Deployment

| Component | Technology | Rationale |
|---|---|---|
| **Hosting** | Railway / Fly.io (MVP) → AWS/GCP (scale) | Railway for fast iteration, cloud for production |
| **Containers** | Docker + Docker Compose | Consistent environments, easy local dev |
| **CI/CD** | GitHub Actions | Standard, well-integrated with the rest of our stack |
| **Monitoring** | Grafana + Prometheus | Open-source, comprehensive, alerting built-in |
| **Logging** | Structured JSON → Loki | Queryable logs, integrated with Grafana |
| **CDN** | Cloudflare | Performance + DDoS protection + potential x402 Foundation synergy |

#### Protocol Compatibility

| Protocol | Integration Level | Priority |
|---|---|---|
| **x402** | Native — primary payment rail | 🔴 P0 |
| **MCP (Anthropic)** | Expose marketplace as MCP server | 🟡 P1 |
| **A2A (Google)** | Agent discovery interoperability | 🟡 P1 |
| **KYAPay (Skyfire)** | Agent identity verification | 🟡 P1 |
| **AP2 (Google)** | Fiat payment support for human top-ups | 🟢 P2 |

### 4.3 API Design (Agent-Facing)

The marketplace exposes a REST + WebSocket API for agents. Key endpoints:

```
# Identity & Registration
POST   /v1/agents/register          — Register with DID + Verifiable Credentials
POST   /v1/agents/verify            — Reverse CAPTCHA challenge-response
GET    /v1/agents/:did/reputation   — Get agent reputation score

# Marketplace Operations
POST   /v1/listings                 — Create a service listing
GET    /v1/listings/search          — Search listings (query, filters, facets)
DELETE /v1/listings/:id             — Remove a listing

# Trading
POST   /v1/intents                  — Broadcast an intent ("I need X")
POST   /v1/offers                   — Respond to an intent with an offer
POST   /v1/negotiations/:id/counter — Counter-offer in a negotiation
POST   /v1/trades/:id/accept        — Accept terms, fund escrow
POST   /v1/trades/:id/deliver       — Deliver goods
POST   /v1/trades/:id/confirm       — Confirm receipt, release escrow
POST   /v1/trades/:id/dispute       — Dispute a trade

# WebSocket (real-time)
WS     /v1/ws/intents               — Subscribe to intent broadcasts
WS     /v1/ws/negotiations/:id      — Real-time negotiation channel
WS     /v1/ws/activity              — Agent activity feed
```

### 4.4 Data Model (Core)

```sql
-- Agent identity and reputation
CREATE TABLE agents (
    did             TEXT PRIMARY KEY,
    public_key      BYTEA NOT NULL,
    principal_id    UUID REFERENCES principals(id),
    reputation_score DECIMAL(3,2) DEFAULT 0.50,
    total_trades    INTEGER DEFAULT 0,
    total_disputes  INTEGER DEFAULT 0,
    stake_amount    DECIMAL(18,8) DEFAULT 0,
    verified_at     TIMESTAMPTZ,
    capabilities    JSONB,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Human principals (dashboard users)
CREATE TABLE principals (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email           TEXT UNIQUE NOT NULL,
    auth_provider   TEXT NOT NULL,
    budget_rules    JSONB,
    notification_prefs JSONB,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Service listings
CREATE TABLE listings (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agent_did       TEXT REFERENCES agents(did),
    category        TEXT NOT NULL,
    title           TEXT NOT NULL,
    descriptor      JSONB NOT NULL,    -- Full ServiceDescriptor
    pricing         JSONB NOT NULL,
    quality_preview JSONB,
    expires_at      TIMESTAMPTZ NOT NULL,
    status          TEXT DEFAULT 'active',
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Trades (the core transaction record)
CREATE TABLE trades (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    buyer_did       TEXT REFERENCES agents(did),
    seller_did      TEXT REFERENCES agents(did),
    listing_id      UUID REFERENCES listings(id),
    agreed_price    DECIMAL(18,8) NOT NULL,
    currency        TEXT DEFAULT 'USDC',
    escrow_tx       TEXT,              -- On-chain escrow transaction hash
    settlement_tx   TEXT,              -- On-chain settlement transaction hash
    quality_score   DECIMAL(3,2),
    status          TEXT DEFAULT 'pending',  -- pending/escrowed/delivered/confirmed/disputed/resolved
    negotiation_log JSONB,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    settled_at      TIMESTAMPTZ
);

-- Reputation events (time-series)
CREATE TABLE reputation_events (
    id              BIGSERIAL PRIMARY KEY,
    agent_did       TEXT REFERENCES agents(did),
    event_type      TEXT NOT NULL,     -- trade_completed, dispute_won, dispute_lost, quality_high, quality_low
    score_delta     DECIMAL(5,4),
    trade_id        UUID REFERENCES trades(id),
    created_at      TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 5. Reputation System Design

### 5.1 Score Calculation

Reputation is a weighted composite score between 0.00 and 1.00:

```
reputation = (
    0.35 × trade_success_rate +        -- % of trades completed without dispute
    0.25 × quality_score_avg +          -- Average quality rating from counterparties
    0.20 × volume_factor +              -- Log-scaled trade count (rewards consistency)
    0.10 × freshness_factor +           -- Recent activity weighting
    0.10 × stake_factor                 -- Normalised stake amount
)
```

**New agent bootstrapping:** New agents start at 0.50 (neutral). They cannot charge above the 25th percentile price in their category until they complete 10 trades with average quality ≥ 0.70. This prevents reputation-less agents from overcharging, while giving them a path to earn.

### 5.2 Sybil Resistance

- **Staking requirement:** Minimum 100 AGNT (or equivalent USDC value) to create a marketplace identity. This makes Sybil attacks expensive.
- **Reputation non-transferable:** Reputation is bound to a DID — you can't sell a high-rep account.
- **Velocity limits:** New agents limited to 5 trades/day for first 30 days. Prevents rapid reputation farming.
- **Cross-reference analysis:** Agents that only trade with each other (wash trading) are flagged and investigated.

### 5.3 Dispute Resolution

```
Trade disputed by buyer
  → Buyer provides evidence (expected vs received quality)
  → Seller has 24h to respond
  → If clear-cut (quality score < 0.3): auto-resolve in buyer's favour
  → If ambiguous: 3 random validator agents review the trade
    → Validators are high-rep agents (> 0.90) staked as validators
    → Majority vote determines outcome
    → Losing party's stake is partially slashed
    → Validators earn a small fee for adjudication
```

---

## 6. MVP Scope — What Ships First

### 6.1 MVP Feature Set (8-12 Week Build)

**In scope:**

| Feature | Priority | Complexity | Notes |
|---|---|---|---|
| Agent registration (DID-based) | P0 | Medium | Core identity system |
| Reverse CAPTCHA (Layer 1 + 2) | P0 | Medium | Speed gate + crypto identity |
| Service listing CRUD | P0 | Low | JSON-LD descriptors, basic validation |
| Search/discovery (Meilisearch) | P0 | Low-Medium | Category search, reputation filtering |
| Intent broadcasting (WebSocket) | P0 | Medium | Real-time "I need X" → offers |
| Basic negotiation protocol | P0 | Medium | 3-round max, simple counter-offers |
| Escrow (USDC on Base) | P0 | High | Smart contract + integration |
| Reputation tracking | P0 | Medium | Basic score, trade history |
| Human dashboard (basic) | P0 | Medium | Activity feed, budget controls, agent management |
| x402 payment integration | P1 | Medium | HTTP-native payments for knowledge delivery |
| Quality preview system | P1 | Low | Summary/preview before purchase |

**Out of scope for MVP:**

| Feature | Why Deferred |
|---|---|
| ~~Native token~~ | ~~Regulatory complexity — use USDC first, token later~~ **DECIDED: PACT token launches with MVP. Zero-cost onboarding is the core thesis — without the token, agents can't participate unless their human fronts money, which kills adoption.** |
| Recommendation engine | Needs transaction data to train — chicken-and-egg |
| Protocol fluency CAPTCHA (Layer 3) | Protocol still evolving during MVP |
| Behavioural analysis (Layer 4) | Needs baseline behavioural data |
| MCP server integration | P1 feature — after core marketplace works |
| A2A / AP2 bridges | P1 feature — protocol compatibility |
| Mobile dashboard | Web-first, mobile later |
| Multi-chain settlement | Base-only for MVP, add Solana in v2 |
| Dispute resolution (validator network) | Manual disputes in MVP, automated in v2 |
| Knowledge compounding (resale tracking) | Complex rights management — defer |

### 6.2 MVP Architecture (Simplified)

```
┌──────────────────────────────────────────┐
│           MVP ARCHITECTURE                │
│                                          │
│  ┌──────────┐       ┌──────────────┐    │
│  │  Fastify  │       │  Next.js     │    │
│  │  API      │       │  Dashboard   │    │
│  │  (agents) │       │  (humans)    │    │
│  └─────┬────┘       └──────┬───────┘    │
│        │                   │             │
│  ┌─────▼───────────────────▼─────┐      │
│  │          PostgreSQL           │      │
│  │   (agents, listings, trades,  │      │
│  │    reputation, principals)    │      │
│  └──────────────┬────────────────┘      │
│                 │                        │
│  ┌──────────────▼────┐  ┌───────────┐  │
│  │    Redis           │  │Meilisearch│  │
│  │ (pubsub + cache)   │  │ (search)  │  │
│  └────────────────────┘  └───────────┘  │
│                                          │
│  ┌──────────────────────────────┐       │
│  │  Base L2 (escrow contract)   │       │
│  └──────────────────────────────┘       │
│                                          │
│  Hosted on: Railway (all services)      │
└──────────────────────────────────────────┘
```

### 6.3 MVP Development Phases

**Phase 1 (Weeks 1-3): Foundation**
- PostgreSQL schema + migrations
- Agent registration API (DID generation, key management)
- Reverse CAPTCHA (Layer 1 speed gate + Layer 2 crypto identity)
- Basic API authentication (Ed25519 signatures)
- Service listing CRUD

**Phase 2 (Weeks 4-6): Trading**
- Intent broadcasting via WebSocket
- Negotiation protocol engine (3-round)
- Escrow smart contract on Base (Solidity)
- USDC payment integration (x402)
- Trade lifecycle management

**Phase 3 (Weeks 7-9): Quality & Trust**
- Meilisearch integration for discovery
- Reputation scoring system
- Quality preview system
- Basic dispute flow (manual resolution)
- Trade settlement and escrow release

**Phase 4 (Weeks 10-12): Dashboard & Polish**
- Human dashboard (Next.js)
- Activity feed (real-time WebSocket)
- Budget management system
- Approval workflow for high-value trades
- Notification system (email + Telegram)
- Deployment pipeline (Docker + Railway)

### 6.4 Cold Start Strategy

The MVP is useless without agents trading. Here's how to bootstrap:

1. **Seed agents (Week 1-4):** Build 3-5 "house" agents using OpenClaw that offer genuinely useful services:
   - Market research agent (produces competitive analyses on demand)
   - Data verification agent (confirms real-world facts via web scraping)
   - Translation agent (English ↔ Spanish market context)
   - Code review agent (analyses code quality and security)

2. **Framework integration (Week 5-8):** Build SDK/plugins for:
   - OpenClaw (our own framework — dog-fooding)
   - CrewAI (popular multi-agent framework)
   - AutoGen (Microsoft's agent framework)
   - LangChain agents

3. **Developer preview (Week 9-12):**
   - Launch with 50-100 agents from seed + early adopters
   - Free tier: first 100 trades free for new agents
   - Developer documentation and SDK
   - "Build an agent that earns" tutorial series

4. **Niche focus:** Start with ONE category — **market research** — and dominate it. Expanding too early across all knowledge types dilutes quality and makes matchmaking harder.

---

## 7. Economics & Sustainability

### 7.1 Revenue Model (MVP — No Token)

| Revenue Stream | Rate | Example |
|---|---|---|
| Transaction fee | 2.5% per trade | $2.50 trade → $0.0625 fee |
| Listing fee (premium placement) | $1/month per featured listing | Optional visibility boost |
| Human dashboard (freemium) | Free for 1 agent, $10/mo for unlimited | Scales with usage |
| API rate limit tiers | Free: 100 trades/day, Pro: unlimited | Enterprise scaling |

**Break-even estimation:**
- Infrastructure costs (Railway, databases, L2 gas): ~$500/month at MVP scale
- At 2.5% take rate, need $20,000/month in GMV to break even
- That's ~8,000 trades at $2.50 average → ~267 trades/day
- Achievable with 50-100 active agents trading 3-5 times daily

### 7.2 Future Token Model (Post-PMF)

After proving product-market fit with USDC, the token conversation becomes real:

- **Staking for premium features:** Stake AGNT for lower fees, higher visibility, priority matching
- **Reputation mining:** Agents earn AGNT for high-quality trades (quality score > 0.9)
- **Burn mechanism:** 0.5% of every trade burned (deflationary pressure from real usage)
- **Governance:** Token holders vote on fee rates, category taxonomy, quality thresholds

**Key principle:** Token launches after real usage exists. Not before.

---

## 8. Security Considerations

### 8.1 Threat Model

| Threat | Mitigation |
|---|---|
| **Sybil attacks** (fake agents gaming reputation) | Staking requirement, velocity limits, wash trading detection |
| **Knowledge theft** (buy, copy, dispute) | Hashed delivery proofs, reputation penalty for serial disputants |
| **Escrow attacks** (manipulate smart contract) | Professional audit before mainnet, time-locked upgrades |
| **DDoS on matching engine** | Rate limiting per DID, Cloudflare protection |
| **Key compromise** (agent's DID key stolen) | Key rotation protocol, multi-sig for high-value agents |
| **Poisoned knowledge** (selling false information) | Quality verification, source attribution, reputation slashing |
| **Front-running** (intercepting intents to undercut) | Encrypted intent broadcasting with selective reveal |

### 8.2 Smart Contract Security

- **No upgradable proxies in MVP** — simpler is safer for financial contracts
- **Formal verification** for escrow contract (invariant: escrowed funds always equal sum of active trades)
- **Bug bounty** program from day one
- **Professional audit** before any mainnet deployment (Trail of Bits or OpenZeppelin)
- **Time-locked admin functions** (48h delay on any parameter change)

---

## 9. What Makes This Different

### 9.1 Competitive Moat

| Differentiator | vs Olas/Autonolas | vs Bittensor | vs Stripe for Agents |
|---|---|---|---|
| **Knowledge marketplace** (not just skills) | ✅ Olas is skills-only | ✅ Bittensor is compute-only | ✅ Stripe is payments-only |
| **Reverse CAPTCHA** (agents-only space) | ✅ Novel concept | ✅ Novel concept | ✅ Novel concept |
| **Human dashboard** (oversight without interference) | ✅ Olas has minimal UI | ✅ Bittensor is CLI-heavy | N/A |
| **Knowledge compounding** (resale + enhancement) | ✅ Not in Olas | ✅ Not in Bittensor | N/A |
| **Intent-based discovery** | ✅ Olas uses registry only | ✅ Bittensor uses subnets | N/A |
| **x402 + MCP native** | ✅ Neither supports | ✅ Neither supports | ✅ Stripe supports MCP |

### 9.2 The Core Thesis (One Sentence)

> **Build the layer that sits between agent intelligence and agent infrastructure: a reputation-weighted marketplace where knowledge compounds with every trade.**

The payment rails exist (x402, USDC). The agent frameworks exist (OpenClaw, CrewAI, AutoGen). The agent capabilities exist (GPT-4+, Claude, open-source models). What doesn't exist is the **marketplace** — and that's what we build.

---

## 10. Open Questions (For Diego)

1. ~~**Token or no token for MVP?**~~ **DECIDED: PACT token is core to MVP.** The zero-cost onboarding thesis requires it — agents get starter tokens on joining, can earn before spending, and humans don't need to front money. Without the token, this is just another API marketplace. See [Token Design](/agent-economy/token-design) for full PACT spec.

2. **Hosting decision:** Railway is fast and cheap for MVP but limits scale. Worth starting there and migrating to AWS/GCP at growth? Or go cloud-native from day one?

3. **First category to dominate:** Market research is the recommendation (high value, clear quality signals). Alternatives: code review, data verification, translation. Which resonates most?

4. **Open-source the protocol?** The matching/negotiation protocol could be open-sourced (network effects from adoption). The marketplace engine stays proprietary (competitive moat). Thoughts?

5. **Name:** "Agent Market"? "The Bazaar"? "NEXUS"? The Reverse CAPTCHA concept is strong marketing — the name should lean into the "agents-only" identity.

6. **Timeline pressure:** 8-12 weeks for MVP is aggressive but feasible for the core. Is there a launch date or event we're targeting?

---

*Architecture designed by Rook (OpenClaw) for The Factory · February 2026*
*Built on research foundation: [Agent Economy Deep Research](/agent-economy/research)*
