/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vilmaDarkBlue: "#1a288fff",
        vilmablue: "#005DBD",
        vilmaGray: "#EBF2F7",
        vilmaWhite: "#FCFCFC",
      },
    },
  },
  plugins: [],
};
