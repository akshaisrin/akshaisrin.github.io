import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { X } from 'lucide-react';
import { resolveProjectSkillTag } from '../data/skillsRegistry';
import CalcMaestroImage from '../assets/images/CalcMaestro.png';
import GameImage from '../assets/images/game.png';
import MathMaestroImage from '../assets/images/mathmaestro.png';
import ScoutingAppImage from '../assets/images/scouting_app.png';
import TerminalSuiteImage from '../assets/images/TerminalSuite.png';
import WebsiteImage from '../assets/images/website.jpg';
import ConsultingImage from '../assets/images/consulting.jpg';
import FitFinderImage from '../assets/images/FitFinder.png';
import BrownZeldaImage from '../assets/images/BrownZelda.png';
import TradingHubImage from '../assets/images/tradinghub.jpeg';

function ProjectSkillIcons({ skills, size = 'sm' }) {
  const box =
    size === 'lg'
      ? 'inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] sm:h-11 sm:w-11'
      : 'inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-800/50 sm:h-9 sm:w-9';
  const img =
    size === 'lg'
      ? 'h-6 w-6 object-contain sm:h-7 sm:w-7'
      : 'h-5 w-5 object-contain sm:h-6 sm:w-6';

  const items = skills.flatMap((skill, i) => {
    const meta = resolveProjectSkillTag(skill);
    if (meta == null) return [];
    return [
      <li key={`${skill}-${i}`}>
        <span title={skill} className={box}>
          <img
            src={meta.image}
            alt=""
            className={`${img}${meta.invert ? ' brightness-0 invert opacity-90' : ''}`}
            aria-hidden
          />
          <span className="sr-only">{skill}</span>
        </span>
      </li>,
    ];
  });

  if (items.length === 0) return null;

  return (
    <ul className="flex list-none flex-wrap gap-2 p-0" aria-label="Technologies">
      {items}
    </ul>
  );
}

const modalListContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const modalListItem = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 380, damping: 30 },
  },
};

const modalLinkClass =
  'inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-gray-400 transition-all duration-200 hover:border-violet-400/35 hover:bg-violet-500/[0.08] hover:text-violet-200 hover:shadow-[0_0_24px_-8px_rgba(167,139,250,0.45)]';

