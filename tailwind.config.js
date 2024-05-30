/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'custom-green': '#16a34a',
      },
      keyframes: {
        'open-menu': {
          '0%': {'transform': 'opacity: 0 scale(.95)'}},
          '100%': {'transform': 'opacity: 1 scale(1)'}
        },
        'close-menu': {
          '0%': {'transform': 'opacity: 1 scale(1)'},
          '100%': {'transform': 'opacity: 0 scale(.95)'}
        },
      },
      animation: {
        'open-menu': 'open menu 100ms ease-out',
        'close-menu': 'close menu 75ms ease-in',
      }
    },
  plugins: [],
}

