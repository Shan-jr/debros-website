/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
   boxShadow: {
  redglow: '0 0 8px #ff0000',
}
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        alexandria: ['"Alexandria"', 'sans-serif'],
        anton: ['"Anton"', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'cursive'],
        inter: ['"Inter"', 'sans-serif'],
        spartan: ['"League Spartan"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        noto: ['"Noto Sans"', 'sans-serif'],
        arabic: ['"Noto Sans Arabic"', 'sans-serif'],
        orbitron: ['"Orbitron"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        playwrite: ['"Playwrite HU"', 'sans-serif'],
        public: ['"Public Sans"', 'sans-serif'],
        quicksand: ['"Quicksand"', 'sans-serif'],
        rubik: ['"Rubik"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

