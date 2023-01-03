/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        background: "#051026",
        add: "#276db9",
        multiply: "#f26513",
        all: "#563b8d",
      },
    },
  },
  plugins: [],
};
