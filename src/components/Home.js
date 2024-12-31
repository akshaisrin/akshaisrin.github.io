import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/profile_pic.jpg';

const Home = () => {
  return (
    <div className="text-white min-h-screen flex">
      <div className="w-1/2 flex flex-col items-start justify-start text-left px-14 ml-20 mt-[-40px]">
        <div className="h-52"></div>

        <motion.h1
          className="text-7xl font-bold leading-tight tracking-wide bg-gradient-to-r from-[#5f2eea] to-[#9b59b6] bg-clip-text text-transparent opacity-80 font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Hi! I'm Akshai!
        </motion.h1>

        <div className="h-10"></div>

        <motion.div
          className="flex flex-col mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <p className="text-2xl font-medium opacity-80 text-justify text-slate-300 font-arial">
            I'm a computer engineering student at the University of Washington passionate about software
            engineering and the application of computing and mathematics to solve complex problems. I
            have experience with AWS cloud computing, full-stack app/web development, NLP,
            and database management. Welcome to my portfolio! <br /> <br />
            I'm currently building "FitFinder", my social media app designed to make fashion more accessible.
            Check it out on my projects page!
          </p>
        </motion.div>

        
      </div>

      <motion.div
        className="w-1/2 max-w-[400px] flex justify-center items-start mt-44 ml-40"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="relative p-8 border-3.5 border-[#00bfff] shadow-[0_0_10px_#00bfff,0_0_20px_#00bfff]">
          <img
            src={profileImage}
            alt="Profile"
            className="w-65 h-65 object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
