import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // If someone lands on a deep-link (e.g. `/#projects`), ensure we scroll to the
  // matching section once the initial render completes.
  useEffect(() => {
    const rawHash = window.location.hash || '';
    const id = rawHash.startsWith('#') ? rawHash.slice(1) : rawHash;
    const valid = new Set(['home', 'projects', 'experience', 'skills']);
    if (!id || !valid.has(id)) return;

    setActiveSection(id);
    // Wait a tick so the section elements exist in the DOM.
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'auto' }), 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience', 'skills'];
      const scrollPos = window.scrollY + window.innerHeight * 0.3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    // Keep the URL in sync so `/projects` etc work like deep-links.
    // Note: on full page reload GitHub Pages will still serve `404.html`,
    // which redirects to `/#projects` (so the path may not persist).
    const baseUrl = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
    const nextPath = id === 'home' ? (baseUrl || '/') : `${baseUrl}/${id}`;
    window.history.pushState({}, '', nextPath);
    setMenuOpen(false);
  };

  const navLinkClass = (id) =>
    activeSection === id
      ? 'hover-glow font-semibold text-violet-400 transition cursor-pointer'
      : 'hover-glow transition cursor-pointer';

  const glassBar =
    'border-b border-white/[0.06] bg-[#050308]/92 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.55),inset_0_-1px_0_0_rgba(167,139,250,0.14)] supports-[backdrop-filter]:bg-[#050308]/82';

  return (
    <header className="fixed top-0 left-0 w-full z-50 overflow-x-visible">
      <div className={`${glassBar} text-white flex justify-between items-center py-6 px-6 md:px-14`}>
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="font-display flex items-center gap-0 text-2xl font-bold tracking-tight text-white transition hover:opacity-85"
          aria-label="Akshai Srinivasan — home"
        >
          <span>A</span>
          <span
            className="mx-2 inline-block h-2 w-2 shrink-0 rotate-45 bg-gradient-to-br from-violet-300 to-indigo-400 shadow-[0_0_16px_rgba(167,139,250,0.55)]"
            aria-hidden
          />
          <span>S</span>
        </button>

        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollTo('home')} className={navLinkClass('home')}>Home</button>
          <button onClick={() => scrollTo('projects')} className={navLinkClass('projects')}>Projects</button>
          <button onClick={() => scrollTo('experience')} className={navLinkClass('experience')}>Experience</button>
          <button onClick={() => scrollTo('skills')} className={navLinkClass('skills')}>Skills</button>
          <a
            href={require('../assets/files/Akshai Srinivasan- Resume.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-glow transition"
          >
            Resume
          </a>
        </nav>

        <button
          className="md:hidden text-white ml-auto pr-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className={`${glassBar} text-white flex flex-col items-start px-6 pb-5 pt-1 md:hidden space-y-4 border-t border-white/[0.05]`}
        >
          <button onClick={() => scrollTo('home')} className={navLinkClass('home')}>Home</button>
          <button onClick={() => scrollTo('projects')} className={navLinkClass('projects')}>Projects</button>
          <button onClick={() => scrollTo('experience')} className={navLinkClass('experience')}>Experience</button>
          <button onClick={() => scrollTo('skills')} className={navLinkClass('skills')}>Skills</button>
          <a
            href={require('../assets/files/Akshai Srinivasan- Resume.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-glow transition"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      )}

    </header>
  );
};

export default Header;
