# Feature Spec: Clean URL Renaming

## Overview

Rename blog post folders and files to use SEO-friendly, clean URL conventions:
- Folders: lowercase with hyphens (no spaces)
- Files: descriptive names with hyphens (no underscores)

---

## Requirements

### R1: Rename Category Folders

| Current | New |
|---------|-----|
| `ML Fundamentals` | `ml-fundamentals` |
| `AI Business UseCases` | `ai-business-usecases` |
| `AI Project Management` | `ai-project-management` |

---

### R2: Rename Blog Post Files

**ML Fundamentals (7 files):**

| Current | New |
|---------|-----|
| `ml_definition.html` | `what-is-machine-learning.html` |
| `ml_three_types.html` | `types-of-machine-learning.html` |
| `ml_concepts.html` | `core-ml-concepts.html` |
| `ml_supervised_learning.html` | `supervised-learning-guide.html` |
| `ml_unsupervised_learning.html` | `unsupervised-learning-guide.html` |
| `ml_ai_performance_measures.html` | `ai-performance-metrics.html` |
| `ml_overfitting_and_Underfitting.html` | `overfitting-underfitting-balance.html` |

**AI Business UseCases (6 files):**

| Current | New |
|---------|-----|
| `ai_use_cases.html` | `modern-ai-landscape.html` |
| `ml_ai_problem_space.html` | `ai-problem-space-usecases.html` |
| `ml_business_usecase_classification.html` | `classification-business-usecases.html` |
| `ml_business_usecase_clustering.html` | `clustering-business-applications.html` |
| `ml_business_usecase_clustering_retail.html` | `retail-customer-segmentation.html` |
| `ml_business_usecase_regression.html` | `regression-business-applications.html` |

**AI Project Management (2 files):**

| Current | New |
|---------|-----|
| `road_framework.html` | `road-framework-guide.html` |
| `ml_al_life_cycle.html` | `ai-ml-project-lifecycle.html` |

---

### R3: Update Blog Configuration

Update `personal_blog/index.html` - the `blogConfig.posts` array must reflect new file paths.

**Example:**
```javascript
// Before
{ file: "ML Fundamentals/ml_definition.html", ... }

// After
{ file: "ml-fundamentals/what-is-machine-learning.html", ... }
```

---

### R4: Update SEO Metadata in Each Post

Each blog post has SEO metadata that references its URL. Update:

1. **Canonical URL** (`<link rel="canonical">`)
2. **Open Graph URL** (`<meta property="og:url">`)
3. **JSON-LD mainEntityOfPage** (`@id` in structured data)

**Example:**
```html
<!-- Before -->
<link rel="canonical" href="https://www.kishoretech.com/personal_blog/post.html?article=ML%20Fundamentals/ml_definition">

<!-- After -->
<link rel="canonical" href="https://www.kishoretech.com/personal_blog/post.html?article=ml-fundamentals/what-is-machine-learning">
```

---

### R5: Update Metadata Files

Update these JSON files with new paths:
- `personal_blog/metadata-report.json`
- `personal_blog/tags-index.json`

---

### R6: Update CLAUDE.md

Update documentation to reflect new folder structure and naming conventions.

---

## New URL Structure

**Before:**
```
post.html?article=ML%20Fundamentals/ml_definition
post.html?article=AI%20Business%20UseCases/ai_use_cases
```

**After:**
```
post.html?article=ml-fundamentals/what-is-machine-learning
post.html?article=ai-business-usecases/modern-ai-landscape
```

---

## Acceptance Criteria

- [ ] All 3 category folders renamed
- [ ] All 15 blog post files renamed
- [ ] `blogConfig.posts` in `personal_blog/index.html` updated with new paths
- [ ] Canonical URLs updated in all 15 posts
- [ ] Open Graph URLs updated in all 15 posts
- [ ] JSON-LD URLs updated in all 15 posts
- [ ] `metadata-report.json` updated
- [ ] `tags-index.json` updated
- [ ] `CLAUDE.md` updated with new conventions
- [ ] All blog post links work correctly
- [ ] No broken references

---

## Notes

- This is a breaking change for any existing bookmarks/links
- GoatCounter will start tracking new URLs as separate pages
- Old URL counts will remain in GoatCounter history but won't accumulate further
