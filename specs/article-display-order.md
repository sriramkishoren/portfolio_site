# Feature Spec: Article Display Order Control

## Status: COMPLETE ✓

## Overview

Add the ability to manually control the display order of blog articles on the personal blog index page. This allows pinning important articles to the top regardless of their publication date.

## Current Behavior

- Articles are sorted by date (newest first)
- Sorting logic in `personal_blog/index.html` line 322-324:
  ```javascript
  function getSortedPosts() {
      return [...blogConfig.posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  ```

## Requirements

### 1. Add Order Field to Post Configuration

- Add optional `order` field to posts in `blogConfig.posts` array
- Field type: integer
- Field is optional (not required for existing posts)

**Example:**
```javascript
{
    id: "ml_definition",
    title: "What is Machine Learning?",
    excerpt: "A beginner's guide...",
    category: "ml-fundamentals",
    date: "2025-01-22",
    file: "ML Fundamentals/ml_definition.html",
    order: 1  // NEW: optional order field
}
```

### 2. Update Sorting Logic

Modify `getSortedPosts()` function to implement two-tier sorting:

1. **Primary sort**: Posts with `order` field, sorted ascending (lower number = higher priority)
2. **Secondary sort**: Posts without `order` field, sorted by date descending (newest first)

Posts with order values always appear before posts without order values.

**Sorting examples:**
| Post | Order | Date | Display Position |
|------|-------|------|------------------|
| A | 1 | 2025-01-20 | 1st |
| B | 2 | 2025-01-25 | 2nd |
| C | 5 | 2025-01-15 | 3rd |
| D | - | 2025-01-24 | 4th (newest unordered) |
| E | - | 2025-01-22 | 5th |
| F | - | 2025-01-20 | 6th (oldest unordered) |

### 3. Sample Posts with Order Values

Add order values to 3 sample posts for testing:
- One ML Fundamentals post (order: 1)
- One AI Business post (order: 2)
- One AI PM post (order: 3)

## Acceptance Criteria

- [x] Posts with `order` field appear before posts without `order`
- [x] Among ordered posts, lower order number appears first
- [x] Among unordered posts, newer date appears first
- [x] Existing posts without `order` field continue to work (no breaking changes)
- [x] Category filtering still works correctly with ordered posts
- [x] At least 3 sample posts have order values for testing

## Files to Modify

1. `personal_blog/index.html` - Update `getSortedPosts()` function and add order to sample posts

## Out of Scope

- UI to edit order values (manual config only)
- Order values in individual HTML files (config stays in index.html)
- Separate config file for ordering
