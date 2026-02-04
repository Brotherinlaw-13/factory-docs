# How AI Engines Select Their Sources (And How to Become One)

Understanding *why* ChatGPT, Perplexity, or Google AI Overviews cite one source over another is the foundation of Generative Engine Optimisation. While the exact algorithms are proprietary, extensive testing, published research, and reverse-engineering have revealed consistent patterns that any brand can act on.

If you want your content to appear in AI-generated answers, you need to understand the machine behind the curtain.

---

## The Retrieval-Augmented Generation Pipeline

Most modern AI search engines use a process called **Retrieval-Augmented Generation (RAG)**. Each step in this pipeline represents an opportunity to optimise your content.

Here is how it works:

1. **Query decomposition.** The user's prompt is broken into sub-queries. A question like *"What's the best CRM for small businesses in the UK?"* might become three separate searches: "top CRM software," "CRM for small businesses," and "UK CRM tools."

2. **Source retrieval.** The engine searches its index (or the live web) for relevant sources. Domain authority, relevance, and freshness all matter here.

3. **Relevance scoring.** Retrieved sources are scored for topical relevance, authority, recency, and specificity. Typically, the engine retrieves 20 to 50 candidate sources and narrows to the top 5 to 10.

4. **Synthesis and generation.** The language model reads the top-scoring sources and generates a response, weaving in information from multiple pages. This is where the AI decides *what* to say and *who* to credit.

5. **Citation assignment.** Some engines (Perplexity, Google AI Overviews) attach source citations to specific claims. Others (ChatGPT, Claude) may mention sources conversationally or provide them when asked.

**Your optimisation levers at each stage:**

| RAG Stage | What Happens | Your Lever |
|-----------|-------------|------------|
| Query decomposition | Prompt split into sub-queries | Ensure content addresses specific sub-topics, not just broad themes |
| Source retrieval | Engine searches for relevant pages | SEO fundamentals: ranking, domain authority, indexing, crawlability |
| Relevance scoring | Sources scored and filtered | Content specificity, recency, statistical density, structural clarity |
| Synthesis | AI reads and combines sources | Quotable passages, clear definitions, extractable facts |
| Citation | AI attributes claims to sources | Brand name proximity to key claims, clear authorship, schema markup |

---

## The Seven Signals AI Engines Use

Based on the landmark GEO research paper (Princeton, Georgia Tech, Allen Institute, IIT Delhi), industry testing, and extensive analysis, here are the primary signals that determine whether your content gets cited:

### 1. Topical Authority ★★★★★

Depth and breadth of coverage on a specific topic across your domain. Build content clusters with 10 to 20 articles per core topic to signal deep expertise.

### 2. Citation Density ★★★★★

How often your brand or domain is mentioned across external sources. Aim for brand mentions on 20+ external sites per key topic. This is arguably the most underestimated signal.

### 3. Content Structure ★★★★☆

Clear headings, direct answers, lists, and tables that LLMs can parse. Use semantic HTML, tables, and lists. Lead every page with a direct answer in the first 100 words.

### 4. Statistical Evidence ★★★★☆

Inclusion of data points, percentages, and research-backed claims. The GEO research found that content containing statistics achieved **30 to 40% higher visibility** in AI-generated responses compared to content without them.

### 5. Recency ★★★★☆

How recently content was published or updated. Update key pages quarterly and show visible "Last updated" dates.

### 6. E-E-A-T Signals ★★★★☆

Demonstrated Experience, Expertise, Authoritativeness, and Trustworthiness. Include author bios, expert quotes, credentials, and real case studies.

### 7. Quotability ★★★☆☆

Concise, well-phrased statements that can be extracted as standalone claims. Write "tweetable" opening sentences for every section.

---

## The Consensus Effect

AI engines do not just find information; they look for **consensus**. If multiple independent sources agree on a claim, the AI is far more likely to present it as fact. This is why brand mentions across diverse, authoritative sources matter enormously.

A single brilliant blog post will not move the needle. Twenty mentions across industry publications, review sites, forums, and expert blogs will.

Here is a practical example. Imagine a user asks: *"What is the best email marketing platform for e-commerce?"*

The AI retrieves 30 sources. It finds that 18 mention Klaviyo, 12 mention Mailchimp, 7 mention Omnisend, and 2 mention your platform. The AI will almost certainly name Klaviyo first, Mailchimp second, and possibly Omnisend third. Your platform, despite potentially being a superior product, does not get mentioned because it lacks the consensus signal.

**The lesson:** GEO is not just about optimising your own website. It is about ensuring your brand appears across the entire ecosystem of sources that AI engines consult.

---

## Source Diversity and Trust Tiers

AI engines weight sources differently based on their perceived trust level. Through extensive testing, sources can be categorised into tiers:

| Trust Tier | Source Type | Examples | Weight |
|-----------|------------|---------|--------|
| **Tier 1: Institutional** | Academic papers, government sites, encyclopaedias | .gov, .edu, Wikipedia, PubMed | Highest |
| **Tier 2: Editorial** | Major publications with editorial oversight | Forbes, TechCrunch, BBC, industry journals | High |
| **Tier 3: Expert** | Recognised expert blogs, industry analysts | Gartner, HBR blogs, professional body sites | High |
| **Tier 4: Community** | User-generated content with curation mechanisms | Reddit, Stack Overflow, G2 reviews | Medium-High |
| **Tier 5: Brand** | Company websites, brand blogs, product pages | Your own site | Medium |
| **Tier 6: General** | Generic blogs, article directories, low-authority sites | Content farms, thin affiliate sites | Low |

The critical insight here is that your own website (Tier 5) carries **less weight** than external mentions (Tiers 1 to 4). This means an external mention strategy is at least as important as on-site optimisation, if not more so.

---

## What This Means in Practice

If you take one thing from this, make it this: the old model of "publish great content on your site and rank on Google" is no longer sufficient. AI engines cross-reference multiple sources before deciding what to cite. Your optimisation needs to happen at three levels simultaneously:

1. **On your site:** Structure content for machine readability, lead with quotable definitions, embed statistics with named sources, and keep everything fresh.

2. **Across the web:** Earn brand mentions on industry publications, review platforms, forums, and expert blogs. Every unlinked mention counts.

3. **In training data:** Ensure your brand has a strong, accurate presence on platforms heavily represented in LLM training data, including Wikipedia, Reddit, Stack Overflow, and major news outlets.

The brands that master all three levels will dominate AI-generated recommendations for the next decade. Most businesses have not even begun thinking about this, which means the window of competitive advantage is wide open.

---

*This is an extract from The GEO Playbook: How to Get Your Brand Cited by AI. Get the full guide at therookai.gumroad.com/l/geo-playbook*
