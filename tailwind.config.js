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
        primary: "#0993BC",
        secondary: "#FF1633",
      },
      container: {
        center: true,
        padding: {
          DEFAULLT: "1rem",
          sm: "3rem",
        },
      },
      fontFamily:{
        jersey:['Jersey 15', 'sans-serif'],
      }
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
}