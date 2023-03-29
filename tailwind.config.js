/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        mainBg : "#1E1E1E",
        secondBg : "#33373B",
        secondBlackBg : "#141414",
        mainBlackBg : "#101010",
        yellow : "#FACD66",
        main : "#EFEEE0",
        second : "#ffffff80",
        transparent : "transparent"
      },
      fontFamily : {
        'quicksand-bold' : ['quicksand-bold'],
        'quicksand-light' : ['quicksand-light'],
        'quicksand-medium' : ['quicksand-medium'],
        'quicksand-regular' : ['quicksand-regular'],
      }
    },
  },
  plugins: [],
}