const ProjectCard = ({ project, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  return (
    <>
      <motion.div
        className="flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-black transition-colors duration-200 hover:border-violet-400/35"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-32px' }}
        transition={{ duration: 0.5, delay: index * 0.06 }}
        onClick={handleClick}
      >
        <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-[#0a0a0c]">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-contain object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-5 p-6 sm:p-6">
          <div className="space-y-2.5">
            <h3 className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-500 sm:text-[0.9375rem]">
              {project.shortDescription}
            </p>
            <ProjectSkillIcons skills={project.skills} />
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="project-modal-backdrop"
            className="fixed inset-0 z-50 flex min-h-full items-center justify-center overflow-y-auto px-2 py-4 sm:px-3 sm:py-6"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(76,29,149,0.22),transparent_55%)] bg-black/88 backdrop-blur-md"
              aria-hidden
            />
            <motion.div
              key="project-modal-panel"
              className="relative z-10 my-auto w-full max-w-[min(72rem,calc(100vw-0.75rem))] rounded-2xl border border-white/[0.08] bg-[#050308] p-5 shadow-[0_0_0_1px_rgba(139,92,246,0.06),0_32px_90px_-40px_rgba(0,0,0,0.95),0_0_80px_-40px_rgba(139,92,246,0.14)] sm:p-7 md:p-9"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 340, damping: 32 }}
            >
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-gray-400 transition-all duration-200 hover:border-violet-400/35 hover:bg-violet-500/[0.08] hover:text-violet-200 sm:right-5 sm:top-5"
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </button>

              <motion.header
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="pr-12 sm:pr-14"
              >
                <p className="mb-1 font-mono text-[0.65rem] tracking-[0.35em] text-violet-400/90 uppercase sm:text-xs">
                  Project
                </p>
                <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-[2rem]">
                  {project.title}
                </h2>
              </motion.header>

              <div className="mt-6 flex flex-col gap-8 text-left sm:mt-7 sm:gap-10">
                <motion.ul
                  className="max-w-4xl space-y-3 text-base leading-relaxed text-gray-400 sm:text-[1.02rem]"
                  variants={modalListContainer}
                  initial="hidden"
                  animate="show"
                >
                  {project.description
                    .split('\n')
                    .map((line) => line.trim())
                    .filter(Boolean)
                    .map((line, idx) => (
                      <motion.li
                        key={idx}
                        variants={modalListItem}
                        className="flex gap-3"
                      >
                        <span className="mt-0.5 shrink-0 text-violet-400/75" aria-hidden>
                          •
                        </span>
                        <span>{line}</span>
                      </motion.li>
                    ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-violet-400/85 sm:text-sm">
                    Stack
                  </p>
                  <div className="flex max-w-4xl flex-wrap gap-2">
                    {project.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-xs text-gray-500 sm:text-[0.8125rem]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-3 border-t border-white/[0.06] pt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.16 }}
                >
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={modalLinkClass}
                    >
                      <FaGithub className="text-lg" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.MathMaestroLink && (
                    <a
                      href={project.MathMaestroLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={modalLinkClass}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>Website</span>
                    </a>
                  )}
                  {project.ConsultingLink && (
                    <a
                      href={project.ConsultingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={modalLinkClass}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>Website</span>
                    </a>
                  )}
                  {project.DevPostLink && (
                    <a
                      href={project.DevPostLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={modalLinkClass}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>DevPost</span>
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'CalcMaestro.com',
      shortDescription: 'Website for my calculus test-prep company providing students with practice resources.',
      description: `Developed website for my calculus test-prep company supporting scalable, subscription-based content delivery
                    Designed calculus engine able to perform differentiation and integration symbolically, and generate, solve, and provide explanations for hundreds of thousands of calculus problems
                    Built serverless backend using AWS Lambda and AWS API Gateway to manage frontend requests and serve PDFs
                    Leveraged AWS DynamoDB for secure, low-latency storage of authentication tokens and analyics data
                    Implemented cross-domain authentication system using web tokens to securely serve PDFs hosted on AWS S3`,
      skills: ['Python', 'AWS (Lambda, S3, DynamoDB, API Gateway)', 'LaTeX + PyLaTeX library', 'PostgreSQL'],
      image: CalcMaestroImage,
    },
    {
      title: 'Gesture-Controlled Running Game',
      shortDescription: `My version of Google's Dino game with gesture-based controls instead of keyboard.`,
      description: `Created a gesture-controlled endless running game modeled after Google's "No Internet Dino Game"
                    In the game, the player uses hand gestures (either a thumbs up or thumbs down) to control the on-screen dino, making it jump or duck respectively
                    This is done by passing an OpenCV camera stream to the MediaPipe computer-vision model for gesture-classification
                    These classifications are then converted into movement for the dino`,
      skills: ['Python', 'PyGame', 'MediaPipe Suite', 'OpenCV', 'Git'],
      image: GameImage,
      githubLink: 'https://github.com/akshaisrin/GestureControlledDinoGame',
    },
    {
        title: 'FitFinder',
        shortDescription: `Mobile social media app designed to make fashion more accessible.`,
        description: `Created mobile fashion social media app for Android devices designed to connect people with similar fashion tastes and provide engaging fashion content
                      Architected and optimized a relational PostgreSQL database storing user interactions, posts, and metrics with indexing and query optimization to support low-latency retrieval
                      Implemented Python/Flask backend using RESTFUL APIs to support content delivery and session management
                      Integrated AWS Bedrock to generate AI-powered style classifications and AWS S3 for storage of 40,000+ image algorithm dataset`,
        skills: ['Flutter', 'Dart', 'Python', 'Flask', 'PostgreSQL', 'AWS (S3, Bedrock)', 'Git'],
        image: FitFinderImage,
        DevPostLink: 'https://devpost.com/software/fitfinder-162dse',
    },
    {
        title: 'TradingHub',
        shortDescription: `Algorithmic trading platformwith real-time market data and backtesting visualizations`,
        description: `Built full-stack trading platform with real-time stock monitoring and strategy backesting using React and FastAP
                      Implemented PostgreSQL caching layer with automatic data validation across multiple providers (Yahoo Finance, Polygon, Finnhub), reducing external API calls by 80%
                      Developed WebSocket-based backtesting engine with streamed simulation updates, Ollama query parsing, and technical indicator calculations (RSI, SMA, Bollinger Bands)
                      Containerized app with Docker Compose using multi-stage builds and Nginx reverse proxy for deployment`,
        skills: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'JavaScript', 'Docker', 'Nginx', 'Git'],
        image: TradingHubImage,
    },
    {
      title: 'MathMaestro.org',
      shortDescription: `Website for my nonprofit providing students with free, unlimited math resources.`,
      description: `Developed website utilized by 1200+ students till date that generates unlimited number math worksheets (with solutions) for K-7 students
                    Students can access new worksheets by simply reloading the worksheet's page, instantly generating a new worksheet with new numbers and problems
                    Created backend using AWS Lambda and implemented automatic user-metrics system storing analytics in a remote AWS DynamoDB database
                    Also created Python software that automatically generated seven K-9 math workbook PDFs for students (formatted using LaTeX). Check them out on Amazon.com!`,
      skills: ['Python', 'AWS (Lambda, DynamoDB)', 'WordPress', 'LaTeX'],
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
        skills: ['C# (.NET Maui Framework)', 'Tableau Desktop', 'FirstInspires API', 'Git'],
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
        skills: ['Python', 'Flask', 'Blessed Library', 'PostgreSQL', 'Git'],
        image: TerminalSuiteImage,
        githubLink: 'https://github.com/crystaltine/vis',
      },
      {
        title: 'Consulting Website',
        shortDescription: `Website for UW's Technology Consulting Association built entirely from scratch`,
        description: `Created website for UW's Technology Consulting Association to serve as the central HUB for RSO
                      Utilized React.js, Tailwind.css, and Node.js to enhance UI
                      Designed contact form allowing potential clients to reach out for future engagements`,
        skills: ['React.js', 'Node.js', 'Tailwind.css', 'Git'],
        image: ConsultingImage,
        ConsultingLink: 'https://uwtechconsulting.com',
      },
      {
        title: 'Portfolio Website',
        shortDescription: `My personal portfolio website built entirely from scratch`,
        description: `Created this portfolio website to showcase projects and experience
                      Utilized React.js, Tailwind.css, and Node.js to create a more appealing UI`,
        skills: ['React.js', 'Node.js', 'Tailwind.css', 'Git'],
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
        skills: ['Python', 'PyGame', 'Git'],
        image: BrownZeldaImage,
        githubLink: 'https://github.com/akshaisrin/BrownZelda',
      }

  ];

  return (
    <section id="projects" className="bg-black text-white">
      {/* Diamond between About and Projects */}
      <div className="flex justify-center px-5 pt-10 pb-4 sm:pt-14 sm:pb-6" aria-hidden>
        <div className="flex items-center gap-3.5">
          <div className="h-px w-24 rounded-full bg-gradient-to-r from-transparent via-violet-400/40 to-violet-400/70 sm:w-32 md:w-40" />
          <div className="h-2 w-2 shrink-0 rotate-45 bg-gradient-to-br from-violet-300 to-indigo-400 shadow-[0_0_16px_rgba(167,139,250,0.55)]" />
          <div className="h-px w-24 rounded-full bg-gradient-to-l from-transparent via-violet-400/40 to-violet-400/70 sm:w-32 md:w-40" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-4 sm:px-6 sm:pb-28 sm:pt-6 lg:max-w-7xl lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 lg:mb-24"
        >
          <p className="mb-3 font-mono text-xs tracking-[0.35em] text-violet-400/90 uppercase sm:text-sm">
            Selected work
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Projects
          </h2>
          <p className="mt-8 max-w-full text-xs leading-normal text-gray-500 sm:mt-10 sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
            Some of the cool projects I&apos;ve built! Click on any tile for more information!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-9 md:grid-cols-2 md:gap-9 lg:grid-cols-3 lg:gap-10 xl:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;