# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website for Sriramkishore Naraharisetti. The site is hosted on GitHub Pages at www.kishoretech.com.

## Architecture

- **Main site**: `index.html` - portfolio landing page
- **Professional Certifications**: `professional-certificates/index.html` - certifications & awards showcase
  - Hero + Grid layout: 2 featured certifications at top, 5 compact cards in grid below
  - Image lightbox: click any image to view full-size in a popup overlay (close via X, backdrop click, or Escape)
  - Hover effects: gentle zoom + shadow on images, card lift on hover
  - 7 certifications with images in `professional-certificates/images/`
- **Personal Blog**: `personal_blog/` - self-hosted blog section with category-based organization
  - `personal_blog/index.html` - blog listing page with sidebar filtering and card layout
  - `personal_blog/post.html` - blog post viewer (loads posts in iframe via `?article=` param)
  - `personal_blog/[Category]/[post-name].html` - individual blog posts organized by category
- **Blog Categories** (lowercase with hyphens):
  - `ai-introduction/` - 2 posts introducing AI foundations and history
  - `ml-fundamentals/` - 7 posts about machine learning basics
  - `ml-algorithms/` - 10 posts about ML algorithm deep-dives
  - `data-optimization-for-ml/` - 9 posts about data quality, labeling, and optimization for ML
  - `optimizing-ai-resources/` - 10 posts about AI memory, compute, query expressiveness, and performance
  - `ai-bias-and-risks/` - 5 posts about AI bias, fairness, ethics, and legal perspectives
  - `ai-business-usecases/` - 6 posts about AI applications in business
  - `ai-project-management/` - 2 posts about managing AI/ML projects
  - `agentic-ai/` - 3 posts about agentic AI coding workflows, security, and AI coding maturity levels
- **Styling**: Tailwind CSS loaded via CDN (with forms, typography, aspect-ratio, line-clamp plugins)
- **Icons**: Font Awesome 5.15.3 via CDN
- **Dark mode**: Implemented using Tailwind's `dark:` class variants with manual toggle (adds/removes `dark` class on `<html>`)
- **Analytics**: GoatCounter (privacy-friendly, GDPR compliant, no cookies)
  - Site code: `kishoretech`
  - Dashboard: https://kishoretech.goatcounter.com

## Folder Structure

```
portfolio_site/
├── index.html              # Main portfolio page
├── CNAME                   # Custom domain config
├── CLAUDE.md               # Claude Code guidance
├── professional-certificates/
│   ├── index.html          # Certifications showcase (hero + grid layout with lightbox)
│   └── images/             # Certification/award images (.webp)
├── personal_blog/
│   ├── index.html          # Blog listing page (category sidebar + post cards)
│   ├── post.html           # Blog post viewer (iframe container with nav)
│   ├── metadata-report.json # SEO metadata summary for all posts
│   ├── tags-index.json     # Tag-to-posts mapping index
│   ├── ai-introduction/
│   │   └── [post].html     # AI foundations & history posts
│   ├── ml-fundamentals/
│   │   └── [post].html     # Machine learning basics posts
│   ├── ml-algorithms/
│   │   └── [post].html     # ML algorithm deep-dive posts
│   ├── data-optimization-for-ml/
│   │   └── [post].html     # Data quality & labeling optimization posts
│   ├── optimizing-ai-resources/
│   │   └── [post].html     # AI memory, compute & performance posts
│   ├── ai-bias-and-risks/
│   │   └── [post].html     # AI bias, fairness & ethics posts
│   ├── ai-business-usecases/
│   │   └── [post].html     # Business-focused AI posts
│   ├── ai-project-management/
│   │   └── [post].html     # AI/ML project lifecycle posts
│   └── agentic-ai/
│       └── [post].html     # Agentic AI coding & security posts
└── specs/                  # Feature specifications
```

## Development

No build process required. Open `index.html` directly in a browser or use any local server.

## Deployment

The site deploys automatically to GitHub Pages when changes are pushed to the `main` branch. The custom domain `www.kishoretech.com` is configured via the `CNAME` file.

## Adding Blog Posts

To add a new blog post:
1. Create a new HTML file in the appropriate category folder using **lowercase with hyphens** (e.g., `personal_blog/ml-fundamentals/my-new-post.html`)
2. Use Tailwind CSS via CDN for styling
3. Add SEO metadata in the `<head>` section (see SEO Metadata section below)
4. No need to add navigation - posts are displayed via the viewer (`post.html`)
5. Add entry to the `blogConfig.posts` array in `personal_blog/index.html`:
   ```javascript
   {
       id: "my-new-post",
       title: "My Post Title",
       excerpt: "Brief description of the post.",
       category: "ml-fundamentals",  // Must match a category id
       date: "2025-01-25",
       file: "ml-fundamentals/my-new-post.html",
       order: 1  // Optional: lower number = higher priority
   }
   ```
6. Add GoatCounter tracking script before `</body>`:
   ```html
   <script data-goatcounter="https://kishoretech.goatcounter.com/count"
           async src="//gc.zgo.at/count.js"></script>
   ```
7. Update `metadata-report.json` and `tags-index.json` with the new post

**Naming Conventions:**
- Folders: lowercase with hyphens (e.g., `ml-fundamentals`, `ai-business-usecases`)
- Files: descriptive, lowercase with hyphens (e.g., `what-is-machine-learning.html`)

**Category IDs:**
- `ai-intro` - AI Introduction
- `ml-fundamentals` - ML Fundamentals
- `ml-algorithms` - ML Algorithms
- `data-optimization` - Data Optimization for ML
- `optimizing-ai-resources` - Optimizing AI Resources
- `ai-bias-and-risks` - AI Bias and Risks
- `ai-business` - AI Business UseCases
- `ai-pm` - AI Project Management
- `agentic-ai` - Agentic AI

