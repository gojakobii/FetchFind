/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-texture': "url('./assets/footer-background.jpg')",
        'login': "url('./assets/home-everyday-delight.png')"
      }
    },
  },
  plugins: [],
}

