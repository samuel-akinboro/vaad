/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      black: ["black"],
      extrabold: ["extrabold"],
      bold: ["bold"],
      semibold: ["semibold"],
      medium: ["medium"],
      base: ["base"],
      light: ["light"]
    },
    extend: {
      colors: {
        primary: '#0177AB',
        black: '#000929',
        gray: '#6B7280',
        gray2: '#9A9EA7',
        gray3: '#E0DEF7',
        red: '#E8505B'
      }
    },
  },
  plugins: [],
}