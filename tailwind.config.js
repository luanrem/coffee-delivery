/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['"Baloo 2"', 'cursive'],
        roboto: ['Roboto', 'system-ui', 'sans-serif'],
      },
      colors: {
        'purple-dark': '#4B2995',
        purple: '#8047F8',
        'purple-light': '#EBE5F9',
        'yellow-dark': '#C47F17',
        yellow: '#DBAC2C',
        'yellow-light': '#F1E9C9',
        'base-card': '#F3F2F2',
        'base-text': '#574F4D',
        'base-label': '#8D8686',
        'base-subtitle': '#403937',
        'base-title': '#272221',
        'base-button': '#E6E5E5',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      lineHeight: {
        '2xs': '1rem',
      },
      backgroundImage: {
        'home-section': "url('/src/assets/home-background.png')",
      },
      width: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
      },
    },
  },
  plugins: [],
}
