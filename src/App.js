import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import useActiveSection from './hooks/useActiveSection';
import { SCROLL_SECTION_IDS } from './data/sections';

const KNOWN_PATHS = new Set(['/', '/about', '/projects', '/experience', '/skills', '/contact']);

const App = () => {
  const baseUrl = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
  const rawPathname = window.location.pathname || '/';
  const pathname = rawPathname.startsWith(baseUrl) ? rawPathname.slice(baseUrl.length) : rawPathname;
  const effectivePath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const hash = window.location.hash || '';
  const isHash404 = hash === '#/404' || hash.startsWith('#/404');
  const notFound = isHash404 || !KNOWN_PATHS.has(effectivePath);

  const active = useActiveSection(SCROLL_SECTION_IDS);
  // Icon the hero grid shows while a nav link is hovered or focused.
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const id = hash.startsWith('#') ? hash.slice(1) : hash;
    if (id && SCROLL_SECTION_IDS.includes(id)) {
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'auto' }), 0);
    }
  }, [hash]);

  const navigate = useCallback(
    (id) => {
      if (id === 'hero') window.scrollTo({ top: 0, behavior: 'smooth' });
      else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const nextPath = id === 'hero' ? baseUrl || '/' : `${baseUrl}/${id}`;
      window.history.pushState({}, '', nextPath);
    },
    [baseUrl]
  );

  if (notFound) return <NotFound />;

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header active={active} onNavigate={navigate} onPreview={setPreview} />
      <main>
        <Hero preview={preview} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </div>
  );
};

export default App;
