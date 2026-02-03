---
title: "Chrome Extension Spec"
description: "What If? — the A/B testing playground Chrome extension concept"
---

# Darwin Chrome Extension Specification
## "What If?" - The Ultimate A/B Testing Playground

---

## 🎯 Concept

**"What if you could A/B test Amazon's homepage? Or your competitor's landing page?"**

Darwin's Chrome Extension is the world's first tool that lets ANYONE create and test visual variations of ANY webpage — even sites they don't own. It's not real A/B testing; it's a lightweight playground for exploring ideas, proposing changes, and getting team feedback before implementing anything.

### Core Use Cases

**🎨 For Designers:**
- "What if we changed the hero button from blue to green on our competitor's site?"
- "Let me show the client what their homepage could look like with these changes"
- "I want to test 3 different headlines on this popular landing page for inspiration"

**📊 For Marketers:**
- "Before we redesign our pricing page, let me test ideas on how Stripe does it"
- "I want to propose changes to our product page — let me mock it up and get votes"
- "What if we restructured our navigation like our biggest competitor?"

**🚀 For Founders:**
- "I want to see how different CTAs would work on successful SaaS homepages"
- "Let me test messaging variations on industry leader sites for inspiration"
- "Before building, let me validate this UI concept with my team"

### The "Lightbulb Moment"

Imagine being in a strategy meeting and saying: *"Instead of just talking about this change, let me show you exactly what it would look like..."* then pulling up a side-by-side comparison that you created in 30 seconds, getting instant team votes, and having data to back up your proposal.

---

## ⚙️ How It Works

### The User Journey

1. **🔧 Install Extension** - One-click install from Chrome Web Store
2. **🌐 Browse Any Site** - Visit Amazon, Stripe, your competitor, anywhere
3. **✨ Activate Darwin** - Click the Darwin icon → instant edit mode
4. **🎨 Edit Visually** - Click any element to modify text, colors, images, layout
5. **💾 Save Variant** - Name your version: "Green CTA Test" or "Alternative Headlines"
6. **🔗 Share & Compare** - Generate link: "Which is better, A or B?"
7. **🗳️ Collect Votes** - Team votes in real-time with comments
8. **📈 Upgrade Path** - "Love this? Test it for REAL on your own site with Darwin Pro"

### User Interface Mockups

**Edit Mode UI:**
- Floating Darwin toolbar (top-right, minimizable)
- Element highlights on hover (blue outline + edit cursor)
- Quick edit panel slides in from right when element clicked
- "Save Variant" button with progress indicator
- "Exit Edit Mode" always visible

**Quick Edit Panel:**
```
┌─ Edit Text ─────────────┐
│ [Original text here]    │
│ ┌─────────────────────┐ │
│ │ New text...         │ │
│ └─────────────────────┘ │
│ Font: [Dropdown] Size:▲▼│
│ Color: ⚫🔵🟢🟡🔴     │
│ [Apply] [Cancel]       │
└──────────────────────────┘
```

**Comparison Page UI:**
- Split-screen view: Original (A) vs Modified (B)
- Sticky voting panel: "Which design is better?"
- Vote counter with animations
- Comment thread below
- "Try this on YOUR site" CTA banner
- Darwin branding footer

---

## 🔧 Technical Approach

### Architecture Overview

**Content Script Injection:**
- Lightweight script injected on every page load
- Listens for Darwin icon click to activate edit mode
- Creates DOM overlay for editing interface
- Captures original page state before modifications

**Edit Engine:**
```javascript
// Similar to Darwin SDK philosophy
const editEngine = {
  capture: () => capturePageSnapshot(),
  modify: (element, changes) => applyChanges(element, changes),
  save: () => generateVariantPatch(),
  restore: () => revertToOriginal()
}
```

**Data Storage:**
- Modifications stored as JSON patches (like Darwin SDK)
- Firebase Firestore for variant storage
- Screenshots generated via headless Chrome API
- User data & vote tallies in real-time database

**Variant Data Structure:**
```json
{
  "id": "abc123",
  "url": "https://example.com",
  "title": "Green CTA Test",
  "creator": "user123",
  "timestamp": 1645123456,
  "patches": [
    {
      "selector": ".hero-button",
      "property": "background-color",
      "original": "#007bff",
      "modified": "#28a745"
    }
  ],
  "screenshot": "url_to_screenshot",
  "votes": {"a": 12, "b": 8},
  "comments": [...]
}
```

**Comparison Page:**
- Hosted at `darwin.page/compare/[variant-id]`
- Server-side rendering for social sharing
- Real-time voting with WebSocket updates
- Mobile-responsive design

### Security & Ethics

- Only visual modifications (no functionality changes)
- Clear "This is a mockup" watermarks
- Respects robots.txt and site policies
- No data collection from target sites
- User-generated variants are private by default

