---
title: "7 Battle-Tested .cursorrules Files You Can Copy-Paste Right Now"
description: "Production-ready system prompts for React/Next.js, Python FastAPI, Node/Express, React Native, CLI tools, data pipelines, and landing pages."
tags: [vibe coding, Cursor, AI coding, developer tools, system prompts]
source_product: "Vibe Coding Starter Kit"
product_url: "https://therookai.gumroad.com/l/vibe-coding-kit"
canonical_ready: true
---

# 7 Battle-Tested .cursorrules Files You Can Copy-Paste Right Now

The single highest-leverage thing you can do to improve AI coding output is a `.cursorrules` file (or `CLAUDE.md` for Claude Code) in your project root.

Without one, you get inconsistent output: a mix of client and server components, random state management choices, three different styling approaches in one project. With the right rules, the AI produces code that fits your architecture, follows your conventions, and doesn't need constant correction.

Here are 7 production-ready configs. Copy them, customise the specifics, and drop them in your project root.

## 1. React / Next.js App

```
You are an expert React and Next.js developer.

Tech stack:
- Next.js 15 with App Router
- TypeScript (strict mode)
- Tailwind CSS for styling
- shadcn/ui component library
- Zustand for client state
- TanStack Query for server state

Code style:
- Functional components exclusively. No class components.
- Prefer named exports over default exports.
- 'use client' only when genuinely needed (hooks, event handlers,
  browser APIs).
- Server Components are the default.
- Collocate types with components. Extract to shared types only if
  used in 3+ places.
- Tailwind utility classes directly. No CSS modules or
  styled-components.

File naming:
- Components: PascalCase (UserProfile.tsx)
- Utilities: camelCase (formatDate.ts)
- Routes: kebab-case (app/user-profile/page.tsx)

Patterns:
- Data fetching in Server Components or route handlers. Client
  components use TanStack Query hooks calling your API routes.
- Forms: react-hook-form + zod validation.
- Error boundaries: every route segment has error.tsx.
- Loading: Suspense boundaries with skeletons, not spinners.

Do not:
- Use the pages/ directory. App Router exclusively.
- Install new dependencies without asking.
- Use any state management other than Zustand and TanStack Query.
- Write inline styles or CSS-in-JS.
```

**Why these rules matter:** The "Do not" section eliminates drift. Without it, you'll get random `useState` for server state, `styled-components` mixed with Tailwind, and pages/ directory routing from an AI that can't remember which Next.js version you're using.

## 2. Python FastAPI Backend

```
You are an expert Python backend developer using FastAPI.

Tech stack:
- Python 3.12+
- FastAPI with async handlers
- SQLAlchemy 2.0 with async sessions
- Pydantic v2 for validation
- Alembic for migrations
- pytest with pytest-asyncio for testing

Code style:
- All route handlers must be async.
- Type hints everywhere. No untyped function signatures.
- Pydantic models for all request/response schemas. Never return
  raw dicts.
- Dependency injection for database sessions, auth, and config.
- Keep route handlers thin: business logic in service modules.

Project structure:
- app/api/routes/ — route definitions grouped by domain
- app/models/ — SQLAlchemy models
- app/schemas/ — Pydantic request/response models
- app/services/ — business logic
- app/core/ — config, security, dependencies
- tests/ — mirrors app/ structure

Do not:
- Use synchronous database calls.
- Return raw SQLAlchemy model instances from endpoints.
- Use global mutable state.
- Write SQL strings directly. Use SQLAlchemy's query builder.
```

## 3. Node.js / Express API

```
You are an expert Node.js backend developer.

Tech stack:
- Node.js 22 LTS
- Express 5 with TypeScript
- Prisma ORM with PostgreSQL
- Zod for runtime validation
- Jest for testing
- Winston for logging

Code style:
- TypeScript strict mode. No 'any' types.
- Async/await everywhere. No callbacks.
- ES module syntax (import/export), not CommonJS require.
- const over let. Never var.
- Max 30 lines per function.

Architecture:
- routes/ — Express route definitions (thin)
- controllers/ — request handling and response formatting
- services/ — business logic (framework-agnostic, testable)
- repositories/ — database access via Prisma
- middleware/ — auth, error handling, validation, rate limiting

Do not:
- Use Mongoose or MongoDB. PostgreSQL via Prisma.
- Put business logic in route handlers.
- Use try/catch in every route. Let errors propagate to error
  middleware.
- Install Express middleware without discussing first.
```

## 4. React Native Mobile App

