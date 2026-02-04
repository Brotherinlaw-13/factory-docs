# 8 Prompt Patterns That Will Transform Your Vibe Coding

Vibe coding, the practice of describing what you want in natural language and letting an AI write the implementation, has gone from novelty to mainstream in under a year. But most developers are doing it badly. They type vague instructions, get mediocre code, and blame the model.

The model is not the problem. The prompt is.

After hundreds of hours of AI-assisted development across Cursor, Aider, Claude Code, and Copilot, these are the eight prompt patterns that consistently produce better code, fewer refine cycles, and less time wasted.

---

## Pattern 1: Be Specific

This is the most impactful change you can make, and the one most developers resist because it feels like extra work upfront.

| Vague prompt | Specific prompt |
|---|---|
| "Create a paginated API endpoint" | "Create a GET /api/products endpoint with cursor-based pagination, 20 items per page, sorted by created_at desc, returning a next_cursor field" |

The specific version eliminates ambiguity. The AI does not need to guess your pagination strategy, your page size, or your sort order. You get the right code on the first try instead of spending three rounds refining.

Spend 60 seconds writing a thorough description. It will save you 10 minutes of back-and-forth.

---

## Pattern 2: Show, Don't Tell

Instead of describing your coding conventions in abstract terms, point the AI at an example from your own codebase.

| Abstract instruction | Concrete example |
|---|---|
| "Follow clean code practices" | "Follow the pattern in @api/users/route.ts" |

In Cursor, use `@file` references to point at specific files. In Aider, use `/add` to bring files into context. In Claude Code, the model reads your project structure automatically.

Providing a concrete example from your own codebase is worth more than paragraphs of description. The AI will match the style, naming, and structure almost exactly.

---

## Pattern 3: Constrain the Output

AI models are eager to please. If you do not set boundaries, they will make creative decisions you did not ask for, install dependencies you do not want, and use patterns that do not match your project.

| Unconstrained | Constrained |
|---|---|
| "Build a form" | "Build a form using react-hook-form and zod. No other form libraries." |

The constraint prevents the AI from reaching for Formik, or rolling its own validation, or pulling in a UI library you have never used. Every prompt should tell the AI what it *cannot* do, not just what it should do.

---

## Pattern 4: Define the Boundary

Large refactors are where most people hit the AI's context limits. The solution is to be explicit about scope.

| Unbounded | Bounded |
|---|---|
| "Refactor the auth" | "Refactor only lib/auth.ts and its direct imports. Don't touch the API routes yet." |

Without boundaries, the AI will attempt to refactor your entire authentication system in a single pass, lose coherence halfway through, and leave you with half-migrated code that does not compile. Define what is in scope and what is not.

---

## Pattern 5: Request a Specific Format

"Help me" is the worst way to start a prompt. Tell the AI exactly what output format you want.

| Format-free | Format-specified |
|---|---|
| "Help me with tests" | "Write Vitest tests. One describe block per public method. Include edge cases for null/undefined inputs." |

When you specify the framework, the test structure, and the edge cases to cover, you get tests you can actually commit. When you say "help me with tests," you get a generic explanation of testing philosophy.

---

## Pattern 6: Plan Before You Code

The most powerful vibe coding technique is not about writing code at all. It is about getting the AI to *plan* first.

| Jump to code | Plan first |
|---|---|
| "Build the feature" | "Plan the file structure and data model first. Don't write implementation until I approve the plan." |

Before writing any implementation, prompt:

```
I need to build [feature description]. Before writing any code,
give me:
1. The file structure — what files will be created or modified
2. The data model — what types/interfaces/schemas are needed
3. The API surface — what endpoints or functions will exist
4. The dependencies — what existing code this will interact with
5. Edge cases — what could go wrong

Do not write any implementation code yet. Just the plan.
```

Review the plan. Adjust it. *Then* ask for implementation. This avoids the painful situation where the AI generates 500 lines of code that is architecturally wrong.

---

## Pattern 7: Provide Structured Context for Bugs

When something is broken, resist the urge to paste the error and say "fix this." That produces guesswork. Instead, give structured context:

| Unstructured | Structured |
|---|---|
| "Fix this bug" | "This error occurs when [context]. Here's the relevant code [code]. I've tried [attempts]. I suspect [hypothesis]." |

A full structured bug report looks like this:

```
I'm getting an error in my Next.js app.

What I'm trying to do: Fetch user data on the profile page
using a server component.

The error:
TypeError: Cannot read properties of undefined (reading 'id')
  at UserProfile (app/profile/page.tsx:12:34)

Relevant code: [paste the component]

What I've already tried:
- Checked that the user session exists (it does, I logged it)
- Verified the API endpoint returns data in Postman

My suspicion: I think the async data fetching might not be
awaited properly, but I'm not sure where.
```

This structured format gives the AI enough context to provide a targeted fix rather than a speculative rewrite of your entire component.

---

## Pattern 8: Iterate Narrowly

When the AI gets something wrong, vague feedback produces vague revisions. Be surgical.

| Vague feedback | Narrow feedback |
|---|---|
| "That's wrong, try again" | "The validation logic is correct but the error messages should use the field labels, not the field names." |

"Try again" tells the AI nothing. It will change random things hoping to land on what you want. Narrow feedback tells it exactly what to keep and what to change.

Typically you will do 2 to 3 refine cycles. If you are past 5, the AI probably does not have enough context. Add more files to the conversation or try a different approach entirely.

---

## When to Stop Vibing and Write It Yourself

These patterns will dramatically improve your AI-assisted development, but vibe coding is a tool, not a religion. Stop and write the code yourself when:

- **You are on refine cycle five** for the same piece of code. You are spending more time prompt-engineering than coding.
- **The logic is genuinely novel.** If you are inventing an algorithm, write it. AI can only recombine existing patterns.
- **Performance is critical.** AI-generated code is usually correct but rarely optimal. Hand-tune hot paths.
- **You cannot explain what you want.** If you cannot describe it clearly enough for the AI, you do not understand the problem well enough yet.
- **The code is security-critical.** Authentication, authorisation, encryption, payment processing. Review AI suggestions here but write the core logic yourself.

The best vibe coders are not the ones who use AI for everything. They are the ones who know exactly when to use it and when to step in.

---

*This is an extract from the Vibe Coding Starter Kit: System Prompts & Workflows for AI-Assisted Development. Get the full guide at therookai.gumroad.com/l/vibe-coding-kit*
