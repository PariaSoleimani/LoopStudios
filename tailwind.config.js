/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '810px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
      alata: ['Alata'],
    },
    extend: {},
  },
  plugins: [],
};
