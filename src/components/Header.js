import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const getNavLinkClass = (path) =>
    location.pathname === path
      ? "hover-glow text-[#c665db] font-semibold transition text"
      : "hover-glow transition"

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-gray-950 bg-opacity-80 text-white flex justify-between items-center py-8 px-14"> 
        <Link
          to="/home"
          className="text-xl font-bold hover-glow transition"
        >
          Akshai Srinivasan
        </Link>

        <nav className="flex space-x-8">
          <Link to="/" className={getNavLinkClass("/")}>
            Home
          </Link>
          <Link to="/projects" className={getNavLinkClass("/projects")}>
            Projects
          </Link>
          <Link to="/experience" className={getNavLinkClass("/experience")}>
            Experience
          </Link>

          <Link to="/skills" className={getNavLinkClass("/skills")}>
            Skills
          </Link>
          
          <a
            href={require('../assets/files/Akshai Srinivasan- Resume.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            className={getNavLinkClass("/resume")}
          >
            Resume
          </a>
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00bfff] animate-glow" />
    </header>
  );
};

export default Header;
