/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-red': '#FB1807',
      },
      dropShadow: {
        '3xl': '0 25px 25px rgba(0, 0, 0, 0.5)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
    },
  },
  plugins: [],
};
