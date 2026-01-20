# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website for Sriramkishore Naraharisetti. The site is hosted on GitHub Pages at www.kishoretech.com.

## Architecture

- **Single-page static site**: The entire site is contained in `index.html`
- **Styling**: Tailwind CSS loaded via CDN (with forms, typography, aspect-ratio, line-clamp plugins)
- **Icons**: Font Awesome 5.15.3 via CDN
- **Dark mode**: Implemented using Tailwind's `dark:` class variants with manual toggle (adds/removes `dark` class on `<html>`)

## Development

No build process required. Open `index.html` directly in a browser or use any local server.

## Deployment

The site deploys automatically to GitHub Pages when changes are pushed to the `main` branch. The custom domain `www.kishoretech.com` is configured via the `CNAME` file.
