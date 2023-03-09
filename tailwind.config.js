/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '0px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      'color': '#27E2B6',
      'black': '#050D18',
      'white': '#FBFBFB',
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'sans-serif'],
      serif: ['ui-serif', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
