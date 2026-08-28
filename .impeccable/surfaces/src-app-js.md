---
version: 1
slug: "src-app-js"
primary_target: "src/App.js"
related_targets: ["src/components/Hero.js","src/components/About.js","src/components/Arm.js","src/components/Experience.js","src/components/Projects.js","src/components/Skills.js","src/components/Header.js","src/components/Footer.js","src/components/NotFound.js"]
---

# Home (single page) — design brief

Scope: the whole single page at akshaisrin.live (header, hero, About, Experience, Projects, Skills, Contact/footer) plus the 404. Visitor mode: **Persuade** — the visitor decides to reach out or download the resume. Seed key 39531720 (round 2, IMPECCABLE'S PICK: Kinematic Blueprint). Confirmed by the user with one correction: **one idea, not a theme park** — the articulated arm and the drawing sheet are the identity; sections are clean, normal content that share the sheet's visual language and nothing more.

## 1. Job and audience

Recruiters and hiring managers for ML / robotics / AV / software roles arrive from a resume or LinkedIn link, mid-task, skimming; research PIs arrive second. They need to know in seconds who Akshai is, where he is headed, and that the evidence is real, then reach out.

## 2. Outcome and proof

Primary action: download the resume or email. Secondary: GitHub, LinkedIn. Proof on hand: five experience records and twelve projects with real metrics, org logos, proof links, resume PDF. Product truth: the RL / physical-AI direction stated honestly (it already lives in the About copy), backed by real but early evidence; shipping breadth carries the weight. No invented claims, testimonials, or robotics footage.

## 3. Selected direction — Kinematic Blueprint (restrained)

**World.** A white drawing sheet. Hairline ink linework, thin rules, small mono labels, dimension-style leaders used sparingly. One face for headings and labels with single-stroke CAD character (osifont self-hosted if its license clears; otherwise a monoline technical face from Google Fonts); body prose in a plain, highly legible grotesk not on the default list. Color strategy: Restrained — white ground, ink black, **one signal orange** for the current section, the active link of the arm, and the primary actions. The xyz joint-frame triads (red/green/blue) appear only on the arm's joints as functional CAD code, nowhere else. Light ground, decided by the scene: a recruiter at a desk in daylight with the resume open in the next tab.

**The one idea.** A six-axis robot arm, drawn as solid ink-black link masses with hairline joint detail, lives on the sheet and **articulates with real forward kinematics as you scroll**. Its six joints map to the six sections (About, Experience, Projects, Skills, Resume, Contact), so the arm reaches each section as it comes into view and the current joint's link takes the orange. That is the whole metaphor. It is not repeated in section chrome, copy, or naming.

**First viewport.** The arm at poster scale across the sheet, joints J1–J6 with small leader labels naming the sections (this doubles as the nav). Bottom-right, an engineering title block, kept honest and compact: NAME Akshai Srinivasan · ROLE MLE Intern @ GM Cruise · EDU CE + AMATH @ UW · ORG DubHacks Director of Technology · REV 2026.08, with **RESUME.PDF** and **EMAIL** as orange filled cells and GitHub / LinkedIn as plain cells. No NOTES block. Nothing else on the sheet.

**Sections.** Plain, well-structured content in the sheet's language (rules, mono labels, orange accent), each a clean region on the continuing sheet:
- **About:** the desktop paragraph verbatim, the current profile photo as a simple inset with a hairline frame.
- **Experience:** a clean list: org logo, org, role, dates, one-line summary, one outcome metric visible on the row; current roles marked orange. Detail opens in an overlay sheet with the full bullets and stack.
- **Projects:** a grid of cards with screenshot, title, one-liner, and the skill icons; grouped in three lanes (Robotics & RL, Systems & Infra, Games & Play) with a small mono lane heading. Detail overlay with bullets, stack, links.
- **Skills:** the icon registry, kept, laid out as a tidy grid of icon cells with labels under group headings. Icons are icons; no legend conceit.
- **Contact / footer:** email, GitHub, LinkedIn, resume, plainly.
- **404:** the same sheet language, a plain "Page not found" and a link home. No drawing pun.

**Signature interaction.** Scroll-driven articulation with real FK, motion on a trapezoidal velocity profile like a real arm: no bounce, no glow, no blur. Hovering or focusing a joint label highlights its section; clicking it scrolls there. Nothing else on the page moves except overlay open/close and hover states.

**Implementation consequence.** The arm is one SVG with six transform groups and JS forward kinematics; an original arm, not a specific product's likeness. Sticky in a side column on desktop so the sections scroll past it; on mobile it is a compact vertical arm in the hero only and does not follow the scroll, the title block compacts to a strip under it, and sections stack normally.

**Honest risk.** Blueprint is a known trope; the arm must genuinely articulate and the black link masses and orange must be committed, or the page reads as a timid white template. The opposite risk, now explicitly ruled out by the user: leaking the metaphor into every section.

## 4. Scope and boundaries

Production-ready, full single page plus 404, fully interactive. Untouched: all facts, dates, metrics, links, org logos, the resume PDF, the CRA/React/Tailwind stack, static GitHub Pages hosting, content as data arrays, the skills icon registry. Anti-goals: dark glow hero, gradient text, glass cards, invented claims, a trademarked arm's likeness, stock photos, parts-list / DETAIL-sheet / legend conceits, robot puns in copy or 404, a NOTES block.

## 5. States and ranges

Experience 3–8 entries (5 now); projects 8–16 (12 now) across three lanes (a lane may hold 2–7); skills ~30 in groups. Overlays open/close (Escape, backdrop, close button). Reduced motion: the arm renders statically in its hero pose; no scroll articulation. Narrow screens: hero arm only, sections stacked. No loading or error states beyond the 404.

## 6. Interaction and layout

Hierarchy: arm and title block first, then sections in joint order. Topology: one continuous sheet, arm sticky beside the content on desktop. Feedback: joint highlight on hover/focus, orange on the current section and action cells. Transitions: one mechanical velocity profile for the arm; overlays open with a short, plain transition.

## 7. Constraints and decisions

- Keep prefers-reduced-motion handling and Escape-to-close; keyboard-operable nav and overlays.
- Fonts: verify osifont's license (GPL with font exception) before self-hosting; fallback is a Google technical face.
- Decided: desktop About copy is canonical; current photo stays; icon registry stays as plain icons; no NOTES block; metaphor confined to the arm and the title block.
- Build path: code-led (no image generation in this session).


## Build record

Built 2026-08-27, code-led. Finish review disposition: ship (scoped to the scored fix list; no open findings). DESIGN.md recorded from the built world. Deviations from this brief made during the build: on phones the six joint labels are not rendered (the header menu carries navigation; the labels were unusable tap targets at that size), and only the active or hovered joint draws a leader line, idle joints keep a dot. Lane names shipped as Robotics & ML / Systems & Products / Games & Play.


## Theme revision (same day)

After the finish review the user asked for dark mode by default with a light toggle, and rejected orange and yellow accents. Shipped: `data-theme` on `<html>` (default dark, persisted in localStorage, applied before first paint), Sun/Moon toggle in the header. Dark = cyanotype blueprint sheet (#14386b), pale ink, steel-gray arm (#8b96a8) with a pale outline on every part, mint signal (#3ddc84). Light = the original white sheet and ink black with a cobalt signal (#1e56d8). Logo/screenshot/icon frames are white in both themes. Tokens renamed orange→signal; new tokens on-signal, scrim, arm, arm-line.


## Arm interaction revision (same day)

User rejected the joint-per-section mapping. Removed J1-J6 tags, per-link signal fills, leader lines, and joint dots. The arm still poses per section on scroll; its gripper now aims at the current section label (wrist solved analytically, clamped to +/-110 deg) and opens while a label is hovered (seventh grip joint on the same velocity profile). Base plate widened to 180.
