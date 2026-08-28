---
name: Akshai Srinivasan
description: One navy drawing sheet carrying a six-axis robot arm that aims at the current section, a poster-scale name, and a single mint signal.
colors:
  # One sheet only (`:root`, color-scheme dark). There is no light theme and no toggle.
  sheet: "#0f1f3d"
  sheet-top: "#142a52"
  sheet-bottom: "#0a1630"
  ink: "#e6edf7"
  ink-2: "#b7c5da"
  ink-3: "#8fa2be"
  rule: "#2a3d63"
  rule-2: "#1f3154"
  # Arm only: links shade arm-hi -> arm -> arm-lo; plate, housings, collar, flange, fingers, turntable are joint
  arm-hi: "#c9d2de"
  arm: "#9aa6b6"
  arm-lo: "#5c6879"
  joint: "#262d3a"
  arm-line: "#e6edf7"
  signal: "#3ddc84"
  signal-ink: "#62e69c"
  on-signal: "#0b1424"
  scrim: "rgba(4, 10, 24, 0.66)"
  axis-x: "#ff5c5c"
  axis-y: "#3ddc84"
  axis-z: "#7fb2ff"
typography:
  display:
    fontFamily: "'Big Shoulders Display', Impact, sans-serif"
    fontSize: "clamp(3.4rem, 10vw, 8.75rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "2.4rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.02em"
  title:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.02em"
  group:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.02em"
  positions:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "1.22rem"
    fontWeight: 500
    lineHeight: 1.625
    letterSpacing: "normal"
  body:
    fontFamily: "'Bricolage Grotesque', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.02em"
  action:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.02em"
  meta:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
    fontFeature: "tnum"
  # Documented variants of the roles above (see Typography prose): each is a fixed step, not a free value.
  display-compact:
    fontFamily: "'Big Shoulders Display', Impact, sans-serif"
    fontSize: "min(5.2rem, 21vw)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.025em"
  headline-compact:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.02em"
  overlay-title:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.02em"
  overlay-title-compact:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.02em"
  title-row:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.02em"
  title-card:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.02em"
  positions-compact:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 500
    lineHeight: 1.625
    letterSpacing: "normal"
  rail-label:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "clamp(0.75rem, 1.05vw, 0.95rem)"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.02em"
  chip:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
  # Dimension numerals inside the arm drawing only (SVG user units); never used for interface text.
  drawing-numeral:
    fontFamily: "osifont, monospace"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
  not-found-display:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "clamp(4rem, 12vw, 7rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.02em"
  not-found-headline:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.02em"
rounded:
  none: "0px"
  xl: "12px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "7": "28px"
  "8": "32px"
  "10": "40px"
  "12": "48px"
  "14": "56px"
  "16": "64px"
  "20": "80px"
  "24": "96px"
  "28": "112px"
components:
  button-resume:
    textColor: "{colors.signal-ink}"
    typography: "{typography.action}"
    rounded: "{rounded.xl}"
    padding: "8px 16px"
  button-resume-hover:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-signal}"
  button-outline:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "8px 14px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
  button-icon:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "40px"
  button-icon-hover:
    backgroundColor: "{colors.rule-2}"
  icon-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    size: "48px"
  icon-link-hover:
    textColor: "{colors.signal-ink}"
  icon-link-lg:
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    size: "56px"
  chip:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink-2}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
  icon-cell:
    rounded: "{rounded.none}"
    size: "32px"
  skill-cell:
    rounded: "{rounded.xl}"
    size: "64px"
  logo-cell:
    rounded: "{rounded.xl}"
    size: "56px"
  logo-cell-lg:
    rounded: "{rounded.xl}"
    size: "72px"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.action}"
  nav-link-active:
    textColor: "{colors.signal-ink}"
  rail-label:
    textColor: "{colors.ink}"
    typography: "{typography.rail-label}"
  rail-label-active:
    textColor: "{colors.signal-ink}"
  detail-sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "36px"
    width: "48rem"
---

# Design System: Akshai Srinivasan

## Overview

**Creative North Star: "The Kinematic Blueprint"**

The whole site is one navy drawing sheet. The ground is a single quiet gradient fixed behind the page (a slightly lighter navy at the top-left falling to a deeper navy at the bottom-right) with no grid, no grain, and no vignette; pale ink sits on it in hairline rules. On the sheet's left 39% stands a single six-axis robot arm drawn as a machined object in two tones: the links are shaded steel (a vertical gradient from a pale highlight through mid-steel to a dark underside) and the base plate, housings, collar, flange plate, fingers, and turntable are a near-black joint tone, with every part carrying its own pale 2-unit outline so adjacent pieces stay distinct where they overlap. The arm articulates with real forward kinematics as the visitor scrolls: each section of the page is a pose, and the gripper aims at that section's station on a vertical rail of six plain labels beside the drawing, opening its claw whenever it aims. The one signal color, a mint green, fills the active station and colors the active label; no part of the arm ever takes it.

