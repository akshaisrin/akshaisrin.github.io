/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
        cad: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
        display: ['Big Shoulders Display', 'Impact', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Themed through CSS custom properties in src/index.css (dark blueprint / light sheet).
        sheet: 'var(--sheet)',
        ink: {
          DEFAULT: 'var(--ink)',
          2: 'var(--ink-2)',
          3: 'var(--ink-3)',
        },
        rule: {
          DEFAULT: 'var(--rule)',
          2: 'var(--rule-2)',
        },
        signal: {
          DEFAULT: 'var(--signal)',
          ink: 'var(--signal-ink)',
        },
        'on-signal': 'var(--on-signal)',
        scrim: 'var(--scrim)',
        axis: {
          x: 'var(--axis-x)',
          y: 'var(--axis-y)',
          z: 'var(--axis-z)',
        },
      },
      maxWidth: {
        measure: '66ch',
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
