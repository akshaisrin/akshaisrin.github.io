import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import CalcMaestroImage from '../assets/images/CalcMaestro.png';
import GameImage from '../assets/images/game.png';
import MathMaestroImage from '../assets/images/mathmaestro.png';
import MathMaestroImage2 from '../assets/images/mathmaestro2.png';
import ScoutingAppImage from '../assets/images/scouting_app.png';
import FitFinderImage from '../assets/images/FitFinder.png';
import DevPostImage from '../assets/images/DevPost.png';
import TerminalSuiteImage from '../assets/images/TerminalSuite.png';
import WebsiteImage from '../assets/images/website.jpg';

const ProjectCard = ({ project, index }) => {
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
            src={project.image}
            alt={project.title}
            className="w-1/2 h-auto rounded-lg mr-10 ml-5"
          />
          <div className="text-left w-1/2">
            <h2 className="text-4xl font-semibold text-white">{project.title}</h2>
            <p className="mt-6 text-gray-300">{project.shortDescription}</p>
            <p className="mt-8 text-sm text-gray-400">
              Technologies/Skills: {project.skills.join(', ')}
            </p>

            {project.githubLink && (
              <div className="flex items-center justify-start mt-6">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-gray-400"
                >
                  <FaGithub className="text-xl" />
                  <span className="ml-1 text-sm font-normal">Link to GitHub</span>
                </a>
              </div>
            )}

            {project.MathMaestroLink && (
              <div className="flex items-center justify-start mt-6">
                <a
                  href={project.MathMaestroLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-400"
                >
                  <img
                    src={MathMaestroImage2}
                    alt="MathMaestro Logo"
                    className="w-8 h-8 mr-3 inline-block"
                  />
                  <span className="text-sm font-normal">Link to Website</span>
                </a>
              </div>
            )}

            {project.DevPostLink && (
              <div className="flex items-center justify-start mt-6">
                <a
                  href={project.DevPostLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-400"
                >
                  <img
                    src={DevPostImage}
                    alt="DevPost Logo"
                    className="w-8 h-8 mr-3 inline-block"
                  />
                  <span className="text-sm font-normal">Link to DevPost</span>
                </a>
              </div>
            )}
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

            <h2 className="text-4xl font-semibold text-white">{project.title}</h2>
            <div className="flex mt-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-1/2 h-auto rounded-lg mr-8"
              />
              <div className="text-left w-1/2">
                <ul className="mt-4 mb-4 text-white">
                  {project.description.split('\n').map((line, index) => (
                    <li key={index} className="mb-2">• {line}</li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-gray-500">
                  Technologies Used: {project.skills.join(', ')}
                </p>

                {project.githubLink && (
                  <div className="mt-6">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-gray-400"
                    >
                      <FaGithub className="text-xl" />
                      <span className="ml-1 text-sm font-normal">Link to GitHub</span>
                    </a>
                  </div>
                )}

                {project.MathMaestroLink && (
                  <div className="flex items-center justify-start mt-6">
                    <a
                      href={project.MathMaestroLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-gray-400"
                    >
                      <img
                        src={MathMaestroImage2}
                        alt="MathMaestro Logo"
                        className="w-8 h-8 mr-3 inline-block"
                      />
                      <span className="text-sm font-normal">Link to Website</span>
                    </a>
                  </div>
                )}

                {project.DevPostLink && (
                  <div className="flex items-center justify-start mt-6">
                    <a
                      href={project.DevPostLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-gray-400"
                    >
                      <img
                        src={DevPostImage}
                        alt="DevPost Logo"
                        className="w-8 h-8 mr-3 inline-block"
                      />
                      <span className="text-sm font-normal">Link to DevPost</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'CalcMaestro.com',
      shortDescription: 'Website for my calculus test-prep company providing students with calculus practice worksheets via a subscription service.',
      description: `Created website for my calculus test-prep company providing students with subscription-based automatically generated calculus practice worksheets.
                    Designed and developed a calculus engine able to perform differentiation and integration symbolically, and generate, solve, and provide explanations for hundreds of thousands of calculus problems.
                    Implemented a cross-domain authentication system that leveraged web-based authentication tokens to grant secure access to problem set PDFs hosted on a remote third-party domain (AWS S3)
                    Developed serverless backend in AWS Lambda to process API requests from the frontend and utilized AWS DynamoDB for secure storage and management of authentication tokens`,
      skills: ['Python', 'AWS (Lambda, S3, DynamoDB)', 'LaTeX + PyLaTeX library', 'PostgreSQL', 'Cloud Architecture'],
      image: CalcMaestroImage,
    },
    {
      title: 'Gesture-Controlled Running Game',
      shortDescription: `My version of Google's "No-Internet Dino Game" with gesture-based controls instead of keyboard controls.`,
      description: `Created a gesture-controlled endless running game modeled after Google's "No Internet Dino Game"
                    In the game, the player uses hand gestures (either a thumbs up or thumbs down) to control the on-screen dino, making it jump or duck respectively
                    This is done by passing an OpenCV camera stream to the MediaPipe computer-vision model for gesture-classification
                    These classifications are then converted into movement for the dino
                    Also Integrated adaptive difficulty scaling based on obstacle frequency and player performance`,
      skills: ['Python', 'PyGame', 'MediaPipe Suite', 'OpenCV', 'Git', 'Computer Vision', 'Game Development'],
      image: GameImage,
      githubLink: 'https://github.com/akshaisrin/GestureControlledDinoGame',
    },
    {
      title: 'MathMaestro.org',
      shortDescription: `Website and math workbooks for the nonprofit I founded that provides K-7 students with free, unlimited math resources.`,
      description: `Developed website utilized by 1200+ students till date that generates unlimited number math worksheets (with solutions) for K-7 students
                    Students can access new worksheets by simply reloading the worksheet's page, instantly generating a new worksheet with new numbers and problems
                    Created backend using AWS Lambda and implemented automatic user-metrics system storing analytics in a remote AWS DynamoDB database
                    Also created Python software that automatically generated seven K-9 math workbook PDFs for students (formatted using LaTeX). Check them out on Amazon.com!`,
      skills: ['Python', 'AWS (Lambda, DynamoDB)', 'Cloud Architecture'],
      image: MathMaestroImage,
      MathMaestroLink: 'https://mathmaestro.org',
    },
    {
        title: 'FRC Scouting Desktop App',
        shortDescription: `Offline data-collection desktop app for high school robotics team competitions (FRC).`,
        description: `Created a competition data-collection (or scouting) app for my robotics team (FRC 1294) of 70+ students using the .Net Maui framework in C#
                      App pulled the list of teams competing at each competition from an API and allowed data-collectors (scouts) to record match-specific data for each of 6 robots per match
                      Match data was automatically exported to a QR Code, where it could be scanned by a host computer and easily aggregated to select teams for alliances and create match strategies
                      Digitized the scouting process for the first time in team's 20 year history, helping team to qualify for PNW District Championship competition`,
        skills: ['C# (.NET Maui Framework)', 'Tableau Desktop', 'FirstInspires API', 'Git', 'Full-Stack Desktop App Development'],
        image: ScoutingAppImage,
        githubLink: 'https://github.com/packofparts/Pack-of-Scouts',
      },
      {
        title: 'FitFinder',
        shortDescription: `Mobile social media app designed to make fashion more accessible and provide engaging fashion content.`,
        description: `Created mobile fashion social-media app for Android devices that classifies users' styles using a Tinder-like algorithm, connects people with similar fashion tastes, and provides engaging fashion content
                      Built UI with Flutter and Dart and designed PostgreSQL database + Python/Flask backend to pull and insert relevant information
                      Integrated app with AWS Bedrock to provide AI-generated style classifications based on user-preferences and AWS S3 to store dataset for style classification algorithm
                      Beta release coming to the Play Store soon!`,
        skills: ['Flutter', 'Dart', 'Python', 'Flask', 'PostgreSQL', 'AWS (S3, Bedrock)', 'Git', 'Mobile App Development'],
        image: FitFinderImage,
        DevPostLink: 'https://devpost.com/software/fitfinder-162dse',
      },
      {
        title: 'Terminal Suite',
        shortDescription: `A collection of popular apps recreated entirely from scratch in the terminal.`,
        description: `Recreated the popular apps, "Discord" and "Geometry Dash", entirely in the terminal
                      Discord (social-messaging app): designed PostgreSQL database and implemented Python/Flask backend to pull and insert relevant user information
                      Geometry Dash (side-scrolling platformer game): helped design graphics engine to render images/videos in the terminal and designed level editor where users could design and play-through their own levels, entirely in app
                      Also utilized graphics enginge to render a version of Bad Apple (in true CS Nerd fashion)`,
        skills: ['Python', 'Flask', 'Blessed Library', 'PostgreSQL', 'Git', 'Full Stack Software Development'],
        image: TerminalSuiteImage,
        githubLink: 'https://github.com/crystaltine/vis',
      },
      {
        title: 'Portfolio Website',
        shortDescription: `My personal portfolio website built entirely from scratch`,
        description: `Created this very portfolio website to showcase projects and experience
                      Utilized React.js, Tailwind.css, and Node.js to create a more appealing UI`,
        skills: ['React.js', 'Node.js', 'Tailwind.css', 'Git', 'Web Development'],
        image: WebsiteImage,
        githubLink: 'https://github.com/akshaisrin/Portfolio',
      },
  ];

  return (
    <div className="text-white min-h-screen flex flex-col items-center py-10">
      <h1 className="text-5xl font-semibold mt-4 mb-10 text-[#c665db]">Projects</h1>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl text-center">
        Some of the cool projects I've built over the past few years! Feel free to click on each card for a more detailed description
        of each project.
      </p>
      <div className={`w-full max-w-4xl ${projects.some(project => project.isOpen) ? 'bg-opacity-30' : ''}`}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
