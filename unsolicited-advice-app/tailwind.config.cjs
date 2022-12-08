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
        Barriecito : ['Barriecito'],
        Barrio: ['Barrio'],
        PatrickHand: ['Patrick Hand'],
        Gaegu: ['Gaegu'],
        PatrickHandSC: ['Patrick Hand SC'],
        WalterTurncoat: ['Walter Turncoat']
      },
      backgroundImage: {
        'trash': "url('./src/images/trash.jpg')"
      }
    },
  },
  plugins: [],
}