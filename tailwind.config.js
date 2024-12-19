/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        "100": "#F2B304",
        "200": "#FFBB00",
        "300": "#FFCF4B",
        "400": "#FFC422"
      },
      gray: {
        "100": "#F9F9F9",
        "200": "#EEE7E7",
        "300": "rgba(38, 50, 56, 0.5)"
      },
      white: "#FFF",
      heading: "#263238",
    },
    extend: {},
  },
  plugins: [],
}

