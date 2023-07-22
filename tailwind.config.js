/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        hoverColor: "rgba(28, 27, 35, 0.2)",
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        scaleUp: "scaleUp 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
