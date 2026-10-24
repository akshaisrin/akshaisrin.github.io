import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { RESUME_URL, SECTIONS } from '../data/sections';

const Header = ({ active, onNavigate, onPreview }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  // Hovering or focusing a link previews that section's icon on the hero grid.
  const previewProps = (icon) => ({
    onPointerEnter: () => onPreview(icon),
    onPointerLeave: () => onPreview(null),
    onFocus: () => onPreview(icon),
    onBlur: () => onPreview(null),
  });

  const items = SECTIONS.map((s) => (
    <button
      key={s.id}
      type="button"
      onClick={() => go(s.id)}
      {...previewProps(s.icon)}
      className={`relative font-semibold transition-colors hover:text-ink ${
        active === s.id ? 'text-ink' : 'text-ink-3'
      }`}
      aria-current={active === s.id ? 'location' : undefined}
    >
      {s.label}
      {active === s.id && <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-blue" aria-hidden />}
    </button>
  ));

  return (
    <header className="fixed left-0 top-0 z-40 w-full border-b border-rule bg-[rgba(10,14,26,0.88)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8">
        <button
          type="button"
          onClick={() => go('hero')}
          className="text-[1.2rem] font-extrabold tracking-tight text-ink"
          aria-label="Akshai Srinivasan, back to top"
        >
          akshai<span className="text-coral">.</span>
        </button>

        <nav className="hidden items-center gap-8 text-[0.98rem] md:flex" aria-label="Primary">
          {items}
        </nav>

        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-1.5 rounded-xl bg-coral px-4 py-2 text-[0.95rem] font-semibold text-on-accent no-underline transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Resume
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} aria-hidden />
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
        <nav className="flex flex-col items-start gap-4 border-t border-rule px-5 pb-6 pt-4 text-[1.05rem] md:hidden" aria-label="Primary">
          {items}
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-coral no-underline">
            Resume ↗
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
