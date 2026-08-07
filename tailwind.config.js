/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],

  theme: {
    extend: {

      colors: {

        primary: "#0B5ED7",

        secondary: "#003B73",

        lightBlue: "#EAF4FF",

        lightGray: "#F5F7FA",

        text: "#1E293B",

        white: "#FFFFFF",

      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      boxShadow: {

        card: "0 10px 30px rgba(0,0,0,.08)",

        hover: "0 15px 40px rgba(11,94,215,.15)",

      },

      transitionDuration: {
        400: "400ms",
      }

    },
  },

  plugins: [],
}