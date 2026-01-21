# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website for Sriramkishore Naraharisetti. The site is hosted on GitHub Pages at www.kishoretech.com.

## Architecture

- **Main site**: `index.html` - portfolio landing page
- **Personal Blog**: `personal_blog/` - self-hosted blog section
  - `personal_blog/index.html` - blog listing page
  - `personal_blog/[post-name].html` - individual blog post files
- **Styling**: Tailwind CSS loaded via CDN (with forms, typography, aspect-ratio, line-clamp plugins)
- **Icons**: Font Awesome 5.15.3 via CDN
- **Dark mode**: Implemented using Tailwind's `dark:` class variants with manual toggle (adds/removes `dark` class on `<html>`)

## Folder Structure

```
portfolio_site/
├── index.html              # Main portfolio page
├── CNAME                   # Custom domain config
├── CLAUDE.md               # Claude Code guidance
├── personal_blog/
│   ├── index.html          # Blog listing page
│   └── [post-name].html    # Individual blog posts
└── specs/                  # Feature specifications
```

## Development

No build process required. Open `index.html` directly in a browser or use any local server.

## Deployment

The site deploys automatically to GitHub Pages when changes are pushed to the `main` branch. The custom domain `www.kishoretech.com` is configured via the `CNAME` file.

## Spec Creation Rules

When I ask you to create a spec or plan for a feature:
1. Use AskUserQuestion tool to ask clarifying questions (one at a time)
2. Cover: purpose, technical details, UI, edge cases
3. Confirm your understanding with me before proceeding
4. Create spec file in `specs/[feature-name].md`
5. Ask if changes are needed

## Adding Blog Posts

To add a new blog post:
1. Create a new HTML file in `personal_blog/` (e.g., `my-post.html`)
2. Use Tailwind CSS via CDN for styling
3. Include consistent header/footer with dark mode support
4. Add entry to `personal_blog/index.html` listing page