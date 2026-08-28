import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
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
import BarelyAtWork from '../assets/images/barelyatwork.jpg';
import Duck from '../assets/images/duck.png';
import SectionHeading from './SectionHeading';
import DetailSheet, { Bullets, StackList } from './DetailSheet';

const projects = [
  {
    title: 'DuckRL',
    shortDescription: 'Robust reinforcement learning locomotion for Disney BDX droids',
    description: `Engineered custom reinforcement learning locomotion policies in PyTorch and MuJoCo sim for bipedal droids
                  Trained PPO actor-critic using MLP policy networks with clipped objective functions to output joint positions
                  Structured a two-stage curriculum for domain randomization, leveraging Rapid Motor Adaptation to condition the policy on privileged dynamics as physical difficulty scaled
                  Outperformed baseline policies by maintaining dynamic gait stability across 3 stress tests evaluating payload offsets, push recovery, and friction variation`,
    skills: ['Python', 'PyTorch', 'MuJoCo Sim', 'Reinforcement Learning', 'PPO', 'RMA', 'Git'],
    image: Duck,
    links: [{ label: 'Website', href: 'https://akshaisrin.github.io/DuckRLWebsite' }],
  },
  {
    title: 'BarelyAtWork',
    shortDescription: 'Hands-free agentic workflow builder for the Meta Ray-Bans',
    description: `Developed a hands-free agentic workflow builder for the Meta Raybans, enabling users to integrate 3rd party tools to create custom voice-activated workflows from anywhere in the world
                  Engineered an agentic pipeline that converts natural language into decomposed, step-by-step task representations before passing to an LLM, which resolves and executes each step using pre-integrated app context
                  Implemented a low-latency audio loop using Deepgram for transcription, Gemma for intent parsing, and ElevenLabs for streaming spoken confirmation back through the glasses
                  Integrated 6+ third-party services via OAuth, enabling the agent to autonomously orchestrate multi-service actions (messaging, calendar updates, ride booking) from a single voice command`,
    skills: ['Meta Raybans', 'Python', 'FastAPI', 'Deepgram', 'Gemma API', 'MongoDB', 'React.js', 'ElevenLabs', "3rd-party APIs (Notion, Slack, G-Suite, Uber, Domino's)", 'Git'],
    image: BarelyAtWork,
    links: [],
  },
  {
    title: 'CalcMaestro.com',
    shortDescription: 'Website for my calculus test-prep company providing students with practice resources',
    description: `Developed website for my calculus test-prep company supporting scalable, subscription-based content delivery
                  Designed calculus engine able to perform differentiation and integration symbolically, and generate, solve, and provide explanations for hundreds of thousands of calculus problems
                  Built serverless backend using AWS Lambda and AWS API Gateway to manage frontend requests and serve PDFs
                  Leveraged AWS DynamoDB for secure, low-latency storage of authentication tokens and analytics data
                  Implemented cross-domain authentication system using web tokens to securely serve PDFs hosted on AWS S3`,
    skills: ['Python', 'AWS (Lambda, S3, DynamoDB, API Gateway)', 'LaTeX + PyLaTeX library', 'PostgreSQL'],
    image: CalcMaestroImage,
    links: [],
  },
  {
    title: 'TradingHub',
    shortDescription: 'Algorithmic trading platform with real-time market data and backtesting visualizations',
    description: `Built full-stack trading platform with real-time stock monitoring and strategy backtesting using React and FastAPI
                  Implemented PostgreSQL caching layer with automatic data validation across multiple providers (Yahoo Finance, Polygon, Finnhub), reducing external API calls by 80%
                  Developed WebSocket-based backtesting engine with streamed simulation updates, Ollama query parsing, and technical indicator calculations (RSI, SMA, Bollinger Bands)
                  Containerized app with Docker Compose using multi-stage builds and Nginx reverse proxy for deployment`,
    skills: ['Python', 'FastAPI', 'PostgreSQL', 'React.js', 'JavaScript', 'Docker', 'Nginx', 'Git'],
    image: TradingHubImage,
    links: [],
  },
  {
    title: 'FitFinder',
    shortDescription: 'Mobile social media app designed to make fashion more accessible',
    description: `Created mobile fashion social media app for Android devices designed to connect people with similar fashion tastes and provide engaging fashion content
                  Architected and optimized a relational PostgreSQL database storing user interactions, posts, and metrics with indexing and query optimization to support low-latency retrieval
                  Implemented Python/Flask backend using RESTful APIs to support content delivery and session management
                  Integrated AWS Bedrock to generate AI-powered style classifications and AWS S3 for storage of 40,000+ image algorithm dataset`,
    skills: ['Flutter', 'Dart', 'Python', 'Flask', 'PostgreSQL', 'AWS (S3, Bedrock)', 'Git'],
    image: FitFinderImage,
    links: [{ label: 'DevPost', href: 'https://devpost.com/software/fitfinder-162dse' }],
  },
  {
    title: 'MathMaestro.org',
    shortDescription: 'Website for my nonprofit providing students with free, unlimited math resources',
    description: `Developed website utilized by 1200+ students till date that generates unlimited number math worksheets (with solutions) for K-7 students
                  Students can access new worksheets by simply reloading the worksheet's page, instantly generating a new worksheet with new numbers and problems
                  Created backend using AWS Lambda and implemented automatic user-metrics system storing analytics in a remote AWS DynamoDB database
                  Also created Python software that automatically generated seven K-9 math workbook PDFs for students (formatted using LaTeX). Check them out on Amazon.com!`,
    skills: ['Python', 'AWS (Lambda, DynamoDB)', 'WordPress', 'LaTeX'],
    image: MathMaestroImage,
    links: [{ label: 'Website', href: 'https://mathmaestro.org' }],
  },
  {
    title: 'FRC Scouting Desktop App',
    shortDescription: 'Offline data-collection desktop app for high school robotics team competitions (FRC)',
    description: `Created a competition data-collection (or scouting) app for my robotics team (FRC 1294) of 70+ students using the .Net Maui framework in C#
                  Utilized FirstInspires API to dynamically retrieve competition roster and match schedules as JSON data, allowing scouts to record match-specific data via an intuitive UI
                  Implemented offline QR code-based data export system using data serialization, allowing for a seamless transfer to a host computer for analysis and aggregation
                  Digitized scouting process for first time in 20+ year team history, reducing aggregation time by over 80% and eliminating need for manual data collection`,
    skills: ['C# (.NET Maui Framework)', 'Tableau Desktop', 'FirstInspires API', 'Git'],
    image: ScoutingAppImage,
    links: [{ label: 'GitHub', href: 'https://github.com/packofparts/Pack-of-Scouts', github: true }],
  },
  {
    title: 'Consulting Website',
    shortDescription: "Website for UW's Technology Consulting Association built entirely from scratch",
    description: `Created website for UW's Technology Consulting Association to serve as the central HUB for RSO
                  Utilized React.js, Tailwind.css, and Node.js to enhance UI
                  Designed contact form allowing potential clients to reach out for future engagements`,
    skills: ['React.js', 'Node.js', 'Tailwind.css', 'Git'],
    image: ConsultingImage,
    imagePosition: 'object-left',
    links: [{ label: 'Website', href: 'https://uwtechconsulting.com' }],
  },
  {
    title: 'Portfolio Website',
    shortDescription: 'My personal portfolio website built entirely from scratch',
    description: `Created this portfolio website to showcase projects and experience
                  Utilized React.js, Tailwind.css, and Node.js to create a more appealing UI`,
    skills: ['React.js', 'Node.js', 'Tailwind.css', 'Git'],
    image: WebsiteImage,
    imagePosition: 'object-left',
    links: [{ label: 'GitHub', href: 'https://github.com/akshaisrin/Portfolio', github: true }],
  },
  {
    title: 'Gesture-Controlled Running Game',
    shortDescription: "My version of Google's Dino game with gesture-based controls instead of keyboard",
    description: `Created a gesture-controlled endless running game modeled after Google's "No Internet Dino Game"
                  In the game, the player uses hand gestures (either a thumbs up or thumbs down) to control the on-screen dino, making it jump or duck respectively
                  This is done by passing an OpenCV camera stream to the MediaPipe computer-vision model for gesture-classification
                  These classifications are then converted into movement for the dino`,
    skills: ['Python', 'PyGame', 'MediaPipe Suite', 'OpenCV', 'Git'],
    image: GameImage,
    links: [{ label: 'GitHub', href: 'https://github.com/akshaisrin/GestureControlledDinoGame', github: true }],
  },
  {
    title: 'Terminal Suite',
    shortDescription: 'A collection of popular apps recreated entirely from scratch in the terminal',
    description: `Recreated the popular apps, "Discord" and "Geometry Dash", entirely in the terminal
                  Discord (social-messaging app): designed PostgreSQL database and implemented Python/Flask backend to pull and insert relevant user information
                  Geometry Dash (side-scrolling platformer game): helped design graphics engine to render images/videos in the terminal and designed level editor where users could design and play-through their own levels, entirely in app
                  Also utilized graphics engine to render a version of Bad Apple (in true CS Nerd fashion)`,
    skills: ['Python', 'Flask', 'Blessed Library', 'PostgreSQL', 'Git'],
    image: TerminalSuiteImage,
    links: [{ label: 'GitHub', href: 'https://github.com/crystaltine/vis', github: true }],
  },
  {
    title: 'Brown Zelda',
    shortDescription: "A remake of the hit 1980's NES game, the Legend of Zelda, with a twist",
    description: `Created a remake of the Legend of Zelda with a custom Indian culture-based storyline, graphics, and bosses
                  Designed 10+ bosses each with custom movesets, pathfinding algorithms, and gameplay styles
                  Implemented control systems for both keyboard and X-Box controller for dual-input functionality
                  Designed custom checkpoint system to allow them to easily advance through the game and save their progress`,
    skills: ['Python', 'PyGame', 'Git'],
    image: BrownZeldaImage,
    links: [{ label: 'GitHub', href: 'https://github.com/akshaisrin/BrownZelda', github: true }],
  },
];

