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
        primary: "",
        secondary: "",
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