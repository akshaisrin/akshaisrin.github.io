export const RESUME_URL = require('../assets/files/Akshai Srinivasan- Resume.pdf');

// `icon` is what the hero's pixel grid draws while that nav link is hovered or focused.
export const SECTIONS = [
  { id: 'about', label: 'About', icon: 'uw' },
  { id: 'experience', label: 'Experience', icon: 'car' },
  { id: 'projects', label: 'Projects', icon: 'duck' },
  { id: 'skills', label: 'Skills', icon: 'pad' },
  { id: 'contact', label: 'Contact', icon: 'dh' },
];

export const SCROLL_SECTION_IDS = ['hero', ...SECTIONS.map((s) => s.id)];
