import React from 'react';
import SectionHeading, { sectionClass } from './SectionHeading';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer id="contact" className={`${sectionClass} pb-10 lg:pb-12`}>
      <SectionHeading
        accent="coral"
        lede="I'm always open to new opportunities and collaborations! Feel free to reach out anytime!"
      >
        Contact
      </SectionHeading>

      <SocialLinks />

      <p className="tnum mt-24 flex flex-wrap justify-between gap-2 border-t border-rule pt-6 font-mono text-[0.8rem] text-ink-3">
        <span>Akshai Srinivasan · Seattle, WA</span>
        <span>© 2026</span>
      </p>
    </footer>
  );
};

export default Footer;
