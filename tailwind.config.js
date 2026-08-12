/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        navyDeep: "#0d2136",
        navy: "#064163",
        navySurface: "#1b3a55",
        navyLine: "#2a4a68",

        orange: "#E69158",
        orangeDim: "#c96a2e",

        cyan: "#7de0db",

        offWhite: "#f4f1eb",
        offWhiteDim: "#c7d2db",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
};