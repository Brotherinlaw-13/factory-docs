# The Technical SEO Checklist: Score Your Site in 15 Minutes

Technical SEO is the invisible architecture that determines whether search engines can find, crawl, and understand your site. You can write the best content in the world, but if Googlebot cannot access it, index it, or make sense of it, you are invisible.

This checklist covers the four pillars of technical SEO: Core Web Vitals, crawlability, indexation, and schema markup. Each item is scored as Pass, Partial, or Fail. Run through it with your site open in one tab and PageSpeed Insights in another. It takes about 15 minutes.

---

## Core Web Vitals (12 points)

These are Google's official user experience metrics, and they directly influence your rankings.

### 1.1 Largest Contentful Paint (LCP) — 4 points

**Is your LCP 2.5 seconds or less on mobile?**

LCP measures how quickly the largest visible element loads. This is usually a hero image, a heading, or a large text block. Test via PageSpeed Insights using your homepage *and* a key landing page. Use field data (real users) over lab data where available.

Common LCP killers: unoptimised hero images, render-blocking CSS or JavaScript, slow server response times, and web fonts that delay text rendering.

✅ Pass: LCP ≤ 2.5s | ⚠️ Partial: 2.5-4s | ❌ Fail: > 4s

### 1.2 Cumulative Layout Shift (CLS) — 4 points

**Is your CLS 0.1 or less?**

CLS measures visual stability. Every time a page element moves unexpectedly after loading (an image without dimensions pushing content down, an advert injecting itself, a web font causing text to reflow), that counts against your score.

Check for: images and iframes without explicit width and height attributes, dynamically injected content above the fold, and web fonts causing a flash of unstyled text.

✅ Pass: CLS ≤ 0.1 | ⚠️ Partial: 0.1-0.25 | ❌ Fail: > 0.25

### 1.3 Interaction to Next Paint (INP) — 4 points

**Is your INP 200ms or less?**

INP replaced First Input Delay in March 2024. It measures responsiveness across the entire page lifecycle, not just the first interaction. Test interactive elements: menus, forms, accordions, and buttons on mobile.

Common INP problems: heavy JavaScript blocking the main thread, unoptimised event handlers, and third-party scripts (analytics, chat widgets, ad networks) competing for CPU time.

✅ Pass: INP ≤ 200ms | ⚠️ Partial: 200-500ms | ❌ Fail: > 500ms

**Tool tip:** Run your homepage *and* a key landing page through [PageSpeed Insights](https://pagespeed.web.dev). The field data section shows what real users experience.

---

## Crawlability (8 points)

If search engines cannot reach your pages, nothing else matters.

### 1.4 Robots.txt — 2 points

**Does your robots.txt exist, allow critical paths, and block only what is intended?**

Check for accidental `Disallow: /` directives that block your entire site. Verify that CSS and JavaScript files are not blocked (Googlebot needs them to render your pages). If you are optimising for AI search, check that GPTBot, ClaudeBot, and PerplexityBot are not inadvertently blocked.

### 1.5 XML Sitemap — 2 points

**Is a valid sitemap submitted to Google Search Console and Bing Webmaster Tools?**

Your sitemap should include only indexable, canonical URLs. No 404 pages, no redirected URLs, no noindexed pages. It should update automatically when you publish or remove content.

### 1.6 Crawl Errors — 2 points

**Are there fewer than 5 critical crawl errors in Search Console?**

Check the Coverage report for 5xx server errors on important pages. A handful of 404s on genuinely deleted pages is normal. 5xx errors on pages that should be working are critical.

### 1.7 Site Architecture — 2 points

**Can every important page be reached within 3 clicks from the homepage?**

No orphan pages (pages with no internal links pointing to them). A shallow, well-linked architecture helps both users and crawlers find your content. Run a crawl with Screaming Frog to visualise your site's depth.

---

## Indexation (6 points)

Your pages need to be crawled *and* indexed. These are two different things.

### 1.8 Index Coverage — 2 points

**Is the indexed page count within 10% of your expected total?**

Run `site:yourdomain.com` in Google. If you have 200 pages but Google shows 50, something is preventing indexation. If Google shows 2,000, you have duplicate or junk pages being indexed that should not be.

### 1.9 Canonical Tags — 2 points

**Does every page have a self-referencing canonical tag?**

Canonical tags tell search engines which version of a page is the "real" one. Every page should point to itself. Duplicate or variant pages (filtered views, print versions, parameterised URLs) should canonicalise to the primary version. Incorrect canonicals are one of the most common technical SEO mistakes.

### 1.10 Noindex Audit — 2 points

**Are any important pages accidentally noindexed?**

Check meta robots tags and HTTP X-Robots-Tag headers. Staging environments sometimes add noindex tags that survive into production. CMS plugins sometimes noindex pages by default. A single misplaced noindex tag can remove a critical page from search results entirely.

---

## Schema Markup (4 points)

Structured data helps search engines understand *what* your content is, not just what it says. It is also increasingly important for AI-powered search features.

### 1.11 Structured Data Present — 2 points

**Does the site implement relevant schema types?**

The priority schema types depend on your site, but most sites should have at least some of these:

| Schema Type | Best For | Impact |
|---|---|---|
| `FAQPage` | Q&A content, knowledge bases, product pages with Q&A sections | High: directly feeds AI answer generation |
| `HowTo` | Tutorials, guides, processes | High: step-by-step content is frequently featured |
| `Product` | Product pages, comparisons | High: commercial query answers pull from product schema |
| `Article` | Blog posts, news, analysis | Medium: helps identify freshness and authorship |
| `LocalBusiness` | Location-based businesses | High: critical for local AI Overview features |
| `Organisation` | Company pages, about pages | Medium: establishes entity identity |
| `BreadcrumbList` | Any site with hierarchical navigation | Medium: improves how your site appears in results |

### 1.12 Schema Validation — 2 points

**Does all structured data pass Google's Rich Results Test with zero errors and zero warnings?**

Use [Google's Rich Results Test](https://search.google.com/test/rich-results) and the [Schema.org Validator](https://validator.schema.org) side by side. Common errors include missing required fields, incorrect data types, and URLs that do not resolve.

---

## Scoring Your Results

| Points | Rating |
|--------|--------|
| 27-30 | 🟢 Excellent. Your technical foundations are solid. Focus on content and authority. |
| 21-26 | 🔵 Strong. A few gaps to close, but nothing structural. |
| 15-20 | 🟡 Needs work. Likely losing traffic to fixable problems. |
| 8-14 | 🟠 Weak. Fundamental issues present. Prioritise the red items. |
| 0-7 | 🔴 Critical. Search engines are struggling with your site. Treat this as a rebuild. |

---

## Quick Wins to Fix First

If your score is below 21, start with these high-impact, low-effort fixes:

1. **Compress oversized images** for an immediate LCP improvement
2. **Add width and height attributes** to all images and iframes to fix CLS
3. **Submit an updated XML sitemap** to Search Console and Bing
4. **Fix broken internal links** (Screaming Frog catches these in seconds)
5. **Add missing canonical tags** to prevent duplicate content issues
6. **Implement FAQPage schema** on your most important content pages

Each of these takes under an hour and can have a measurable impact on your search visibility within weeks.

---

*This is an extract from The Complete SEO Audit Checklist. Get the full guide at therookai.gumroad.com/l/seo-audit-checklist*
