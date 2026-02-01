# Professional Certifications Showcase Page

## Overview
Create a standalone HTML page at `professional-certificates/index.html` that showcases 7 professional certifications using a Hero + Grid layout. The page matches the existing site styling (Tailwind CSS, dark mode, Font Awesome) and is linked from the main home page.

## Layout Structure

### Header / Navigation
- Sticky top nav bar matching site style (white bg, dark mode support)
- Left: "Sriramkishore Naraharisetti" title
- Right: "← Back to Home" link + Dark Mode toggle button

### Hero Section (2 Featured Certifications)
- Two prominent cards displayed side-by-side on desktop, stacked on mobile
- Each card contains:
  - Large certification image (primary visual element, larger than text content)
  - Certification title (bold, prominent)
  - Issuing organization
  - Year earned
  - Brief description (1-2 sentences)
- Featured certifications:
  1. **UTA Post Graduate Program in AI & ML** (2024) - University of Texas at Austin
  2. **Microsoft Azure Fundamentals** (2020) - Microsoft

### Grid Section (5 Additional Certifications)
- Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop
- Compact cards with smaller images (relative to hero cards)
- Each card contains:
  - Certification image (smaller than hero images)
  - Certification title
  - Issuing organization
  - Year earned
- Certifications:
  3. **JPMC Five Keys Award** (2017) - JPMorgan Chase
  4. **JPMC Technology Ace Award** (2016) - JPMorgan Chase
  5. **JPMC Technology Ace Award** (2015) - JPMorgan Chase
  6. **TCS Faculty Award** (2013) - Tata Consultancy Services
  7. **CMMI Level 3 SCAMPI Audit** (2011) - CMMI Institute

### Footer
- Matching site footer style
- Copyright notice

## Technical Requirements

1. **Styling**: Tailwind CSS via CDN (same config as main site) with forms, typography, aspect-ratio, line-clamp plugins
2. **Icons**: Font Awesome 5.15.3 via CDN
3. **Dark Mode**: Manual toggle using Tailwind `dark:` class variants (adds/removes `dark` class on `<html>`)
4. **Responsive**: Mobile-first, stacks on small screens, grid on desktop
5. **No extra clicks**: All certification details visible on page load (no modals, accordions, expandable sections)
6. **Images**: All images served from `images/` subfolder as `.webp` files
7. **Analytics**: GoatCounter tracking script included before `</body>`

## Home Page Update
- Add a "Certifications" button in the existing buttons row in `index.html`
- Positioned after "Personal Blog" button
- Same styling as existing buttons (`bg-gray-800 dark:bg-gray-200 text-white dark:text-black px-4 py-2 rounded inline-block`)
- Links to `professional-certificates/index.html`

## Acceptance Criteria

1. [ ] Page loads at `professional-certificates/index.html`
2. [ ] 2 featured certifications displayed prominently at top with large images
3. [ ] 5 additional certifications displayed as compact grid cards below
4. [ ] All content visible without additional clicks after page load
5. [ ] Featured card images are visually larger than grid card images
6. [ ] Responsive layout: stacks on mobile, grid on desktop
7. [ ] Dark mode toggle works correctly
8. [ ] Navigation back to home page works
9. [ ] "Certifications" button appears on home page and links correctly
10. [ ] GoatCounter analytics script present
11. [ ] Styling matches existing site aesthetic (Tailwind, colors, fonts)
