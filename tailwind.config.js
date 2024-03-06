/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container:{
      center:true,
      padding:'1rem',
      screens:{
        sm:'600px',
        md:'728px',
        lg:'1080px',
        xl:'1496px'
      }
    }
  },
  plugins: [],
}