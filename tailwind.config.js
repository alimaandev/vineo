/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#0A0A0C",
        card: "#121216",

        text: {
          primary: "#F4F4F6",
          secondary: "#8A8A93",
        },

        border: "#222227",

        accent: {
          cyan: "#00F0FF",
          violet: "#9D4EDD",
        },
      },
    },
  },

  plugins: [],
};