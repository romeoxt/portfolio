/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#9aa3b5",
        tertiary: "#0f1729",
        accent: "#2DD4BF",
        "accent-dim": "#14B8A6",
        "black-100": "#0c1222",
        "black-200": "#080d18",
        "white-100": "#f3f3f3",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Syne", "sans-serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #0a1628",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.webp')",
      },
    },
  },
  plugins: [],
};
