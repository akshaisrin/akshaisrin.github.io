import React, { useState } from 'react';
import DubHacksImage from '../assets/images/DubHacks.jpg';
import NeptuneImage from '../assets/images/Neptune.jpeg';
import TCALogo from '../assets/images/TCALogo.png';
import AllenLogo from '../assets/images/allen.jpg';
import GMLogo from '../assets/images/gm.jpg';
import SectionHeading from './SectionHeading';
import DetailSheet, { Bullets, StackList } from './DetailSheet';

const experience = [
  {
    company: 'General Motors: Cruise',
    position: 'Software Engineering Intern',
    year: 'June 2026 – Sep 2026',
    location: 'Sunnyvale, CA',
    summary: 'AV infrastructure and ROS visualization for Super Cruise',
    description: `Developed autonomous vehicle infrastructure for a web-based platform visualizing multi-source ROS data streams
                  Engineered a diagnostic telemetry tool that generates failure reports, provisions GCS buckets via Terraform for log retention, and dispatches Slack alerts for developer triage
                  Shipped 4 features streamlining topic tree navigation for 800+ users, including availability filtering for node inputs based on ROS bag contents`,
    skills: ['TypeScript', 'ROS', 'GCP', 'Terraform', 'Git'],
    image: GMLogo,
  },
  {
    company: 'Washington Embodied Intelligence and Robotics Development Lab',
    position: 'Undergraduate Research Assistant',
    year: 'Feb 2026 – June 2026',
    location: 'Seattle, WA',
    summary: 'Sim2real reinforcement learning for robotic manipulators',
    description: `Trained sim2real reinforcement learning policies for zero-shot transfer of contact-rich robotic assembly tasks
                  Leveraged PPO and asymmetric actor-critic setup in Isaac Sim to train MLP policy networks on history-conditioned observation spaces
                  Scaled domain randomization across aggressive physical dynamics, leveraging curriculum learning, ADR, and LSTM architectures to stabilize policy convergence`,
    skills: ['Python', 'PyTorch', 'Isaac Lab', 'NVIDIA Omniverse', 'WandB'],
    image: AllenLogo,
  },
  {
    company: 'DubHacks',
    position: 'Director of Technology',
    year: 'Jan 2025 – Present',
    location: 'Seattle, WA',
    summary: 'Full-stack infrastructure for the largest collegiate hackathon in the PNW',
    description: `Overseeing full-stack infrastructure for the largest collegiate hackathon in the Pacific Northwest (1200+ hackers/judges) using FastAPI, Next.js, TypeScript, and React
                  Built FastAPI judging platform with OAuth2 infrastructure, utilizing WebSockets and event-driven architecture to achieve <100 ms tracking for 150+ live sessions
                  Architected production MongoDB cluster handling 376K edge requests and 122K serverless function invocations for peak hackathon traffic with zero downtime
                  Designed sentiment analysis engine with proprietary ranking algorithm to evaluate 1,800+ applications, achieving 99% reduction in manual review time`,
    skills: ['FastAPI', 'Next.js', 'React.js', 'TypeScript', 'MongoDB', 'Tailwind.css', 'WebSockets'],
    image: DubHacksImage,
  },
  {
    company: 'UW Technology Consulting Association',
    position: 'President and Co-Founder',
    year: 'Jan 2025 – Mar 2026',
    location: 'Seattle, WA',
    summary: "The UW's first ML consultancy",
    description: `Founded and leading a 40+ member student organization to deliver AI-driven tech solutions for businesses
                  Built pipeline of 6 active client projects within 3 months, including computer vision analytics for regional bagel chain and cloud infrastructure migration for municipal fire department
                  Developed agentic AI outreach bot that utilizes the Anthropic/Claude API to discover and initiate first-level sales funnel contact with potential clients (2000+ leads)
                  Drove corporate engagement and event strategy by partnering with companies including OpenAI, Meta, Microsoft, Bain & Co., Liberty Global, Deloitte, Accenture, and the Seattle Mariners
`,
    skills: ['Python', 'Claude API'],
    image: TCALogo,
  },
  {
    company: 'Neptune Medical',
    position: 'Robotic Software Engineering Intern',
    year: 'Jun 2025 – Sep 2025',
    location: 'Burlingame, CA',
    summary: 'Controls and fault detection for robotic endoscopy',
    description: `Implemented control systems software for robotic endoscope using ROS and Python, orchestrating communication between controllers, sensors, and actuators
                  Built C++ fault detection framework for haptic input device with automatic failsafe protocols, preventing unsafe robot operations during live procedures
                  Designed tendon saturation algorithm with integrated haptic feedback that dynamically generates resistive forces when tendons reach operational limits, preventing mechanical damage to endoscope
                  Collaborated across engineering teams using Agile/Scrum workflows, maintaining sprint documentation in Jira and technical specs in Confluence`,
    skills: ['C++', 'Python', 'ROS2', 'Git'],
    image: NeptuneImage,
  },
];

const ExperienceRow = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="border-b border-rule">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group grid w-full grid-cols-[3.5rem_1fr] gap-x-5 gap-y-1 py-6 text-left sm:grid-cols-[4.5rem_1fr]"
        aria-haspopup="dialog"
      >
        <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl sm:h-[4.5rem] sm:w-[4.5rem]">
          <img src={item.image} alt="" className="h-full w-full object-contain" />
        </span>
        <span className="min-w-0">
          <span className="block font-cad text-[1.2rem] leading-tight tracking-wide group-hover:text-signal-ink sm:text-[1.3rem]">
            {item.company}
          </span>
          <span className="mt-0.5 block text-ink-2">{item.position}</span>
          <span className="tnum mt-1 block font-mono text-[0.8rem] text-ink-3">
            {item.year} · {item.location}
          </span>
          <span className="mt-3 block max-w-measure text-[0.95rem] leading-relaxed text-ink-2">{item.summary}</span>
        </span>
      </button>

      <DetailSheet
        open={open}
        onClose={() => setOpen(false)}
        title={item.company}
        subtitle={item.position}
        meta={`${item.year} · ${item.location}`}
      >
        <Bullets text={item.description} />
        <StackList items={item.skills} />
      </DetailSheet>
    </li>
  );
};

const Experience = () => (
  <section id="experience" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
    <SectionHeading lede="My internship/work experience and other notable opportunities I've participated in! Click on any tile for more information!">
      Experience
    </SectionHeading>
    <ul className="m-0 list-none p-0">
      {experience.map((item) => (
        <ExperienceRow key={item.company} item={item} />
      ))}
    </ul>
  </section>
);

export default Experience;
