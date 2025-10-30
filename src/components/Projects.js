import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import CalcMaestroImage from '../assets/images/CalcMaestro.png';
import GameImage from '../assets/images/game.png';
import MathMaestroImage from '../assets/images/mathmaestro.png';
import MathMaestroImage2 from '../assets/images/mathmaestro2.png';
import ScoutingAppImage from '../assets/images/scouting_app.png';
import DevPostImage from '../assets/images/DevPost.png';
import TerminalSuiteImage from '../assets/images/TerminalSuite.png';
import WebsiteImage from '../assets/images/website.jpg';
import ConsultingImage from '../assets/images/consulting.jpg';
import FitFinderImage from '../assets/images/FitFinder.png';
import BrownZeldaImage from '../assets/images/BrownZelda.png';
import TCALogo from '../assets/images/TCALogo.png';

const ProjectCard = ({ project, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleSkillsCount, setVisibleSkillsCount] = useState(4);
  const skillsContainerRef = useRef(null);
  const measurementContainerRef = useRef(null);

  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const calculateVisibleSkills = () => {
      if (!skillsContainerRef.current || !measurementContainerRef.current) return;

      const container = skillsContainerRef.current;
      const containerWidth = container.offsetWidth;
      const measurementContainer = measurementContainerRef.current;
      const gap = 6; // gap-1.5 = 0.375rem = 6px
      
      let totalWidth = 0;
      let count = 0;
      const maxSkills = Math.min(4, project.skills.length);
      const skillElements = measurementContainer.children;

      if (skillElements.length < maxSkills) {
        setTimeout(calculateVisibleSkills, 50);
        return;
      }

      for (let i = 0; i < maxSkills; i++) {
        const skillElement = skillElements[i];
        if (skillElement) {
          const skillWidth = skillElement.offsetWidth;
          const widthWithGap = totalWidth + skillWidth + (count > 0 ? gap : 0);
          
          if (widthWithGap <= containerWidth) {
            totalWidth = widthWithGap;
            count++;
          } else {
            break;
          }
        }
      }

      setVisibleSkillsCount(count);
    };

    // Calculate after a short delay to ensure DOM is rendered
    const timeoutId = setTimeout(calculateVisibleSkills, 100);
    window.addEventListener('resize', calculateVisibleSkills);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', calculateVisibleSkills);
    };
  }, [project.skills]);

  return (
    <>
      <motion.div
        className="bg-gray-800 rounded-lg shadow-xl overflow-hidden cursor-pointer h-full flex flex-col"
        style={{
          border: '2.5px solid #00bfff',
          boxShadow: isHovered ? '0 0 20px 5px rgba(0, 191, 255, 0.6)' : '0 0 15px 3px rgba(0, 191, 255, 0.4)',
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.03 }}
      >
        <div className="relative w-full h-48 overflow-hidden bg-gray-700">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-300"
            style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h2 className="text-xl font-semibold text-white mb-3">{project.title}</h2>
          <p className="text-gray-300 text-sm mb-4 flex-grow line-clamp-2 leading-relaxed">{project.shortDescription}</p>
          
          <div className="relative">
            {/* Invisible measurement container */}
            <div 
              ref={measurementContainerRef}
              className="absolute invisible flex gap-1.5"
              style={{ whiteSpace: 'nowrap' }}
            >
              {project.skills.slice(0, 4).map((skill, idx) => (
                <span
                  key={`measure-${idx}`}
                  className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {/* Visible skills container */}
            <div ref={skillsContainerRef} className="flex gap-1.5 mb-4">
              {project.skills.slice(0, visibleSkillsCount).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded whitespace-nowrap flex-shrink-0"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-700">
            {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center text-gray-300 hover:text-[#00bfff] transition-colors"
                >
                <FaGithub className="text-sm mr-1.5" />
                <span className="text-xs">GitHub</span>
                </a>
            )}
            {project.MathMaestroLink && (
                <a
                  href={project.MathMaestroLink}
                  target="_blank"
                  rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center text-gray-300 hover:text-[#00bfff] transition-colors"
              >
                <FaExternalLinkAlt className="text-xs mr-1.5" />
                <span className="text-xs">Website</span>
              </a>
            )}
            {project.ConsultingLink && (
                <a
                  href={project.ConsultingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center text-gray-300 hover:text-[#00bfff] transition-colors"
              >
                <FaExternalLinkAlt className="text-xs mr-1.5" />
                <span className="text-xs">Website</span>
              </a>
            )}
            {project.DevPostLink && (
                <a
                  href={project.DevPostLink}
                  target="_blank"
                  rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center text-gray-300 hover:text-[#00bfff] transition-colors"
              >
                <FaExternalLinkAlt className="text-xs mr-1.5" />
                <span className="text-xs">DevPost</span>
              </a>
            )}
            <span className="text-xs text-gray-500 ml-auto">Details →</span>
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

            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6 pr-10">{project.title}</h2>
            <div className="flex flex-col lg:flex-row gap-6 mt-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full lg:w-1/2 h-auto rounded-lg object-cover"
              />
              <div className="text-left w-full lg:w-1/2">
                <ul className="mt-4 mb-4 text-white space-y-2">
                  {project.description.split('\n').map((line, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#00bfff] mr-2">•</span>
                      <span>{line.trim()}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <p className="text-sm text-gray-400 mb-3">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-gray-700">
                {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-[#00bfff] transition-colors"
                    >
                      <FaGithub className="text-xl mr-2" />
                      <span className="text-sm font-normal">GitHub</span>
                    </a>
                )}

                {project.MathMaestroLink && (
                    <a
                      href={project.MathMaestroLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-[#00bfff] transition-colors"
                    >
                      <FaExternalLinkAlt className="text-sm mr-2" />
                      <span className="text-sm font-normal">Website</span>
                    </a>
                  )}
                  
                {project.ConsultingLink && (
                    <a
                      href={project.ConsultingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-[#00bfff] transition-colors"
                    >
                      <FaExternalLinkAlt className="text-sm mr-2" />
                      <span className="text-sm font-normal">Website</span>
                    </a>
                )}

                {project.DevPostLink && (
                    <a
                      href={project.DevPostLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-[#00bfff] transition-colors"
                    >
                      <FaExternalLinkAlt className="text-sm mr-2" />
                      <span className="text-sm font-normal">DevPost</span>
                    </a>
                )}
              </div>
            </div>
          </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'CalcMaestro.com',
      shortDescription: 'Website for my calculus test-prep company providing students with calculus practice worksheets via subscription service',
      description: `Developed website for my calculus test-prep company supporting scalable, subscription-based content delivery
                    Designed calculus engine able to perform differentiation and integration symbolically, and generate, solve, and provide explanations for hundreds of thousands of calculus problems
                    Built serverless backend using AWS Lambda and AWS API Gateway to manage frontend requests and serve PDFs
                    Leveraged AWS DynamoDB for secure, low-latency storage of authentication tokens and analyics data
                    Implemented cross-domain authentication system using web tokens to securely serve PDFs hosted on AWS S3`,
      skills: ['Python', 'AWS (Lambda, S3, DynamoDB, API Gateway)', 'LaTeX + PyLaTeX library', 'PostgreSQL', 'Cloud Architecture'],
      image: CalcMaestroImage,
    },
    {
      title: 'Gesture-Controlled Running Game',
      shortDescription: `My version of Google's "No-Internet Dino Game" with gesture-based controls instead of keyboard controls.`,
      description: `Created a gesture-controlled endless running game modeled after Google's "No Internet Dino Game"
                    In the game, the player uses hand gestures (either a thumbs up or thumbs down) to control the on-screen dino, making it jump or duck respectively
                    This is done by passing an OpenCV camera stream to the MediaPipe computer-vision model for gesture-classification
                    These classifications are then converted into movement for the dino`,
      skills: ['Python', 'PyGame', 'MediaPipe Suite', 'OpenCV', 'Git', 'Computer Vision', 'Game Development'],
      image: GameImage,
      githubLink: 'https://github.com/akshaisrin/GestureControlledDinoGame',
    },
    {
        title: 'FitFinder',
        shortDescription: `Mobile social media app designed to make fashion more accessible and provide engaging fashion content.`,
        description: `Created mobile fashion social media app for Android devices designed to connect people with similar fashion tastes and provide engaging fashion content
                      Architected and optimized a relational PostgreSQL database storing user interactions, posts, and metrics with indexing and query optimization to support low-latency retrieval
                      Implemented Python/Flask backend using RESTFUL APIs to support content delivery and session management
                      Integrated AWS Bedrock to generate AI-powered style classifications and AWS S3 for storage of 40,000+ image algorithm dataset`,
        skills: ['Flutter', 'Dart', 'Python', 'Flask', 'PostgreSQL', 'AWS (S3, Bedrock)', 'Git', 'Mobile App Development'],
        image: FitFinderImage,
        DevPostLink: 'https://devpost.com/software/fitfinder-162dse',
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
                      Utilized FirstInspires API to dynamically retrieve competition roster and match schedules as JSON data, allowing scouts to record match-specific data via an intuitive UI
                      Implemented offline QR code-based data export system using data serialization, allowing for a seamless transfer to a host computer for analysis and aggregation
                      Digitized scouting process for first time in 20+ year team history, reducing aggregation time by over 80% and eliminating need for manual data collection`,
        skills: ['C# (.NET Maui Framework)', 'Tableau Desktop', 'FirstInspires API', 'Git', 'Full-Stack Desktop App Development'],
        image: ScoutingAppImage,
        githubLink: 'https://github.com/packofparts/Pack-of-Scouts',
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
        title: 'Consulting Website',
        shortDescription: `Website for UW's Technology Consulting Association built entirely from scratch`,
        description: `Created website for UW's Technology Consulting Association to serve as the central HUB for RSO
                      Utilized React.js, Tailwind.css, and Node.js to enhance UI
                      Designed contact form allowing potential clients to reach out for future engagements`,
        skills: ['React.js', 'Node.js', 'Tailwind.css', 'Git', 'Web Development'],
        image: ConsultingImage,
        ConsultingLink: 'https://uwtechconsulting.com',
      },
      {
        title: 'Portfolio Website',
        shortDescription: `My personal portfolio website built entirely from scratch`,
        description: `Created this portfolio website to showcase projects and experience
                      Utilized React.js, Tailwind.css, and Node.js to create a more appealing UI`,
        skills: ['React.js', 'Node.js', 'Tailwind.css', 'Git', 'Web Development'],
        image: WebsiteImage,
        githubLink: 'https://github.com/akshaisrin/Portfolio',
      },
      {
        title: 'Brown Zelda',
        shortDescription: `A remake of the hit 1980's NES game, the Legend of Zelda, with a twist`,
        description: `Created a remake of the Legend of Zelda with a custom Indian culture-based storyline, graphics, and bosses
                      Designed 10+ bosses each with custom movesets, pathfinding algorithms, and gameplay styles
                      Implemented control systems for both keyboard and X-Box controller for dual-input funcionality
                      Designed custom checkpoint system to allow them to easily advance through the game and save their progress`,
        skills: ['Python', 'PyGame', 'Git', 'Game Development'],
        image: BrownZeldaImage,
        githubLink: 'https://github.com/akshaisrin/BrownZelda',
      }

  ];

  return (
    <div className="text-white min-h-screen flex flex-col items-center py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 md:mb-20"
      >
        <h1 className="text-5xl font-semibold mt-4 mb-6 text-[#c665db]">Projects</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Some of the cool projects I've built over the past few years! Click on each card for a more detailed description.
        </p>
      </motion.div>
      
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;