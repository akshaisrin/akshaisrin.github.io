import React from 'react';

const Resume = () => {
  return (
    <div className="text-white min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">My Resume</h1>
        <p className="text-xl mb-4">Click below to download my resume:</p>
        
        <a
          href="/assets/files/AkshaiSrinivasan-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-[#9b59b6] hover:text-[#5f2eea] transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
