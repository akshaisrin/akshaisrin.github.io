import React, { useState } from 'react';
import { motion } from 'framer-motion';
import IBImage from '../assets/images/interactive-brokers.png';
import FIUImage from '../assets/images/FIU.jpg';
import goEzzImage from '../assets/images/goEzz.png';
import QuantelImage from '../assets/images/Quantel.jpeg';

const ExperienceCard = ({ experience, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <motion.div
        className={`w-full max-w-6xl mx-auto my-8 bg-gray-800 p-14 rounded-lg shadow-xl hover:scale-105 transition-all duration-300 min-h-[350px]
            ${index % 2 === 0 ? 'ml-40' : '-ml-40'}`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        onClick={handleClick}
      >
        <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
          <img
            src={experience.image}
            alt={experience.company}
            className="w-1/2 h-auto rounded-lg mr-10 ml-5"
          />
          <div className="text-left w-1/2">
            <h2 className="text-3xl font-semibold text-white">{experience.company}</h2>
            <p className="mt-4 text-xl text-white">{experience.position}</p>
            <p className="mt-4 text-m text-gray-400">
              {experience.year}, <span className="ml-2">{experience.location}</span>
            </p>
            <p className="mt-8 text-sm text-gray-400">
              Technologies/Skills: {experience.skills.join(', ')}
            </p>
          </div>
        </div>
      </motion.div>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50"
          onClick={handleClose}
        >
          <div
            className="bg-gray-900 p-12 rounded-lg max-w-6xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              &times;
            </button>

            <h2 className="text-4xl font-semibold text-white">{experience.company}</h2>
            <p className="mt-4 text-2xl text-gray-300">{experience.position}</p>
            <p className="mt-4 text-xl text-gray-300">
              {experience.year}, <span className="ml-2">{experience.location}</span>
            </p>
            <div className="flex mt-6">
              <img
                src={experience.image}
                alt={experience.company}
                className="w-1/2 h-auto rounded-lg mr-8"
              />
              <div className="text-left w-1/2">
                <ul className="mt-4 mb-4 text-white">
                  {experience.description.split('\n').map((line, index) => (
                    <li key={index} className="mb-2">• {line}</li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-gray-500">
                  Technologies Used: {experience.skills.join(', ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Experience = () => {
  const experience = [
    {
      company: 'Jaggernaut Wealth Services LLC',
      position: 'Software Development Intern',
      year: 'Jun 2024 - Sep 2024',
      location: 'Seattle, WA',
      description: `Built Python-based automated futures trading system that calculates optimal buy/sell quantities based on daily closing prices and portfolio holdings, streamlining trading execution
                    Implemented a dynamic rolling algorithm for 40+ futures, calculating and optimizing roll dates to minimize volatility and ensure seamless contract transitions
                    Developed a custom back-adjusting and backtesting framework to generate continuous and discrete data files for each future based on rolling algorithm and evaluate/refine strategy performance`,
      skills: ['Python', 'Pandas', 'Interactive Brokers API', 'Algorithmic Trading', 'Futures Trading'],
      image: IBImage,
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
        company: 'goEzz Ride Services for Children',
        position: 'Full-Stack Intern',
        year: 'Jun 2022 - Sep 2024',
        location: 'Bellevue, WA',
        description: `Implemented full-stack architecture for mobile Android ridesharing app including client-side UI and server-side logic
                      Developed dynamic user interface using Flutter and Dart to enhance user experience and display real-time data
                      Architected backend system using RESTful APIs to insert and retrieve driver/schedule information from a remote MySQL database and display it on-screen
                      Hosted backend on remote Heroku serer and integrated app with the Twilio API to create a robust multifactor authentication system for enhanced security`,
        skills: ['Flutter', 'Dart', 'Node.js', 'MySQL', 'Heroku', 'Postman', 'Android Studio', 'Full-Stack Mobile App Development', 'Git'],
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
    <div className="text-white min-h-screen flex flex-col items-center py-10">
      <h1 className="text-5xl font-semibold mt-4 mb-10 text-[#c665db]">Experience</h1>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl text-center">
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