## SEO & GEO Metadata

All blog posts include SEO metadata for search engine optimization and GEO (Generative Engine Optimization) for AI search tools.

**Required metadata in each post's `<head>` section:**

```html
<!-- SEO Meta Tags -->
<meta name="title" content="Post Title">
<meta name="description" content="150-160 character description">
<meta name="author" content="Sriramkishore Naraharisetti">
<meta name="category" content="ML Fundamentals">
<meta name="tags" content="Tag1, Tag2, Tag3">
<meta name="robots" content="index, follow">
<meta name="ai-summary" content="Concise summary for AI search tools">
<link rel="canonical" href="https://www.kishoretech.com/personal_blog/post.html?article=category-folder/post-name">

<!-- Open Graph Tags -->
<meta property="og:title" content="Post Title">
<meta property="og:description" content="Description for social sharing">
<meta property="og:type" content="article">
<meta property="og:url" content="https://www.kishoretech.com/personal_blog/post.html?article=category-folder/post-name">
<meta property="og:site_name" content="Kishore's Blog">
<meta property="article:author" content="Sriramkishore Naraharisetti">
<meta property="article:published_time" content="YYYY-MM-DD">
<meta property="article:section" content="Category Name">
<meta property="article:tag" content="Tag1">

<!-- JSON-LD Structured Data -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Post Title",
    "description": "Post description",
    "datePublished": "YYYY-MM-DD",
    "author": {
        "@type": "Person",
        "name": "Sriramkishore Naraharisetti",
        "url": "https://www.kishoretech.com"
    },
    "publisher": {
        "@type": "Organization",
        "name": "kishoretech.com",
        "url": "https://www.kishoretech.com"
    },
    "keywords": ["Tag1", "Tag2"],
    "articleSection": "Category Name"
}
</script>
```

**Generated metadata files:**
- `metadata-report.json` - Summary of all posts with titles, descriptions, tags, and URLs
- `tags-index.json` - Mapping of tags to posts for content discovery

## Blog Post Viewer Architecture

Blog posts are displayed through a viewer page (`post.html`) that provides consistent navigation:
- **URL pattern**: `post.html?article=[category]/[post-name]` (without `.html` extension)
  - Example: `post.html?article=ml-fundamentals/what-is-machine-learning`
  - No URL encoding needed (folder names use hyphens, no spaces)
- **Navigation**: "← Back to Blog" link is in the viewer, not in individual posts
- **Iframe**: Posts load inside an iframe within the viewer
- **Fallback**: Invalid/missing article parameter shows a "Post Not Found" page

## Blog Index Features

The blog index (`personal_blog/index.html`) includes:
- **Sidebar filtering**: Desktop shows category buttons; mobile shows horizontal pills
- **Post cards**: Display title, excerpt, date, and category badge
- **Hierarchical ordering**: Posts are sorted by category order first, then by post order within each category
- **Deep linking**: URL hash (`#category=ml-fundamentals`) preserves filter state
- **Dark mode**: Full support with toggle button

## GoatCounter Analytics

All pages include GoatCounter for privacy-friendly visitor tracking (no cookies, GDPR compliant).

**Tracking Script (on ALL 59 HTML pages):**
```html
<script data-goatcounter="https://kishoretech.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
```

**Visitor Count Display (on 3 pages only):**

| Page | What it Displays |
|------|-----------------|
| `index.html` | TOTAL site visitors (all pages combined) |
| `personal_blog/index.html` | Page-specific views |
| `personal_blog/post.html` | Views for the specific blog post loaded via `?article=` param |

Individual blog posts (56 files) have the tracking script but no visible counter (the post viewer shows the count instead).

**API Endpoints:**
- Total site views: `https://kishoretech.goatcounter.com/counter/TOTAL.json`
- Page-specific: `https://kishoretech.goatcounter.com/counter/{encoded-path}.json`

**Dashboard:** https://kishoretech.goatcounter.com

## Display Order Configuration

Posts are displayed using a **two-level hierarchical sort**:

1. **Primary sort (Category Grouping):** Posts are grouped by their parent category's `order` property. Categories with lower `order` values appear first.
2. **Secondary sort (Within Category):** Within each category, posts are sorted by their individual `order` property. Lower number = appears first.

**Post Ordering:**
- Each category's posts are numbered independently starting from 1 (e.g., 1, 2, 3...)
- Add `order` field to posts in `blogConfig.posts`
- Lower number = higher priority within the category

**Category Ordering:**
- Add `order` field to categories in `blogConfig.categories`
- Lower number = higher priority (appears first in sidebar/pills and in post listing)
- "All Posts" button always appears first, before any category

**Example:**
```javascript
// Categories
categories: [
    { id: "ai-intro", name: "AI Introduction", ..., order: 0 },
    { id: "ml-fundamentals", name: "ML Fundamentals", ..., order: 1 },
    { id: "ml-algorithms", name: "ML Algorithms", ..., order: 2 },
    { id: "ai-business", name: "AI Business UseCases", ..., order: 3 },
    { id: "ai-pm", name: "AI Project Management", ..., order: 4 }
]

// Posts (order is per-category, starting from 1)
posts: [
    { id: "post-a", title: "First in AI Intro", category: "ai-intro", ..., order: 1 },
    { id: "post-b", title: "Second in AI Intro", category: "ai-intro", ..., order: 2 },
    { id: "post-c", title: "First in ML Fundamentals", category: "ml-fundamentals", ..., order: 1 },
    { id: "post-d", title: "Second in ML Fundamentals", category: "ml-fundamentals", ..., order: 2 }
]
```

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
