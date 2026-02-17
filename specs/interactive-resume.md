# Interactive Resume Specification

## Overview
A modern, single-page interactive work summary for "Kishore".
- **Theme**: Light, Minimalist, "Apple Keynote" aesthetic. White background, crisp typography, subtle gray accents.
- **Goal**: Showcase experience and "AI Engineer" capabilities.
- **Tech**: HTML5, Tailwind CSS (CDN), Vanilla JS (ES6 modules).

## Architecture
- `resume/work-summary.html`: Main container.
- `resume/assets/js/`:
    - `data.js`: Content from `kishore-gpt-resume-content.txt`.
    - `api-mock.js`: Simulation of AI endpoints.
    - `ui.js`: DOM manipulation & rendering.
    - `main.js`: Initialization.

## Sections & Requirements

### 1. Navigation (Sticky)
- Minimalist top bar.
- Links: Summary, Experience, Skills, Chat, Job Fit.
- Right side: external links (LinkedIn, GitHub dummy links).

### 2. Hero Section
- **Content**: Name, Title ("Solutions Architect / Engineering Lead"), One-line Executive Summary.
- **Visuals**: Large, elegant typography. Clean whitespace.
- **Actions**: "Chat with AI Agent", "Analyze Job Match", "Download PDF".

### 3. Experience (Timeline)
- **Layout**: Vertical timeline with connectivity lines.
- **Items**:
    - **Current**: Walmart (POS Hardware Abstraction).
    - **Previous**: Walmart (Assortment Platform), InBiz, JP Morgan, etc.
- **Interactivity**: Click to expand details (Contributions/Impact).
- **Style**: Card-based, minimal shadows. "Apple-style" cards.

### 4. Capabilities & Gaps
- **Layout**: 3-Column Grid or distinct blocks.
- **Strong**: Checkmark icons. Green/Blue accent.
- **Moderate**: Circle icons. Orange/Yellow accent.
- **Gaps**: Cross icons. Red/Gray accent. Explicitly titled "Gaps (I'll Tell You)".

### 5. Skills (Visual)
- **Cloud**: Azure, GCP icons/tags.
- **Tech**: Java, Python, JS, React, Node.
- **AI**: Agentic, Vibe Coding, Claude Code.
- **Visuals**: Clean floating tags or minimal progress bars.

### 6. Interactive AI Chat ("Ask AI")
- **UI**: Message list + Input field + Send button.
- **Behavior**:
    - User types question (e.g., "What did Kishore do at Walmart?").
    - UI shows "Thinking..." state.
    - `api-mock.js` analyzes keywords and returns answer from `data.js`.
- **Pre-set Questions**: Chips for "Leadership style?", "Biggest achievement?", "Tech stack?".

### 7. Job Fit Analyzer
- **UI**: Large Textarea ("Paste Job Description") + "Analyze" Button.
- **Behavior**:
    - User pastes text.
    - Click "Analyze".
    - `api-mock.js` calculates a random/pseudo-calculated "Match Score" (e.g., 85-95% for relevant roles).
    - **Output**:
        - Match Score (Percentage).
        - "Why it's a match": Bullet points matching JD keywords to Resume skills.
        - "Potential Gaps": Randomly picked from "Gaps" section or "None detected".

### 8. Footer
- Simple copyright.
- Contact info.
- Quote: "Commitment, Coaching, Compassion".

## Mock API Logic
- `POST /ask`: Look for keywords (Walmart, POS, Assortment, Leadership, Skills). Return pre-written strings. Fallback to generic "I can best answer questions about Kishore's technical leadership and projects."
- `POST /fit`: Simple keyword matching count. If JD contains "Java", "Cloud", "Leadership" -> Score goes up.

## Acceptance Criteria
- [ ] Page loads without FOUC (Flash of Unstyled Content).
- [ ] Dark text on white background (Light mode).
- [ ] All resume content from `.txt` is present.
- [ ] "Chat" answers at least 3 distinct questions correctly.
- [ ] "Job Fit" returns a result card after analysis.
- [ ] Responsive on Mobile (stack columns) and Desktop.
