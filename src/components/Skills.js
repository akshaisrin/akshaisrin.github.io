import React from 'react';
import { skillsData } from '../data/skillsRegistry';
import SectionHeading from './SectionHeading';

const Skills = () => (
  <section id="skills" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
    <SectionHeading lede="Languages, frameworks, and tools I have experience with.">Skills</SectionHeading>

    <div className="space-y-12">
      {skillsData.map((group) => (
        <div key={group.category}>
          <h3 className="mb-5 border-b border-rule pb-2 font-cad text-[1.05rem] uppercase tracking-widest text-ink-2">
            {group.category}
          </h3>
          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(5.5rem,1fr))] gap-x-4 gap-y-6 p-0">
            {group.skills.map((skill) => (
              <li key={skill.name} className="group flex flex-col items-center gap-2 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-xl border border-rule transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:border-signal">
                  <img
                    src={skill.image}
                    alt=""
                    className={`h-9 w-9 object-contain${skill.invert ? ' brightness-0 invert' : ''}`}
                    loading="lazy"
                  />
                </span>
                <span className="text-[0.85rem] leading-tight text-ink-2 transition-colors duration-200 group-hover:text-signal-ink">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
