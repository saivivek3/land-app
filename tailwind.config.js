/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bPrimary: '#D5D7DA',
        primary: '#181D27',
        secondary: '#414651',
        tertiary: '#535862',
        quaternary: '#717680',
        bQuinary: '#A4A7AE',
        blightMode: '#F5F5F5',
        buttonPrimary: 'rgba(127, 86, 217, 1)',
        buttontertiary: '#6941C6',
        brandTertiary: '#7F56D9',
        customBlue: '#026AA2',
        brandPrimary: '#F9F5FF',
        brandSecondary: '#f4ebff',

        disabledlight: '#FAFAFA',
        disabledDark: '#D5D7DA',
        bSecondary: '#E9EAEB',
        active: '#fafafa',
      },
      boxShadow: {
        customBoxShadow:
          'box-shadow: 0 4px 4px -2px rgba(10, 13, 18, 0.04), 0 24px 48px -12px rgba(10, 13, 18, 0.18);',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
