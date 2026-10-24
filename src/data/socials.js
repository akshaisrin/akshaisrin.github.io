import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_URL } from './sections';

export const EMAIL = 'akshai.n.srinivasan@gmail.com';

// Contact links shared by the hero and the contact section.
export const SOCIALS = [
  { Icon: Mail, href: `mailto:${EMAIL}`, label: 'Email' },
  { Icon: Github, href: 'https://github.com/akshaisrin', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/akshaisrin', label: 'LinkedIn' },
  { Icon: FileText, href: RESUME_URL, label: 'Resume (PDF)' },
];
