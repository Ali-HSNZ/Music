/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
