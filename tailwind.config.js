/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Playfair': ['"Playfair Display"', 'serif'],
      },
      aspectRatio: {
        'square': '1 / 1', // Adds an aspect ratio of 1:1
      },
      keyframes: {
        bounce: {
          '0%, 100%': { bottom: '0%' },
          '50%': { bottom: '5%' },
        },
      },
      animation: {
        'bounce-smooth': 'bounce 1s cubic-bezier(0.3, 1.2, 0.3, 1) infinite', // Smoother bounce effect
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // Add the plugin here
  ],
}
