import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/images/pfp.jpg';

const socials = [
  { Icon: Mail, href: 'mailto:akshai.n.srinivasan@gmail.com', label: 'Email' },
  { Icon: Github, href: 'https://github.com/akshaisrin', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/akshaisrin', label: 'LinkedIn' },
];

/** Glowing ⫽ (U+2AFD) between hero role snippets (replaces |). */
const RoleSeparator = () => (
  <span
    className="relative top-[0.08em] mx-3 inline-block shrink-0 select-none align-baseline font-mono text-xl tracking-tight text-violet-400/75 [text-shadow:0_0_16px_rgba(167,139,250,0.58),0_0_32px_rgba(139,92,246,0.26)] sm:mx-4 sm:text-2xl md:text-xl lg:mx-5 lg:text-3xl xl:mx-6 xl:text-4xl"
    aria-hidden
  >
    {'\u2AFD'}
  </span>
);

const Home = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="text-white w-full" id="home">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-3 sm:px-6 pb-20 text-center overflow-hidden">

        {/* Purple / black orb field */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden>
          <div className="absolute inset-0 bg-black" />
          <div
            className="absolute inset-0 opacity-100"
            style={{
              background: `
                radial-gradient(ellipse 110% 70% at 50% 5%, rgba(76, 29, 149, 0.34) 0%, transparent 52%),
                radial-gradient(ellipse 55% 45% at 15% 75%, rgba(67, 56, 202, 0.12) 0%, transparent 50%),
                radial-gradient(ellipse 55% 45% at 88% 78%, rgba(88, 28, 135, 0.16) 0%, transparent 50%),
                radial-gradient(ellipse 90% 70% at 50% 110%, rgba(0, 0, 0, 0.95) 0%, transparent 55%)
              `,
            }}
          />

          {/* Dark "body" — heavy black orb anchoring the bottom */}
          <div className="absolute left-1/2 bottom-[-38%] h-[min(75vw,480px)] w-[min(120vw,780px)] -translate-x-1/2 rounded-[50%] bg-[#0a0512] blur-[48px] opacity-80" />

          {/* Center halo — sits behind the name block (optical center) */}
          <div className="absolute left-1/2 top-[46%] h-[min(78vw,560px)] w-[min(92vw,700px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/36 blur-[96px] animate-hero-orb-pulse motion-reduce:animate-none" />
          {/* Primary violet — upper-left, frames the headline without sitting in the far corner */}
          <div className="absolute left-[2%] top-[12%] h-[min(70vw,480px)] w-[min(70vw,480px)] rounded-full bg-violet-600/40 blur-[84px] animate-hero-blob-a motion-reduce:animate-none" />
          {/* Deep purple — lower-right anchor */}
          <div className="absolute right-[-14%] bottom-[2%] h-[min(72vw,540px)] w-[min(72vw,540px)] rounded-full bg-purple-950/64 blur-[92px] animate-hero-blob-b motion-reduce:animate-none" />
          {/* Fuchsia punch — upper-right, smaller bright spot */}
          <div className="absolute right-[10%] top-[16%] h-[min(34vw,240px)] w-[min(34vw,240px)] rounded-full bg-fuchsia-500/28 blur-[44px] animate-hero-blob-c motion-reduce:animate-none" />
          {/* Indigo — lower-left balance */}
          <div className="absolute left-[-8%] bottom-[14%] h-[min(48vw,320px)] w-[min(48vw,320px)] rounded-full bg-indigo-500/26 blur-[60px] animate-hero-blob-b motion-reduce:animate-none [animation-delay:-8s]" />

          {/* Edge vignette into true black */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 78% 68% at 50% 38%, transparent 0%, rgba(0,0,0,0.48) 68%, rgba(0,0,0,0.92) 100%)',
            }}
          />
        </div>

        <motion.div
          className="relative z-10 flex flex-col items-center gap-9 sm:gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
        >
          <motion.p
            className="font-mono text-sm sm:text-base tracking-[0.35em] uppercase text-gray-400"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            HI! I&apos;m
          </motion.p>

          {/* Name */}
          <h1
            className="font-mono font-bold leading-tight tracking-tight text-white -mt-2"
            style={{ fontSize: 'clamp(2.65rem, 5.1vw, 5.05rem)' }}
          >
            Akshai Srinivasan
          </h1>

          {/* Divider — diamond + tapering glow */}
          <motion.div
            className="flex items-center justify-center gap-3.5"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          >
            <div className="h-px w-12 sm:w-16 rounded-full bg-gradient-to-r from-transparent via-violet-400/50 to-violet-400/80" />
            <div className="h-2 w-2 shrink-0 rotate-45 bg-gradient-to-br from-violet-300 to-indigo-400 shadow-[0_0_22px_rgba(167,139,250,0.65)]" />
            <div className="h-px w-12 sm:w-16 rounded-full bg-gradient-to-l from-transparent via-violet-400/50 to-violet-400/80" />
          </motion.div>

          <div className="flex w-full max-w-full flex-col items-center gap-3 sm:gap-4">
            {/* Facts — one line from md up; wraps on small screens */}
            <motion.p
              className="font-mono text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl text-gray-400 w-full max-w-4xl text-center leading-relaxed px-1 md:max-w-none md:self-stretch md:whitespace-nowrap md:tracking-tight lg:tracking-tight"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Incoming @ General Motors
              <RoleSeparator />
              CSE + Applied Math @ UW
              <RoleSeparator />
              Director of Technology @ DubHacks
            </motion.p>

            {/* Socials */}
            <div className="mt-5 sm:mt-7 flex items-center justify-center gap-4 sm:gap-5">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-gray-400 transition-all duration-200 hover:border-violet-400/35 hover:bg-violet-500/[0.08] hover:text-violet-200 hover:shadow-[0_0_24px_-8px_rgba(167,139,250,0.5)]"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.85 + i * 0.07 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <s.Icon className="h-[26px] w-[26px]" strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          className="absolute bottom-14 left-1/2 z-10 flex w-16 -translate-x-1/2 items-center justify-center sm:bottom-16 sm:w-[4.5rem]"
          initial={{ opacity: 0 }}
          animate={
            reduceMotion
              ? { opacity: 1 }
              : { opacity: 1, y: [0, 7, 0] }
          }
          transition={
            reduceMotion
              ? { opacity: { duration: 0.5, delay: 1.1 } }
              : {
                  opacity: { duration: 0.5, delay: 1.1 },
                  y: { duration: 2.1, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
                }
          }
          aria-label="Scroll to about section"
        >
          <ChevronDown
            className="mx-auto h-11 w-11 text-violet-400 transition-colors duration-200 [filter:drop-shadow(0_0_12px_rgba(167,139,250,0.95))_drop-shadow(0_0_26px_rgba(139,92,246,0.5))] hover:text-violet-300 sm:h-12 sm:w-12"
            strokeWidth={2.35}
            aria-hidden
          />
        </motion.a>
      </div>

      {/* ── About ────────────────────────────────────────────── */}
      <section id="about" className="bg-black">
        <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:max-w-7xl lg:px-10">
          {/* Desktop — text left, photo right */}
          <div className="hidden w-full items-start justify-between gap-8 lg:flex xl:gap-12">
            <motion.div
              className="min-w-0 max-w-lg shrink pr-4 text-left xl:max-w-xl xl:pr-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                About Me
              </h2>
              <p className="mt-10 text-base leading-relaxed text-gray-400 sm:text-lg">
                Hey! I'm Akshai! I'm an undergrad at the University of Washington double majoring in
                computer engineering and applied math. I'm passionate about robotics, machine learning, and the math tying it all together.<br /><br />

                At the UW, I'm a research assistant at the WEIRD Lab, where
                I'm developing robust reinforcement learning policies for dexterous manipulation tasks. I also serve as the Director of Technology for DubHacks,
                where I'm overseeing the technical infrastructure for the largest collegiate hackathon in the Pacific Northwest. <br /><br />


                In my free time, I enjoy working out, watching sci-fi movies and sitcoms, and hunting for the best boba in Seattle! Feel free to reach out anytime!
              </p>
            </motion.div>

            <motion.div
              className="mt-10 w-fit shrink-0 rounded-full pl-2 xl:mt-14 xl:pl-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.06 }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      scale: 1.045,
                      transition: { type: 'spring', stiffness: 380, damping: 24 },
                    }
              }
            >
              <img
                src={profileImage}
                alt="Akshai Srinivasan"
                className="h-72 w-72 rounded-full object-cover ring-2 ring-violet-400/35 ring-offset-2 ring-offset-black xl:h-80 xl:w-80"
              />
            </motion.div>
          </div>

          {/* Mobile */}
          <div className="flex flex-col items-center gap-8 text-center lg:hidden">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <h2 className="font-display text-4xl font-bold tracking-tight text-white">
                About Me
              </h2>
            </motion.div>

            <motion.img
              src={profileImage}
              alt="Akshai Srinivasan"
              className="mt-2 h-60 w-60 rounded-full object-cover ring-2 ring-violet-400/35 ring-offset-2 ring-offset-black sm:h-64 sm:w-64"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      scale: 1.045,
                      transition: { type: 'spring', stiffness: 380, damping: 24 },
                    }
              }
            />

            <p className="max-w-md text-left text-base leading-relaxed text-gray-400 sm:text-center sm:text-lg">
              Hey! I'm Akshai — an undergrad at the University of Washington double majoring in
              CSE and applied math. I'm passionate about robotics, full-stack development,
              and using AI to solve real problems at scale.<br /><br />

              At the UW, I serve as Director of Technology for DubHacks and President of the
              Technology Consulting Association. Outside of work you'll find me at the gym,
              deep in a sci-fi rabbit hole, or hunting for the best boba in Seattle.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
