import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-slate-900 text-white px-6 md:px-10">
      <div className="w-full h-0.5 bg-[#00bfff] glow mb-8" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:ml-10 md:mr-10 mb-8">
        <div className="flex flex-col space-y-2">
          <p className="text-3xl md:text-4xl font-bold">Contact Me</p>
          <p className="text-xl md:text-2xl">Feel free to reach out!</p>
        </div>

        <div className="flex flex-col items-start space-y-4 md:ml-auto">
          <a
            href="mailto:akshai.n.srinivasan@gmail.com"
            className="flex items-center text-slate-300 hover:text-white transition space-x-2 text-lg md:text-xl"
          >
            <FaEnvelope className="text-2xl md:text-3xl" />
            <span>akshai.n.srinivasan@gmail.com</span>
          </a>

          <a
            href="https://github.com/akshaisrin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-300 hover:text-white transition space-x-2 text-lg md:text-xl"
          >
            <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
            <span>github.com/akshaisrin</span>
          </a>

          <a
            href="https://www.linkedin.com/in/akshaisrin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-300 hover:text-white transition space-x-2 text-lg md:text-xl"
          >
            <FaLinkedin className="text-2xl md:text-3xl" />
            <span>linkedin.com/in/akshaisrin</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
