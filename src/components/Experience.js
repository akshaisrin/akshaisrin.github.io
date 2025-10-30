import React, { useState } from 'react';
import { motion } from 'framer-motion';
import JaggernautImage from '../assets/images/jaggernaut.png';
import FIUImage from '../assets/images/FIU.jpg';
import goEzzImage from '../assets/images/goEzz.png';
import QuantelImage from '../assets/images/Quantel.jpeg';
import DubHacksImage from '../assets/images/DubHacks2.jpg';
import NeptuneImage from '../assets/images/Neptune.jpeg';
import TCALogo from '../assets/images/TCALogo.png';

const ExperienceCard = ({ experience, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <motion.div
        className={`w-full max-w-6xl mx-auto my-8 bg-gray-800 p-6 md:p-14 rounded-lg shadow-xl hover:scale-105 transition-all duration-300 min-h-[350px] cursor-pointer
            ${index % 2 === 0 ? 'md:ml-40' : 'md:-ml-40'}`}
        style={{
          border: '2.5px solid #00bfff',
          boxShadow: isHovered ? '0 0 20px 5px rgba(0, 191, 255, 0.6)' : '0 0 15px 3px rgba(0, 191, 255, 0.4)',
        }}
        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          <div className="w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0 md:mr-10 md:ml-5">
            <img
              src={experience.image}
              alt={experience.company}
              className="w-full max-w-xs md:max-w-md h-auto rounded-lg object-contain"
            />
          </div>
          <div className="text-left w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">{experience.company}</h2>
            <p className="mt-4 text-lg md:text-xl text-white">{experience.position}</p>
            <p className="mt-4 text-base md:text-m text-gray-400">
              {experience.year}, <span className="ml-2">{experience.location}</span>
            </p>
            <div className="mt-6 md:mt-8">
              <p className="text-xs md:text-sm text-gray-400 mb-3">Technologies/Skills:</p>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-6 text-xs text-gray-500 md:hidden">Tap for details →</p>
          </div>
        </div>
      </motion.div>

      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50 p-4 overflow-y-auto"
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900 p-6 sm:p-8 md:p-12 rounded-lg max-w-7xl w-full relative my-8"
            style={{
              border: '2.5px solid #00bfff',
              boxShadow: '0 0 20px 5px rgba(0, 191, 255, 0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white text-3xl hover:text-[#00bfff] transition-colors z-10"
            >
              &times;
            </button>

            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6 pr-10">{experience.company}</h2>
            <p className="mt-4 text-xl sm:text-2xl text-gray-400">{experience.position}</p>
            <p className="mt-4 text-lg sm:text-xl text-gray-400">
              {experience.year}, <span className="ml-2">{experience.location}</span>
            </p>
            <div className="flex flex-col lg:flex-row gap-6 mt-6">
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <img
                  src={experience.image}
                  alt={experience.company}
                  className="w-full max-w-md lg:max-w-lg h-auto rounded-lg object-contain"
                />
              </div>
              <div className="text-left w-full lg:w-1/2">
                <ul className="mt-4 mb-4 text-white space-y-2">
                  {experience.description.split('\n').map((line, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#00bfff] mr-2">•</span>
                      <span>{line.trim()}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <p className="text-sm text-gray-400 mb-3">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

const Experience = () => {
  const experience = [
    {
      company: 'DubHacks',
      position: 'Software Developer',
      year: 'Jan 2025 - Present',
      location: 'Seattle, WA',
      description: `Developing full-stack software for the largest collegiate hackathon in the Pacific Northwest (1200+ hackers/judges) using FastAPI, Next.js, TypeScript, and React
                     Built FastAPI judging platform with OAuth2 infrastructure, utilizing WebSockets and event-driven architecture to achieve <100 ms tracking for 150+ live sessions
                     Architected production MongoDB cluster handling 376K edge requests and 122K serverless function invocations for peak hackathon traffic with zero downtime
                     Designed sentiment analysis engine with proprietary ranking algorithm to evaluate 1,800+ applications,achieving 99% reduction in manual review time`,
      skills: ['FastAPI', 'WebSockets', 'MongoDB', 'Next.js', 'React.js', 'Typescript', 'Tailwind.css'],
      image: DubHacksImage,
    },
    {
      company: 'Technology Consulting Association at the UW',
      position: 'President and Co-Founder',
      year: 'Jan 2025 - Present',
      location: 'Seattle, WA',
      description: ` Founded and leading a 40+ member student organization to deliver AI-driven tech solutions for businesses
                     Built pipeline of 6 active client projects within 3 months, including computer vision analytics for regional bagel chain and cloud infrastructure migration for municipal fire department
                     Developed agentic AI outreach bot that utilizes the Anthropic/Claude API to discover and initiate first-level sales funnel contact with potential clients (2000+ leads)
                      Established strategic partnerships and client relations with Pinterest, SAP, Accenture, and the Seattle Mariners`,
      skills: ['Python', 'Claude API', 'Consulting', 'Client Relations', 'Leadership'],
      image: TCALogo,
    },

    {
      company: 'Neptune Medical',
      position: 'Software Engineering Intern',
      year: 'Jun 2025 - Sep 2025',
      location: 'Burlingame, CA',
      description: ` Implemented control systems software for robotic endoscope using ROS and Python, orchestrating communication between controllers, sensors, and actuators
                     Built C++ fault detection framework for haptic input device with automatic failsafe protocols, preventing unsafe robot operations during live procedures
                     Provided technical support in navigation control system labs, debugging real-time system issues and optimizing performance during physician testing
                     Collaborated across engineering teams using Agile/Scrum workflows, maintaining sprint documentation in JIRA and technical specs in Confluence`,
      skills: ['C++', 'Python', 'ROS2', 'Robotics', 'Agile Development'],
      image: NeptuneImage
    },
    {
      company: 'Jaggernaut Wealth Services LLC',
      position: 'Software Development Intern',
      year: 'Jun 2024 - Sep 2024',
      location: 'Seattle, WA',
      description: `Built Python-based automated futures trading system that calculates optimal buy/sell quantities based on daily closing prices and portfolio holdings, streamlining trading execution
                    Implemented a dynamic rolling algorithm for 40+ futures, calculating and optimizing roll dates to minimize volatility and ensure seamless contract transitions
                    Developed a custom back-adjusting and backtesting framework to generate continuous and discrete data files for each future based on rolling algorithm and evaluate/refine strategy performance`,
      skills: ['Python', 'Pandas', 'Interactive Brokers API', 'Algorithmic Trading', 'Futures Trading'],
      image: JaggernautImage,
    },
    {
      company: 'Florida International University',
      position: 'NLP Research Intern',
      year: 'Sep 2022 - Jun 2024',
      location: 'Miami, FL',
      description: `Conducted NLP research to create software that detects literary motifs (recurring symbolic elements) in folktales
                    Trained Bert-based sentence transformers to apply a semantic search on literary texts, enabling an accurate and efficient identification of thematic elements
                    Implemented pre-processing pipelines to handle diverse folktale formats and ensure data consistency for training and evaluation`,
      skills: ['Python', 'Sentence Transformers', 'SBERT', 'Hugging Face Models', 'Natural Language Processing', 'Git', 'Research'],
      image: FIUImage,
    },
    {
        company: 'goEasy Ride Services for Children',
        position: 'Full-Stack Intern',
        year: 'Jun 2022 - Sep 2024',
        location: 'Bellevue, WA',
        description: `Built and deployed full-stack architecture for mobile Android ridesharing application processing 28,000+ rides to date
                      Developed RESTful API endpoints in JavaScript for CRUD operations on driver/scheduling data from remote MySQL database
                      Designed responsive UI using Flutter and Dart, enabling real-time ride tracking and status synchronization
                      Integrated Twilio API for SMS-based multifactor authentication, enhancing security and identity verification`,
        skills: ['Flutter', 'Dart', 'Node.js', 'MySQL', 'Heroku', 'Postman', 'Android Studio', 'Full-Stack App Development', 'Git'],
        image: goEzzImage,
      },
      {
        company: 'Quantel AI Inc.',
        position: 'Software Engineering Intern',
        year: 'Jun 2021 - Sep 2021',
        location: 'New York, NY',
        description: `Developed Python software to analyze news feeds and explain price variability in S&P 500 stocks
                      Used Yahoo Finance API to retrieve price data and NewsAPI to fetch relevant news articles for each stock
                      Utilized the Stanford CoreNLP library to perform sentiment analysis on relevant articles from API and ascertained the reason for significant price changes past a given threshold
                      Designed a relational PostgreSQL database to store results of analysis`,
        skills: ['Python', 'NewsAPI', 'Yahoo Finance API', 'PostgreSQL', 'Stanford CoreNLP Library', 'Sentiment Analysis', 'Git'],
        image: QuantelImage,
      },
  ];

  return (
    <div className="text-white min-h-screen flex flex-col items-center py-10 md:py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-semibold mt-4 mb-6 md:mb-10 text-[#c665db]">Experience</h1>
      <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl text-center px-4">
        My internship/work experience and other notable opportunities I've participated in. Feel free to click on each card for a more detailed description
        of each experience.
      </p>
      <div className={`w-full max-w-4xl ${experience.some(experience => experience.isOpen) ? 'bg-opacity-30' : ''}`}>
        {experience.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
