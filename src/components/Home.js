import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImage from '../assets/images/profile_pic.jpg';
import profileImage2 from '../assets/images/ProfilePic3.jpg';
import python from '../assets/images/skills/python.png';
import reactLogo from '../assets/images/skills/react.png';
import typescript from '../assets/images/skills/typescript.png';
import aws from '../assets/images/skills/aws.png';
import java from '../assets/images/skills/java.png';
import postgres from '../assets/images/skills/postgres.png';

const phrases = [
  "Computer Engineering + Applied Math @ UW",
  "Incoming SWE Intern @ Neptune Medical",
  "Currently Building Aura",
  "Software Developer @ DubHacks",
  "Foodie Extraordinaire",
];

const Home = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white scroll-smooth min-h-screen w-full overflow-x-hidden" id="home" style={{ backgroundColor: 'inherit' }}>
      <div className="min-h-[80vh] flex flex-col">
        <div className="flex-1 flex">
          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:w-1/2 lg:flex-col lg:items-start lg:justify-start lg:text-left lg:px-14 lg:ml-20 lg:mt-[-100px]">
            <div className="h-52"></div>

            <motion.h1
              className="text-7xl font-bold leading-tight tracking-wide bg-gradient-to-r from-[#5f2eea] to-[#9b59b6] bg-clip-text text-transparent opacity-80"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              Hi! I'm Akshai!
            </motion.h1>

            <div className="h-6"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="mt-6"
            >
              <div
                className="w-[700px] h-[3px] rounded-full mb-4 glow"
                style={{
                  backgroundColor: '#00bfff',
                }}
              />

              <div className="relative z-10 text-3xl font-light italic text-slate-100 font-mono leading-tight mt-12">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={phraseIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {phrases[phraseIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              className="mt-14"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <div
                className="w-[700px] bg-gray-800 bg-opacity-70 rounded-2xl px-8 py-6 shadow-xl"
                style={{
                  border: '2px solid #00bfff',
                  boxShadow: '0 0 15px 3px rgba(0, 191, 255, 0.4)',
                }}
              >
                <div className="flex justify-between items-center">
                  {[
                    { icon: python, name: "Python" },
                    { icon: java, name: "Java" },
                    { icon: reactLogo, name: "React" },
                    { icon: typescript, name: "TypeScript" },
                    { icon: aws, name: "AWS" },
                    { icon: postgres, name: "Postgres" }
                   
                  ].map((skill, idx) => (
                    <motion.div
                      key={idx}
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: idx * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <div className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform">
                        <img
                          src={skill.icon}
                          alt={`${skill.name} icon`}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <span className="text-xs text-slate-300 mt-2 font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:flex lg:w-1/2 lg:max-w-[400px] lg:justify-center lg:items-start lg:mt-32 lg:ml-40"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div
              className="relative p-6 rounded-[2rem]"
              style={{
                border: '2.5px solid #00bfff',
                boxShadow: '0 0 15px 3px rgba(0, 191, 255, 0.7)',
              }}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-65 h-65 object-cover rounded-[1.5rem]"
              />
            </div>
          </motion.div>

          {/* Mobile Layout */}
          <div className="flex flex-col items-center w-full px-6 mt-8 lg:hidden">
            <div className="h-16"></div>

            {/* Title and blue line */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold leading-tight tracking-wide bg-gradient-to-r from-[#5f2eea] to-[#9b59b6] bg-clip-text text-transparent opacity-80 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              Hi! I'm Akshai!
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="mt-6"
            >
              <div
                className="w-[300px] md:w-[400px] h-[3px] rounded-full mb-8 glow"
                style={{
                  backgroundColor: '#00bfff',
                }}
              />
            </motion.div>

            {/* Profile Picture */}
            <motion.div
              className="flex justify-center items-center mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <div
                className="relative p-4 rounded-[2rem]"
                style={{
                  border: '2.5px solid #00bfff',
                  boxShadow: '0 0 15px 3px rgba(0, 191, 255, 0.7)',
                }}
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-[1.5rem]"
                />
              </div>
            </motion.div>

            {/* Changing phrases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="mb-8"
            >
              <div className="relative z-10 text-lg md:text-xl font-light italic text-slate-100 font-mono leading-tight text-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={phraseIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="px-4"
                  >
                    {phrases[phraseIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Skills (fit as many as possible in one row) */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <div
                className="w-full max-w-[350px] bg-gray-800 bg-opacity-70 rounded-2xl px-6 py-4 shadow-xl"
                style={{
                  border: '2px solid #00bfff',
                  boxShadow: '0 0 15px 3px rgba(0, 191, 255, 0.4)',
                }}
              >
                <div className="flex justify-between items-center gap-3">
                  {[
                    { icon: python, name: "Python" },
                    { icon: java, name: "Java" },
                    { icon: reactLogo, name: "React" },
                    { icon: typescript, name: "TypeScript" },
                    { icon: aws, name: "AWS" }
                  ].map((skill, idx) => (
                    <motion.div
                      key={idx}
                      className="flex flex-col items-center flex-1"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: idx * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <div className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform">
                        <img
                          src={skill.icon}
                          alt={`${skill.name} icon`}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className="text-[10px] text-slate-300 mt-1 font-medium text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="flex flex-col items-center mt-8 lg:-mt-32 py-12 cursor-pointer"
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <p className="text-slate-300 text-xl md:text-2xl lg:text-3xl font-semibold mb-4 tracking-wider text-center px-4">
          SCROLL TO LEARN MORE
        </p>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-slate-300 lg:w-10 lg:h-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <polyline points="6,9 12,15 18,9" />
        </motion.svg>
      </motion.div>

      {/* About section */}
      <div id="about" className="mt-24 mb-20 px-6 lg:px-20">
        {/* Desktop About Layout */}
        <div className="hidden lg:flex lg:items-start lg:space-x-16">
          <div className="w-1/2 flex justify-start ml-20">
            <div
              className="relative p-3 rounded-3xl"
              style={{
                border: '2.5px solid #00bfff',
                boxShadow: '0 0 15px 3px rgba(0, 191, 255, 0.7)',
              }}
            >
              <img
                src={profileImage2}
                alt="About"
                className="w-[450px] h-[450px] object-cover rounded-2xl"
              />
            </div>
          </div>
          
          <div className="w-1/2 flex flex-col justify-start">
            <h2 className="text-6xl font-bold bg-gradient-to-r from-[#5f2eea] to-[#9b59b6] bg-clip-text text-transparent -mt-5 mb-8">
              About Me
            </h2>
            <p className="text-[1.15rem] leading-relaxed text-slate-200 max-w-2xl">
              Hey! I'm Akshai Srinivasan. I'm an undergrad at the University of Washington double majoring in computer engineering
              and applied math! I'm passionate about mathematics, full-stack app development, AWS Cloud Computing, and NLP, and I'm currently
              exploring machine learning and some basic electrical engineering. <br /><br />

              At the UW, I'm a developer for DubHacks, the largest collegiate hackathon in the PNW. I also serve as the
              President of the Technology Consulting Association, the UW's premier technology consultancy. In my free time,
              I enjoy working out, binging sitcoms and sci-fi movies, and exploring the numerous restaurants, cafes and boba shops
              we have here in Seattle! <br /> <br />

              Feel free to explore my experiences and projects using
              the tabs above. Please don't hesitate to contact me with any questions!
            </p>
          </div>
        </div>

        {/* Mobile About Layout */}
        <div className="flex flex-col items-center lg:hidden">
          {/* About Me Title */}
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#5f2eea] to-[#9b59b6] bg-clip-text text-transparent mb-8 text-center">
            About Me
          </h2>

          {/* About Picture */}
          <div className="flex justify-center mb-8">
            <div
              className="relative p-3 rounded-3xl"
              style={{
                border: '2.5px solid #00bfff',
                boxShadow: '0 0 15px 3px rgba(0, 191, 255, 0.7)',
              }}
            >
              <img
                src={profileImage2}
                alt="About"
                className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* About Paragraph */}
          <p className="text-base md:text-lg leading-relaxed text-slate-200 text-center max-w-2xl">
            Hey! I'm Akshai Srinivasan. I'm an undergrad at the University of Washington double majoring in computer engineering
            and applied math! I'm passionate about mathematics, full-stack app development, AWS Cloud Computing, and NLP, and I'm currently
            exploring machine learning and some basic electrical engineering. <br /><br />

            At the UW, I'm a developer for DubHacks, the largest collegiate hackathon in the PNW. I also serve as the
            President of the Technology Consulting Association, the UW's premier technology consultancy. In my free time,
            I enjoy working out, binging sitcoms and sci-fi movies, and exploring the numerous restaurants, cafes and boba shops
            we have here in Seattle! <br /> <br />

            Feel free to explore my experiences and projects using
            the tabs above. Please don't hesitate to contact me with any questions!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;