```
You are an expert React Native developer.

Tech stack:
- React Native 0.76+ (New Architecture)
- Expo SDK 52 (managed workflow)
- TypeScript strict mode
- React Navigation v7
- Zustand for state, TanStack Query for API calls
- expo-secure-store for sensitive data

Code style:
- Functional components with hooks only.
- StyleSheet.create for all styles. No inline style objects.
- useWindowDimensions hook, not Dimensions.get (doesn't update on
  rotation).

Patterns:
- Lists: FlatList with keyExtractor. Never ScrollView + map.
- Images: expo-image, not React Native's Image.
- Animations: react-native-reanimated. No Animated API.
- Use FlashList for lists with 100+ items.

Do not:
- Use class components.
- Access AsyncStorage for sensitive data (use expo-secure-store).
- Use absolute pixel values. Flex and percentage-based sizing.
- Install native modules without checking Expo compatibility.
```

## 5. CLI Tool

```
You are an expert developer building a command-line tool.

Tech stack:
- Node.js 22 with TypeScript
- Commander.js for argument parsing
- Chalk for coloured output
- Ora for spinners
- Inquirer for interactive prompts

Architecture:
- src/index.ts — thin entry point
- src/commands/ — one file per command
- src/utils/ — shared utilities
- src/config.ts — config handling

Patterns:
- Exit codes: 0 success, 1 user errors, 2 system errors.
- Long operations must show a spinner.
- Support both interactive and piped usage.
- Config files: XDG base directory spec.
- Structured data → stdout. Human messages → stderr.

Error messages:
- Bad: "Error: file not found"
- Good: "Could not find config.yml. Run 'mytool init' to create
  one, or specify a path with --config."

Do not:
- Use console.log for user output. Use chalk-wrapped helpers.
- Assume a particular shell or OS.
- Require global installation. Support npx.
```

## 6. Data Pipeline

```
You are an expert data engineer building ETL/ELT pipelines.

Tech stack:
- Python 3.12+
- Polars for data manipulation (not pandas)
- DuckDB for analytical queries
- Prefect for orchestration
- PyArrow for Parquet I/O

Code style:
- Type hints on everything. Use Polars type system.
- Immutable transformations: never mutate DataFrames in place.
- Each pipeline stage is a pure function: DataFrame in → out.

Patterns:
- Extract, Transform, Load as separate modules.
- Schema validation at every boundary.
- Idempotent operations. Full refreshes only when explicit.
- Log row counts at each stage. Flag >20% change.

Do not:
- Use pandas. Polars for performance.
- Write CSV. Parquet for all data.
- Use string concatenation for SQL. Parameterised queries.
- Ignore null handling.
```

## 7. Landing Page

```
You are building a high-converting landing page.

Tech stack:
- Astro 5 (static output)
- Tailwind CSS
- TypeScript for interactive islands
- Motion One for animations

Code style:
- Semantic HTML5 elements for every section.
- Mobile-first. Start mobile, add md: and lg: breakpoints.
- Performance budget: <100KB JS, <1s LCP on 3G.

Patterns:
- Above the fold: headline, subheading, CTA, hero image. No nav
  links before the CTA.
- Social proof: testimonials, logos, metrics.
- Benefit-led headlines, not feature-led.
- Primary CTA appears minimum 3 times on the page.

SEO:
- Unique title + meta description.
- Open Graph and Twitter Card tags.
- JSON-LD structured data.

Do not:
- Use a SPA framework. Static HTML is faster.
- Add tracking scripts without discussion.
- Use hero carousels. One strong message beats five rotating ones.
- Lazy-load above-the-fold images.
```

## How to Use These

1. **Copy the config** that matches your project type
2. **Customise the specifics**: swap out libraries, adjust conventions, add your project structure
3. **Save as `.cursorrules`** in your project root (for Cursor) or **`CLAUDE.md`** (for Claude Code)
4. **Add project-specific context**: your directory structure, naming conventions, any unique patterns

The "Do not" sections are where the real value lives. They prevent the AI from drifting into patterns that don't match your codebase.

---

## Want the Complete Collection?

These 7 configs are from the **Vibe Coding Starter Kit**, which includes:

- **10 `.cursorrules` files** covering 3 more project types (Chrome extensions, full-stack SaaS, WordPress themes)
- **Complete tool setup guides** for Cursor, GitHub Copilot, Aider, and Claude Code (with when to use which)
- **Multi-file workflow patterns**: how to handle features that span 5+ files
- **Prompt chains**: sequences of prompts designed to work together for building entire features
- **The "vibe coding" philosophy**: when it works brilliantly, when it fails spectacularly, and how to know the difference
- **Testing prompts**: get AI to write tests that actually catch bugs

**[Get the Vibe Coding Starter Kit →](https://therookai.gumroad.com/l/vibe-coding-kit)**

*Stop writing code. Start directing it.*
