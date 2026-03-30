import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const iconBtnClass =
  'group flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-gray-400 transition-all duration-200 hover:border-violet-400/35 hover:bg-violet-500/[0.08] hover:text-violet-200 hover:shadow-[0_0_24px_-8px_rgba(167,139,250,0.5)]';

const Footer = () => {
  const links = [
    {
      Icon: Mail,
      href: 'mailto:akshai.n.srinivasan@gmail.com',
      label: 'Email',
      external: false,
    },
    {
      Icon: Github,
      href: 'https://github.com/akshaisrin',
      label: 'GitHub',
      external: true,
    },
    {
      Icon: Linkedin,
      href: 'https://www.linkedin.com/in/akshaisrin',
      label: 'LinkedIn',
      external: true,
    },
  ];

  return (
    <footer className="bg-black text-white">
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.09] to-transparent"
        aria-hidden
      />
      <div className="flex justify-center px-5 pt-12 pb-6 sm:pt-16 sm:pb-8" aria-hidden>
        <div className="flex max-w-[min(96vw,72rem)] items-center gap-3.5">
          <div className="h-px min-w-[4.5rem] flex-1 rounded-full bg-gradient-to-r from-transparent via-violet-400/40 to-violet-400/70 sm:min-w-[6rem] md:min-w-[8rem]" />
          <div className="h-2 w-2 shrink-0 rotate-45 bg-gradient-to-br from-violet-300 to-indigo-400 shadow-[0_0_16px_rgba(167,139,250,0.55)]" />
          <div className="h-px min-w-[4.5rem] flex-1 rounded-full bg-gradient-to-l from-transparent via-violet-400/40 to-violet-400/70 sm:min-w-[6rem] md:min-w-[8rem]" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-5 pb-16 sm:px-6 sm:pb-20 lg:max-w-6xl lg:px-8">
        <motion.div
          className="mx-auto flex max-w-xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contact Me
          </h2>
          <p className="mt-8 text-base leading-relaxed text-gray-500 sm:mt-10 sm:text-lg">
            I'm always open to new opportunities and collaborations! Feel free to reach out anytime!
          </p>

          <motion.nav
            className="mt-8 flex items-center justify-center gap-4 sm:mt-10 sm:gap-5"
            aria-label="Contact links"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            {links.map(({ Icon, href, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className={iconBtnClass}
              >
                <Icon className="h-[26px] w-[26px]" strokeWidth={1.5} />
              </a>
            ))}
          </motion.nav>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
