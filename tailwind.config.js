import daisyui from "daisyui"

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
          '0%': { opacity: 0, transform: 'scale(1)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        },
        'close-menu': {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 0, transform: 'scale(.95)' }
        },
      },
      animation: {
        'open-menu': 'open-menu 200ms ease-out',
        'close-menu': 'close-menu 100ms ease-in',
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

