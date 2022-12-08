/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,jpg}",
  ],
  theme: {
    extend: {
      fontFamily: {
        HanaleiFill: ['Hanalei Fill'],
        Comfortaa : ['Comfortaa']
      },
    },
  },
  plugins: [],
}