# TODO: Blog Post Viewer

## Implementation Tasks

- [x] Create `personal_blog/post.html` with basic HTML structure and Tailwind CDN
- [x] Add navigation bar with "← Back to Blog" link
- [x] Add dark mode toggle matching existing site design
- [x] Add iframe container with full-height styling
- [x] Add JavaScript to read `article` query parameter
- [x] Add JavaScript to load the blog post into iframe
- [x] Add fallback handling for missing/invalid article parameter
- [x] Update `personal_blog/index.html` - change road_framework link to use viewer
- [x] Update `personal_blog/index.html` - change ai_use_cases link to use viewer

## Testing Tasks

- [x] Test: Clicking "← Back to Blog" navigates to listing page
- [x] Test: `post.html?article=road_framework` loads correctly
- [x] Test: `post.html?article=ai_use_cases` loads correctly
- [x] Test: Dark mode toggle works
- [x] Test: Missing article parameter shows fallback
- [x] Test: Mobile responsive layout works
