/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nica-blue": "#003087",
        "nica-blue-dark": "#001f5c",
        "nica-blue-light": "#1a55c0",
        "nica-blue-soft": "#e8f0ff",
        "nica-gold": "#c8941a",
        "nica-gold-dark": "#9f7315",
        "nica-gold-light": "#f5cc66",
        "nica-gold-soft": "#fdf6e3",
        vilmaDarkBlue: "#1a288fff",
        vilmablue: "#005DBD",
        vilmaGray: "#EBF2F7",
        vilmaWhite: "#FCFCFC",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in-up": "fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        float: "float 3s ease-in-out infinite",
        "float-slow": "floatSlow 4s ease-in-out infinite",
        "pulse-ring": "pulseRing 2.5s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(3deg)" },
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(0,48,135,0.4)" },
          "70%": { boxShadow: "0 0 0 12px rgba(0,48,135,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(0,48,135,0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
