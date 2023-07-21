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
    },
  },
  plugins: [],
};
