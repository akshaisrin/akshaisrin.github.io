import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skillsRegistry';

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white">
      <div className="flex justify-center px-5 pt-10 pb-4 sm:pt-14 sm:pb-6" aria-hidden>
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
            Skills
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            My Tech Stack
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-gray-500 sm:mt-10 sm:text-lg">
            Languages, frameworks, and technologies I have experience with
          </p>
        </motion.div>

        <div className="flex flex-col gap-10 md:gap-12">
          {skillsData.map((category, index) => (
            <div key={index}>
              <motion.h3
                className="mb-5 font-mono text-sm uppercase tracking-[0.35em] text-gray-500 sm:text-base"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                {category.category}
              </motion.h3>

              <motion.div
                className="rounded-2xl border border-white/[0.08] bg-black p-6 transition-colors duration-200 sm:p-7"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <div className="flex flex-wrap gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-9">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: idx * 0.03 }}
                      className="group flex flex-col items-center gap-2.5"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] shadow-[0_0_0_0_transparent] transition-all duration-300 ease-out group-hover:border-violet-400/55 group-hover:bg-violet-500/[0.08] group-hover:shadow-[0_0_32px_-6px_rgba(167,139,250,0.7),0_0_56px_-10px_rgba(139,92,246,0.35),0_0_0_1px_rgba(167,139,250,0.12)] sm:h-[3.75rem] sm:w-[3.75rem]">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className={`h-9 w-9 object-contain sm:h-10 sm:w-10 ${skill.invert ? 'brightness-0 invert opacity-90' : ''}`}
                        />
                      </div>
                      <p className="text-center font-mono text-xs text-gray-500">{skill.name}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
