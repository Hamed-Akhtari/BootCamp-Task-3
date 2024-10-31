module.exports = {
  content: ["./public/**/*.{html,js}", "./assets/images/*.svg"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["vazirmatn"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
