module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'intro-background': '#222e35',
        'intro-border': '#008069',
        'unread': '#00a884',
        'app-background': '#111b21'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
