/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors : {
        mainBgColor : "#1E1E1E",
        secondBgColor : "#33373B",
        yellow : "#FACD66",
        mainColor : "#EFEEE0",
        secondColor : "#ffffff80",
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
