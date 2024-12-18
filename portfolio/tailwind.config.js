/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        glow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)",
      },
      animation: {
        glow: 'glow 3s infinite alternate',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px #00bfff, 0 0 10px #00bfff, 0 0 15px #00bfff' },
          '50%': { boxShadow: '0 0 20px #00bfff, 0 0 30px #00bfff, 0 0 40px #00bfff' },
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],  // Friendly sans-serif
        serif: ['Playfair Display', 'Georgia', 'serif'],  // Elegant serif font
        bold: ['Montserrat', 'Arial', 'sans-serif'], // Bold and clean sans-serif
      },
      colors: {
        'electric-blue': '#00FFFF',
      },
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hover-glow:hover": {
          textShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)",
        },
      });
    },
  ],
};
