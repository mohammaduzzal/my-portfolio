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


/**
 * 

Primary Color Palette
Primary: richGreen (#4CAF50)
Use this for call-to-action buttons, links, and key highlights.
Accent: goldenYellow (#FFD700)
Use as an accent color for hover states, icons, or highlights.
Neutral: slateGray (#708090) or charcoalGray (#333333)
Use for backgrounds or cards to create contrast.
Supporting Colors
Background: softWhite (#FFFFFF)
Clean and minimal for an elegant look.
Secondary Accent: dustyBlue (#5D92BA)
Use for secondary buttons or subtle hover effects.
Error/Alert: maroon (#8B0000)
Use for error messages or warnings.

 * 
 * */ 