import React from 'react';

// Every section shares one width and rhythm.
export const sectionClass = 'mx-auto max-w-page border-t border-rule px-5 py-20 sm:px-8 lg:py-28';

const ACCENTS = { blue: 'bg-blue', coral: 'bg-coral', butter: 'bg-butter' };

const SectionHeading = ({ children, lede, accent = 'blue' }) => (
  <div className="mb-12">
    <h2 className="flex items-center gap-4 text-[2.2rem] font-extrabold leading-none tracking-[-0.025em] sm:text-[2.8rem]">
      {/* A single pixel from the hero grid, in the section's color. */}
      <span className={`h-3.5 w-3.5 shrink-0 rounded-full ${ACCENTS[accent]}`} aria-hidden />
      {children}
    </h2>
    {lede && <p className="mt-4 max-w-measure text-ink-2">{lede}</p>}
  </div>
);

export default SectionHeading;
