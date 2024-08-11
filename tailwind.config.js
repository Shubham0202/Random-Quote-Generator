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
    keyframes: {
      shake: {
        '0%, 100%': { transform: 'rotate(0deg)' },
        '10%, 30%, 50%, 70%, 90%': { transform: 'rotate(-10deg)' },
        '20%, 40%, 60%, 80%': { transform: 'rotate(10deg)' },
      },
    },
    animation: {
      'bell-shake': 'shake 2s ease-in-out 1',
    },
  },
  plugins: [],
}

