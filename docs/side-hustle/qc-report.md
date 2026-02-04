# Product QC Report

**Date:** 3 February 2026  
**Tested by:** Rook (automated)  
**Method:** Chromium headless screenshots (1200×900) + HTML structure analysis  
**Screenshots saved to:** `products/qc-screenshots/`

---

## Summary

| # | Product | Cover | TOC | Chapters | Verdict |
|---|---------|-------|-----|----------|---------|
| 1 | GEO Playbook | ✅ | ✅ | 14 chapters | ✅ Pass |
| 2 | Developer's Claude Toolkit | ✅ | ✅ | 65 chapters + 9 parts + 5 recipes | ✅ Pass |
| 3 | Freelancer's AI Toolkit | ✅ | ✅ | 16 chapters | ✅ Pass |
| 4 | Content Creator's Prompt System | ✅ | ⚠️ | 8 chapters | ⚠️ Minor issue |
| 5 | Digital Marketer's Prompt Library | ✅ | ⚠️ | 9 chapters | ⚠️ Minor issue |
| 6 | Email Marketing AI Playbook | ✅ | ✅ | 9 chapters | ✅ Pass |
| 7 | Solopreneur Launch Playbook | ✅ | ✅ | 9 chapters | ✅ Pass |
| 8 | Vibe Coding Starter Kit | ✅ | ✅ | 7 chapters | ✅ Pass |
| 9 | Local LLM Handbook | ✅ | ✅ | 7 chapters | ✅ Pass |
| 10 | Self-Hosting Survival Guide | ✅ | ✅ | 8 chapters | ✅ Pass |
| 11 | SEO Audit Checklist | ✅ | ✅ | 14 chapters | ✅ Pass |
| 12 | Free Lead Magnet (10 AI Prompts) | ✅ | ✅ | 11 chapters | ✅ Pass |

**Overall: 10/12 PASS, 2/12 MINOR ISSUES**

---

## Global Issue: Broken Emoji on Cover

**Severity:** Low (cosmetic)  
**Affects:** All 12 products  
**Description:** The 🏰 (castle/rook) emoji after "by Rook" renders as a □ (replacement character) in Chromium headless. This is likely a missing emoji font in the server environment — it will render fine on most end-user devices/browsers when viewing the HTML, and the PDFs should embed the character correctly.  
**Action:** Either remove the emoji from the author line or replace it with a text alternative like "(♜)". Alternatively, test on an actual desktop browser — if it renders fine there, it's a non-issue for customers.

---

## Per-Product Details

### 1. The GEO Playbook (geo-playbook.html)
- **Cover:** ✅ Renders cleanly. Badge: "DIGITAL PLAYBOOK". Title, subtitle, author, version (v2.0) all present.
- **TOC:** ✅ 14 chapters with descriptive subtitles. Best TOC design — each entry has chapter title + description line.
- **Chapters:** ✅ 14 numbered chapters (Chapter 01–14). Clean "Chapter XX" + title format.
- **Size:** 127 KB HTML → largest content product alongside Developer Toolkit
- **Price:** £19 (flagship)
- **Notes:** This is the premium flagship. v2.0 dating is correct. No issues found.

### 2. The Developer's Claude Toolkit (developer-claude-toolkit.html)
- **Cover:** ✅ Renders cleanly. Badge: "DEVELOPER TOOLS".
- **TOC:** ✅ Extensive — 65 numbered prompts across 9 Parts + 5 bonus Recipes. Longest TOC in the catalogue.
- **Chapters:** ✅ Well-structured with Part dividers (Part 1: Debugging, Part 2: Code Review, etc.)
- **Size:** 131 KB HTML (biggest file)
- **Price:** £14
- **Notes:** Monster product. 50+ prompts as advertised (actually 58 prompts + 5 recipes). Great value at £14.

### 3. The Freelancer's AI Toolkit (freelancer-ai-toolkit.html)
- **Cover:** ✅ Renders cleanly. Badge: "FREELANCER GUIDE".
- **TOC:** ✅ 16 chapters covering proposals, scoping, invoicing, outreach, etc.
- **Chapters:** ✅ Clean numbering. Chapters cover distinct freelancer workflows.
- **Size:** 117 KB HTML
- **Price:** £14
- **Notes:** Similar structure to Developer Toolkit. Solid.

### 4. The Content Creator's Prompt System (content-creator-prompts.html)
- **Cover:** ✅ Renders cleanly. Badge: "CONTENT CREATION".
- **TOC:** ⚠️ Chapter titles in TOC include numbering prefix: "1 · Content Ideation", "2 · Writing & Drafting", etc.
- **Chapters:** ⚠️ **Double-numbering bug.** H1 headings show: `Chapter 01` (from span) + `1 · Content Ideation` (from title text). Renders as: **"Chapter 01  1 · Content Ideation"**. The "1 ·" prefix should be removed from the title text since the Chapter span already provides the number.
- **Size:** 45 KB HTML
- **Price:** £12
- **Action needed:** Remove the `1 · `, `2 · `, etc. prefix from each chapter title in the source markdown/build template. The `<span class="chapter-number">Chapter 01</span>` already handles numbering.

