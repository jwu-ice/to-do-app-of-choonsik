let TODO_ITEMS_COUNT = 8

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        ...repeatObject("checkbox-", "checkBox", TODO_ITEMS_COUNT, "assets/", "png"),
        "choonsik-bg": "url('assets/choonsik-bg.png')",
        "choonsik-title": "url('assets/choonsik-title.png')",
      },
    },
  },
  plugins: [],
}

function repeatObject(
  utilityName,
  imageName,
  repeatNumber = 1,
  path = "assets/",
  extension = "png",
) {
  const object = [...Array(repeatNumber)].reduce((prev, _, i) => {
    prev[`${utilityName}${i + 1}`] = `url(${path}${imageName}${i + 1}.${extension})`
    return prev
  }, {})

  console.log("object", object)

  return object
}
