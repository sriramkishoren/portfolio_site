# Blog Post Viewer Feature Spec

**Status: COMPLETE**

## Overview

Create a container/viewer page that displays individual blog posts within an iframe, with a consistent navigation link ("← Back to Blog") at the top. This eliminates the need to add navigation manually to each individual blog post file.

## Architecture

```
User clicks blog post card on listing page
        ↓
Navigates to: post.html?article=road_framework
        ↓
post.html reads query parameter
        ↓
Loads road_framework.html inside iframe
        ↓
User sees navigation bar + blog post content
```

## Requirements

### 1. Viewer Page (`personal_blog/post.html`)

- **Navigation Bar:**
  - Position: Above the iframe, part of page flow
  - Content: "← Back to Blog" text link
  - Link target: `index.html` (blog listing page)
  - Styling: Match existing site design (Tailwind CSS)
  - Dark mode support using Tailwind `dark:` classes

- **Iframe Container:**
  - Full width of the content area
  - Height: Fill remaining viewport height (100vh minus nav height)
  - No visible border
  - Loads the blog post HTML file based on query parameter

- **Query Parameter Handling:**
  - Read `article` parameter from URL (e.g., `?article=road_framework`)
  - Append `.html` extension to construct the file path
  - Load `{article}.html` in the iframe
  - Handle missing/invalid parameter gracefully (redirect to listing or show error)

- **Styling:**
  - Use Tailwind CSS via CDN (consistent with other pages)
  - Include dark mode toggle (consistent with other pages)
  - Minimal header to maximize post viewing area

### 2. Update Blog Listing Page (`personal_blog/index.html`)

- Update all blog post links to point to the viewer:
  - `href="road_framework.html"` → `href="post.html?article=road_framework"`
  - `href="ai_use_cases.html"` → `href="post.html?article=ai_use_cases"`

### 3. Individual Blog Posts (No Changes)

- `road_framework.html` - remains unchanged
- `ai_use_cases.html` - remains unchanged
- Future posts will also be standalone HTML files

## Acceptance Criteria

- [ ] `post.html` exists in `personal_blog/` folder
- [ ] Clicking "← Back to Blog" navigates to `personal_blog/index.html`
- [ ] URL `post.html?article=road_framework` loads `road_framework.html` in iframe
- [ ] URL `post.html?article=ai_use_cases` loads `ai_use_cases.html` in iframe
- [ ] Iframe displays full blog post content without scrollbars on the outer page
- [ ] Dark mode toggle works on the viewer page
- [ ] Navigation styling matches existing site design
- [ ] Blog listing page links updated to use viewer
- [ ] Clicking a blog card from listing page opens it in the viewer
- [ ] Missing/invalid article parameter shows appropriate fallback
- [ ] Works on mobile (responsive design)
