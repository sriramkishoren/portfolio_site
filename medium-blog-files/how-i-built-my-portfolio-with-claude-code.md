---
title: "How I Built My Personal Portfolio Site Using Claude Code"
date: 2026-02-02
categories: [Web Development, AI Tools, Tutorial]
tags: [Claude Code, AI Coding, Portfolio, GitHub Pages, Tailwind CSS, Static Site, Developer Tools]
author: Sriramkishore Naraharisetti
description: "A practical guide to building a full portfolio website with a blog system, dark mode, analytics, and SEO — all powered by Claude Code as my AI pair programmer."
---

# How I Built My Personal Portfolio Site Using Claude Code

I shipped a complete portfolio website — 27-post blog, certifications page, dark mode, analytics, full SEO — without writing most of the code by hand. My tool of choice? [Claude Code](https://docs.anthropic.com/en/docs/claude-code), Anthropic's CLI-based AI coding assistant.

This isn't a "look what AI can do" puff piece. It's the workflow, the prompts, and the lessons from building [kishoretech.com](https://www.kishoretech.com) end-to-end with an AI pair programmer.

---

## Why Claude Code?

**It lives in your terminal.** Not a chatbot with a code panel — it reads your files, runs commands, and commits to git. It feels like pairing with a developer who has your entire codebase in their head.

**It remembers your project.** Through a `CLAUDE.md` file (more on this below), every conversation starts with Claude already knowing your architecture, conventions, and workflow.

**It works iteratively.** Small, focused requests. Review each change. Accept or reject. That's how real development works.

---

## Vibe Coding vs. Agentic Coding

Most AI coding today is **vibe coding**: you describe what you want, the AI writes code, you review. It's useful, but you're still doing all the thinking about *how* to break down the work.

**Agentic coding** goes further. The AI doesn't just write code — it plans tasks, creates documentation, manages workflows, and tracks its own progress. It operates more like a junior developer than an autocomplete engine.

My approach uses agentic coding with guardrails: Claude autonomously plans, specs, and implements features, but stops at defined checkpoints for my approval. I stay in control of *what* gets built; Claude handles *how* to execute it.

---

## Getting Started

```bash
# Install Claude Code (macOS via Homebrew)
brew install claude-code

# Create your project
mkdir my-portfolio && cd my-portfolio && git init

# Start Claude Code
claude
```

For other platforms (Windows, Linux, or npm), see the [official installation guide](https://docs.anthropic.com/en/docs/claude-code/getting-started).

You'll need Git, a GitHub account, and an [Anthropic API key](https://console.anthropic.com). That's it.

---

## The 7 Workflow Habits That Made the Difference

### 1. Start with a Clear Brief

Before any code, I gave Claude the full picture — what I wanted *and* what I didn't:

```
I want a personal portfolio site:
- Static, hosted on GitHub Pages
- Tailwind CSS via CDN, vanilla JS, no frameworks
- No build tools — must work without npm/webpack
- Landing page, blog with categories, certifications page
- Dark mode, mobile-responsive, privacy-friendly analytics
```

**The lesson:** Constraints matter more than features. "No build process" and "vanilla JS only" prevented Claude from suggesting React or npm packages. Tell the AI what's off the table.

### 2. Use a CLAUDE.md File (The Game Changer)

This was the single most impactful decision. A `CLAUDE.md` file at your project root acts as persistent instructions that Claude reads at the start of *every* conversation.

Mine grew to 319 lines. It covers project architecture, folder structure, naming conventions, how to add blog posts, and — critically — the development workflow Claude must follow (see next section).

```markdown
# CLAUDE.md

## Project Overview
Static portfolio site on GitHub Pages. Tailwind via CDN. No build step.

## Architecture
- index.html — portfolio landing page
- professional-certificates/index.html — certifications showcase
- personal_blog/ — blog system with category-based organization

## Adding Blog Posts
1. Create HTML file in the category folder
2. Add SEO metadata
3. Register in blogConfig.posts
4. Add analytics script
```

**The lesson:** Update it as your project evolves. After adding the blog system, I documented the creation workflow. After adding analytics, I documented the integration pattern. This compounding context is why Claude gets *better* the longer you work on a project.

### 3. Iterate in Small Bites

Early mistake: asking for too much at once. The result was always a tangled mess.

What works:

```
Step 1: "Create the HTML layout for a blog listing page — sidebar
         for categories, main area for post cards. No JS yet."

Step 2: "Now add the blogConfig JavaScript object defining
         categories and posts."

Step 3: "Add filtering logic — clicking a category shows only
         matching posts."
```

Each step is reviewable, testable, and reversible.

### 4. Actually Read the Diffs

Claude shows you changes before applying them. **Read them.** I caught over-engineered solutions, missing dark mode classes, and hardcoded values that should have used the config — all before they hit my codebase.

### 5. Commit After Every Change

```
"Commit the blog filtering changes with a descriptive message."
```

Claude handles git directly. My commit log became a development diary, and every commit was a safe rollback point.

### 6. One Feature, One Conversation

Same feature, same conversation — Claude keeps context. New feature? Start fresh. Your `CLAUDE.md` carries the project knowledge forward.

### 7. Know When to Reset

Conversation going sideways? Claude fixated on a bad approach? Start over. `CLAUDE.md` means you lose nothing important.

---

## The Spec-Driven Workflow (My Favorite Part)

This is what transformed my experience from "prompting an AI" to "managing a development process." I codified a **six-phase workflow** in my `CLAUDE.md` that Claude must follow for every feature:

```
Phase 1: PLAN      → Gather requirements, ask questions
Phase 2: SPEC      → Write specs/[feature].md
Phase 3: TODO      → Break into tasks in specs/[feature]-todo.md
Phase 4: IMPLEMENT → Build incrementally, check off tasks
Phase 5: TEST      → Verify against acceptance criteria
Phase 6: CONFIRM   → Summarize what was built
```

The rules are strict:
- Claude **stops at every checkpoint** and waits for my explicit "yes"
- Claude **never skips phases** or makes assumptions
- If I say "no," Claude asks what needs to change

### Why This Matters

Without structure, AI assistants either drown you in upfront questions or charge ahead building the wrong thing. Checkpoints solve both problems.

Here's how it played out for my certifications page:

```
Me: "I want to add a certifications showcase page."

Claude (PLAN phase): "A few questions:
- Grid layout, cards, or timeline?
- How many certifications?
- Clickable images with lightbox?
- Dark mode support?"

Me: "Grid — 2 hero cards on top, 5 smaller below.
     Yes lightbox. Yes dark mode."

Claude: "Plan complete. Approve to create spec?"
Me: "yes"

Claude: *creates specs/professional-certifications.md*
        "Spec created. Approve to create TODO?"

Me: "Add acceptance criteria for Escape key closing the lightbox."
Claude: *updates spec* "Updated. Approve to create TODO?"
Me: "yes"
```

I caught a missing accessibility requirement *before any code was written*. Problems are cheap to fix in a spec, expensive to fix in code.

### AskUserQuestion: Claude's Requirements Gathering

One of Claude Code's most underrated features. Instead of guessing, Claude asks **specific architectural questions**:

```
Claude: "Questions about the blog filtering:

1. Single-select or multi-select categories?
2. Preserve filter state in the URL for sharing?
3. Mobile layout — horizontal pills, dropdown, or hamburger?
4. Animate post transitions or instant swap?"
```

These aren't vague "what do you want?" questions. They're the exact decisions I need to make as the developer. Claude surfaces the decision points; I provide direction.

Best part: after I answer, Claude summarizes back before proceeding:

```
Claude: "My plan:
- Single-select filtering
- Deep linking via URL hash
- Horizontal pills on mobile
- Instant swap, no animation

Plan complete. Approve to create spec?"
```

That summary catches misunderstandings before they become bugs.

### Specs and TODOs: Your Project's Memory

By project's end, I had **11 feature specs and 11 TODO files** — covering everything from the blog viewer architecture to SEO metadata to analytics integration.

```markdown
## TODO: Professional Certifications Page
- [x] Create page structure with hero + grid layout
- [x] Implement image lightbox with backdrop dismiss
- [x] Add Escape key to close lightbox
- [x] Add dark mode support
- [x] Test on mobile viewports
```

Claude updates checkboxes in real time. I can pause, come back tomorrow, and the TODO tells the next conversation exactly what's done and what's left. The specs tell it *why* things were built that way.

### Spec-Driven > Prompt-and-Pray

Most people: `Prompt → Hope → Fix → Repeat`

This workflow: `Plan → Align → Spec → Build → Verify`

More structured? Yes. Faster in practice? Also yes — because you almost never throw away work.

---

## Best Practices and Prompt Patterns

After building the entire site this way, here's what consistently works:

**Be specific about locations:**
```
# Vague: "Update the blog page"
# Better: "In personal_blog/index.html, update getSortedPosts()
#          to prioritize posts with an 'order' field."
```

**Ask Claude to explore first:**
```
"Explore the codebase and understand how blog filtering works
before making changes. Tell me what you find."
```

**Reference existing patterns:**
```
"I use Tailwind dark: variants everywhere. Make sure the new page
follows the same pattern."
```

**Use templates for common tasks:**
```
"In [file], add [feature]. Current behavior: [X].
Desired behavior: [Y]. Stay consistent with existing patterns."
```

**For batch work** (this is where AI really earns its keep):
```
"Add SEO metadata to all 27 blog posts — meta tags, Open Graph,
JSON-LD structured data. Use blogConfig as the source of truth."
```

Claude processed all 27 posts in one go. Doing that manually would have been brutal.

### Mistakes to Avoid

1. **Skipping CLAUDE.md** — the difference between Claude knowing your project and guessing
2. **Mega-prompts** — break features into steps, review each one
3. **Blind acceptance** — always read the diffs
4. **Stale documentation** — update CLAUDE.md as the project evolves
5. **Fighting simpler solutions** — if Claude suggests a simpler approach, seriously consider it

### Your Safety Net: Git

```bash
git diff                    # See what changed
git checkout .              # Undo uncommitted changes
git reset --soft HEAD~1     # Undo last commit, keep changes
git reset --hard abc1234    # Roll back to a specific commit
```

Commit after every successful change. This is non-negotiable.

---

## What I Shipped

A portfolio site with a 27-post blog system, certifications showcase, dark mode, category filtering, deep linking, privacy-friendly analytics, full SEO/GEO metadata across every post, and 11 documented feature specs.

The tech stack: HTML, Tailwind CSS (CDN), vanilla JavaScript, GitHub Pages. No frameworks. No build tools. No database. Loads fast, works everywhere, costs nothing to host.

---

## The Real Takeaway

Building this site taught me something unexpected: **the skill of working with AI isn't prompting — it's project management.**

The developers who get the most out of Claude Code are the ones who:
- Define boundaries and constraints upfront
- Break work into small, reviewable chunks
- Maintain living documentation
- Review critically instead of accepting blindly
- Commit religiously

Claude Code didn't replace my judgment. It amplified my output. Architecture, UX, what to build and what to skip — those decisions were mine. Claude handled the implementation, the boilerplate, and the repetitive work.

Start with a `CLAUDE.md` file. Define your workflow. Iterate in small steps. You'll be surprised how far you get.

---

*The source code is on [GitHub](https://github.com/kishoretech/portfolio_site). Find me on [LinkedIn](https://www.linkedin.com/in/kishoretech) or at [kishoretech.com](https://www.kishoretech.com).*
