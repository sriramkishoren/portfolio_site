# TODO: Blog Index Redesign

## Phase 1: Data Collection
- [x] Extract titles and excerpts from all 15 blog posts
- [x] Determine appropriate dates for each post (use file modification dates as baseline)

## Phase 2: Update Post Viewer
- [x] Modify `post.html` to handle folder paths in article parameter
- [x] Test viewer with URL-encoded folder paths

## Phase 3: Build Index Page Structure
- [x] Create HTML skeleton with semantic elements (header, aside, main, footer)
- [x] Add blog configuration JSON object with all categories
- [x] Add blog configuration JSON object with all posts (15 entries)

## Phase 4: Implement Sidebar
- [x] Create desktop sidebar with category buttons
- [x] Add "All Posts" button as default
- [x] Display post count badges on category buttons
- [x] Style active/selected state
- [x] Make sidebar sticky on scroll

## Phase 5: Implement Post Cards
- [x] Create card component structure
- [x] Add category badge with color coding
- [x] Display title, date, and excerpt
- [x] Add hover effects
- [x] Link cards to post.html with correct encoded paths

## Phase 6: Implement Filtering Logic
- [x] Write JavaScript to filter posts by category
- [x] Update URL hash on category selection
- [x] Read URL hash on page load for deep linking
- [x] Update visible post count on filter change

## Phase 7: Responsive Design
- [x] Implement mobile layout (horizontal category pills)
- [x] Implement tablet layout (2-column grid)
- [x] Implement desktop layout (3-column grid with sidebar)
- [x] Test responsive breakpoints

## Phase 8: Dark Mode & Polish
- [x] Ensure all components support dark mode
- [x] Add smooth transitions for filter changes
- [x] Final styling pass for consistency

## Phase 9: Testing
- [x] Verify all 15 posts appear correctly
- [x] Test all category filters
- [x] Test post viewer loads each article correctly
- [x] Test on mobile viewport
- [x] Test on desktop viewport
- [x] Test dark mode toggle
- [x] Test URL hash deep linking
