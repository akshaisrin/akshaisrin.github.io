import React, { useEffect, useState } from 'react';
import sunsetCrew from '../assets/images/about/sunset-crew.jpg';
import kamakuraBuddha from '../assets/images/about/kamakura-buddha.jpg';
import groupOuting from '../assets/images/about/group-outing.jpg';
import lakeDay from '../assets/images/about/lake-day.jpg';
import dubhacksTeam from '../assets/images/about/dubhacks-team.jpg';
import huskyGame from '../assets/images/about/husky-game.jpg';
import useMediaQuery from '../hooks/useMediaQuery';
import SectionHeading, { sectionClass } from './SectionHeading';

// Slideshow order. `ratio` is the photo's width / height; `view` shows it at a different shape (a crop), `fit`
// aims that crop, and `zoom` scales the photo up inside its frame around `focus`.
const photos = [
  { src: sunsetCrew, alt: 'Akshai with friends at sunset', ratio: 1400 / 788, view: 1.65, fit: 'object-left' },
  { src: kamakuraBuddha, alt: 'Akshai in front of the Great Buddha of Kamakura', ratio: 847 / 1303, fit: 'object-[center_8%]', zoom: 1.06, focus: '0% 0%' },
  { src: groupOuting, alt: 'Akshai with a group of friends outside The Martin', ratio: 1400 / 892, zoom: 1.15, focus: '50% 60%' },
  { src: lakeDay, alt: 'Akshai with friends by a lake', ratio: 1400 / 1050, view: 1.24, fit: 'object-left' },
  { src: dubhacksTeam, alt: "The DubHacks '25 organizing team", ratio: 1060 / 831 },
  { src: huskyGame, alt: 'Akshai with friends at a Husky football game', ratio: 1400 / 1274 },
];

const SLIDE_MS = 4000;
// Tall photos show no narrower than this (width / height), so they aren't dwarfed by the wide ones.
const MIN_RATIO = 0.85;

// One photo at a time, crossfading on its own; hovering pauses it, and reduced motion turns autoplay off.
const PhotoFlipper = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    if (paused || reduceMotion) return undefined;
    const id = setTimeout(() => setIndex((i) => (i + 1) % photos.length), SLIDE_MS);
    return () => clearTimeout(id);
  }, [index, paused, reduceMotion]);

  // The frame takes each photo's own shape, as large as fits the photo area (a size container, so cqw/cqh are
  // its width and height). From md up that area stretches to the bio's height, so the dots land on its last line.
  const ratio = Math.max(photos[index].view ?? photos[index].ratio, MIN_RATIO);

  return (
    <figure
      className="m-0 flex w-full shrink-0 flex-col [--box:min(22rem,calc(100vw_-_2.5rem))] md:order-2 md:w-[26rem] lg:w-[30rem]"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <div className="flex h-[var(--box)] w-[var(--box)] items-end justify-center [container-type:size] md:h-auto md:min-h-0 md:w-full md:flex-1">
        <div
          className="relative overflow-hidden rounded-2xl border-4 border-ink bg-surface shadow-[6px_6px_0_0_var(--blue)] transition-[width,height] duration-500 ease-out"
          style={{ width: `min(100cqw, 100cqh * ${ratio})`, height: `min(100cqh, 100cqw / ${ratio})` }}
        >
          {photos.map(({ src, alt, fit = 'object-center', zoom, focus }, i) => (
            <img
              key={src}
              src={src}
              alt={i === index ? alt : ''}
              aria-hidden={i !== index}
              loading={i === 0 ? 'eager' : 'lazy'}
              style={zoom ? { transform: `scale(${zoom})`, transformOrigin: focus } : undefined}
              className={`absolute inset-0 h-full w-full object-cover ${fit} transition-opacity duration-500 ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="mt-4 flex w-[var(--box)] justify-center gap-2 md:w-full" role="group" aria-label="Choose a photo">
        {photos.map(({ alt }, i) => (
          <button
            key={alt}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1}: ${alt}`}
            aria-current={i === index ? 'true' : undefined}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-blue' : 'w-2.5 bg-rule-2 hover:bg-ink-3'
            }`}
          />
        ))}
      </div>
    </figure>
  );
};

const About = () => (
  <section id="about" className={sectionClass}>
    <SectionHeading>About</SectionHeading>

    <div className="flex flex-col gap-10 text-[1.0625rem] leading-relaxed md:flex-row md:items-stretch md:gap-16">
      <PhotoFlipper />
      <div className="min-w-0 max-w-measure space-y-5 text-ink-2 md:order-1 md:flex-1">
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
