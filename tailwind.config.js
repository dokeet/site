const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{ts,jsx,tsx}",
    "./components/**/*.{ts,jsx,tsx}",
    "./ui/**/*.{ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.gray.500"),
              "&:hover": {
                color: theme("colors.gray.700"),
              },
              code: { color: theme("colors.gray.400") },
            },
            thead: {
              borderBottomColor: theme("colors.gray.200"),
            },
            code: { color: theme("colors.gray.900") },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.gray.400"),
              "&:hover": {
                color: theme("colors.gray.600"),
              },
              code: { color: theme("colors.gray.400") },
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
              color: theme("colors.gray.300"),
            },
            "h1,h2,h3,h4,h5,h6": {
              color: theme("colors.gray.100"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.500") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.500") },
              },
            },
            strong: { color: theme("colors.gray.100") },
          },
        },
      }),
    },
    fontFamily: {
      sans: ["Inter", ...fontFamily.sans],
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
