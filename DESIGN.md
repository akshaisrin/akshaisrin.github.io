---
name: Akshai Srinivasan
description: A dark, flat, generalist portfolio. The hero's dot-matrix screen cycles through pixel-art icons of the things Akshai builds and does.
colors:
  # Dark only (`:root`, color-scheme dark). Flat fills: no gradients anywhere.
  bg: "#0a0e1a"
  surface: "#121829"
  surface-2: "#19203a"
  ink: "#eef1fa"
  ink-2: "#b4bcd3"
  ink-3: "#8790ab"
  rule: "#222b42"
  rule-2: "#2e3958"
  blue: "#4d7cff"      # lead accent: last name, active nav, About/Skills markers
  blue-ink: "#7fa0ff"  # blue for text and hover on dark
  coral: "#ff6b5b"     # actions: Resume, primary buttons, role separators, Experience/Contact markers
  butter: "#ffd166"    # small highlights: captions, focus ring, selection, project hover, bullets
fonts:
  sans: Bricolage Grotesque (400–800); 800 for the name and section titles
  mono: JetBrains Mono (400–500); kickers, dates, captions, category labels
---

# Design

## Principles
- **Generalist, not themed.** No single metaphor runs through the site. The personality lives in one place, the hero's pixel grid, and the rest stays clean.
- **Flat color only.** No gradients, glows or blurred blobs. The one exception is the frosted header bar, which is a translucent solid.
- **Three accents with jobs.** Blue leads, coral means "do something", butter highlights small details.

## Layout
- Slim fixed top bar (`Header`): `akshai.` wordmark, section links, coral Resume button. Below `md` it collapses to a menu.
- Single column, max width `80rem` (`max-w-page`). The root font size steps up at 1600px (112.5%) and 2200px (125%) so large monitors scale the page instead of leaving it small. Each section shares `sectionClass` from `SectionHeading.js` (top hairline, generous vertical padding).
- Hero: name + status line + actions on the left; the `PixelGrid` on the right from `xl` up, stacked below on smaller screens. The status line stays on one line at `xl`, wraps between roles at `sm`–`xl`, and stacks one role per line on phones.

## Pixel grid (`src/components/PixelGrid.js`, `src/data/pixelIcons.js`)
- An 18×18 dot canvas drawing 16×16 pixel icons (1-dot margin); lit dots nearly touch so the art reads as solid pixels. Digits pick theme colors (1 blue, 2 coral, 3 butter, 4 ink); letters are fixed brand colors for logos (UW purple/gold, DubHacks pink/white).
- Idle rotation every 4.2s, wrapping: duck → car → arm → Neptune → DubHacks → DinoDash → controller → UW. Each icon has a mono caption `[before, highlight, after?]`, Title Case, with the highlighted name in butter.
- Changing icons ripples outward from the center. The cursor swells nearby dots. Clicking the grid skips ahead.
- Hovering or focusing a nav link pins that section's icon (`SECTIONS[].icon` in `src/data/sections.js`).
- With reduced motion: no ripple and no auto-rotation (hover and click still work). The draw loop pauses when the canvas is off screen.
- To add an icon: add a 16-row bitmap to `PIXEL_ICONS`, then list it in `PIXEL_ORDER` and/or a section's `icon`.

## Components
- Section headings: an 800-weight title led by a single round "pixel" in the section's accent.
- Cards (projects, contact links): `surface` fill, `rule` border, `rounded-2xl`; hover lifts slightly and the border takes the section accent.
- Detail sheets: `surface` panel, `rounded-3xl`, butter bullet dots, pill-shaped stack tags.
- The About photo is a tilted card with an ink border and a flat blue offset shadow.
