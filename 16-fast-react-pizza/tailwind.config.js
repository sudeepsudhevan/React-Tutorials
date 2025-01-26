/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      colors: {
        pizza: {
          50: "#f9f9f9", // Add more shades
          100: "#f4f4f4",
          200: "#eaeaea",
          300: "#e0e0e0",
          400: "#c7c7c7",
        },
        height :{
          screen: '100dvh',
        }
      },
    },
    plugins: [],
  },
};
