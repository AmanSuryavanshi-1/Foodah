/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FEFFD2',
          background: '#FEFFD2',
          dark: '#F36666',
        },
        secondary: {
          light: '233, 235, 158',
          background: '#DB2777',
          dark: '#BE185D',
        },
      },
    },
  },
  plugins: [],
}

