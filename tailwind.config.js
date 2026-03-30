/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'hero-blob-a': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(5%, -6%) scale(1.06)' },
          '66%': { transform: 'translate(-4%, 5%) scale(0.96)' },
        },
        'hero-blob-b': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-6%, 5%) scale(1.05)' },
          '66%': { transform: 'translate(4%, -5%) scale(0.96)' },
        },
        'hero-blob-c': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-6%, -8%) scale(1.08)' },
        },
        'hero-orb-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { opacity: '0.64', transform: 'translate(-50%, -50%) scale(1.06)' },
        },
      },
      animation: {
        'hero-blob-a': 'hero-blob-a 22s ease-in-out infinite',
        'hero-blob-b': 'hero-blob-b 30s ease-in-out infinite',
        'hero-blob-c': 'hero-blob-c 18s ease-in-out infinite alternate',
        'hero-orb-pulse': 'hero-orb-pulse 10s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      colors: {
        'electric-blue': '#00bfff',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.glow': {
          boxShadow: '0 0 5px #00bfff, 0 0 10px #00bfff, 0 0 15px #00bfff',
        },
      });
    },
  ],
};
