import React from 'react';
import profileImage from '../assets/images/pfp.jpg';
import SectionHeading from './SectionHeading';

const About = () => (
  <section id="about" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
    <SectionHeading>About</SectionHeading>

    <div className="flex flex-col gap-8 text-[1.0625rem] leading-relaxed md:flex-row md:items-start md:gap-14">
      <figure className="m-0 shrink-0 md:order-2">
        <img
          src={profileImage}
          alt="Akshai Srinivasan"
          width="220"
          height="220"
          className="h-44 w-44 border border-ink object-cover md:h-56 md:w-56"
        />
      </figure>
      <div className="min-w-0 max-w-measure space-y-5 md:order-1 md:flex-1">
        <p>
          Hey! I'm Akshai! I'm an undergrad at the University of Washington double majoring in computer
          engineering and applied math. I'm interested in robot learning, deep learning, physical AI, and robotics.
        </p>
        <p>
          My prior experience spans ROS visualization for Cruise's autonomous vehicles, controls software for
          a medical robotics company, and sim2real reinforcement learning research at the University of Washington.
          Outisde of this, I also serve as the Director of Technology for DubHacks, where I'm overseeing the
          technical infrastructure for the largest collegiate hackathon in the Pacific Northwest!
        </p>
        <p>
          In my free time, I enjoy working out, playing retro video games, and hunting for the best boba in
          Seattle! Feel free to reach out anytime!
        </p>
      </div>
    </div>
  </section>
);

export default About;
