/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffffcc',
          yellow:'#FDDA24',
          dark: '#403F45',
          white: '#FFFFFF',
          grey: "#C5C1C0",
          bgColor: '#222223',
        },
        secondary: {
          light: '#FDEC00',
          dark: '#403F45',
          white: '#FFFFFF',
          grey: "#C5C1C0",
          textColor: '#0A1612',
        },
      },
    },
  },
  plugins: [],
}

