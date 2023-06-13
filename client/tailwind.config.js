/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F5385D',
      },
      fontFamily: {
        // sans: [ "Poppins", "sans-serif" ],
        default: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
