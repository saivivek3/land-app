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
        brandPrimary: '#F9F5FF',
        brandSecondary: '#f4ebff',

        disabledlight: '#FAFAFA',
        disabledDark: '#D5D7DA',
        bSecondary: '#E9EAEB',
        active: '#fafafa',
      },
      boxShadow: {
        customBoxShadow: '0px 1px 2px 0px #0A0D12',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
