/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{ 
        primary:"#08E4FF",
        secondary:"#352CFE"
      },
      screens:{
        xs:"310px"
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-animated')
  ],
  daisyui: {

    themes:[
      'light'
    ]

  }
}
