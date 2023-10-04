/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{ 
        primary:"#2f05ff",
        secondary:"#08e3ff",
        tres:'#7644fc',
        gris:"#1d1d1b",
        
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
