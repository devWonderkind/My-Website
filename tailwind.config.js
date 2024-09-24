/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-inset': 'inset 110px 0px 45px -38px rgba(74,74,74,0.76)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #24243e, #302b63, #0f0c29)',
        'custom-gradient-2': 'linear-gradient(to right, #243B55, #141E30)',
        'custom-gradient-3': 'linear-gradient(to right, #0A0F22, #1D2233)',
      },
      
    },
  },
  plugins: [],
}

