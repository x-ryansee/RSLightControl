/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // You can add custom colors/fonts here if you want to match your brand
      colors: {
        dark: "#0d0d0d", // example dark background
        accent: "#1a1a1a" // example accent/shadow color
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography') // 👈 Added plugin here
  ],
}
