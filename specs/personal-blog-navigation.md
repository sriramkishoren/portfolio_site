# Personal Blog Navigation - Spec

## Purpose
Add a Personal Blog section to the portfolio site, allowing the display of self-hosted HTML blog posts alongside the existing Medium blog link.

## Changes Overview

### 1. Update Main Page Buttons (index.html)
- Rename "Blog" button to "Medium Blog"
- Add new "Personal Blog" button with same styling
- Link Personal Blog button to `personal_blog/index.html`

### 2. Create Folder Structure
```
personal_blog/
├── index.html          # Blog listing page
└── [blog-posts].html   # Individual blog post files
```

### 3. Personal Blog Listing Page (personal_blog/index.html)
- Include same header/footer as main site (consistent navigation)
- Use Tailwind CSS via CDN (same as main site)
- Display static list of blog post links (manually maintained)
- Dark mode support matching main site

### 4. Blog Post Template
- Each post is a complete HTML file with site header/footer
- Consistent styling with Tailwind CSS
- Dark mode support
- Navigation back to blog listing and main site

## Technical Details

**Styling:** Tailwind CSS via CDN (same setup as index.html)
**Icons:** Font Awesome 5.15.3 via CDN
**Dark Mode:** Toggle using `dark:` class variants

## Files Modified/Created
1. `index.html` - Updated button text and added Personal Blog button
2. `personal_blog/index.html` - New listing page (created)
3. `personal_blog/` folder - Created directory

## Edge Cases
- Empty blog list: Show "No posts yet" message
- Broken links: Ensure all listed posts exist before adding to list

## Verification
1. Open `index.html` in browser
2. Verify "Medium Blog" button still opens Medium in new tab
3. Verify "Personal Blog" button navigates to listing page
4. Verify dark mode toggle works on listing page
5. Add a sample blog post and verify it displays correctly

## Status
✅ Implemented - January 2026
