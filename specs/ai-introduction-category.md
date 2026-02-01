# Spec: AI Introduction Category Integration

## Overview
Integrate the new `personal_blog/ai-introduction/` category (2 posts) into the blog system. This includes injecting SEO/GEO metadata, GoatCounter analytics, blog config registration, and metadata file updates.

## Files to Process
1. `personal_blog/ai-introduction/introduction-to-ai.html` - AI foundations infographic
2. `personal_blog/ai-introduction/history-of-ai.html` - AI history timeline

## Category Configuration
- **ID**: `ai-intro`
- **Display Name**: AI Introduction
- **Folder**: `ai-introduction`
- **Icon**: `fa-lightbulb` (introductory/foundational concept)
- **Color**: `teal`
- **Order**: 0 (appears first in sidebar, before ML Fundamentals)

## Post Configuration

### Post 1: introduction-to-ai.html
- **id**: `introduction-to-ai`
- **title**: "Introduction to Artificial Intelligence - Infographic"
- **excerpt**: "A comprehensive infographic covering the foundations, definitions, and applications of Artificial Intelligence."
- **category**: `ai-intro`
- **date**: `2025-01-18`
- **file**: `ai-introduction/introduction-to-ai.html`
- **order**: 1

### Post 2: history-of-ai.html
- **id**: `history-of-ai`
- **title**: "History of AI: From Dreams to Reality"
- **excerpt**: "An interactive timeline covering seven decades of AI innovation from pre-1950 foundations through the generative AI era."
- **category**: `ai-intro`
- **date**: `2025-01-19`
- **file**: `ai-introduction/history-of-ai.html`
- **order**: 2

## Requirements

### R1: SEO Meta Tags (per HTML file)
Inject into `<head>` section:
- `<meta name="title">` - post title
- `<meta name="description">` - 150-160 char description
- `<meta name="author" content="Sriramkishore Naraharisetti">`
- `<meta name="category">` - "AI Introduction"
- `<meta name="tags">` - comma-separated relevant tags
- `<meta name="robots" content="index, follow">`
- `<meta name="ai-summary">` - concise AI search summary
- `<link rel="canonical">` - full canonical URL

### R2: Open Graph Tags (per HTML file)
- `og:title`, `og:description`, `og:type` (article), `og:url`, `og:site_name` (Kishore's Blog)
- `article:author`, `article:published_time`, `article:section`, `article:tag` (one per tag)

### R3: JSON-LD Structured Data (per HTML file)
- BlogPosting schema with headline, description, datePublished
- Author (Person: Sriramkishore Naraharisetti)
- Publisher (Organization: kishoretech.com)
- keywords array, articleSection

### R4: GoatCounter Analytics (per HTML file)
- Add tracking script before `</body>`:
  ```html
  <script data-goatcounter="https://kishoretech.goatcounter.com/count"
          async src="//gc.zgo.at/count.js"></script>
  ```

### R5: Blog Config Update
In `personal_blog/index.html`:
- Add `ai-intro` category to `blogConfig.categories`
- Add both posts to `blogConfig.posts`

### R6: Metadata Files Update
- Update `metadata-report.json` with both new posts
- Update `tags-index.json` with all new tags mapped to posts

### R7: Preserve Existing Styling
- Do NOT add Tailwind CSS CDN to the post HTML files
- Do NOT modify existing custom CSS or content
- Only inject metadata into `<head>` and GoatCounter before `</body>`

## Acceptance Criteria
- [ ] Both HTML files have complete SEO meta tags in `<head>`
- [ ] Both HTML files have Open Graph tags in `<head>`
- [ ] Both HTML files have JSON-LD structured data in `<head>`
- [ ] Both HTML files have GoatCounter script before `</body>`
- [ ] `blogConfig.categories` includes `ai-intro` with order 0
- [ ] `blogConfig.posts` includes both posts with correct metadata
- [ ] `metadata-report.json` updated with both posts (totalPosts incremented)
- [ ] `tags-index.json` updated with all new tags
- [ ] Existing post content and styling is unchanged
- [ ] Category appears first in sidebar (order: 0)
- [ ] Posts load correctly via `post.html?article=ai-introduction/introduction-to-ai`
