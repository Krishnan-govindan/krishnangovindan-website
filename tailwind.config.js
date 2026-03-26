/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A2E",
        secondary: "#16213E",
        accent: "#C19A3E",
        cream: "#FAF3E0",
        charcoal: "#2D2D2D",
        sage: "#8AAE7E",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 2px 20px rgba(0, 0, 0, 0.06)",
        card: "0 4px 32px rgba(0, 0, 0, 0.08)",
        gold: "0 4px 24px rgba(193, 154, 62, 0.25)",
      },
    },
  },
  plugins: [],
}
