/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'netflix': "url('/src/assets/img/background-img.jpg')",
      }
    },
  },
  plugins: [],
};
