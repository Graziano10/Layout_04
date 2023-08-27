/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "300px",

      s: "548px",

      md: "768px",

      mdd: "857px",

      x: "1025px",

      xl: "1280px",

      "2xl": "1451px",
    },
    extend: {
      colors: {
        primary: "#72383d", // Bordeaux
        secondary: "#AC9C8D", // Marron
        tertiary: " #322D29", // black footer
        fourth: "  #ffff", // white
        invert: " #72383d", // red
      },
    },
  },
  plugins: [],
};
