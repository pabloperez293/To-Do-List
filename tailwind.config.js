/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4299E1",
        secondary: "#E53E3E",
      },
      container: {
        center: true,
        padding: {
          DEFAULLT: "1rem",
          sm: "3rem",
        },
      },
      fontFamily:{
        primary: "Montserrat",
      }
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
}