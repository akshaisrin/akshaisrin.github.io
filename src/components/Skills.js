import React from 'react';
import { skillsData } from '../data/skillsRegistry';
import SectionHeading, { sectionClass } from './SectionHeading';

const Skills = () => (
  <section id="skills" className={sectionClass}>
    <SectionHeading lede="Languages, frameworks, and tools I have experience with.">Skills</SectionHeading>

    <div className="space-y-12">
      {skillsData.map((group) => (
        <div key={group.category}>
          <h3 className="mb-5 font-mono text-[0.8rem] uppercase tracking-[0.12em] text-ink-3">{group.category}</h3>
          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(5.5rem,1fr))] gap-x-4 gap-y-6 p-0">
            {group.skills.map((skill) => (
              <li key={skill.name} className="group flex flex-col items-center gap-2 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-rule bg-surface transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:border-blue">
                  <img
                    src={skill.image}
                    alt=""
                    className={`h-9 w-9 object-contain${skill.invert ? ' brightness-0 invert' : ''}`}
                    loading="lazy"
                  />
                </span>
                <span className="text-[0.85rem] leading-tight text-ink-2 transition-colors duration-200 group-hover:text-ink">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
