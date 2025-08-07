/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: '#0f0f0f',
        accent: '#1e1e1e', // soft dark gray for depth
      },
    },
  },
  plugins: [],
};
