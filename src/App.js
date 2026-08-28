import React, { useCallback, useEffect } from 'react';
import Header from './components/Header';
import Arm from './components/Arm';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import useActiveSection from './hooks/useActiveSection';
import useMediaQuery from './hooks/useMediaQuery';
import { SCROLL_SECTION_IDS } from './data/sections';

const CONTRACT = `impeccable direction contract · seed 39531720
THESIS: One idea: a six-axis robot arm on a navy drawing sheet that articulates with real forward kinematics as the visitor scrolls and aims its gripper at the current section. Refuses the glowing-orb hero and the metaphor-in-every-section theme park.
OWN-WORLD: Navy sheet (plain gradient, no texture), pale ink, hairline rules, one mint signal for the current section and actions; two-tone arm (shaded steel links, dark housings, pale outlines); Big Shoulders Display for the name, CAD single-stroke lettering (osifont) for labels, Atkinson Hyperlegible for prose; xyz triads only at joints. (Re-grounded twice at the user's request after the finish review; light theme removed.)
STORY: A recruiter reads the name, three current roles, and resume/email within seconds, watches the arm point at each section, believes the evidence, reaches out.
FIRST VIEWPORT: Arm at poster scale in the left column with a station rail of six section labels; right column holds the name at ~9rem with a hollow accent shadow, one honest line, the three roles, and a full-width action row (RESUME.PDF / EMAIL in mint) at the bottom.
FORM: Kinematic Blueprint, candidate 1 of the grounded list (IMPECCABLE'S PICK), seed 39531720.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.`;

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
  const desktop = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    const node = document.createComment(CONTRACT);
    document.body.insertBefore(node, document.body.firstChild);
    return () => node.remove();
  }, []);

  useEffect(() => {
    const id = hash.startsWith('#') ? hash.slice(1) : hash;
    if (id && SCROLL_SECTION_IDS.includes(id)) {
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'auto' }), 0);
    }
  }, [hash]);

  const navigate = useCallback(
    (id) => {
      const target = document.getElementById(id === 'hero' ? 'hero' : id);
      if (id === 'hero') window.scrollTo({ top: 0, behavior: 'smooth' });
      else target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const nextPath = id === 'hero' ? baseUrl || '/' : `${baseUrl}/${id}`;
      window.history.pushState({}, '', nextPath);
    },
    [baseUrl]
  );

  if (notFound) return <NotFound />;

  return (
    <div className="min-h-screen text-ink">
      <Header active={active} onNavigate={navigate} />
      <main className="pt-14 lg:grid lg:grid-cols-[39%_61%]">
        {desktop && (
          <aside
            className="sticky top-14 flex h-[calc(100vh-3.5rem)] items-center justify-center overflow-hidden border-r border-rule px-1 pb-28 pt-6"
            aria-label="Robot arm drawing and section navigation"
          >
            <Arm active={active} compact={false} onNavigate={navigate} />
          </aside>
        )}
        <div className="min-w-0">
          <Hero />
          {/* Phones: the name comes first; the drawing sits between the hero and About. */}
          {!desktop && (
            <div className="overflow-hidden border-y border-rule px-3 py-4" aria-label="Robot arm drawing">
              <Arm active={active} compact onNavigate={navigate} />
            </div>
          )}
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
