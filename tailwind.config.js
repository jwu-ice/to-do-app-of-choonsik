const { TODO_ITEMS_COUNT } = require("./src/settings")
const { repeatObject } = require("./src/utils")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        ...repeatObject({
          utilityName: "checkbox-",
          imageName: "checkBox",
          repeat: TODO_ITEMS_COUNT,
        }),
        "choonsik-bg": "url('assets/choonsik-bg.png')",
      },
      backgroundSize: {
        16: "4rem",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
