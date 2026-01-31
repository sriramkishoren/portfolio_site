# ML Algorithms Category Integration

## Overview

Integrate the new `personal_blog/ml-algorithms/` folder (7 HTML files) into the blog system. This includes adding SEO/GEO metadata to each file, GoatCounter analytics tracking, blog config registration, and updating index files.

## Scope

**Posts to Process:** 7 blog posts in the `ml-algorithms` category

| File | Title |
|------|-------|
| `decision-tree.html` | Decision Tree - Interactive Infographic |
| `dimension-reduction.html` | Dimension Reduction - Interactive Infographic |
| `ml-algorithm-selection-guide.html` | ML Algorithm Considerations Infographic |
| `naive-bayes.html` | Naive Bayes: Interactive Infographic |
| `neural-networks.html` | Neural Networks: The Brain-Inspired Foundation of AI |
| `random-forest.html` | Random Forest Algorithm - Complete Guide |
| `support-vector-machines.html` | Support Vector Machines: Interactive Infographic |

## Configuration

- **Author:** Sriramkishore Naraharisetti
- **Publisher:** kishoretech.com
- **Base URL:** https://www.kishoretech.com
- **Category ID:** `ml-algorithms`
- **Category Name:** ML Algorithms
- **Category Folder:** `ml-algorithms`
- **Date:** 2025-01-31

## Requirements

### 1. SEO & GEO Metadata (per HTML file)

Inject into each file's `<head>` section (after existing `<meta viewport>`):

- **SEO Meta Tags:** title, description (150-160 chars), author, category, tags (3-7), robots, ai-summary
- **Canonical URL:** `https://www.kishoretech.com/personal_blog/post.html?article=ml-algorithms/[post-name]`
- **Open Graph Tags:** og:title, og:description, og:type, og:url, og:site_name, article:author, article:published_time, article:section, article:tag
- **JSON-LD Structured Data:** BlogPosting schema with headline, description, datePublished, author, publisher, mainEntityOfPage, keywords, articleSection, about, mentions
- **HTML Comment Metadata:** blog-metadata block with title, category, pillar, tags, connectors

Format must match existing posts (e.g., `ml-fundamentals/what-is-machine-learning.html`).

### 2. GoatCounter Analytics

Add before `</body>` in each HTML file:
```html
<script data-goatcounter="https://kishoretech.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
```

### 3. Blog Config Updates (`personal_blog/index.html`)

**New Category in `blogConfig.categories`:**
```javascript
{
    id: "ml-algorithms",
    name: "ML Algorithms",
    folder: "ml-algorithms",
    icon: "fa-cogs",
    color: "orange",
    order: 4
}
```

**7 New Posts in `blogConfig.posts`:**
- Each with: id, title, excerpt, category (`"ml-algorithms"`), date, file path, order field
- Order numbers start at 16 (continuing after existing max of 15)
- Suggested order: ml-algorithm-selection-guide (16), decision-tree (17), naive-bayes (18), support-vector-machines (19), random-forest (20), neural-networks (21), dimension-reduction (22)

### 4. Index File Updates

**`metadata-report.json`:**
- Update `totalPosts` from 15 to 22
- Add `"ML Algorithms": 7` to categories
- Add 7 post entries with file, title, description, category, datePublished, tags, canonicalUrl

**`tags-index.json`:**
- Add new tags from ml-algorithms posts
- Append ml-algorithms file paths to existing tags where applicable
- Update `totalTags` count

### 5. Consistency Requirements

- Metadata format identical to existing posts in `ml-fundamentals/`
- Tags derived from actual HTML content of each file
- Descriptions are compelling, 150-160 characters
- AI summaries are concise single sentences
- All canonical URLs use the `post.html?article=` pattern without `.html` extension

## Acceptance Criteria

- [ ] All 7 HTML files have complete SEO metadata in `<head>`
- [ ] All 7 HTML files have GoatCounter tracking script before `</body>`
- [ ] JSON-LD schema is valid for all 7 files
- [ ] Meta descriptions are 150-160 characters each
- [ ] Each post has 3-7 relevant tags
- [ ] Open Graph tags are complete
- [ ] `ml-algorithms` category added to `blogConfig.categories` with order field
- [ ] All 7 posts added to `blogConfig.posts` with order fields
- [ ] `metadata-report.json` updated with all 7 posts
- [ ] `tags-index.json` updated with all new tags
- [ ] Existing content and styling in all files preserved
- [ ] No broken HTML after metadata insertion
