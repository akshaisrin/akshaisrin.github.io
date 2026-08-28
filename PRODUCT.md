# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: recruiters and hiring managers** for industry ML, robotics, autonomous-vehicle, and software roles (internships and new-grad). They arrive from a resume link, LinkedIn, or GitHub, skim for well under a minute, and want a clear technical identity plus proof of shipping before deciding to reply or advance a candidate.

**Secondary: research PIs, lab leads, and grad admissions** evaluating fit for robot learning / physical AI research. They look for research experience, correct methods vocabulary, and evidence of rigor.

Not confirmed as design targets: the DubHacks community, peers, and potential UW Technology Consulting Association clients also land here.

## Product Purpose

Personal portfolio of Akshai Srinivasan, University of Washington undergraduate (Computer Engineering + Applied Mathematics). It presents who Akshai is, work experience, projects, skills, contact channels, and the resume.

Success: a visitor understands within seconds who Akshai is and where he is headed, believes the evidence, and reaches out (email or LinkedIn) or downloads the resume.

## Positioning

**Direction (confirmed):** robotics broadly, and mainly reinforcement learning / physical AI.

**Confirmed tension:** hands-on experience in the RL / physical-AI space is still early and limited. The site must not overclaim. The truthful position is an engineer with strong end-to-end shipping fundamentals whose trajectory is converging on robot learning: "credible and moving fast", not "established researcher".

Evidence for the direction:
- WEIRD Lab (UW) undergraduate research: sim-to-real RL policies for robotic assembly, Isaac Lab, RSL-RL, PPO, domain randomization.
- DuckRL: sim-to-real bipedal locomotion via Rapid Motor Adaptation + PPO in MuJoCo, with domain-randomization ablations.
- Neptune Medical: control systems and C++ fault detection for a robotic endoscope (ROS, haptics).
- General Motors / Cruise: AV infrastructure and 3D visualization tooling supporting perception and localization ML workflows.

Evidence for depth and shipping:
- DubHacks Director of Technology: infrastructure for the largest collegiate hackathon in the Pacific Northwest (1200+ hackers/judges, live judging platform, production MongoDB cluster).
- Co-founded and led the UW Technology Consulting Association (40+ members, 6 client projects in 3 months, partnerships with Pinterest, SAP, Accenture, Seattle Mariners).
- Products with real users: MathMaestro.org (1200+ students), CalcMaestro.com, and a long tail of end-to-end projects.

Design implication: lead with the robotics / RL direction honestly and let the breadth of shipped work carry the proof. Never invent robotics claims to close the gap.

## Operating Context

- Single-page site at https://akshaisrin.live (Create React App, deployed to GitHub Pages via `gh-pages`). Sections: Hero + About, Experience, Projects, Skills, Footer. Separate 404 page.
- Visitors typically arrive from resume, LinkedIn, or GitHub links; a meaningful share on mobile, recruiters often on desktop.
- Experience and project details open in modals; project cards show technology icons resolved through `src/data/skillsRegistry.js`.
- Content is hand-maintained as data arrays inside the component files and refreshed seasonally (latest: "Summer 2026 update").
- Resume PDF is linked from the header: `src/assets/files/Akshai Srinivasan- Resume.pdf`.
- Contact channels: email (akshai.n.srinivasan@gmail.com), GitHub (akshaisrin), LinkedIn (akshaisrin).

## Capabilities and Constraints

- Stack: React 19, react-scripts 5, Tailwind CSS 3, framer-motion, lucide-react and react-icons. Static hosting, no backend.
- Google Fonts currently loaded (Space Grotesk, Inter, JetBrains Mono); not a commitment.
- `public/404.html` plus a `NotFound` component handle GitHub Pages routing for unknown paths.
- Undecided: whether the single-page scroll structure is kept (the user did not mark it binding).
- Undecided: whether current copy phrasing is kept. Facts (titles, dates, metrics, claims) are authoritative; phrasing may change, but any new claim needs approval.
- Known copy inconsistency to reconcile with the user before rewriting: the desktop and mobile "About" paragraphs differ (interests list and lab description).

## Brand Commitments

- Name: Akshai Srinivasan. Domain akshaisrin.live; handle `akshaisrin` on GitHub and LinkedIn.
- Incumbent voice: friendly, first person, informal and exclamation-heavy in section copy ("Hey! I'm Akshai!"), resume-style technical bullets in detail views. Recorded as evidence, not pinned.
- The current dark, violet-gradient visual world is **not** a commitment: the user is open to a full visual redesign. Later work treats the incumbent look as evidence and anti-reference, not as a system to refine.
- Assets on hand: org logos (`gm.jpg`, `allen.jpg`, `DubHacks.jpg`, `TCALogo.png`, `Neptune.jpeg`), project screenshots, profile photos (`pfp.jpg`, `ProfilePic3.jpg`), site logo (`logo.png`, `public/logo3.png`), OG preview (`public/preview.jpg`), all under `src/assets/images` unless noted.

## Evidence on Hand

- Real experience and project records with metrics in `src/components/Experience.js` and `src/components/Projects.js` (e.g. 1200+ hackers, <100 ms live tracking, 376K edge requests, 1,800+ applications reviewed, 1200+ MathMaestro students, 40+ TCA members).
- External proof links: DuckRL project site, mathmaestro.org, uwtechconsulting.com, GitHub repositories, DevPost (FitFinder). Math workbooks are sold on Amazon (no link recorded).
- Resume PDF.
- Absent, do not fabricate: testimonials, press, publications, awards, demo videos or GIFs of robotics work. Ask for these if a design needs them.

## Product Principles

1. **Honest signal over hype.** The RL / physical-AI direction is stated plainly and backed by real evidence, never inflated.
2. **Proof in the first minute.** A recruiter meets the strongest evidence (research plus shipped systems with numbers) without opening a modal.
3. **Two audiences, one story.** Research credibility and shipping breadth reinforce each other instead of competing for space.
4. **Content is data.** Everything is maintained as plain arrays; the design must absorb seasonal content updates without a redesign.
5. **Reach-out is the goal.** Email, LinkedIn, and the resume are always one action away.

## Accessibility & Inclusion

No product-specific requirement established. The incumbent code already honors `prefers-reduced-motion` and closes modals on Escape; future work keeps at least that baseline.
