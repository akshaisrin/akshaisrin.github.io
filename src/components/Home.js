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
    <div className="text-white scroll-smooth" id="home">
      <div className="min-h-[80vh] flex flex-col">
        <div className="flex-1 flex">
          <div className="w-1/2 flex flex-col items-start justify-start text-left px-14 ml-20 mt-[-100px]">
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
                    { icon: reactLogo, name: "React" },
                    { icon: typescript, name: "TypeScript" },
                    { icon: aws, name: "AWS" },
                    { icon: postgres, name: "Postgres" },
                    { icon: java, name: "Java" }
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
            className="w-1/2 max-w-[400px] flex justify-center items-start mt-32 ml-40"
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
        </div>
      </div>

      <div className="w-full flex justify-center mt-4 mb-20">
        <div
          className="w-[80%] h-[3px] rounded-full"
          style={{ backgroundColor: '#00bfff', boxShadow: '0 0 10px #00bfff' }}
        ></div>
      </div>

      <div id="about" className="mt-24 mb-20 px-20">
        <div className="flex items-start space-x-16">
        
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
            <h2 className="text-6xl font-bold bg-gradient-to-r from-[#5f2eea] to-[#9b59b6] bg-clip-text text-transparent mb-8">
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
      </div>
    </div>
  );
};

export default Home;