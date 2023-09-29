/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        baloo: ['"Baloo 2"', 'cursive'],
      },
      colors: {
        purple: 'rgba(var(--purple))',
        'purple-dark': 'rgba(var(--purple-dark))',
        'purple-light': 'rgba(var(--purple-light))',
        'yellow-dark': 'rgba(var(--yellow-dark))',
        'yellow-light': 'rgba(var(--yellow-light))',
      },
      backgroundImage: {
        'home-section': "url('/src/assets/home-background.png')",
      },
    },
  },
  plugins: [],
}
