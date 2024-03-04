/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'avengers' : "url('./src/assests/Images/extracted avengers 1.png')"
      }
    },
  },
  plugins: [],
}

