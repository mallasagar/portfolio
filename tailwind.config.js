/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js" ],
  
  theme: {
    extend: {
      colors: {
        skyabove:'#01a3f7',
        skymiddle:'#6ce9ff',
        seasurface:'#87e6f5',
        sealevel: '#ace2fc',
        twilightzone:'#7cbddd',
        darkzone:'#5690af',
        depthzone:'#176482',
        trenchzone:'#2a4c77',
        groundlevel:'#12263F'

      },
    },
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}

