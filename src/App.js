import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App = () => {
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
