/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'nunito': ['Nunito Sans', 'sans-serif']
      },
      colors:{
        'txtGreen': '#22495F',
        'bgGray': '#E7F2F7'
      },
      backgroundImage: {
        'ctaBg': "url('/src/assets/ctabg.png')"
      }
    },
  },
  plugins: [],
}

