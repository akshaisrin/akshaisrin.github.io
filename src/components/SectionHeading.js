import React from 'react';

const SectionHeading = ({ children, lede }) => (
  <div className="mb-10 border-b border-ink pb-4">
    <h2 className="font-cad text-[2rem] uppercase leading-none tracking-wide sm:text-[2.4rem]">{children}</h2>
    {lede && <p className="mt-4 max-w-measure text-ink-2">{lede}</p>}
  </div>
);

export default SectionHeading;
