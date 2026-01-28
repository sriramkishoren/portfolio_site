# Feature Spec: GoatCounter Visitor Count

> **STATUS: COMPLETE** ✓ (Implemented 2025-01-27)

## Overview

Add page-specific visitor count tracking to the portfolio website using GoatCounter analytics. Each page displays view counts with an eye icon, providing visitors insight into page popularity.

**GoatCounter Configuration:**
- Site Code: `kishoretech`
- Dashboard: https://kishoretech.goatcounter.com

---

## Requirements

### R1: Add GoatCounter Tracking Script to ALL HTML Pages

Add the tracking script just before the closing `</body>` tag on every HTML page (18 files total):

```html
<script data-goatcounter="https://kishoretech.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
```

**Files to update:**
- `index.html`
- `personal_blog/index.html`
- `personal_blog/post.html`
- `personal_blog/AI Business UseCases/*.html` (6 files)
- `personal_blog/AI Project Management/*.html` (2 files)
- `personal_blog/ML Fundamentals/*.html` (7 files)

---

### R2: Visitor Count Display Logic

| Page | Display | Count Source |
|------|---------|--------------|
| `index.html` | Yes | TOTAL site visitors (all pages combined) |
| `personal_blog/index.html` | Yes | Page-specific views |
| `personal_blog/post.html` | Yes | Views for the blog post specified in `?article=` param |
| Individual blog posts (15 files) | No | N/A (tracking only) |

---

### R3: Homepage - Total Site Visitors

The homepage (`index.html`) displays the **total** visitor count across all pages.

**API Endpoint:**
```
https://kishoretech.goatcounter.com/counter/TOTAL.json
```

**JavaScript Logic:**
```javascript
fetch('https://kishoretech.goatcounter.com/counter/TOTAL.json')
  .then(response => response.json())
  .then(data => {
    const count = data.count_unique || data.count || 0;
    document.getElementById('page-views').textContent = count.toLocaleString();
  })
  .catch(() => {
    document.getElementById('page-views').textContent = '0';
  });
```

---

### R4: Blog Index - Page-Specific Count

The blog index (`personal_blog/index.html`) displays views for that specific page.

**API Endpoint:**
```
https://kishoretech.goatcounter.com/counter/%2Fpersonal_blog%2Findex.html.json
```

**JavaScript Logic:**
- Detect current page path using `window.location.pathname`
- URL-encode the path
- Fetch from GoatCounter API
- Display count or "0" on error

---

### R5: Post Viewer - Individual Post Count

The post viewer (`personal_blog/post.html`) displays the view count for the **specific blog post** being displayed, not the viewer page itself.

**Logic:**
1. Read the `?article=` URL parameter (e.g., `ML%20Fundamentals/ml_definition`)
2. Construct the full path: `/personal_blog/{article}.html`
3. Fetch count from GoatCounter for that path
4. Display the count

**Example:**
- URL: `post.html?article=ML%20Fundamentals/ml_definition`
- Fetches count for: `/personal_blog/ML%20Fundamentals/ml_definition.html`

---

### R6: HTML Structure for Visitor Count Display

```html
<div class="visitor-count">
  <svg class="visitor-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
       viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
  <span id="page-views">—</span> views
</div>
```

---

### R7: CSS Styling

Styling should be minimal, match the existing aesthetic, and support dark mode.

**Light Mode:**
```css
.visitor-count {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.875rem;
  color: #666;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.05);
}

.visitor-count .visitor-icon {
  width: 14px;
  height: 14px;
  opacity: 0.7;
}
```

**Dark Mode (Tailwind `dark:` variants):**
- Text color: `dark:text-gray-400`
- Background: `dark:bg-gray-700/50`

---

### R8: Placement

| Page | Placement Location |
|------|-------------------|
| `index.html` | Footer section, before copyright |
| `personal_blog/index.html` | Footer section, before copyright |
| `personal_blog/post.html` | Header nav bar, right side |

---

### R9: Edge Cases

1. **New pages with zero views**: Display "0" gracefully
2. **API fetch failure**: Display "0" (fail silently)
3. **Trailing slashes**: Normalize paths (e.g., `/about/` → `/about/index.html`)
4. **Query parameters**: Strip before fetching count
5. **URL encoding**: Properly encode spaces and special characters in paths
6. **Missing article param on post.html**: Don't display count (or show "—")

---

## Acceptance Criteria

- [ ] GoatCounter tracking script added to all 18 HTML pages
- [ ] Homepage displays TOTAL site visitor count
- [ ] Blog index displays page-specific view count
- [ ] Post viewer displays the specific blog post's view count
- [ ] Individual blog posts have tracking but no visible counter
- [ ] Styling is consistent and supports dark mode
- [ ] No console errors when pages load
- [ ] Graceful fallback to "0" when API fails or page has no views
- [ ] Mobile responsive display

---

## Notes

- GoatCounter is free for personal sites
- GDPR compliant, no cookies used
- Counts may take a few minutes to appear after first visit
- Dashboard available at: https://kishoretech.goatcounter.com
