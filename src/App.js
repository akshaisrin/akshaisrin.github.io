import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-slate-800">
      <Router>
        <Header />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
