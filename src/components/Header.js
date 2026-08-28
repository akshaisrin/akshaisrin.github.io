import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { RESUME_URL, SECTIONS } from '../data/sections';

const Header = ({ active, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  const linkClass = (id) =>
    `font-cad uppercase tracking-wide no-underline hover:text-signal-ink ${
      active === id ? 'text-signal-ink underline decoration-1 underline-offset-[6px]' : 'text-ink'
    }`;

  const items = SECTIONS.map((s) =>
    s.href ? (
      <a
        key={s.id}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass(s.id)}
        onClick={() => setMenuOpen(false)}
      >
        {s.label}
      </a>
    ) : (
      <button
        key={s.id}
        type="button"
        onClick={() => go(s.id)}
        className={linkClass(s.id)}
        aria-current={active === s.id ? 'location' : undefined}
      >
        {s.label}
      </button>
    )
  );

  return (
    <header className="fixed left-0 top-0 z-40 w-full border-b border-white/[0.06] bg-[rgba(15,31,61,0.78)] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.55),inset_0_-1px_0_0_rgba(61,220,132,0.14)] backdrop-blur-xl supports-[backdrop-filter]:bg-[rgba(15,31,61,0.42)]">
      <div className="flex h-14 items-center justify-between px-5 lg:px-8">
        <button
          type="button"
          onClick={() => go('hero')}
          className="font-cad text-[1.05rem] uppercase tracking-wide text-ink hover:text-signal-ink"
          aria-label="Akshai Srinivasan, back to top"
        >
          Akshai Srinivasan
        </button>

        {/* From lg up the rail beside the arm is the nav; the header only carries links where the rail is absent. */}
        <nav className="hidden items-center gap-7 text-[0.95rem] md:flex lg:hidden" aria-label="Primary">
          {items}
        </nav>

        {/* Desktop: one action instead of a second menu. */}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-1.5 rounded-xl border border-signal px-4 py-2 font-cad text-[0.95rem] uppercase tracking-wide text-signal-ink no-underline transition-colors hover:bg-signal hover:text-on-signal lg:inline-flex"
        >
          Resume
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden />
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col items-start gap-4 border-t border-rule px-5 pb-5 pt-4 text-[1.05rem] md:hidden" aria-label="Primary">
          {items}
        </nav>
      )}
    </header>
  );
};

export default Header;
