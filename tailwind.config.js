const { TODO_ITEMS_COUNT } = require("./src/settings")
const { repeatObject } = require("./src/utils/repeatObject")

// BUG
// safelist not work variant

const height_px_0_100 = [...Array(101).keys()].flatMap((v) => [`h-[${v}px]`])

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        ...repeatObject({
          className: "checkbox-",
          imageName: "checkBox",
          repeat: TODO_ITEMS_COUNT,
        }),
        ...repeatObject({
          className: "checkbox-checked-",
          imageName: "checkBox_checked",
          repeat: TODO_ITEMS_COUNT,
        }),
        ...repeatObject({
          className: "line-",
          imageName: "line",
          repeat: TODO_ITEMS_COUNT,
        }),
        "choonsik-bg": "url('assets/choonsik-bg.png')",
        "choonsik-input": "url('assets/choonsik-input.png')",
        "choonsik-loading-1": "url('assets/choonsik-loading1.png')",
        "choonsik-loading-2": "url('assets/choonsik-loading2.png')",
      },
    },
  },
  safelist: [
    "choonsik-1",
    "choonsik-2",
    { pattern: /bg-(checkbox|line)-\d+/ },
    { pattern: /bg-(checkbox)-checked-\d+/ },
    // { pattern: /h-\[\d+px\]/ },
    // ...height_px_0_100,
  ],
  plugins: [
    // require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
}
