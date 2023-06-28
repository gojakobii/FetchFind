/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-texture': "url('./assets/footer-background.jpg')",
        'footer-logo': "url('./assets/footer-logo.svg')",
        'background': "url('./assets/home-everyday-delight.png')"
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'lexend': ['Lexend', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ],
}

