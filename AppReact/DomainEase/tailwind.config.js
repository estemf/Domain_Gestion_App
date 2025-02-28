/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        afacad: ["Afacad", "sans-serif"], // Ajout de la police "Afacad"
      },
      colors: {
        primary: "#2F4858",
        secondary: "#305269",
        tertiary: "#4FCCF6",
        tertiary_dark: "#309bbf",
        background: "#17375E",
        accent: "#F6AE2D",
        accent_dark: "#cb8d1f",
      },
    },
  },
  plugins: [],
};
