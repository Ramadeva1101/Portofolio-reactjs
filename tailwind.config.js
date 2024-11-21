/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
      animation: {
        infiniteScroll: 'infiniteScroll 25s linear infinite',
        scrollX: 'scrollX 10s linear infinite',
      },
      keyframes: {
        infiniteScroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }
        },
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.gradient-heading': {
          '@apply font-heading text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-transparent bg-clip-text': {}
        }
      }
      addUtilities(newUtilities)
    }
  ],
}
