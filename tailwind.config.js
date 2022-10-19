/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#FF385C",
      secondary: "#ecc94b",
      black: "#222222",
      white: "#fff",
    },
    extend: {
      fontFamily: {
        circular: ["Circular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
