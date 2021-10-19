module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{ts,jsx,tsx}",
    "./components/**/*.{ts,jsx,tsx}",
    "./ui/**/*.{ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      "my-font": ["-apple-system", "BlinkMacSystemFont", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