---

## 🚀 Growth Mechanics

### The Viral Loop

1. **User creates variant** → Gets excited about the tool
2. **Shares comparison link** → Colleagues see Darwin branding
3. **Recipients vote & engage** → "How did you make this?"
4. **Install extension** → Cycle repeats with new users
5. **Need real testing** → Upgrade to Darwin Pro

### Built-in Marketing

**Every Comparison Page:**
- "Powered by Darwin" branding
- "Create your own comparison" CTA
- Social sharing with Darwin attribution
- "Test this for REAL on your site" upgrade prompts

**Extension Virality:**
- Share button directly in edit mode
- "Invite teammates" feature
- Comparison analytics: "Your variant got 47 votes!"
- Leaderboards: "Most creative variants this week"

**Content Marketing Opportunities:**
- User-generated showcases: "Best redesigns of the week"
- Case studies: "How [Company] used Darwin Playground to validate their redesign"
- Social proof: "10,000+ marketers testing ideas with Darwin"

### Network Effects

- Team workspaces for shared variants
- Comments & discussions on comparisons
- Follow other creators' variants
- "Remix this variant" feature
- Public gallery of interesting tests (with permission)

---

## 🔍 Competitive Analysis

### Existing Landscape

**Google Optimize (Discontinued 2023):**
- ❌ Required site ownership
- ❌ Complex setup process
- ✅ Real A/B testing capabilities
- **Darwin's Edge:** Works on ANY site, zero setup

**Visual Website Optimizer:**
- ❌ Expensive enterprise pricing
- ❌ Site ownership required
- ❌ Technical implementation needed
- **Darwin's Edge:** Free, instant, playground approach

**Page Optimizer Pro:**
- ❌ WordPress plugin only
- ❌ Limited to owned sites
- ❌ Basic visual editor
- **Darwin's Edge:** Universal browser extension

**Browser Dev Tools:**
- ✅ Can edit any site
- ❌ No saving/sharing
- ❌ Technical expertise required
- ❌ No collaboration features
- **Darwin's Edge:** Persistent, shareable, team-friendly

### Unique Value Proposition

**"Darwin is the only tool that lets you A/B test ideas on sites you don't own"**

No competitor offers this playground approach. Everyone else focuses on real testing with owned properties. Darwin creates a new category: **"Inspirational A/B Testing"**

---

## 💰 Monetisation Path

### The Freemium Funnel

**Extension: 100% Free Forever**
- Unlimited variants
- Unlimited sharing
- Basic analytics
- Community features

**Darwin Pro: £29/month**
- Real A/B testing on owned sites
- Advanced analytics & insights
- Team collaboration tools
- Priority support
- Custom integrations

### Revenue Psychology

**Free Extension as Top of Funnel:**
- Gets users hooked on A/B testing mindset
- Builds trust with Darwin brand
- Creates "testing addiction"
- Natural progression: "I want to test this for REAL"

**Upgrade Triggers:**
- "Love this variant? Test it live on your site"
- "Ready to move from ideas to real results?"
- "Turn your playground into profit"

**Value Ladder:**
```
Free Extension (Ideas) → Pro Trial (Real Testing) → Pro Subscription (Business Growth)
```

---

## 🎯 MVP Scope

### Phase 1: Core Experience

**Essential Features:**
- ✅ Text editing (color, font, size, content)
- ✅ Basic color changes (backgrounds, borders)
- ✅ Screenshot capture & comparison page
- ✅ Simple A/B voting
- ✅ Share links with team
- ✅ Darwin branding & upgrade CTAs

**Deliberately Excluded from MVP:**
- ❌ Image uploads/editing
- ❌ Layout/positioning changes
- ❌ Animation modifications
- ❌ User accounts/profiles
- ❌ Complex analytics

### Development Timeline

**Week 1-2: Extension Shell**
- Chrome extension boilerplate
- Content script injection
- Basic UI components

**Week 3-4: Edit Engine**
- Element selection & highlighting
- Text modification capabilities
- Color picker integration

**Week 5-6: Comparison System**
- Screenshot generation
- Firestore integration
- Voting mechanism

**Week 7-8: Sharing & Polish**
- Link sharing
- Responsive comparison pages
- Darwin branding integration

### Success Metrics

**MVP Goals:**
- 1,000 extension installs in first month
- 100 variants created per week
- 10% click-through on "Try Darwin Pro" CTAs
- 50% of shared comparisons get votes

---

## 🏷️ Name & Branding Options

### Top Contenders

**"Darwin Playground"**
- ✅ Emphasizes experimentation
- ✅ Non-threatening, fun approach
- ✅ Clear connection to testing
- ❌ Might sound less professional

**"What If?" by Darwin**
- ✅ Perfectly captures the mindset
- ✅ Intriguing, question-based
- ✅ Natural conversation starter
- ✅ SEO-friendly phrase
- **Winner: This captures the essence perfectly**

