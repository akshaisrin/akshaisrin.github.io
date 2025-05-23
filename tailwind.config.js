/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        bold: ['Montserrat', 'Arial', 'sans-serif'],
      },
      colors: {
        'electric-blue': '#00FFFF',
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