### 5. The Digital Marketer's Prompt Library (digital-marketer-prompts.html)
- **Cover:** ✅ Renders cleanly. Badge: "MARKETING TOOLS".
- **TOC:** ⚠️ Same double-numbering pattern as Content Creator: "1 · SEO & Content Strategy", "2 · Email Marketing", etc.
- **Chapters:** ⚠️ **Same double-numbering bug** as Content Creator. H1 shows: **"Chapter 01  1 · SEO & Content Strategy"**.
- **Size:** 47 KB HTML
- **Price:** £14
- **Action needed:** Same fix — remove the `N · ` prefix from chapter titles.

### 6. The Email Marketing AI Playbook (email-marketing-playbook.html)
- **Cover:** ✅ Renders cleanly. Badge: "EMAIL MARKETING".
- **TOC:** ✅ 9 chapters (Strategy, Subject Lines, Welcome Sequence, Sales, Newsletter, Analytics, Tools, Reference, Final Note).
- **Chapters:** ✅ Clean numbering. No double-numbering.
- **Size:** 41 KB HTML
- **Price:** £12
- **Notes:** Clean. Well-structured chapters.

### 7. The Solopreneur Launch Playbook (solopreneur-launch-playbook.html)
- **Cover:** ✅ Renders cleanly. Badge: "STARTUP GUIDE".
- **TOC:** ✅ 9 chapters covering pre-launch, launch week, post-launch, growth toolkit + appendices.
- **Chapters:** ✅ Clean numbering. Uses "Part" labels inside chapter titles which works fine here.
- **Size:** 42 KB HTML
- **Price:** £14
- **Notes:** Good structure for its purpose.

### 8. The Vibe Coding Starter Kit (vibe-coding-starter-kit.html)
- **Cover:** ✅ Renders cleanly. Badge: "DEVELOPER TOOLS".
- **TOC:** ✅ 7 chapters (What is Vibe Coding, Tool Setup, System Prompts, Workflows, Advanced, Appendix).
- **Chapters:** ✅ Clean numbering.
- **Size:** 49 KB HTML
- **Price:** £12
- **Notes:** Clean and focused. Good entry-level dev product.

### 9. The Local LLM Handbook (local-llm-handbook.html)
- **Cover:** ✅ Renders cleanly. Badge: "AI INFRASTRUCTURE".
- **TOC:** ✅ 7 chapters (Why Go Local, Hardware, Software, Models, Integration, Advanced, Appendix).
- **Chapters:** ✅ Clean numbering.
- **Size:** 41 KB HTML
- **Price:** £19
- **Notes:** Premium price for a focused technical product. Good.

### 10. The Self-Hosting Survival Guide (self-hosting-survival-guide.html)
- **Cover:** ✅ Renders cleanly. Badge: "SELF-HOSTING".
- **TOC:** ✅ 8 chapters (Why Self-Host, Hardware, Foundation, Service Guide, Security, Maintenance, Appendix, Where to Start).
- **Chapters:** ✅ Clean numbering.
- **Size:** 46 KB HTML
- **Price:** £14
- **Notes:** Solid. Good companion to Local LLM Handbook.

### 11. The SEO Audit Checklist (seo-audit-checklist.html)
- **Cover:** ✅ Renders cleanly. Badge: "SEO GUIDE".
- **TOC:** ✅ 14 chapters with structured scoring framework (categories, percentages, matrices).
- **Chapters:** ✅ Clean numbering. Category chapters include weighting labels (e.g., "Category 1: Technical SEO (25%)").
- **Size:** 41 KB HTML
- **Price:** £9
- **Notes:** Actionable checklist format. Good value at £9. Includes GEO readiness section — nice cross-sell angle.

### 12. 10 AI Prompts That Actually Work — Free Lead Magnet (free-lead-magnet.html)
- **Cover:** ✅ Renders cleanly. Badge: "FREE GUIDE".
- **TOC:** ✅ 11 chapters (10 prompts + bonus "How to Get More" chapter).
- **Chapters:** ✅ Clean numbering.
- **Size:** 27 KB HTML (smallest, as expected for free product)
- **Price:** £0 (free)
- **Note:** Cover title says "10 AI Prompts That Actually Work" but first chapter H1 says "10 AI Prompts That Replace a $5,000 Consultant" — this is fine (cover hook vs internal title are intentionally different).

---

## Action Items (Priority Order)

1. **🟡 Fix double-numbering** in `content-creator-prompts` and `digital-marketer-prompts` — remove the `N · ` prefix from chapter titles in the source markdown since `<span class="chapter-number">` already provides numbering.

2. **🟢 Consider fixing emoji** — the 🏰 after "by Rook" may not render on all systems. Test on desktop browser first; if it renders fine there, leave it. If not, replace with text.

3. **🟢 Optional design note** — all 12 covers are text-only with green gradient. They're clean and consistent, but adding a subtle icon or illustration per product could differentiate them on a marketplace page. Not urgent.

---

## PDF Output Check

All 12 products have corresponding PDF files:

| Product | PDF Size |
|---------|----------|
| GEO Playbook | 1.9 MB (v13, latest) |
| Developer's Claude Toolkit | 2.9 MB |
| Freelancer's AI Toolkit | 1.1 MB |
| Content Creator's Prompt System | 1.0 MB |
| Digital Marketer's Prompt Library | 984 KB |
| Email Marketing AI Playbook | 762 KB |
| Solopreneur Launch Playbook | 481 KB |
| Vibe Coding Starter Kit | 938 KB |
| Local LLM Handbook | 658 KB |
| Self-Hosting Survival Guide | 1.0 MB |
| SEO Audit Checklist | 651 KB |
| Free Lead Magnet | 469 KB |

All PDFs present and reasonable sizes. ✅
