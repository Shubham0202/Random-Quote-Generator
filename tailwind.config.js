/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bodyBg:'#',
        mainBgClr: '#ffffff5a',
        buttonBgHover: '#22c55e',
      },
      backgroundImage:{
        mainBgImg: "url('assets/logo1.jpeg')",
      },
      height:{
        dvh: '100dvh',
      }
    },
  },
  plugins: [],
}

