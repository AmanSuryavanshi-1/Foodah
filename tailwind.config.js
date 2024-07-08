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
          grey: "#393956",
          bgColor: '#222223',
        },
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Cinzel', 'serif'],
      },
      animation: {
        profile: 'profile__animate 8s ease-in-out infinite 1s',
      },
    },
  },
  plugins: [],
}

// container: {
//   'lg': '75%',
//   'md': '86%',
//   'sm': '90%',
// },
// boxShadow: {
//   'custom': '0px 5px 20px 0px rgba(69, 67, 96, 0.1)',
// },

// lineHeight: {
//   'tight': 1.2,
//   'normal': 1.7,
// },
// fontSize: {
//   'h1': '2.5rem',
// },