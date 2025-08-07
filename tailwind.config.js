
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f0f0f',       // Jet black background
        accent: '#1e1e1e',     // Subtle card/section color
        spotlight: '#f5f5f5',  // Light used for glowing/spotlight text if needed
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      dropShadow: {
        glow: '0 0 10px rgba(255, 255, 255, 0.1)',
        subtle: '0 2px 4px rgba(0, 0, 0, 0.5)',
      },
      boxShadow: {
        insetLight: 'inset 0 0 40px rgba(255, 255, 255, 0.05)',
        cardGlow: '0 8px 30px rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
};
