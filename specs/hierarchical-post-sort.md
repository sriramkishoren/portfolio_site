# Spec: Hierarchical Post Sort & Order Renumbering

## Overview

Refactor the blog index's `getSortedPosts()` function to sort posts hierarchically (by category order, then by post order within each category) and renumber all post `order` values to start from 1 per category.

## File Affected

- `personal_blog/index.html`

## Requirements

### 1. Refactor `getSortedPosts()` Function

**Current behavior:** Sorts all posts globally by their individual `order` property, falling back to date.

**New behavior:** Two-level hierarchical sort:

- **Primary sort (Category Grouping):** Group and order posts by their parent category's `order` property from `blogConfig.categories`. Categories with lower `order` values appear first.
- **Secondary sort (Within Category):** Within each category group, sort posts by their individual `post.order` property. Posts with lower `order` values appear first.

**Implementation details:**
- Build a lookup map from category `id` to category `order` for efficient access
- Compare category orders first; only compare post orders when categories match
- Handle edge cases: posts with missing category or missing order (use `Infinity` as fallback)

### 2. Renumber Post `order` Values

**Current state:** Post order values are globally sequential (1–38) across all categories.

**New state:** Each category's posts are numbered independently starting from 1.

**Renumbering rules:**
- Preserve the current relative ordering of posts within each category
- Sort posts within each category by their current `order` value to determine new sequence
- Assign new order values: 1, 2, 3, ... per category

**Expected results by category (sorted by category order):**

| Category | Cat Order | Posts | New Order Range |
|---|---|---|---|
| AI Introduction | 0 | 2 posts | 1, 2 |
| ML Fundamentals | 1 | 7 posts | 1–7 |
| ML Algorithms | 2 | 10 posts | 1–10 |
| Data Optimization | 3 | 9 posts | 1–9 |
| AI Business UseCases | 4 | 6 posts | 1–6 |
| AI Project Management | 5 | 2 posts | 1, 2 |
| Agentic AI | 6 | 2 posts | 1, 2 |

## Acceptance Criteria

1. `getSortedPosts()` returns posts grouped by category order (AI Intro first, Agentic AI last)
2. Within each category group, posts are sorted by their `order` value ascending
3. All post `order` values in `blogConfig.posts` are renumbered per-category starting from 1
4. The relative ordering of posts within each category is unchanged from before
5. Blog index page renders correctly with posts displayed in hierarchical order
6. Category filtering still works correctly
7. No other files are modified
