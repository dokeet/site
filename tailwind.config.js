const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.900"),
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
              color: theme("colors.gray.300"),
              "&:hover": {
                color: theme("colors.gray.400"),
              },
            },
            code: { color: theme("colors.gray.100") },
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
              color: theme("colors.gray.100"),
            },
            "h1,h2,h3,h4": {
              color: theme("colors.gray.100"),
            },
            p: {
              color: theme("colors.gray.100"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.100") },
                color: theme("colors.gray.100"),
              },
            },
            ul: {
              li: {
                "&:before": {
                  backgroundColor: theme("colors.gray.100"),
                },
                color: theme("colors.gray.100"),
              },
            },
            strong: { color: theme("colors.gray.100") },
            "th, td": {
              color: theme("colors.gray.100"),
            },
            "tbody tr, thead": {
              borderBottomColor: theme("colors.gray.100"),
            },
          },
        },
      }),
    },
    fontFamily: {
      sans: ["Nunito", ...fontFamily.sans],
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