**"Darwin Labs"**
- ✅ Scientific, experimental feel
- ✅ Suggests innovation
- ❌ Too similar to other "Labs" products
- ❌ Less clear value proposition

**"Darwin Preview"**
- ✅ Clear utility
- ✅ Professional sounding
- ❌ Doesn't convey testing aspect
- ❌ Sounds like read-only

### Brand Positioning

**Tagline Options:**
- "Test any website, anytime"
- "A/B testing without the A/B"
- "See your ideas come to life"
- "The playground for web ideas"

**Chrome Store Description:**
> "What if you could A/B test Amazon's homepage? Now you can! 'What If?' by Darwin lets you visually modify any webpage, share your ideas with colleagues, and get votes on which version works better. Perfect for marketers, designers, and founders who want to test ideas before implementing them."

---

## 🎨 UI/UX Details

### Extension Icon States

**Inactive State (grey):**
- Subtle Darwin "D" logo
- Tooltip: "Click to start experimenting"

**Active State (blue):**
- Animated Darwin logo
- Tooltip: "Edit mode active - click elements to modify"

**Variant Saved (green):**
- Checkmark overlay on logo
- Tooltip: "Variant saved! Click to share"

### Edit Mode Experience

**Element Hover State:**
- Smooth blue outline (2px)
- Cursor changes to pointer
- Small "Edit" tooltip appears

**Edit Panel Animation:**
- Slides in from right edge
- Subtle drop shadow
- Blurs background behind panel

**Progress Indicators:**
- "Saving variant..." with spinner
- "Generating comparison..." progress bar
- "Ready to share!" success state

### Comparison Page Design

**Header:**
- Darwin logo + "What If? Comparison"
- Share buttons (Twitter, LinkedIn, email)
- "Create your own" prominent CTA

**Split View:**
- Original (A) and Modified (B) side-by-side
- Synchronized scrolling
- Mobile: Stacked with swipe gestures

**Voting Section:**
- Large A/B buttons with vote counts
- Real-time updates with subtle animations
- Comments section below

**Footer:**
- "Powered by Darwin - The A/B Testing Platform"
- "Try real A/B testing on your own site"
- Links to Darwin Pro features

---

## 🔥 Launch Strategy

### Pre-Launch Hype

**Week 1: Teaser Campaign**
- Post on Product Hunt "Coming Soon"
- Twitter thread: "What if you could A/B test any website?"
- Email existing Darwin users

**Week 2: Creator Preview**
- Invite 50 power users to beta
- Get feedback and testimonials
- Create demo videos

**Week 3: Content Marketing**
- Blog post: "The A/B Testing Tool We Wish Existed"
- Case study videos with beta users
- Social media countdown

### Launch Week

**Day 1: Product Hunt Launch**
- Full team mobilization
- Influencer outreach
- Press kit ready

**Day 2-7: Channel Blitz**
- Designer Communities (Designer Hangout, etc.)
- Marketing Forums (GrowthHackers, Indiehackers)
- Reddit (r/marketing, r/webdev)
- LinkedIn posts

### Post-Launch Growth

**Month 1: User Generated Content**
- "Best Variants of the Week" series
- User spotlights on social media
- Encourage sharing best comparisons

**Month 2: Partnership Outreach**
- Marketing agencies
- Design consultancies
- SaaS communities
- University marketing programs

**Month 3: Feature Expansion**
- Based on user feedback
- Add most-requested capabilities
- Prepare for mobile version

---

## 🚀 Why This Will Work

### Market Timing

- Google Optimize just died (Sept 2023) → Gap in market
- Remote work → More async design collaboration needed
- AI design tools rising → People want to test ideas quickly
- Visual-first culture → Screenshots beat descriptions

### Psychological Hooks

**Instant Gratification:**
- See changes immediately
- No setup or learning curve
- Share in seconds

**Social Validation:**
- Team voting creates engagement
- Comments drive discussion
- "My variant got 100 votes!"

**Professional FOMO:**
- "How did they mockup that so quickly?"
- "I need this tool for my presentations"
- "This makes me look more prepared"

### Viral Mechanics

Every shared comparison link is a mini-advertisement for Darwin. Unlike traditional SaaS where you need to convince people to try your product, they'll be ASKING how to get the tool after seeing the results.

---

**The Big Idea:** Transform A/B testing from a technical requirement into a creative playground that anyone can enjoy. Make it so easy and fun that NOT using it feels like a disadvantage.

**Success Vision:** "What If?" by Darwin becomes the default way marketing and design teams explore ideas, making Darwin the obvious choice when they're ready for real testing.

---

*Ready to build the future of collaborative design? Let's make "What If?" the most addictive productivity tool of 2026.*