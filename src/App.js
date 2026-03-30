import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

const App = () => {
  const baseUrl = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
  const rawPathname = window.location.pathname || '/';
  const pathname = rawPathname.startsWith(baseUrl) ? rawPathname.slice(baseUrl.length) : rawPathname;
  const effectivePath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const hash = window.location.hash || '';

  const knownPaths = new Set(['/', '/projects', '/experience', '/skills']);
  const isHash404 = hash === '#/404' || hash.startsWith('#/404');
  const shouldShowNotFound = isHash404 || !knownPaths.has(effectivePath);

  if (shouldShowNotFound) return <NotFound />;

  return (
    <div className="relative min-h-screen bg-[#0c0d14]">
<div className="relative z-10">
        <Header />
        <div className="pt-20">
          <Home />
          <Experience />
          <Projects />
          <Skills />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
