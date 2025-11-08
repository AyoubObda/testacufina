/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5fbff", 100: "#e6f4ff", 200: "#d6e9ff", 300: "#a8d1ff",
          400: "#73b6ff", 500: "#3b9bff", 600: "#0f70e6", 700: "#0a58b3",
          800: "#083f80", 900: "#062b59"
        }
      }
    }
  },
  plugins: []
};
