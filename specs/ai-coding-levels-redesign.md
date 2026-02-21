# Spec: AI Coding Levels Page Redesign

## Overview
Modernize the design of `personal_blog/agentic-ai/ai-coding-levels.html` and enrich content with data from the LinkedIn post. The redesign follows a clean & minimal design system (CSS variables, Lucide icons, subtle gradients, generous whitespace) consistent with the bias-mitigation.html styling approach. Light-only, no dark mode.

## Design Requirements

### Design System
- **CSS Variables**: Define a root palette (backgrounds, text colors, accents, borders, shadows, transitions) for consistency
- **Typography**: Keep Sora (headings) + DM Sans (body) Google Fonts pairing
- **Icons**: Replace emoji (⚠️, 🎯, 🏗️, 🚀, 📊, ⚖️, 📅, 🎓, 💡) with Lucide icons throughout
- **Cards & Sections**: Clean white cards with subtle borders and shadows, no heavy colored gradient backgrounds on sections
- **Section Accents**: Use subtle left-border accents or small colored accent elements instead of full gradient backgrounds
- **Spacing**: More generous whitespace, consistent padding/margins via CSS variables
- **Hover Effects**: Subtle, refined transitions (card lift, shadow deepening)
- **Responsive**: Maintain mobile responsiveness

### Section-by-Section Design Changes

1. **Hero Section**
   - Keep gradient hero but refine it (cleaner, less heavy)
   - Add the LinkedIn opening hook as a compelling subtitle/tagline
   - Keep the "90% of Claude's Code Written by Claude" stat badge

2. **Why This Matters Section**
   - Replace gradient background with clean white card + subtle accent
   - Replace emoji with Lucide icon
   - Keep the 4 stat cards but style them cleaner (subtle borders, no heavy colored backgrounds)
   - Add Harvard study citation context

3. **5 Levels Overview**
   - Keep the level cards structure (L0-L5) — this is the core content
   - Refine card styling: cleaner borders, subtle top-color accent bar, better typography
   - Replace emoji with Lucide icon for section heading
   - Keep tags/badges but style more subtly

4. **Dark Factory Architecture**
   - Replace gradient background with clean card + accent
   - Keep the 5-step flow diagram — refine styling
   - Keep the insight box about External Scenarios
   - Replace emoji with Lucide icon

5. **Real-World Impact**
   - Replace gradient background with clean card + accent
   - Keep the 6 use-case cards, replace emoji icons with Lucide icons
   - Keep revenue per employee insight box
   - Enrich with LinkedIn data points

6. **Productivity Paradox (Chart)**
   - Replace gradient background with clean card
   - Keep the horizontal bar chart — it's effective
   - Keep the J-Curve insight box
   - Replace emoji with Lucide icon

7. **Traditional vs. Dark Factory Comparison Table**
   - Replace gradient background with clean card
   - Keep the comparison table — refine styling
   - Replace emoji with Lucide icon

8. **Evolution Timeline**
   - Replace gradient background with clean card
   - Keep timeline structure, refine styling
   - Replace emoji with Lucide icon

9. **Skills Shift Section**
   - Replace gradient background with clean card
   - Keep skills list and junior developer crisis subsection
   - Enrich with "career ladder is being rebuilt" narrative from LinkedIn
   - Replace emoji with Lucide icon

10. **Footer CTA**
    - Keep dark footer
    - Enrich with "thinking gap, culture gap, willingness-to-change gap" quote from LinkedIn
    - Remove the gradient CTA button (no link target anyway)

## Content Enrichment Requirements

### From LinkedIn Post — Weave into Existing Sections

1. **Opening hook** (Hero or new intro paragraph):
   - "Most developers think AI is making them faster. The data says otherwise."
   - Harvard study: experienced developers 19% slower, believe 24% faster
   - StrongDM dark factory: 3 engineers, fully autonomous

2. **"The Great Divergence" framing** (Why This Matters or new callout):
   - Frame the current moment as "the great divergence in software engineering"
   - Elite teams vs everyone else

3. **Key stats to ensure are prominently featured**:
   - Claude Code writes 90% of its own codebase ✓ (already present)
   - $3.5M revenue per employee, 5-6x SaaS average ✓ (already present)
   - Junior developer job postings dropped 67% ✓ (already present)
   - Bottleneck shifted from "can you write clean code" to "can you think clearly about what should exist" ✓ (already present)

4. **"Career ladder is being rebuilt" narrative** (Skills Shift section):
   - Add explicit statement about career ladder being rebuilt
   - Connect to the junior developer crisis data

5. **Closing emphasis** (Footer):
   - "The gap between Level 5 teams and everyone else isn't a technology gap. It's a thinking gap. A culture gap. A willingness-to-change gap."

## Acceptance Criteria

- [ ] All emoji replaced with Lucide icons
- [ ] CSS variables defined and used consistently
- [ ] Section backgrounds changed from heavy gradients to clean white cards with subtle accents
- [ ] LinkedIn content woven into existing sections naturally
- [ ] Hero section includes opening hook from LinkedIn
- [ ] Footer includes "thinking gap / culture gap / willingness-to-change gap" quote
- [ ] Skills Shift section includes "career ladder is being rebuilt" narrative
- [ ] Mobile responsive (tested at 768px breakpoint)
- [ ] All existing content preserved (no content removed)
- [ ] GoatCounter tracking script preserved
- [ ] SEO metadata in `<head>` preserved unchanged
- [ ] Page renders correctly in browser (no JS errors from Lucide)
