import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const getNavLinkClass = (path) =>
    location.pathname === path
      ? "hover-glow text-[#c665db] font-semibold transition text"
      : "hover-glow transition";

  return (
    <header className="fixed top-0 left-0 w-full z-50 overflow-x-visible">

      <div className="bg-gray-950 bg-opacity-80 text-white flex justify-between items-center py-8 px-6 md:px-14">
        <Link
          to="/home"
          className="text-xl font-bold hover-glow transition"
        >
          Akshai Srinivasan
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link to="/" className={getNavLinkClass("/")}>Home</Link>
          <Link to="/projects" className={getNavLinkClass("/projects")}>Projects</Link>
          <Link to="/experience" className={getNavLinkClass("/experience")}>Experience</Link>
          <Link to="/skills" className={getNavLinkClass("/skills")}>Skills</Link>
          <a
            href={require('../assets/files/Akshai Srinivasan- Resume.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            className={getNavLinkClass("/resume")}
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

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="bg-gray-950 text-white flex flex-col items-start px-6 pb-4 md:hidden space-y-4">
          <Link to="/" className={getNavLinkClass("/")} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/projects" className={getNavLinkClass("/projects")} onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/experience" className={getNavLinkClass("/experience")} onClick={() => setMenuOpen(false)}>Experience</Link>
          <Link to="/skills" className={getNavLinkClass("/skills")} onClick={() => setMenuOpen(false)}>Skills</Link>
          <a
            href={require('../assets/files/Akshai Srinivasan- Resume.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            className={getNavLinkClass("/resume")}
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00bfff] glow" />
    </header>
  );
};

export default Header;
