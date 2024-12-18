import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-slate-900 text-white px-6">
      {/* Horizontal line */}
      <div className="w-full h-0.5 bg-[#00bfff] animate-glow mb-4" />

      {/* Footer text */}
      <div className="flex justify-between items-center ml-10 mr-10 mb-5">
        <p>&#169; 2024 Akshai Srinivasan</p>
        <p>Contact me at akshai [dot] n [dot] srinivasan@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