function SkillIcons({ skills, size = 'sm' }) {
  const items = skills.flatMap((skill) => {
    const meta = resolveProjectSkillTag(skill);
    if (meta == null) return [];
    return [{ skill, meta }];
  });
  if (items.length === 0) return null;
  const box = size === 'lg' ? 'h-10 w-10' : 'h-8 w-8';
  const img = size === 'lg' ? 'h-6 w-6' : 'h-5 w-5';
  return (
    <ul className="flex list-none flex-wrap gap-1.5 p-0" aria-label="Technologies">
      {items.map(({ skill, meta }) => (
        <li key={skill}>
          <span title={skill} className={`flex ${box} items-center justify-center border border-rule`}>
            <img
              src={meta.image}
              alt=""
              className={`${img} object-contain${meta.invert ? ' brightness-0 invert' : ''}`}
              aria-hidden
            />
            <span className="sr-only">{skill}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

const linkClass =
  'inline-flex items-center gap-2 border border-ink px-3.5 py-2 text-[0.95rem] text-ink no-underline hover:bg-ink hover:text-sheet';

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group flex h-full w-full flex-col text-left"
        aria-haspopup="dialog"
      >
        <span className="block aspect-video w-full overflow-hidden border border-rule group-hover:border-ink">
          <img
            src={project.image}
            alt=""
            className={`h-full w-full object-cover ${project.imagePosition ?? 'object-center'}`}
            loading="lazy"
          />
        </span>
        <span className="mt-3 font-cad text-[1.15rem] leading-tight tracking-wide group-hover:text-signal-ink">
          {project.title}
        </span>
        <span className="mt-1 block text-[0.95rem] leading-snug text-ink-2">{project.shortDescription}</span>
        <span className="mt-3 block">
          <SkillIcons skills={project.skills} />
        </span>
      </button>

      <DetailSheet open={open} onClose={() => setOpen(false)} title={project.title} subtitle={project.shortDescription}>
        <Bullets text={project.description} />
        <StackList items={project.skills} />
        {project.links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3 border-t border-rule pt-6">
            {project.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {l.github ? <Github className="h-4 w-4" aria-hidden /> : <ExternalLink className="h-4 w-4" aria-hidden />}
                <span>{l.label}</span>
              </a>
            ))}
          </div>
        )}
      </DetailSheet>
    </li>
  );
};

const Projects = () => (
  <section id="projects" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
    <SectionHeading lede="Some of the cool projects I've built over the years! Select a card for details and links.">
      Projects
    </SectionHeading>

    <ul className="m-0 grid list-none grid-cols-1 gap-x-8 gap-y-10 p-0 sm:grid-cols-2">
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </ul>
  </section>
);

export default Projects;
