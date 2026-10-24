import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { resolveProjectSkillTag } from '../data/skillsRegistry';
import CalcMaestroImage from '../assets/images/CalcMaestro.png';
import GameImage from '../assets/images/game.png';
import MathMaestroImage from '../assets/images/mathmaestro.png';
import ScoutingAppImage from '../assets/images/scouting_app.png';
import TerminalSuiteImage from '../assets/images/TerminalSuite.png';
import WebsiteImage from '../assets/images/website-2026.png';
import ConsultingImage from '../assets/images/consulting.jpg';
import FitFinderImage from '../assets/images/FitFinder.png';
import BrownZeldaImage from '../assets/images/BrownZelda.png';
import TradingHubImage from '../assets/images/tradinghub.jpeg';
import BarelyAtWork from '../assets/images/barelyatwork.jpg';
import Duck from '../assets/images/duck.png';
import DH26AppPortalImage from '../assets/images/dh26-app-portal.png';
import DH26HackerProfileImage from '../assets/images/dh26-hacker-profile.png';
import DH26JudgingImage from '../assets/images/dh26-judging.png';
import DH26DiscordBotImage from '../assets/images/dh26-discord-bot.png';
import SectionHeading, { sectionClass } from './SectionHeading';
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
    title: 'DinoDash',
    shortDescription: "Gesture-controlled runner game inspired by Google's Dino game",
    description: `Developed a gesture-controlled endless runner in Python and PyGame, modeled after Google's offline Dino game
                  Engineered a real-time vision pipeline that streams webcam frames from OpenCV into MediaPipe for hand-gesture classification
                  Mapped classified gestures to game controls, so a thumbs up makes the dino jump and a thumbs down makes it duck`,
    skills: ['Python', 'PyGame', 'MediaPipe Suite', 'OpenCV', 'Git'],
    image: GameImage,
    links: [{ label: 'GitHub', href: 'https://github.com/akshaisrin/GestureControlledDinoGame', github: true }],
  },
  {
    title: 'DubHacks 2026 Application Portal',
    shortDescription: 'Application platform for hackers, judges, and mentors at DubHacks 2026',
    description: `Developed the Next.js + MongoDB platform behind DubHacks 2026 applications, handling hacker, judge, and mentor applications from a single deploy
                  Designed a Google Forms-style form builder with versioned forms and autosaving drafts, keying answers by stable field IDs so edits to a live form never break submitted applications
                  Implemented email-verified accounts and magic-link sign-in with bcrypt-hashed passwords and stateless signed-cookie sessions, plus a separately password-protected admin area
                  Created the organizer review pipeline (ratings, admit/reject decisions, bulk Resend emails, RSVPs, Excel/ZIP exports) and an idempotent export that upserts admitted judges straight into the judging app's database`,
    skills: ['Next.js', 'TypeScript', 'React.js', 'Tailwind.css', 'MongoDB', 'Resend', 'Git'],
    image: DH26AppPortalImage,
    links: [],
  },
  {
    title: 'DubHacks 2026 Hacker Profile',
    shortDescription: 'Participant dashboard for hackers at DubHacks 2026',
    description: `Developed the participant hub for DubHacks 2026 in Next.js + MongoDB with Discord sign-in, giving every hacker a profile, the event schedule, workshops, activities, and a guide in one dashboard
                  Designed DubCoins, a points system where hackers earn coins at activities and check-ins and redeem them for prizes, with balance and inventory updates kept consistent across concurrent redemptions
                  Engineered the organizer admin portal with event check-in, fuzzy hacker search, and tools to add and edit hackers and adjust coin balances
                  Shipped a live photo wall where hackers submit photos from their phones, staff moderate them, and approved shots cycle on the venue's big screen`,
    skills: ['Next.js', 'TypeScript', 'React.js', 'Tailwind.css', 'MongoDB', 'NextAuth (Discord OAuth)', 'Git'],
    image: DH26HackerProfileImage,
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
    title: 'DubHacks 2026 Judging Portal',
    shortDescription: 'Judge assignment and scoring system for DubHacks 2026',
    description: `Developed the DubHacks 2026 judging system, a FastAPI + MongoDB backend and React frontend for assigning and scoring every project across main, side, and sponsor tracks
                  Designed the judge assignment algorithm that schedules judges to tables over multiple phases and rounds, avoiding conflicts and computing the minimum judges each track needs from imported Devpost teams
                  Engineered the admin portal with a drag-and-drop assignment board, a judging simulator, dry runs, round timers, and Excel exports that explain every judging step
                  Integrated the application portal to import accepted judges and hackers directly, with staging tools (production clones, checkpoints, undo) to rehearse event day safely`,
    skills: ['Python', 'FastAPI', 'MongoDB', 'React.js', 'TypeScript', 'Tailwind.css', 'Git'],
    image: DH26JudgingImage,
    imagePosition: 'object-top',
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
    title: 'DubHacks 2026 Discord Bot',
    shortDescription: 'Discord bot that verifies hackers and announces events at DubHacks 2026',
    description: `Developed the DubHacks 2026 Discord bot in Python with discord.py and MongoDB, running as an always-on worker for the event's server
                  Automated participant verification by syncing Hacker and Judge roles every 10 minutes against accepted applicants in the database
                  Engineered an event reminder scheduler that pings hackers before each workshop and activity, picking up schedule changes from the admin portal without a restart
                  Created organizer slash commands to announce events, preview upcoming reminders, compare role counts against the database, and audit invite usage`,
    skills: ['Python', 'discord.py', 'MongoDB', 'Git'],
    image: DH26DiscordBotImage,
    imagePosition: 'object-[center_18%]',
    links: [],
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
    links: [{ label: 'GitHub', href: 'https://github.com/akshaisrin/Portfolio', github: true }],
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
          <span title={skill} className={`flex ${box} items-center justify-center rounded-lg border border-rule bg-bg`}>
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
  'inline-flex items-center gap-2 rounded-xl border border-rule-2 px-4 py-2 text-[0.95rem] font-semibold text-ink no-underline transition-colors hover:border-butter hover:text-butter';

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-rule bg-surface text-left transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-butter"
        aria-haspopup="dialog"
      >
        <span className="block aspect-video w-full overflow-hidden border-b border-rule">
          <img
            src={project.image}
            alt=""
            className={`h-full w-full object-cover ${project.imagePosition ?? 'object-center'}`}
            loading="lazy"
          />
        </span>
        <span className="flex flex-1 flex-col p-5">
          <span className="text-[1.2rem] font-bold leading-tight tracking-tight transition-colors group-hover:text-butter">
            {project.title}
          </span>
          <span className="mt-1.5 block text-[0.95rem] leading-snug text-ink-2">{project.shortDescription}</span>
          <span className="mt-auto block pt-4">
            <SkillIcons skills={project.skills} />
          </span>
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
  <section id="projects" className={sectionClass}>
    <SectionHeading accent="butter" lede="Some of the cool projects I've built over the years! Select a card for details and links.">
      Projects
    </SectionHeading>

    <ul className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </ul>
  </section>
);

export default Projects;
