/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-blue-left': '#EAF3FC',
        'bg-blue-right': '#F2F7FC',
        'primary-color-r': '#EB1801',
        'primary-color-l': '#FE5542',
        'text-grey': '#798297',
        'text-black': '#2B3241',
        facebook: '#1877F2',
        instagram: {
          100: '#F58529',   // Lightest Shade
        },
        twitter: '#0F141A'
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'big-title': '2.5rem'
      },
      boxShadow: {
        'primary-button': '1px 2px 2px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}

