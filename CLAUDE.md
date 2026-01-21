# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website for Sriramkishore Naraharisetti. The site is hosted on GitHub Pages at www.kishoretech.com.

## Architecture

- **Main site**: `index.html` - portfolio landing page
- **Personal Blog**: `personal_blog/` - self-hosted blog section
  - `personal_blog/index.html` - blog listing page
  - `personal_blog/post.html` - blog post viewer (loads posts in iframe via `?article=` param)
  - `personal_blog/[post-name].html` - individual blog post files (loaded via viewer)
- **Styling**: Tailwind CSS loaded via CDN (with forms, typography, aspect-ratio, line-clamp plugins)
- **Icons**: Font Awesome 5.15.3 via CDN
- **Dark mode**: Implemented using Tailwind's `dark:` class variants with manual toggle (adds/removes `dark` class on `<html>`)

## Folder Structure

```
portfolio_site/
├── index.html              # Main portfolio page
├── CNAME                   # Custom domain config
├── CLAUDE.md               # Claude Code guidance
├── personal_blog/
│   ├── index.html          # Blog listing page
│   ├── post.html           # Blog post viewer (iframe container with nav)
│   └── [post-name].html    # Individual blog posts
└── specs/                  # Feature specifications
```

## Development

No build process required. Open `index.html` directly in a browser or use any local server.

## Deployment

The site deploys automatically to GitHub Pages when changes are pushed to the `main` branch. The custom domain `www.kishoretech.com` is configured via the `CNAME` file.

## Adding Blog Posts

To add a new blog post:
1. Create a new HTML file in `personal_blog/` (e.g., `my-post.html`)
2. Use Tailwind CSS via CDN for styling
3. No need to add navigation - posts are displayed via the viewer (`post.html`)
4. Add entry to `personal_blog/index.html` with link: `post.html?article=my-post`

## Blog Post Viewer Architecture

Blog posts are displayed through a viewer page (`post.html`) that provides consistent navigation:
- **URL pattern**: `post.html?article=[post-name]` (without `.html` extension)
- **Navigation**: "← Back to Blog" link is in the viewer, not in individual posts
- **Iframe**: Posts load inside an iframe within the viewer
- **Fallback**: Invalid/missing article parameter shows a "Post Not Found" page

# Feature Development Workflow (STRICT)

When I ask you to build or create any feature, follow these phases IN ORDER.
**DO NOT skip phases. DO NOT proceed without my approval at each checkpoint.**

---

## Phase 1: PLAN
- Use AskUserQuestion to understand the feature
- Ask about: purpose, users, technical details, UI, edge cases
- Summarize your understanding

**CHECKPOINT 1:** Ask "Plan complete. Approve to create spec? (yes/no)"
- STOP and wait for my response
- Only proceed if I say "yes"

---

## Phase 2: SPEC
- Create detailed spec file: `specs/[feature-name].md`
- Include: Overview, Requirements, Acceptance Criteria

**CHECKPOINT 2:** Ask "Spec created. Approve to create TODO? (yes/no)"  
- STOP and wait for my response
- Only proceed if I say "yes"

---

## Phase 3: TODO
- Create TODO file: `specs/[feature-name]-todo.md`
- Break spec into small tasks with checkboxes
- Example:
```
  ## TODO: [Feature Name]
  - [ ] Task 1
  - [ ] Task 2
  - [ ] Task 3
```

**CHECKPOINT 3:** Ask "TODO created. Approve to implement? (yes/no)"
- STOP and wait for my response
- Only proceed if I say "yes"

---

## Phase 4: IMPLEMENT
- Complete each task one by one
- After each task: update the TODO file (mark [x] complete)
- Show progress: "Completed: Task 1 ✓ | Next: Task 2"

**CHECKPOINT 4:** Ask "Implementation complete. Ready to test? (yes/no)"
- STOP and wait for my response

---

## Phase 5: TEST
- Run through acceptance criteria in spec
- Report pass/fail for each item
- Fix any failures

**CHECKPOINT 5:** Ask "All tests passing. Confirm feature complete? (yes/no)"
- STOP and wait for my response

---

## Phase 6: CONFIRM
- Mark spec as complete
- Summarize what was built
- List any follow-up items

---

## RULES
- NEVER skip checkpoints
- NEVER proceed without explicit "yes"
- ALWAYS update TODO after each task
- If I say "no" at any checkpoint, ask what needs to change
