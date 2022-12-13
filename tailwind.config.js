const { TODO_ITEMS_COUNT } = require("./src/settings")
const { repeatObject } = require("./src/utils/repeatObject")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  safelist: [
    { pattern: /bg-(checkbox|line)-\d+/ },
    { pattern: /bg-(checkbox)-checked-\d+/ },
    // FIXME asdasdas 왜 JIT 모드 h-[120px]같은건 적용이 안될까?
    // 위에는 왜 되는거지
    // { pattern: /h-\[\d+px\]/ },
  ],
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
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
