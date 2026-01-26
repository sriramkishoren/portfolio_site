# Blog Index Redesign Specification

## Overview
Redesign the `personal_blog/index.html` page to reflect the new category-based folder structure. The new design features a sidebar navigation for category filtering and a card-based layout for displaying blog posts.

## Current State
- `personal_blog/index.html` has a simple list of 2 hardcoded blog posts
- Blog posts are now organized in category subfolders:
  - `AI Business UseCases/` (6 posts)
  - `AI Project Management/` (2 posts)
  - `ML Fundamentals/` (7 posts)
- `post.html` viewer only supports root-level articles

## Requirements

### 1. Data Architecture

#### 1.1 Blog Configuration Object
Create a JavaScript object in `index.html` containing:

```javascript
const blogConfig = {
  categories: [
    {
      id: "ai-business",
      name: "AI Business UseCases",
      folder: "AI Business UseCases",
      icon: "briefcase" // Font Awesome icon
    },
    // ... more categories
  ],
  posts: [
    {
      id: "ml_definition",
      title: "What is Machine Learning?",
      excerpt: "A beginner's guide to how computers get smart",
      category: "ml-fundamentals",
      date: "2025-01-22",
      file: "ML Fundamentals/ml_definition.html"
    },
    // ... more posts
  ]
};
```

#### 1.2 Post Metadata
Each post entry must include:
- `id`: Unique identifier (filename without extension)
- `title`: Display title
- `excerpt`: Short description (1-2 sentences)
- `category`: Reference to category ID
- `date`: ISO date string (YYYY-MM-DD)
- `file`: Relative path from personal_blog folder

### 2. UI Components

#### 2.1 Header
- Keep existing header with navigation and dark mode toggle
- No changes required

#### 2.2 Sidebar (Desktop)
- Fixed position on left side
- Width: ~250px
- Contains:
  - "All Posts" button (default selected)
  - Category filter buttons
  - Each button shows category name and post count
  - Active state styling for selected category
- Sticky behavior (stays visible while scrolling)

#### 2.3 Sidebar (Mobile)
- Transforms to horizontal scrollable pills
- Positioned below header, above content
- Same functionality as desktop sidebar

#### 2.4 Main Content Area
- Responsive grid of post cards
- Desktop: 2-3 columns
- Tablet: 2 columns
- Mobile: 1 column

#### 2.5 Post Cards
Each card displays:
- Category badge (colored pill)
- Post title (clickable)
- Publication date
- Excerpt text
- Hover effect (subtle shadow/lift)

Card links to: `post.html?article=[encoded-file-path]`

### 3. Functionality

#### 3.1 Category Filtering
- Clicking category filters posts to that category only
- "All Posts" shows all posts from all categories
- URL hash updates for shareable links: `#category=ml-fundamentals`
- Page loads with correct filter if hash present

#### 3.2 Sorting
- Posts sorted by date (newest first) by default
- Within filtered view, maintain date sorting

#### 3.3 Post Count
- Show total post count in header/title
- Show filtered count when category selected

### 4. Post Viewer Update (`post.html`)

#### 4.1 Path Handling
- Accept folder paths in article parameter
- Example: `post.html?article=ML%20Fundamentals/ml_definition`
- Properly decode URL-encoded paths
- Handle spaces in folder names

#### 4.2 Iframe Source
- Update iframe src construction to use full path
- Format: `[folder]/[filename].html`

### 5. Styling

#### 5.1 Design Tokens
- Consistent with existing site design
- Use Tailwind CSS classes
- Support dark mode with `dark:` variants

#### 5.2 Category Colors
Assign distinct colors to each category:
- AI Business UseCases: Blue
- AI Project Management: Purple
- ML Fundamentals: Green

#### 5.3 Responsive Breakpoints
- Mobile: < 768px (single column, horizontal pills)
- Tablet: 768px - 1024px (2 columns, sidebar)
- Desktop: > 1024px (3 columns, sidebar)

### 6. Accessibility
- Semantic HTML5 elements (`<nav>`, `<main>`, `<article>`, `<aside>`)
- ARIA labels for navigation
- Keyboard navigable
- Focus states on interactive elements

## Acceptance Criteria

### Must Have
- [ ] JSON config contains all 15 posts with correct metadata
- [ ] Sidebar displays all 3 categories with post counts
- [ ] "All Posts" filter works correctly
- [ ] Individual category filters work correctly
- [ ] Post cards display title, date, excerpt, and category badge
- [ ] Clicking post card navigates to viewer with correct article
- [ ] post.html correctly loads articles from subfolders
- [ ] Responsive layout works on mobile, tablet, desktop
- [ ] Dark mode works correctly
- [ ] URL hash reflects selected category

### Nice to Have
- [ ] Smooth transitions on filter changes
- [ ] Loading state while filtering
- [ ] Empty state message if category has no posts

## File Changes

1. **Modified**: `personal_blog/index.html` - Complete redesign
2. **Modified**: `personal_blog/post.html` - Update path handling

## Post Inventory

### AI Business UseCases (6 posts)
| File | Title (to extract) |
|------|---------------------|
| ai_use_cases.html | The Modern AI Landscape Infographic |
| ml_ai_problem_space.html | TBD |
| ml_business_usecase_classification.html | TBD |
| ml_business_usecase_clustering.html | TBD |
| ml_business_usecase_clustering_retail.html | TBD |
| ml_business_usecase_regression.html | TBD |

### AI Project Management (2 posts)
| File | Title (to extract) |
|------|---------------------|
| road_framework.html | TBD |
| ml_al_life_cycle.html | TBD |

### ML Fundamentals (7 posts)
| File | Title (to extract) |
|------|---------------------|
| ml_definition.html | What is Machine Learning? |
| ml_three_types.html | TBD |
| ml_concepts.html | TBD |
| ml_supervised_learning.html | TBD |
| ml_unsupervised_learning.html | TBD |
| ml_ai_performance_measures.html | TBD |
| ml_overfitting_and_Underfitting.html | TBD |

*Note: Titles and excerpts will be extracted from actual files during implementation.*
