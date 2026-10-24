import React from 'react';
import { ChevronDown } from 'lucide-react';
import PixelGrid from './PixelGrid';
import SocialLinks from './SocialLinks';

// `where` is optional; roles without one render on their own. `accent` colors that role coral.
const roles = [
  { what: 'CE + AMATH', where: 'UW' },
  { what: 'Prev', where: 'GM Cruise', accent: true },
  { what: 'Robotics + ML' },
];

const Hero = ({ preview }) => (
  <section
    id="hero"
    className="relative mx-auto grid max-w-page items-center gap-10 px-5 pb-14 pt-24 sm:px-8 sm:pt-28 xl:min-h-[min(100vh,60rem)] xl:pb-[8.5rem] xl:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] xl:gap-14 xl:pt-24"
  >
    {/* Centered stack on phones and tablets; left-aligned beside the grid from xl. */}
    <div className="min-w-0 text-center xl:text-left">
      <p className="text-[clamp(1.45rem,2.6vw,1.9rem)] font-semibold text-coral">Hey! I'm</p>
      <h1 className="mt-4 text-[clamp(3.6rem,16vw,7.5rem)] sm:mt-8 font-extrabold leading-[0.9] tracking-[-0.035em]">
        Akshai
        <br />
        <span className="text-blue">Srinivasan</span>
      </h1>

      {/* Phones: one role per line. sm–xl: roles wrap with their separators. xl: one line. */}
      <p className="mt-6 flex flex-col items-center gap-y-1 text-[1.08rem] sm:mt-7 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-y-2 xl:justify-start font-medium text-ink-2 sm:text-[1.15rem] xl:flex-nowrap">
        {roles.map((r, i) => (
          <span key={r.what} className="whitespace-nowrap">
            {i > 0 && (
              <span className="mx-2.5 hidden text-[1.3em] leading-none sm:inline xl:mx-2" aria-hidden>
                {'⫽'}
              </span>
            )}
            <span className={r.accent ? 'text-coral' : undefined}>
              <span className="font-semibold">{r.what}</span>
              {r.where && ` @ ${r.where}`}
            </span>
            {/* Phones stack one role per line, so the separator trails each role instead. */}
            {i < roles.length - 1 && (
              <span className="ml-2 text-[1.3em] leading-none sm:hidden" aria-hidden>
                {'⫽'}
              </span>
            )}
          </span>
        ))}
      </p>

      <SocialLinks className="mt-8 justify-center sm:mt-9 xl:justify-start" />
    </div>

    <PixelGrid hold={preview} />

    {/* Bobbing scroll cue (desktop), pinned to the bottom center so it doesn't shift the hero's layout. */}
    <div className="absolute inset-x-0 hidden justify-center xl:bottom-[3.75rem] xl:flex">
      <a
        href="#about"
        aria-label="Scroll to About"
        className="flex h-16 w-16 items-center justify-center text-coral transition-colors hover:text-ink motion-safe:animate-bob"
      >
        <ChevronDown className="h-16 w-16" strokeWidth={2.25} aria-hidden />
      </a>
    </div>
  </section>
);

export default Hero;
