/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#4CAF50", // richGreen
          secondary: "#FFD700", // goldenYellow
          accent: "#5D92BA", // dustyBlue
          neutral: "#333333", // charcoalGray
          "base-100": "#FFFFFF", // softWhite
          error: "#8B0000", // maroon
      },
      fontFamily:{
        Montserrat: ["Montserrat", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],

      }
    },
  },
  plugins: [require('daisyui'),],
}


