/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors:{
        primary:'#00040f',
        secondary: '#00f6ff',
        dimWhite: 'rgba(255,255,255,.7)',
        dimBlue: 'rgba(9,151,124,.1)',
      },
      fontFamily:{
        poppins: ["poppins",'sans-serif']
      },
      ringColor:{
        'blue-gradient': `background: linear-gradient(157.81deg,#def9fa -43.27%,#bef3f5 -21.24%,#9dedf0 12.19%,#7de7eb 29.82%,#5ce1e6 51.94%,#33bbcf 90.29%)`
      }
    },
    screens:{
      xs:"480px",
      ss: "620px",
      sm:'768px',
      md:'1060px',
      lg: '1200px',
      xl: '1700px',
    }
  },
  plugins: [],
}
