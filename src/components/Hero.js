import React from 'react';
import { ChevronDown, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_URL } from '../data/sections';

const roles = [
  { what: 'SWE Intern', where: 'GM Cruise' },
  { what: 'CE + AMATH', where: 'UW' },
  { what: 'Director of Technology', where: 'DubHacks' },
];

const socials = [
  { Icon: Mail, href: 'mailto:akshai.n.srinivasan@gmail.com', label: 'Email' },
  { Icon: Github, href: 'https://github.com/akshaisrin', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/akshaisrin', label: 'LinkedIn' },
  { Icon: FileText, href: RESUME_URL, label: 'Resume (PDF)' },
];

/* A faint section detail of the gripper flange: the drawing's own background layer. */
const FlangeDetail = () => (
  <svg
    viewBox="0 0 600 600"
    className="pointer-events-none absolute -right-16 top-8 hidden h-[min(78vh,620px)] w-auto opacity-[0.09] lg:block"
    aria-hidden
    fill="none"
    stroke="currentColor"
  >
    <circle cx="300" cy="300" r="270" strokeWidth="1" />
    <circle cx="300" cy="300" r="222" strokeWidth="1" />
    <circle cx="300" cy="300" r="150" strokeWidth="1" strokeDasharray="10 6" />
    <circle cx="300" cy="300" r="70" strokeWidth="1" />
    <circle cx="300" cy="300" r="22" strokeWidth="1" />
    <line x1="300" y1="0" x2="300" y2="600" strokeWidth="1" strokeDasharray="28 8 4 8" />
    <line x1="0" y1="300" x2="600" y2="300" strokeWidth="1" strokeDasharray="28 8 4 8" />
    {Array.from({ length: 8 }, (_, i) => {
      const a = (i * Math.PI) / 4;
      return <circle key={i} cx={300 + 150 * Math.cos(a)} cy={300 + 150 * Math.sin(a)} r="14" strokeWidth="1" />;
    })}
    <path d="M300 30 A270 270 0 0 1 570 300" strokeWidth="1" strokeDasharray="4 6" />
    <text x="318" y="52" fontFamily="osifont, monospace" fontSize="13" fill="currentColor" stroke="none">
      R270
    </text>
    <text x="318" y="164" fontFamily="osifont, monospace" fontSize="13" fill="currentColor" stroke="none">
      8× Ø14 EQ SP
    </text>
  </svg>
);

const Hero = () => (
  <section id="hero" className="relative flex flex-col justify-start overflow-hidden text-ink lg:min-h-[calc(100vh-3.5rem)]">
    <FlangeDetail />

    <div className="relative px-5 pb-10 pt-10 text-center sm:px-8 lg:pl-12 lg:pr-8 lg:pt-24 lg:text-left">
      {/* Name: heavy industrial display with a hollow accent shadow behind it. */}
      <h1 className="relative mx-auto w-fit font-display text-[min(5.2rem,21vw)] font-black uppercase leading-[0.86] tracking-tight sm:text-[clamp(3.4rem,10vw,8.75rem)] lg:mx-0">
        <span
          className="absolute left-[0.06em] top-[0.06em] select-none text-transparent"
          style={{ WebkitTextStroke: '1.5px var(--signal)', opacity: 0.55 }}
          aria-hidden
        >
          Akshai
          <br />
          Srinivasan
        </span>
        <span className="relative">
          Akshai
          <br />
          Srinivasan
        </span>
      </h1>

      {/* A short mint rule separates the name from the positions. */}
      <div className="mx-auto mt-8 h-0.5 w-[88%] bg-signal lg:mx-0" aria-hidden />

      {/* Current positions, as the original hero had them; separators travel with their role when the line wraps. */}
      <p className="mt-7 flex flex-wrap items-baseline justify-center gap-y-3 font-sans text-[1.1rem] font-medium leading-relaxed text-ink-2 sm:text-[1.22rem] lg:justify-start">
        {roles.map((r, i) => (
          <span key={r.what} className="whitespace-nowrap">
            {i > 0 && (
              <span className="mx-2 text-[1.35em] text-signal sm:mx-2.5" aria-hidden>
                {'⫽'}
              </span>
            )}
            {r.what} @ {r.where}
          </span>
        ))}
      </p>

      <nav className="mt-6 flex items-center justify-center gap-5 sm:gap-8 lg:justify-start" aria-label="Contact">
        {socials.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            aria-label={label}
            title={label}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-rule text-ink transition-colors hover:border-signal hover:text-signal-ink sm:h-14 sm:w-14"
          >
            <Icon className="h-[22px] w-[22px] sm:h-[26px] sm:w-[26px]" strokeWidth={1.5} aria-hidden />
          </a>
        ))}
      </nav>

      {/* Bobbing cue to the next section, as the original hero had. */}
      {/* Desktop: same width as the icon row (4 × 3.5rem + 3 × 2rem), so the arrow sits under the resume icon. */}
      <div className="mt-10 flex justify-center lg:mt-10 lg:w-[23rem] lg:justify-end">
        <a
          href="#about"
          aria-label="Scroll to About"
          className="flex h-14 w-14 items-center justify-center text-signal motion-safe:animate-bob hover:text-signal-ink"
        >
          <ChevronDown className="h-12 w-12" strokeWidth={2.25} aria-hidden />
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
