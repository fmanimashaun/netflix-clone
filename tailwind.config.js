/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderColor: ['active'], // Enable the active variant for borderColor utilities
      borderWidth: ['active'], // Enable the active variant for borderWidth utilities
    },
  },
  plugins: [],
};
