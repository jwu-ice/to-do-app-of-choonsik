let TODO_ITEMS_COUNT = 8

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        ...repeatObject({
          utilityName: "checkbox-",
          imageName: "checkBox",
          repeatNumber: TODO_ITEMS_COUNT,
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

function repeatObject({
  utilityName,
  imageName,
  repeatNumber = 1,
  path = "assets/",
  extension = "png",
}) {
  const object = [...Array(repeatNumber)].reduce((prev, _, i) => {
    prev[`${utilityName}${i + 1}`] = `url(${path}${imageName}${i + 1}.${extension})`
    return prev
  }, {})

  return object
}
