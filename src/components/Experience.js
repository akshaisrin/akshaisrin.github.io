import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import FIUImage from '../assets/images/FIU.jpg';
import DubHacksImage from '../assets/images/DubHacks.jpg';
import NeptuneImage from '../assets/images/Neptune.jpeg';
import TCALogo from '../assets/images/TCALogo.png';
import AllenLogo from '../assets/images/allen.jpg';
import GMLogo from '../assets/images/gm.jpg';

const modalListContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.06 },
  },
};

const modalListItem = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 380, damping: 30 },
  },
};

const ExperienceCard = ({ experience, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  return (
    <>
      <motion.article
        className="group cursor-pointer rounded-2xl border border-white/[0.08] bg-black transition-colors duration-200 hover:border-violet-400/35"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        onClick={() => setIsOpen(true)}
      >
        <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:gap-8 md:gap-10 sm:p-6">
          <div className="flex shrink-0 items-center justify-center sm:w-28 md:w-30">
            <img
              src={experience.image}
              alt=""
              className="h-auto w-full max-w-[112px] object-contain sm:max-w-[120px] md:max-w-32"
            />
          </div>
          <div className="min-w-0 flex-1 text-left">
            <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
              {experience.company}
            </h3>
            <p className="mt-2 font-mono text-sm text-violet-400/90">{experience.position}</p>
            <p className="mt-2 text-sm text-gray-500">
              {experience.year}
              <span className="text-gray-600"> · </span>
              {experience.location}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-[0.9375rem]">
              {experience.summary}
            </p>
            <p className="mt-4 font-mono text-[0.65rem] tracking-wider text-gray-600 sm:text-xs">
              View details →
            </p>
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="exp-modal-root"
            className="fixed inset-0 z-50 flex min-h-full items-center justify-center overflow-y-auto px-2 py-4 sm:px-3 sm:py-6"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-15%,rgba(76,29,149,0.2),transparent_55%)] bg-black/88 backdrop-blur-md"
              aria-hidden
            />
            <motion.div
              key="exp-modal-panel"
              className="relative z-10 my-auto w-full max-w-[min(52rem,calc(100vw-0.75rem))] rounded-2xl border border-white/[0.08] bg-[#050308] p-5 shadow-[0_0_0_1px_rgba(139,92,246,0.06),0_32px_90px_-40px_rgba(0,0,0,0.95),0_0_70px_-36px_rgba(139,92,246,0.12)] sm:p-7 md:p-9"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
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

              <div className="flex flex-col gap-5 pr-12 sm:flex-row sm:items-start sm:gap-8 md:gap-10 sm:pr-14">
                <img
                  src={experience.image}
                  alt=""
                  className="mx-auto h-auto w-14 shrink-0 object-contain sm:mx-0 sm:w-16 md:w-[4.25rem]"
                />
                <motion.header
                  className="min-w-0 flex-1 text-left"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 }}
                >
                  <p className="mb-1 font-mono text-[0.65rem] tracking-[0.35em] text-violet-400/90 uppercase sm:text-xs">
                    Experience
                  </p>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {experience.company}
                  </h2>
                  <p className="mt-2 font-mono text-sm text-violet-300/85">{experience.position}</p>
                  <p className="mt-2 text-sm text-gray-500">
                    {experience.year}
                    <span className="text-gray-600"> · </span>
                    {experience.location}
                  </p>
                </motion.header>
              </div>

              <div className="mt-7 flex flex-col gap-8 text-left sm:mt-8 sm:gap-9">
                <motion.ul
                  className="max-w-3xl space-y-3 text-sm leading-relaxed text-gray-400 sm:text-base sm:leading-relaxed"
                  variants={modalListContainer}
                  initial="hidden"
                  animate="show"
                >
                  {experience.description
                    .split('\n')
                    .map((line) => line.trim())
                    .filter(Boolean)
                    .map((line, idx) => (
                      <motion.li key={idx} variants={modalListItem} className="flex gap-3">
                        <span className="mt-0.5 shrink-0 text-violet-400/75" aria-hidden>
                          •
                        </span>
                        <span>{line}</span>
                      </motion.li>
                    ))}
                </motion.ul>

                <div>
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-violet-400/85 sm:text-sm">
                    Stack
                  </p>
                  <div className="flex max-w-3xl flex-wrap gap-2">
                    {experience.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-xs text-gray-500 sm:text-[0.8125rem]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Experience = () => {
  const experience = [
    {
      company: 'General Motors',
      position: 'Incoming Software Engineering Intern',
      year: 'Summer 2026',
      location: 'Sunnyvale, CA',
      summary:
        'Autonomous Vehicles! More information to come soon!',
      description: `Autonomous Vehicles! More to come soon!`,
      skills: ['Python', 'TypeScript', 'ROS', 'Webviz'],
      image: GMLogo,
    },
    {
      company: 'Washington Embodied Intelligence and Robotics Development Lab',
      position: 'Undergraduate Research Assistant',
      year: 'Feb 2026 - Present',
      location: 'Seattle, WA',
      summary:
        'Reinforcement learning research on dextrous sim-to-real robotic manipulation',
      description: `Developing sim-to-real reinforcement learning policies for robotic assembly tasks under Dr. Abhishek Gupta using Isaac Lab and RSL-RL, with WandB for experiment tracking
                     Tuning PPO hyperparameters and reward weights to maximize dextrous manipulation success rate under domain randomization of object poses and dynamics parameters`,
      skills: ['Python', 'PyTorch', 'Isaac Lab', 'NVIDIA Omniverse', 'WandB'],
      image: AllenLogo,
    },
    {
      company: 'DubHacks',
      position: 'Director of Technology',
      year: 'Jan 2025 - Present',
      location: 'Seattle, WA',
      summary:
        "Overseeing full-stack infrastructure for largest collegiate hackathon in the PNW",
      description: `Overseeing full-stack infrastructure for the largest collegiate hackathon in the Pacific Northwest (1200+ hackers/judges) using FastAPI, Next.js, TypeScript, and React
                     Built FastAPI judging platform with OAuth2 infrastructure, utilizing WebSockets and event-driven architecture to achieve <100 ms tracking for 150+ live sessions
                     Architected production MongoDB cluster handling 376K edge requests and 122K serverless function invocations for peak hackathon traffic with zero downtime
                     Designed sentiment analysis engine with proprietary ranking algorithm to evaluate 1,800+ applications,achieving 99% reduction in manual review time`,
      skills: [
        'FastAPI',
        'Next.js',
        'React.js',
        'TypeScript',
        'MongoDB',
        'Tailwind.css',
        'WebSockets',
      ],
      image: DubHacksImage,
    },
    {
      company: 'UW Technology Consulting Association',
      position: 'President and Co-Founder',
      year: 'Jan 2025 - Mar 2026',
      location: 'Seattle, WA',
      summary:
        "Founded and ran the UW's first AI-driven consultancy helping businesses streamline operations and deploy intelligent solutions",
      description: ` Founded and leading a 40+ member student organization to deliver AI-driven tech solutions for businesses
                     Built pipeline of 6 active client projects within 3 months, including computer vision analytics for regional bagel chain and cloud infrastructure migration for municipal fire department
                     Developed agentic AI outreach bot that utilizes the Anthropic/Claude API to discover and initiate first-level sales funnel contact with potential clients (2000+ leads)
                      Established strategic partnerships and client relations with Pinterest, SAP, Accenture, and the Seattle Mariners`,
      skills: ['Python', 'Claude API'],
      image: TCALogo,
    },

    {
      company: 'Neptune Medical',
      position: 'Robotic Software Engineering Intern',
      year: 'Jun 2025 - Sep 2025',
      location: 'Burlingame, CA',
      summary:
        'Control systems software and fault detection for robotic endoscopy',
      description: ` Implemented control systems software for robotic endoscope using ROS and Python, orchestrating communication between controllers, sensors, and actuators
                     Built C++ fault detection framework for haptic input device with automatic failsafe protocols, preventing unsafe robot operations during live procedures
                     Designed tendon saturation algorithm with integrated haptic feedback that dynamically generates resistive forces when tendons reach operational limits, preventing mechanical damage to endoscope
                     Collaborated across engineering teams using Agile/Scrum workflows, maintaining sprint documentation in Jira and technical specs in Confluence`,
      skills: ['C++', 'Python', 'ROS2', 'Git'],
      image: NeptuneImage,
    },
    {
      company: 'Florida International University',
      position: 'NLP Research Intern',
      year: 'Sep 2022 - Jun 2024',
      location: 'Miami, FL',
      summary:
        'NLP research to detect literary motifs in folktales using BERT-based sentence transformers',
      description: `Conducted NLP research to create software that detects literary motifs (recurring symbolic elements) in folktales
                    Trained Bert-based sentence transformers to apply a semantic search on literary texts, enabling an accurate and efficient identification of thematic elements
                    Implemented pre-processing pipelines to handle diverse folktale formats and ensure data consistency for training and evaluation`,
      skills: ['Python', 'PyTorch', 'Hugging Face', 'Git'],
      image: FIUImage,
    }
  ];

  return (
    <section id="experience" className="bg-black text-white">
      {/* Diamond between Projects and Experience */}
      <div className="flex justify-center px-5 pt-8 pb-4 sm:pt-12 sm:pb-6" aria-hidden>
        <div className="flex items-center gap-3.5">
          <div className="h-px w-24 rounded-full bg-gradient-to-r from-transparent via-violet-400/40 to-violet-400/70 sm:w-32 md:w-40" />
          <div className="h-2 w-2 shrink-0 rotate-45 bg-gradient-to-br from-violet-300 to-indigo-400 shadow-[0_0_16px_rgba(167,139,250,0.55)]" />
          <div className="h-px w-24 rounded-full bg-gradient-to-l from-transparent via-violet-400/40 to-violet-400/70 sm:w-32 md:w-40" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-5 pb-24 pt-4 sm:px-6 sm:pb-28 sm:pt-6 md:pt-8 lg:max-w-6xl lg:px-8">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 font-mono text-xs tracking-[0.35em] text-violet-400/90 uppercase sm:text-sm">
            Experience
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Where I&apos;ve Worked
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-gray-500 sm:mt-10 sm:text-lg">
            My internship/work experience and other notable opportunities I've participated in! Click on any tile for more information!
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-10">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.company} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
