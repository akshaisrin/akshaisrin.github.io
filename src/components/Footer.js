import React from 'react';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import { RESUME_URL } from '../data/sections';
import SectionHeading from './SectionHeading';

const links = [
  { Icon: Mail, href: 'mailto:akshai.n.srinivasan@gmail.com', label: 'akshai.n.srinivasan@gmail.com', external: false },
  { Icon: Github, href: 'https://github.com/akshaisrin', label: 'github.com/akshaisrin', external: true },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/akshaisrin', label: 'linkedin.com/in/akshaisrin', external: true },
  { Icon: FileText, href: RESUME_URL, label: 'Resume (PDF)', external: true },
];

const Footer = () => (
  <footer id="contact" className="px-5 pb-10 pt-20 sm:px-8 lg:px-12 lg:pt-24">
    <SectionHeading lede="I'm always open to new opportunities and collaborations! Feel free to reach out anytime!">
      Contact
    </SectionHeading>

    <ul className="m-0 list-none space-y-4 p-0">
      {links.map(({ Icon, href, label, external }) => (
        <li key={label}>
          <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-3 text-ink hover:text-signal-ink"
          >
            <Icon className="h-5 w-5 shrink-0" strokeWidth={1.5} aria-hidden />
            <span>{label}</span>
          </a>
        </li>
      ))}
    </ul>

    <p className="tnum mt-16 border-t border-rule pt-5 font-mono text-[0.8rem] text-ink-3">
      Akshai Srinivasan · Seattle, WA · 2026
    </p>
  </footer>
);

export default Footer;
