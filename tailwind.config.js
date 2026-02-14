/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1C2D",
        gold: "#D4AF37",
        "navy-light": "#1A2F3F",
        "gold-light": "#E5C55C",
      },
      fontFamily: {
        arabic: ['"Amiri"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      animation: {
        "crescent-glow": "glow 3s ease-in-out infinite",
        "fade-in": "fadeIn 1s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        glow: {
          "0%, 100%": { opacity: 0.6, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.05)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}