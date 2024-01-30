/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "federal-blue": "#2F1D62",
        "tropical-indigo": "#9381FF",
        "ghost-white": "#F8F7FF",
        "dim-grey": "#666666",
      },
      fontFamily: {
        sans: ["Roboto", "Ubuntu", "Helvetica Neue", "sans-serif"],
        display: ["Yeseva One", "Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
