/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Themed through CSS custom properties in src/index.css.
        bg: 'var(--bg)',
        surface: {
          DEFAULT: 'var(--surface)',
          2: 'var(--surface-2)',
        },
        ink: {
          DEFAULT: 'var(--ink)',
          2: 'var(--ink-2)',
          3: 'var(--ink-3)',
        },
        rule: {
          DEFAULT: 'var(--rule)',
          2: 'var(--rule-2)',
        },
        blue: {
          DEFAULT: 'var(--blue)',
          ink: 'var(--blue-ink)',
        },
        coral: 'var(--coral)',
        butter: 'var(--butter)',
        'on-accent': 'var(--on-accent)',
        scrim: 'var(--scrim)',
      },
      maxWidth: {
        measure: '66ch',
        page: '80rem',
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(7px)' },
        },
      },
      animation: {
        bob: 'bob 2.1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