The right 61% opens with the name at poster scale in a heavy industrial display face, set in two lines with a hollow mint duplicate offset behind it, then a short 2px mint rule, the three current positions on one line separated by mint ⫽ glyphs, four hairline-framed icon links (email, GitHub, LinkedIn, resume), and a mint chevron that bobs toward the About section. A faint flange section detail sits behind the name at 9% opacity as the drawing's own background layer. That arm, its rail, and the hero are the entire metaphor. Every section after the first viewport is plain, well-structured content that borrows the sheet's materials (hairline rules, one grotesk in three weights, a mono face for figures) and nothing else. On phones the drawing moves under the hero into a bordered band, cropped to its hero pose, and the header menu carries navigation.

The world is flat with one lit exception. The fixed header is a glossy bar: translucent navy over a 24px backdrop blur, a faint white hairline below, a soft black drop shadow, and an inset mint hairline; nothing else on the sheet casts a shadow, blurs, or glows. Corners are square except on the four kinds of touchable cell (hero icon links, the header's RESUME button, logo boxes, skill cells), which take a 12px radius. The only two gradients are the ground and the link shading, and depth elsewhere is conveyed by ink borders of two weights and by the one dimmed scrim behind the detail overlay. Color is ink on the sheet with the signal used as a pointer (current section, hover, the hero's rule, separators, and chevron, the resume outline) rather than as a mood. The red/green/blue joint-frame triads exist only on the arm as functional CAD code. Logos, screenshots, and skill icons sit directly on the sheet with no white tile behind them. The build refuses the glowing hero, gradient text, glass cards, eyebrows and kickers, and any repetition of the drawing conceit in section chrome (no parts list, no DETAIL sheet, no legend, no NOTES block, no robot puns). It refuses an orange or yellow accent, a blueprint-blue or textured ground, and a second theme: the light sheet and its toggle were built, reviewed, and removed. Motion is sparse: the arm's trapezoidal velocity profile, the chevron's bob, the overlay's open and close, a 4px lift on skill cells, and 150 to 200ms color transitions on the hover cells.

**Key Characteristics:**
- One sheet: navy ground on a plain fixed gradient, pale ink, mint signal; `color-scheme: dark`, no theme toggle, no stored preference
- A two-tone arm: gradient-shaded steel links and near-black joint housings on a 180-wide base plate, every part outlined in pale ink at 2 viewBox units, standing on a full-width hatched ground line
- Big Shoulders Display at weight 900 for the hero name only; Bricolage Grotesque for everything else (600 for headings, labels, actions, and nav; 500 for the hero positions; 400 for prose); JetBrains Mono with tabular figures for dates, locations, and the colophon; osifont only for dimension numerals inside the SVG drawings
- Square corners by default with a 12px radius reserved for touchable cells; hairline borders instead of tiles; the header is the one lit, glassy surface
- Two-column desktop sheet (39% sticky arm with a six-station rail, 61% scrolling content); single stacked column on phones with the cropped arm in a band under the hero and no rail
- Exactly one signal: it marks what is current, hovered, or actionable and appears nowhere else; it is never orange or yellow

## Colors

Pale ink on one navy sheet, with a single mint signal, a two-tone steel palette that exists only inside the arm drawing, and three functional axis colors that live only at the arm's joints. All values are CSS custom properties on `:root` in `src/index.css` and are the single source of truth; Tailwind's `sheet`, `ink`, `rule`, `signal`, `on-signal`, `scrim`, and `axis` colors resolve to them, and the arm's own tones are read straight from the custom properties inside the SVG. The header's glass is the one place that writes literal alpha colors (navy at 42% over blur, 78% without; white at 6%; black at 55%; mint at 14%); those are that component's own and are carried in the sidecar, not here.

### Primary
- **Signal Mint** (`signal`): the one accent. Fills the active station circle on the arm's rail and the 2px hero rule; colors the ⫽ separators between the hero positions and the bobbing chevron; strokes the hover crosshair on a rail station, the hollow duplicate behind the hero name (1.5px text stroke at 55% opacity), the hero icon links on hover, the RESUME button's outline, and a hovered skill cell; fills the RESUME button on hover; and is the `::selection` background and the 2px `:focus-visible` outline.
- **Signal Ink** (`signal-ink`, a lighter mint): the signal as text. The active nav link in the header, the active or hovered label on the rail, the RESUME button's resting text, and the hover color of every heading-style link (row titles, card titles, skill captions, footer links, hero icons, the chevron, the header wordmark).
- **On Signal** (`on-signal`, near-black navy): the only text color allowed on a Signal fill: the hovered RESUME button and selected text.

