/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#d1dadb",
        plus: "#276db9",
        multiply: "#f26513",
        all: "#563b8d"
      }
    },
  },
  plugins: [],
}