/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-filters")],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropFilter: ["responsive"],
    },
  },
  plugins: [],
};
