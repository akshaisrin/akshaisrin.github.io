import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-slate-900 text-white px-10">
      <div className="w-full h-0.5 bg-[#00bfff] glow mb-8" />

      <div className="flex justify-between items-center ml-10 mr-10 mb-8">
        <div className="flex flex-col space-y-2">
          <p className="text-4xl font-bold">Contact Me</p>
          <p className="text-2xl">Feel free to reach out!</p>
        </div>

        <div className="flex flex-col items-start space-y-4 ml-auto">
          <a
            href="mailto:akshai.n.srinivasan@gmail.com"
            className="flex items-center text-slate-300 hover:text-white transition space-x-2 text-xl"
          >
            <FaEnvelope className="text-3xl" />
            <span>akshai.n.srinivasan@gmail.com</span>
          </a>

         <a
          href="https://github.com/akshaisrin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-slate-300 hover:text-white transition space-x-2 text-xl"
        >
          <FaGithub className="w-8 h-8" />
          <span>github.com/akshaisrin</span>
        </a>

          <a
            href="https://www.linkedin.com/in/akshaisrin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-300 hover:text-white transition space-x-2 text-xl"
          >
            <FaLinkedin className="text-3xl" />
            <span>linkedin.com/in/akshaisrin</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
