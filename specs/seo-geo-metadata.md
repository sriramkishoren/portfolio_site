# SEO & GEO Metadata Auto-Generation

## Overview

Auto-generate SEO and GEO-optimized metadata for all HTML files in the `personal_blog/` folder to improve search engine visibility and AI search tool discoverability (ChatGPT, Perplexity, Google AI Overviews).

## Scope

**Posts to Process:** 15 blog posts across 3 categories

| Category | Folder | Posts |
|----------|--------|-------|
| AI Business UseCases | `AI Business UseCases/` | 6 |
| AI Project Management | `AI Project Management/` | 2 |
| ML Fundamentals | `ML Fundamentals/` | 7 |

**Files Excluded:** `index.html`, `post.html` (viewer pages, not blog posts)

## Configuration

- **Author:** Sriramkishore Naraharisetti
- **Publisher:** kishoretech.com
- **Base URL:** https://www.kishoretech.com
- **Date Source:** Extract from `blogConfig.posts` array in `personal_blog/index.html`

## Metadata Schema

### 1. JSON-LD Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[Post Title - max 60 chars]",
  "description": "[150-160 char summary]",
  "datePublished": "[YYYY-MM-DD from blogConfig]",
  "dateModified": "[YYYY-MM-DD from blogConfig]",
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
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "[canonical URL]"
  },
  "keywords": ["tag1", "tag2", "tag3"],
  "articleSection": "[Category Name]",
  "about": [
    {"@type": "Thing", "name": "[Primary Topic]"},
    {"@type": "Thing", "name": "[Secondary Topic]"}
  ],
  "mentions": [
    {"@type": "Thing", "name": "[Technology/Concept mentioned]"}
  ]
}
```

### 2. Meta Tags

```html
<meta name="title" content="[Post Title]">
<meta name="description" content="[150-160 char summary]">
<meta name="author" content="Sriramkishore Naraharisetti">
<meta name="category" content="[Parent Folder Name]">
<meta name="tags" content="[comma-separated tags]">
<meta name="robots" content="index, follow">
<meta name="ai-summary" content="[One-sentence AI-optimized summary]">
<link rel="canonical" href="[Full URL]">
```

### 3. Open Graph Tags

```html
<meta property="og:title" content="[Post Title]">
<meta property="og:description" content="[150-160 char summary]">
<meta property="og:type" content="article">
<meta property="og:url" content="[Full URL]">
<meta property="og:site_name" content="Kishore's Blog">
<meta property="article:author" content="Sriramkishore Naraharisetti">
<meta property="article:published_time" content="[ISO 8601 date]">
<meta property="article:section" content="[Category Name]">
<meta property="article:tag" content="[tag1]">
<meta property="article:tag" content="[tag2]">
```

### 4. Custom Blog Metadata (HTML Comment)

```html
<!--
blog-metadata:
  title: "[Post Title]"
  category: "[Parent Folder Name]"
  pillar: "[Level 1 Category]"
  tags:
    - [Tag1]
    - [Tag2]
    - [Tag3]
  connectors: "[Cross-category references]"
-->
```

## Metadata Generation Rules

### Category (Level 1 Pillar)
- Auto-derive from parent folder name
- Use exact folder name as-is (preserves "AI Business UseCases" etc.)

### Tags (Level 2/3 Connectors)
Extract from HTML content analysis:
- **Industry terms:** Retail, Healthcare, Finance, Banking, Marketing
- **Technology terms:** Machine Learning, AI, Python, Algorithms
- **ML Concepts:** Clustering, Classification, Regression, Supervised Learning, Unsupervised Learning
- **Skill level:** Beginner, Intermediate, Advanced
- Generate 3-7 relevant tags per post

### Title
- Extract from existing `<title>` tag or first `<h1>`
- Keep under 60 characters for SEO

### Description
- Generate 150-160 character summary
- Include primary keyword naturally
- Make compelling for humans and AI

## GEO Optimization Requirements

### 1. Content Markers
- Add `data-ai-summary="true"` attribute to key paragraphs containing quotable definitions or summaries
- Identify 1-3 "quotable" paragraphs per post

### 2. Section IDs
- Add `id` attributes to major `<section>` elements for direct referencing
- Format: `id="section-[topic]"` (e.g., `id="section-definition"`)

### 3. Citation Format
- Add `data-citation` attribute to `<article>` or main container with suggested citation

### 4. FAQ Schema (Optional)
- Add FAQ schema if Q&A content exists in the post

## Output Files

### 1. Updated HTML Files
Each blog post HTML file updated with:
- All metadata in `<head>` section
- GEO optimization attributes in content
- Preserved existing content and styling

### 2. metadata-report.json
```json
{
  "generated": "2026-01-25T...",
  "totalPosts": 15,
  "posts": [
    {
      "file": "ML Fundamentals/ml_definition.html",
      "title": "What is Machine Learning?",
      "category": "ML Fundamentals",
      "tags": ["Machine Learning", "AI", "Beginner", "..."],
      "description": "...",
      "url": "https://www.kishoretech.com/personal_blog/post.html?article=..."
    }
  ]
}
```

### 3. tags-index.json
```json
{
  "generated": "2026-01-25T...",
  "tags": {
    "Machine Learning": [
      "ML Fundamentals/ml_definition.html",
      "ML Fundamentals/ml_three_types.html"
    ],
    "Clustering": [
      "AI Business UseCases/ml_business_usecase_clustering.html",
      "AI Business UseCases/ml_business_usecase_clustering_retail.html"
    ]
  }
}
```

## Processing Steps

1. Parse `blogConfig.posts` from `personal_blog/index.html` to get post metadata (title, date, category, file)
2. For each blog post HTML file:
   a. Read and parse existing content
   b. Extract/validate title from content
   c. Set category from parent folder name
   d. Analyze content to generate relevant tags
   e. Create AI-optimized description (150-160 chars)
   f. Generate all metadata (JSON-LD, meta tags, OG tags, custom comment)
   g. Insert/update metadata in `<head>` section
   h. Add GEO optimization attributes to content (data-ai-summary, section IDs)
   i. Preserve all existing content and styling
3. Generate `personal_blog/metadata-report.json`
4. Generate `personal_blog/tags-index.json`

## Acceptance Criteria

- [ ] All 15 blog posts have complete metadata in `<head>` section
- [ ] JSON-LD validates with Google's Rich Results Test schema
- [ ] Meta descriptions are 150-160 characters
- [ ] Each post has 3-7 relevant tags
- [ ] Open Graph tags are complete and valid
- [ ] At least 1-3 paragraphs per post have `data-ai-summary="true"`
- [ ] Major sections have `id` attributes
- [ ] `metadata-report.json` contains all post summaries
- [ ] `tags-index.json` maps all tags to their posts
- [ ] All existing content and styling preserved
- [ ] No broken HTML after metadata insertion
