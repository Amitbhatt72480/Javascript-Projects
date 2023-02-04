/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*', './src/**/*.{html,js}',
  './components/**/*.{html,js}',],
  theme: {
    extend: {
      colors:{
        'mycolor':'#f542e3'
      },
      fontFamily:{
        'custom':'Bai Jamjuree'
      }
    },
  },
  plugins: [],
}
