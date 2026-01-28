# Feature Spec: Category Display Order Control

## Status: COMPLETE ✓

## Overview

Add the ability to manually control the display order of blog categories in the sidebar and mobile filter pills. This allows customizing category prominence regardless of their position in the config array.

## Current Behavior

- Categories are displayed in array order (as defined in `blogConfig.categories`)
- Current order: AI Business UseCases → AI Project Management → ML Fundamentals
- Categories rendered in `init()` function at lines 449-461

## Requirements

### 1. Add Order Field to Category Configuration

- Add `order` field to each category in `blogConfig.categories`
- Field type: integer
- Lower number = higher priority (appears first)

**Example:**
```javascript
{
    id: "ml-fundamentals",
    name: "ML Fundamentals",
    folder: "ML Fundamentals",
    icon: "fa-brain",
    color: "green",
    order: 1  // NEW: appears first in sidebar
}
```

### 2. Update Rendering Logic

Modify `init()` function to sort categories by order before rendering:
- Desktop sidebar filters
- Mobile category pills

### 3. Assign Order Values

Add order values to all 3 categories:
- ML Fundamentals: order 1
- AI Business UseCases: order 2
- AI Project Management: order 3

## Acceptance Criteria

- [x] All categories have `order` field
- [x] Categories sorted by order (ascending) in desktop sidebar
- [x] Categories sorted by order (ascending) in mobile pills
- [x] "All Posts" button remains first (before any category)
- [x] Category filtering still works correctly

## Files to Modify

1. `personal_blog/index.html` - Add order to categories and sort before rendering

## Out of Scope

- Dynamic reordering UI
- Separate config file
