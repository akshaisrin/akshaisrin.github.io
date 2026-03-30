export const skillsData = [
  {
    category: 'Languages & tools',
    skills: [
      { name: 'Python', image: require('../assets/images/skills/python.png') },
      { name: 'C++', image: require('../assets/images/skills/cpp.png')},
      { name: 'TypeScript', image: require('../assets/images/skills/typescript.png') },
      { name: 'JavaScript', image: require('../assets/images/skills/js.png') },
      { name: 'Java', image: require('../assets/images/skills/java.png') },
      { name: 'C#', image: require('../assets/images/skills/c-sharp.png') },
      { name: 'Dart', image: require('../assets/images/skills/dart.png') },
      { name: 'MATLAB', image: require('../assets/images/skills/matlab.png') },
      { name: 'Git', image: require('../assets/images/skills/git.png') },
    ],
  },
  {
    category: 'Machine learning & robotics',
    skills: [
      { name: 'PyTorch', image: require('../assets/images/skills/pytorch.png')},
      { name: 'Hugging Face', image: require('../assets/images/skills/hugging.png')},
      { name: 'OpenCV', image: require('../assets/images/skills/opencv.png') },
      { name: 'NumPy', image: require('../assets/images/skills/NumPy.png') },
      { name: 'Pandas', image: require('../assets/images/skills/pandas.png') },
      { name: 'ROS', image: require('../assets/images/skills/ros.jpg')},
    ],
  },
  {
    category: 'Full-stack development',
    skills: [
      { name: 'Node.js', image: require('../assets/images/skills/nodejs.png') },
      { name: 'Next.js', image: require('../assets/images/skills/nextjs.png') },
      { name: 'React.js', image: require('../assets/images/skills/react.png') },
      { name: 'Tailwind.css', image: require('../assets/images/skills/tailwind.png') },
      { name: 'FastAPI', image: require('../assets/images/skills/fastapi.png')},
      { name: 'Flutter', image: require('../assets/images/skills/flutter.png') },
    ],
  },
  {
    category: 'Cloud & databases',
    skills: [
      { name: 'AWS', image: require('../assets/images/skills/aws.png') },
      { name: 'MongoDB', image: require('../assets/images/skills/mongo.png') },
      { name: 'PostgreSQL', image: require('../assets/images/skills/postgres.png') },
      { name: 'MySQL', image: require('../assets/images/skills/mysql.png') },
      { name: 'Postman', image: require('../assets/images/skills/postman.png') },
      { name: 'Heroku', image: require('../assets/images/skills/heroku.png') }
    ],
  },
];

const flatSkills = () => skillsData.flatMap((c) => c.skills);

function findSkillByName(name) {
  return flatSkills().find((s) => s.name === name) ?? null;
}

function toMeta(skill) {
  if (!skill) return null;
  return { image: skill.image, invert: Boolean(skill.invert) };
}

export function resolveProjectSkillTag(tag) {
  const raw = tag.trim();
  if (!raw) return null;

  const p = raw.toLowerCase().normalize('NFKC');
  const flat = flatSkills();

  if (/c#|csharp/.test(p)) {
    const s = findSkillByName('C# (.NET)');
    if (s) return toMeta(s);
  }

  if (/hugging\s*face|sbert|sentence[-\s]?transformer/i.test(raw)) {
    const s = findSkillByName('Hugging Face');
    if (s) return toMeta(s);
  }

  if (/\bros2?\b/i.test(raw) || /^ros\s*$/i.test(raw.trim())) {
    const s = findSkillByName('ROS');
    if (s) return toMeta(s);
  }

  if (p === 'typescript' || p === 'tsx') {
    const s = findSkillByName('TypeScript');
    if (s) return toMeta(s);
  }

  if (p === 'tailwind css' || p.includes('tailwind')) {
    const s = findSkillByName('Tailwind.css');
    if (s) return toMeta(s);
  }

  for (const s of flat) {
    if (s.name.toLowerCase().normalize('NFKC') === p) return toMeta(s);
  }

  const byLength = [...flat].sort((a, b) => b.name.length - a.name.length);
  for (const s of byLength) {
    const n = s.name.toLowerCase().normalize('NFKC');
    if (p.includes(n)) return toMeta(s);
  }

  return null;
}

/**
 * Map a project-card skill string to the same asset used on the Skills page.
 * Returns null if there is no matching icon (caller should omit the tile).
 */
export function getSkillImageForProjectTag(tag) {
  return resolveProjectSkillTag(tag)?.image ?? null;
}
