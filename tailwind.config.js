const { TODO_ITEMS_COUNT } = require("./src/settings")
const { repeatObject } = require("./src/utils/repeatObject")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  safelist: [{ pattern: /bg-(checkbox|line)-\d+/ }],
  theme: {
    extend: {
      backgroundImage: {
        ...repeatObject({
          className: "checkbox-",
          imageName: "checkBox",
          repeat: TODO_ITEMS_COUNT,
        }),
        ...repeatObject({
          className: "line-",
          imageName: "line",
          repeat: TODO_ITEMS_COUNT,
        }),
        "choonsik-bg": "url('assets/choonsik-bg.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
