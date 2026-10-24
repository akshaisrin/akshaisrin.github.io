import React from 'react';
import { SOCIALS } from '../data/socials';

// The row of square icon buttons used in the hero and the contact section.
const SocialLinks = ({ className = '' }) => (
  <nav className={`flex items-center gap-4 sm:gap-6 ${className}`} aria-label="Contact">
    {SOCIALS.map(({ Icon, href, label }) => {
      const external = !href.startsWith('mailto');
      return (
        <a
          key={label}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          aria-label={label}
          title={label}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-rule-2 text-ink transition-colors hover:border-coral hover:text-coral sm:h-14 sm:w-14"
        >
          <Icon className="h-[22px] w-[22px] sm:h-[26px] sm:w-[26px]" strokeWidth={1.5} aria-hidden />
        </a>
      );
    })}
  </nav>
);

export default SocialLinks;
