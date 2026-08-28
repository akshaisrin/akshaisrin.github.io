export const RESUME_URL = require('../assets/files/Akshai Srinivasan- Resume.pdf');

// Joint angles in degrees: [J1 base roll, J2 shoulder, J3 elbow, J4 forearm roll, J5 wrist, J6 flange roll].
export const HERO_POSE = [0, 28, 38, 0, 24, 0];

export const SECTIONS = [
  { id: 'hero', label: 'Home', pose: HERO_POSE },
  { id: 'about', label: 'About', pose: [35, 12, 26, 0, 52, 0] },
  { id: 'experience', label: 'Experience', pose: [0, 52, 14, 0, 4, 0] },
  { id: 'projects', label: 'Projects', pose: [0, 30, 84, 0, -24, 0] },
  { id: 'skills', label: 'Skills', pose: [0, 18, 62, 90, 32, 0] },
  { id: 'resume', label: 'Resume', pose: [0, 44, 50, 0, 64, 0], href: RESUME_URL },
  { id: 'contact', label: 'Contact', pose: [0, 66, 20, 0, 4, 180] },
];

export const SCROLL_SECTION_IDS = SECTIONS.filter((s) => !s.href).map((s) => s.id);

export function poseFor(id) {
  return SECTIONS.find((s) => s.id === id)?.pose ?? HERO_POSE;
}