### Neutral
- **Sheet** (`sheet`): the page ground behind the gradient, the fill of the detail overlay, and the cut-outs of the arm (joint centers, index marks, idle station circles, the triad's Z circle).
- **Sheet Top / Sheet Bottom** (`sheet-top`, `sheet-bottom`): the two end stops of the ground gradient (`165deg`, Sheet Top at 0%, Sheet at 50%, Sheet Bottom at 100%), painted once on a fixed `#root::before` layer. They are used nowhere else.
- **Ink** (`ink`): body text, headings, the hero name and its flange detail, the arm's floor, hatch, dimensions, and idle station outlines, the section heading underline, the About photo frame, outline buttons, the overlay's edge, the scrollbar thumb, and the hover fill of outline buttons.
- **Ink 2** (`ink-2`): secondary prose: the hero positions line, section ledes, role lines, one-line summaries, card descriptions, chip text, skill captions, and skill-group headings.
- **Ink 3** (`ink-3`): tertiary marks: the STACK label, dates and locations, the footer colophon, the arm's dashed centerline, and the rail's hairline and end ticks.
- **Rule** (`rule`): the default hairline. Aside divider, the phone arm band's top and bottom edges, mobile-menu top border, experience row dividers, group heading underlines, hero icon-link, icon-cell, skill-cell, chip, and close-button borders, card image frames at rest, overlay section dividers, the link-row rule, the footer colophon rule, and the scrollbar track edge.
- **Rule 2** (`rule-2`): the faintest tone. The hover fill of the overlay close button, and nothing else.
- **Scrim** (`scrim`, deep navy at 66%): the backdrop behind the detail overlay, and nothing else.

### Arm (drawing only)
- **Arm Highlight / Arm / Arm Shadow** (`arm-hi`, `arm`, `arm-lo`): the three stops of the `#link` vertical gradient (0%, 55%, 100%) that fills every link mass: the pedestal, upper arm, forearm, and wrist link. Read as cylindrical shading in the link's own frame.
- **Joint** (`joint`, near-black blue-gray): the solid fill of every housing and tool part: the base plate, the turntable, neck, shoulder, elbow, and wrist housings, the roll collar, the flange plate, and both gripper fingers.
- **Arm Line** (`arm-line`, the same value as Ink): the 2 viewBox-unit outline stroke on every part of the arm. Used nowhere outside `Arm.js`.

### Axis (functional, arm only)
- **Axis X** (`axis-x`), **Axis Y** (`axis-y`), **Axis Z** (`axis-z`): the red, green, and blue joint-frame triads drawn at the shoulder, elbow, and wrist. They are CAD notation, not interface color. (Axis Y shares the mint value with Signal; that coincidence lives only inside the drawing.)

### Named Rules
**The One Signal Rule.** The signal means "current", "hovered", or "act here" and nothing else. It marks the active section (header link, rail label, and rail station), the hover state of links, icon cells, and skill cells, the hero's rule, separators, and chevron, and the one RESUME action. It never colors a part of the arm. It is never a background for content and never decoration.

**The Signal-Reads-As-Ink Rule.** Typeset words in the signal color always use `signal-ink`; the base `signal` is reserved for fills (the hero rule, the active station, the hovered RESUME button, selection), strokes (the crosshair, the hollow name, borders, the focus ring), and glyph marks that are not words (the ⫽ separators, the chevron).

**The Navy-Not-Blueprint Rule.** The sheet is a deep navy, never a saturated blueprint or Prussian blue and never a pale blue, and the ground is a plain gradient with no texture. The signal is mint; it is never orange and never yellow. All of these were tried and rejected by the owner.

**The Two-Tone Steel Rule.** The arm is never blue on the blue sheet. Links are gradient-shaded steel, housings and tool parts are the dark Joint tone, and every part carries its own `arm-line` outline so pieces read as separate machined parts where they overlap.

**The Bare-Raster Rule.** Logos, screenshots, and technology icons sit directly on the sheet. There is no white tile and no `frame` token: a screenshot or icon cell gets a 1px Rule hairline, a company logo box gets a 12px radius and no border at all, and dark-on-transparent icons are inverted to read on navy.

**The Triads-Stay-On-The-Arm Rule.** The red/green/blue axis colors are drawn only inside the arm SVG. They are not available to any other component.

## Typography

**Display Font:** Big Shoulders Display (with Impact, sans-serif)
**Body / Heading / Label Font:** Bricolage Grotesque (with system-ui, Segoe UI, sans-serif)
**Mono Font:** JetBrains Mono (with ui-monospace, monospace)
**Drawing Font:** osifont, self-hosted, inside SVG text only

**Character:** A heavy, condensed industrial display face appears exactly once, for the name, at poster scale with a hollow mint duplicate behind it. Everything else is one variable grotesk with a warm, slightly eccentric drawing, and hierarchy below the name comes from weight as much as size: 600 for anything that names, labels, or acts (the `.font-cad` utility, which also sets 0.02em tracking), 500 for the hero's positions line, 400 for prose at 17px. The mono face appears only where figures need to align: dates, locations, and the colophon, always with tabular numerals. Bricolage Grotesque (optical size 12 to 96, weights 400 to 700), JetBrains Mono (400 and 500), and Big Shoulders Display (800 and 900) are loaded from Google Fonts; osifont is self-hosted (`src/assets/fonts/osifont.ttf`, `font-display: swap`) and is drawn only as the dimension numerals inside the arm and the flange detail's callouts. Because `.font-cad` is declared after Tailwind's utilities, its 0.02em is the effective tracking on every heading, label, and action; the `tracking-wide` and `tracking-widest` utilities on those same elements do not take effect.

### Hierarchy
- **Display** (900, `clamp(3.4rem, 10vw, 8.75rem)` from 640px, `min(5.2rem, 21vw)` on phones, line-height 0.86, uppercase, -0.025em): the hero name, on two lines (first name / surname), centered on phones and left-aligned from 1024px. An absolutely positioned, `aria-hidden` duplicate sits 0.06em right and down with transparent fill and a 1.5px Signal text stroke at 55% opacity. Appears once; no other text uses this face.
- **Headline** (600, 2.4rem from 640px, 2rem on phones, line-height 1, uppercase, 0.02em): section headings (ABOUT, EXPERIENCE, PROJECTS, SKILLS, CONTACT), each sitting on a 1px Ink underline. The detail overlay's title is the mixed-case sibling at 2rem / 1.75rem with line-height 1.25.
- **Title** (600, 1.2rem to 1.3rem for experience rows, 1.15rem for project cards, line-height 1.25, mixed case, 0.02em): entry names; Signal Ink on hover.
- **Positions** (500, 1.1rem on phones, 1.22rem from 640px, line-height 1.625, Ink 2): the hero's one line of current positions ("SWE Intern @ GM Cruise" and its siblings), each kept on one line and separated by a Signal ⫽ at 1.35em with 8px (10px from 640px) side margins; the line wraps centered on phones and left-aligned from 1024px.
- **Group** (600, 1.05rem, uppercase, 0.02em, Ink 2): category headings inside Skills, each on a 1px Rule underline. The same size and case set the header wordmark and phone menu items in Ink.
- **Body** (400, 17px, line-height 1.55; 1.625 in the About paragraphs and row summaries at 0.95rem; 1.375 for card one-liners at 0.95rem): prose, ledes, descriptions, and overlay bullets. Measure is capped at 66ch. Chip text and skill captions are Body at 0.85rem in Ink 2.
- **Label** (600, 0.8rem, uppercase, 0.02em, Ink 3): the STACK label in the overlay. Actions, header nav links, and the RESUME button use the same face uppercase at 0.95rem; rail labels at `clamp(0.75rem, 1.05vw, 0.95rem)`.
- **Meta** (400, 0.8rem, tabular numerals, Ink 3): dates and locations, the footer colophon, overlay meta lines.
- **CAD annotations inside drawings** (osifont, 15 viewBox units in the arm, 13 in the flange detail): the "146" and "180" dimensions and the flange callouts (R270, 8× Ø14 EQ SP). They are drawing text and set no interface size.

### Named Rules
**The One Display Rule.** Big Shoulders Display is the hero name and nothing else. Below the name there is one family, and weight is a hierarchy step: 600 names, labels, and acts; 500 is the hero positions line only; 400 reads. Bricolage's 700, JetBrains Mono's 500, and Big Shoulders' 800 are loaded but unused.

**The Drawing-Font Rule.** osifont is drawing lettering: it appears only as `<text>` inside an SVG (dimension numerals, flange callouts). It never sets an HTML element.

**The Tabular Figures Rule.** Every date, location line, and colophon is set in JetBrains Mono with `font-variant-numeric: tabular-nums` (the `.tnum` utility).

## Layout

The page is one continuous sheet under a fixed 56px glass header (20px side padding, 32px from 1024px). Content starts at `padding-top: 56px`. The header holds the wordmark on the left; between 768px and 1024px an inline nav of six links with 28px gaps sits at the right; from 1024px the rail beside the arm is the nav and the header instead carries one mint-outlined RESUME ↗ button; below 768px a 40px menu button opens a stacked list (16px gaps, 20px side padding, 16px above, 20px below) under a 1px Rule. There is no theme control.

From 1024px the main area is a two-column grid at 39% / 61%. The left column is an `aside` (rendered only at this width, via a JS media query, not hidden by CSS) that sticks at `top: 56px` with height `calc(100vh - 56px)`, a 1px Rule right border, 4px side padding, 24px above and 112px below so the drawing sits high in the column, `overflow: hidden`, and the arm centered within it. The arm's box keeps a 900:800 aspect ratio at `width: min(100%, (100vh - 56px) * 1.125)` so it fills the column's height without overflowing; its hatched floor runs from viewBox x -1200 to 2100 and is clipped by the aside so the floor reads as continuing past the drawing on both sides. The right column is `min-width: 0` and scrolls past the arm. The hero there is `min-height: calc(100vh - 56px)`, a top-anchored flex column with `overflow: hidden`: 48px left and 32px right padding, 96px above and 40px below. The flange detail is absolutely positioned at `top: 32px`, overhanging the right edge by 64px, at `height: min(78vh, 620px)`, and renders only from 1024px.

Below 1024px everything stacks: the hero first (20px side padding, 32px from 640px; 40px above and below; text centered), then the arm in a band with 1px Rule top and bottom borders, 12px side padding, and 16px above and below, holding the cropped drawing (`viewBox 30 235 640 545`, max width 19rem, held in the hero pose, with no rail and no labels because navigation moves to the header menu), then the sections.

Inside the hero the mint rule sits 32px under the name at 88% width, the positions line 28px under the rule, the icon links 24px under that with 20px gaps (32px from 640px), and the chevron 40px under the icons. From 1024px the chevron's row is a 23rem box (four 56px cells plus three 32px gaps) with the chevron justified to its end, so it sits under the resume icon; on phones it is centered.

Sections share one rhythm: horizontal padding 20px, 32px from 640px, 48px from 1024px; vertical padding 80px, 96px from 1024px (the footer uses 80px / 96px above and 40px below). Each opens with a section heading block that has a 1px Ink underline, 16px below the heading and 40px before the content. About is a single column with 32px gaps that becomes two columns from 768px with a 56px gap: text on the left within the 66ch measure, the photo on the right as a fixed 176px (224px from 768px) square that nothing wraps under. Experience rows are 24px above and below with a 1px Rule divider; the logo column is 56px wide (72px from 640px) with a 20px gutter. Projects is one flat grid, one column becoming two at 640px with 32px column and 40px row gaps; there are no lanes or categories. Skill categories are separated by 48px, each heading with a 1px Rule underline, 8px above the rule and 20px below; cells use `repeat(auto-fill, minmax(5.5rem, 1fr))` with 16px column and 24px row gaps. Prose never exceeds the 66ch measure. The detail overlay pads 24px, 36px from 640px.

Breakpoints are Tailwind's defaults and only three are used: 640px (`sm`), 768px (`md`, header nav and the two-column About appear), 1024px (`lg`, two-column sheet, rail, labels, and the RESUME button appear; header nav disappears).

## Elevation & Depth

The system is flat with one lit surface. The fixed header is glass: navy at 42% opacity over a 24px backdrop blur (78% opacity where `backdrop-filter` is unsupported), a 1px white hairline at 6% below it, a soft drop shadow (`0 8px 32px -8px rgba(0,0,0,0.55)`) so the page reads as sliding under it, and an inset 1px mint hairline at 14% along its bottom edge. No other element declares a `box-shadow`, a blur, or a glow.

Everywhere else depth is drawn, not lit. Structural boundaries are 1px Ink borders (section heading underline, About photo frame, outline buttons, the detail overlay's edge, a hovered card image); the hero's 2px line is the mint rule under the name, the heaviest stroke on the sheet after the arm's outlines. Softer separations are 1px Rule hairlines (row dividers, group underlines, the phone arm band, icon, chip, skill-cell, icon-link, and close-button frames). The single layered element, the detail overlay, is separated from the page by the Scrim token (deep navy at 66%) and by its own 1px Ink border; it does not float or glow.

Two gradients exist and neither is depth. The ground is one fixed 165° gradient from Sheet Top through Sheet to Sheet Bottom, painted on `#root::before` behind the whole page, with no grid, grain, or vignette over it; it is the paper, not a light. The arm's links are filled with a vertical three-stop steel gradient so they read as turned cylinders; that shading belongs to the drawing.

### Shadow Vocabulary
- **Header glass** (`box-shadow: 0 8px 32px -8px rgba(0,0,0,0.55), inset 0 -1px 0 0 rgba(61,220,132,0.14)` with `backdrop-filter: blur(24px)`): the fixed header only.

### Named Rules
**The One-Glass Rule.** The header is the only surface that is translucent, blurred, or shadowed. Every other surface is opaque Sheet with a drawn edge; if a new surface needs to separate from the sheet, give it a 1px Ink edge; if it needs to sit above the sheet, dim what is behind it with the Scrim token.

**The Mint-Rule Rule.** The 2px stroke belongs to the hero's mint rule alone; every other border on the sheet is 1px.

**The Two-Gradients Rule.** The ground gradient and the link shading are the only gradients in the system. No surface, text, or control takes a gradient, and the ground takes no texture.

## Shapes

Interface elements are sharp rectangles by default: `border-radius: 0` on chips, icon cells, card image frames, outline buttons, the photo, the overlay, and the close button. Four kinds of touchable cell take a 12px radius (`rounded-xl`): the hero's icon links, the header's RESUME button, the experience logo boxes, and the skill cells. Frames are 1px (Rule for soft, Ink for hard) with the one 2px mint exception. Images are cropped square (About photo, logo boxes) or 16:9 (project screenshots) with `object-fit: cover` (screenshots, positioned `object-center` by default or `object-left` where a card sets `imagePosition`) or `contain` (logos, icons), never masked. Overlay list bullets are 6px Ink squares. Icons are lucide line icons at 16px to 26px with a 1.5px to 1.75px stroke (the chevron is 48px at 2.25), used in the hero icon links and chevron, the RESUME button's arrow, the footer, overlay links, the close button, and the phone menu toggle.

The arm SVG is the one place with freer rounded forms: its link masses have small corner radii (2 to 8 viewBox units), its base plate and turntable 1 to 4, and its housings are circles, because that is how a drawn robot arm reads. Every arm part is a filled shape with its own 2-unit `arm-line` outline (`stroke-linejoin: round`), so the silhouette is a set of discrete machined parts rather than one merged mass; the cut-outs (joint centers, index marks) are Sheet-filled circles. The rail's six stations are 6-unit circles (1.5-unit Ink stroke, Sheet fill at rest; Signal fill and stroke when active) on a 1-unit Ink 3 hairline with 16-unit end ticks. The hero's flange detail is concentric 1-unit circles, a bolt circle of eight Ø14 holes, and dash-dot centerlines at 9% opacity. The favicon reduces the arm to a pale silhouette with two mint joints on a navy square of radius 14/64. That geometry is the drawing's, not the interface's, and does not license radii or outlines elsewhere.

## Components

### Hero
The first viewport's right column. A two-line Display name with its hollow Signal duplicate; a 2px Signal rule 88% wide, 32px below; the positions line (500, Ink 2, ⫽ separators in Signal at 1.35em) 28px below that; a row of four icon links 24px below; and a bobbing Signal chevron 40px below, all over a faint flange section detail at the right edge (desktop only). Centered on phones, left-aligned from 1024px. There is no action row and no role list.

### Buttons
- **Shape:** square corners (0px) except the RESUME button and icon links (12px).
- **Resume (header, desktop only):** 1px Signal border, no fill, Signal Ink text in Action style (600, 0.95rem, uppercase, 0.02em) with a 16px ↗ arrow at 6px gap, 8px 16px padding, 12px radius; hover fills Signal with On Signal text over a 150ms color transition.
- **Outline:** 1px Ink border, Sheet fill, Ink text in the body face at 0.95rem, 8px 14px padding, optional 16px leading line icon with 8px gap. Used for overlay links (Website, GitHub, DevPost) and the 404 "Back to home" (17px body size, 10px 16px padding there). Hover inverts to Ink fill with Sheet text, instantly.
- **Icon (close):** 40px square, 1px Rule border, 20px X at 1.75 stroke; hover moves the border to Ink and fills Rule 2, instantly. The phone menu button is the same 40px square without a border, showing a 24px Menu or X.
- **Icon link (hero):** 48px square (56px from 640px), 12px radius, 1px Rule border, Ink line icon at 22px (26px from 640px) at 1.5 stroke; hover turns border Signal and icon Signal Ink over 150ms.
- **Chevron (hero):** a 56px box holding a 48px Signal ChevronDown at 2.25 stroke, linking to `#about`; Signal Ink on hover; under `prefers-reduced-motion: no-preference` it bobs 7px down and back on a 2.1s ease-in-out loop.
- **Focus:** the global 2px Signal outline at 3px offset.

### Chips
- **Style:** 1px Rule border, no fill, Ink 2 text at 0.85rem in the body face, 4px 10px padding, 8px gaps in a wrapping row under a STACK label. Static; no selected state.

### Icon Cells
- **Style:** square 32px cell with a 1px Rule border and no fill, containing a 20px technology logo (`object-fit: contain`; dark-on-transparent logos are inverted to read on navy). Rows of these sit under project cards with 6px gaps. The `title` attribute and a visually hidden span carry the name.
- **Skill cell:** 64px, 12px radius, 1px Rule border, no fill, a 36px logo, and an Ink 2 0.85rem caption below at 8px. On hover the cell lifts 4px and its border turns Signal while the caption turns Signal Ink, over 200ms ease-out.
- **Logo box (experience):** 56px (72px from 640px) square with a 12px radius, `overflow: hidden`, no border and no fill; the logo fills it with `object-fit: contain`.

### Cards / Containers
- **Project card:** an unbordered button-column in a flat two-column grid. 16:9 screenshot in a 1px Rule frame (Ink on hover) with `object-fit: cover` and an optional `object-left` position, Title at 1.15rem 12px below (Signal Ink on hover), Ink 2 one-liner at 0.95rem with line-height 1.375, then a row of 32px icon cells.
- **Experience row:** a full-width button on a 1px Rule bottom border, 24px vertical padding, two columns (rounded logo box, then text). Company in Title at 1.2 to 1.3rem, role in Ink 2, date and location in Meta, one-line summary in Ink 2 at 0.95rem within the measure. No CURRENT tag and no metric line.
- **Detail overlay (sheet):** fixed full-viewport layer with the Scrim backdrop; the panel is a 1px Ink-bordered Sheet rectangle, max width 48rem, 24px / 36px padding, bottom-anchored on phones and centered from 640px, scrolling internally up to 100dvh (90vh from 640px). Header holds a mixed-case title at 1.75 / 2rem, Ink 2 subtitle, Meta line; a 1px Rule divider then the bullet list (6px Ink square markers, 12px gap, 12px between items, 66ch measure), the STACK chip row (28px above the label, 8px below), and, for projects with links, a 1px Rule-topped outline-button row (32px above, 24px below the rule, 12px gaps). There is no "Built with" icon row. Opens with a 160ms fade of the root and a 180ms fade-plus-14px-rise of the panel on `cubic-bezier(0.2, 0, 0, 1)`; closes with a fade. Under reduced motion the rise is dropped. Escape, backdrop click, and the close button dismiss; focus lands on the close button; body scroll locks.
- **About photo:** 176px (224px from 768px) square, 1px Ink border, `object-fit: cover`, in its own column to the right of the text from 768px with a 56px gap; above the text on phones.

### Navigation
- **Header:** fixed, 56px tall, glass (see Elevation). Wordmark at 1.05rem uppercase, 600, Ink, Signal Ink on hover, scrolls to the top. From 768px to 1024px, an inline nav of uppercase links at 0.95rem with 28px gaps: About, Experience, Projects, Skills, Resume (external PDF), Contact; the active link is Signal Ink with a 1px underline offset 6px, hover is Signal Ink. From 1024px the nav is hidden and a RESUME ↗ button sits at the right instead. Below 768px a 40px menu toggle (24px line icon) opens a stacked list at 1.05rem with 16px gaps under a 1px Rule.
- **Station rail beside the arm (desktop only):** a vertical Ink 3 hairline at viewBox x 686 running from 34 units above the first station to 34 below the last, with 16-unit end ticks, carrying six station circles at y 110, 202, 294, 386, 478, 570 (92 apart), and six plain uppercase labels (600, `clamp(0.75rem, 1.05vw, 0.95rem)`, 0.02em) absolutely positioned at x 712, vertically centered on their stations: About, Experience, Projects, Skills, Resume, Contact. The active station is filled Signal and its label is Signal Ink; hovering or focusing a label turns it Signal Ink and draws a 32-unit Signal crosshair through its station. No joint numbers, no leader lines. Click scrolls and pushes the path; RESUME is an external link to the PDF; the rest are buttons with `aria-current="location"` when active.

### The Arm (signature)
One SVG (`viewBox 0 0 900 800`, `role="img"`) drawn as filled parts, each with a 2-unit Arm Line outline. The base is a 180 × 14 Joint plate on the floor (x 110 to 290 at y 692), a trapezoidal pedestal (x 170 to 230 at the plate, narrowing to 178 to 222 at y 602) filled with the link gradient, an 84 × 16 Joint turntable with a Sheet index mark that swings with J1, and a 28 × 34 Joint neck. Above it: a 210-unit upper arm (44 wide, radius 8) with a 30-unit Joint shoulder housing (9-unit Sheet center) and 26-unit elbow housing; a 185-unit forearm (34 wide, radius 7) with a 26 × 46 Joint roll collar at 85 units whose Sheet tick swings with J4, an 8-unit Sheet center, and a 24-unit wrist housing; a 56-unit wrist link (20 wide, radius 4) with an 8-unit Sheet center, ending in a flat 14 × 38 Joint flange plate and two 48 × 7 Joint fingers. Axis triads (44-unit red X arrow, green Y arrow, blue Z circle at 1.5 stroke) sit at the shoulder, elbow, and wrist. The floor is a 1-unit Ink line at y 706 from x -1200 to 2100 with a 135° hatch every 16 units, clipped by the column; a dashed Ink 3 centerline rises from the base; two dimensions in osifont at 15 units with Ink arrowheads are called out: "146" (pedestal height, vertical at the left) and "180" (plate width, horizontal below the floor).

The arm is one machine, not a map of the page: sections are stations on the rail, never parts of the arm. Poses are six joint angles per section (`src/data/sections.js`; hero pose `[0, 28, 38, 0, 24, 0]`) resolved by forward kinematics. Whenever a station is aimed at (the active section below the hero, or any hovered or focused label, which also previews that section's pose) the wrist pitch is solved analytically so the tool axis points from the wrist toward the station (clamped to ±110°) and a seventh "grip" joint opens the claw to 30 (fingers each spread 10 viewBox units); at the top of the page with nothing hovered the arm rests in the hero pose with the claw closed. All seven joints move on a trapezoidal velocity profile with `VMAX 95 deg/s` and `AMAX 220 deg/s^2`, so the arm accelerates, cruises, and decelerates like a real manipulator with no easing curve, bounce, or overshoot. Under `prefers-reduced-motion: reduce` the arm snaps to the pose in a layout effect, before first paint. On phones the rail and labels are not rendered and the drawing is cropped to the hero pose, which it holds without following the scroll.

### Favicon
`public/favicon.svg` (64-unit viewBox): a navy `#0f1f3d` rounded square (radius 14), the arm reduced to a pale `#e6edf7` silhouette (a 22 × 5 base plate and three round-capped strokes at 9, 9, and 8 units with a two-stroke claw at 4.5), and two mint `#3ddc84` joint discs of radius 4.2. PNG renders at 32 and 64 serve as alternates, `logo192.png` as the touch icon, and the manifest's theme and background are both `#0f1f3d`.

### 404 page
A static HTML page (`public/404.html`) hard-coded to the sheet values (navy ground `#0f1f3d`, Ink `#e6edf7`, Ink 2 `#b7c5da`): a 1px Ink top rule, a `clamp(4rem, 12vw, 7rem)` code, a 1.6rem uppercase heading, Ink 2 copy, and an outline "Back to home" button that inverts to Ink fill with Sheet text. It redirects known section paths back into the app and unknown ones to the in-app NotFound, which sets the same composition in Bricolage 600. Neither carries the signal color.

## Do's and Don'ts

### Do:
- **Do** build every surface on the one navy sheet using only the token names (`sheet`, `ink`, `rule`, `signal`, `on-signal`, `scrim`); there is no second theme to support and no hex belongs in a component.
- **Do** set the name, and only the name, in Big Shoulders Display at weight 900 with its hollow Signal duplicate; set every heading, label, action, and nav item in Bricolage Grotesque at weight 600 with 0.02em tracking (`.font-cad`) and uppercase where it labels, using size for hierarchy.
- **Do** keep prose in Bricolage Grotesque at 17px / 1.55 within a 66ch measure, and set every date, location, or colophon in JetBrains Mono with tabular numerals.
- **Do** use Signal Ink for signal-colored words, Signal for fills, strokes, glyph marks, selection, and the focus outline, and On Signal for any text that sits on a Signal fill.
- **Do** place logos, screenshots, and technology icons directly on the sheet: a 1px Rule hairline on icon cells and screenshot frames, a 12px radius and no border on logo boxes, and no white tile anywhere.
- **Do** keep the arm two-tone (gradient steel links, dark Joint housings) with a 2-unit Arm Line outline on every part, standing on its 180-wide plate on the full-width hatched floor.
- **Do** separate content with 1px Rule hairlines and frame hard objects with 1px Ink; reserve the 2px stroke for the hero's mint rule.
- **Do** keep corners square except the 12px radius on touchable cells (hero icon links, the RESUME button, logo boxes, skill cells), and keep hover motion to color transitions of 150 to 200ms and the skill cell's 4px lift; the only other timed motion is the arm's trapezoidal profile, the chevron's 2.1s bob, and the overlay's 160 to 180ms open and close.
- **Do** honor `prefers-reduced-motion` (static arm pose before first paint, no chevron bob, no overlay rise, `scroll-behavior: auto`) and keep Escape-to-close, backdrop dismissal, and focus on the close button.
- **Do** keep the six-station rail beside the arm as the desktop nav, with the gripper aiming at and opening on the active station, and hand navigation to the header links between 768px and 1024px and to the header menu below that, where six labels would be unusable tap targets.

### Don't:
- **Don't** use orange or yellow as the signal, or anywhere else; don't push the sheet toward blueprint blue or pale blue; and don't put a grid, grain, vignette, or any texture on the ground. All were tried and rejected.
- **Don't** reintroduce a light theme, a theme toggle, a stored theme preference, or a pre-paint theme script; the sheet is navy and `color-scheme` is dark.
- **Don't** draw the arm in a blue on the navy sheet, and don't merge its parts into one unoutlined mass.
- **Don't** map sections onto the arm's parts: no joint numbers on the labels, no Signal-filled link, no leader lines from the rail to the arm. Sections are stations and poses; the arm is one object that points at them.
- **Don't** add a second glass, blurred, or shadowed surface, gradient text, or a third gradient; the header is the one lit surface and depth elsewhere is a border weight or the Scrim token.
- **Don't** let the drawing metaphor leave the arm, its rail, and the hero: no parts lists, DETAIL sheets, legends, NOTES blocks, dimension leaders in sections, or robot puns in copy or the 404.
- **Don't** add eyebrows or kickers above headings; the only small uppercase text above a value is the STACK label in the overlay.
- **Don't** use the axis red, green, or blue outside the arm SVG, and don't use Signal as a content background.
- **Don't** hard-code a hex in a component; the only literal colors are the header glass's alpha values, the favicon, and the 404's standalone stylesheet.
- **Don't** put a white tile behind a logo, screenshot, or icon, and don't bring back the `frame` token.
- **Don't** introduce scroll reveals, parallax, or animated counters, and don't add hover transforms beyond the skill cell's 4px lift.
- **Don't** use the display face for anything but the name, osifont outside an SVG, or a rounded corner outside the four touchable cells.
