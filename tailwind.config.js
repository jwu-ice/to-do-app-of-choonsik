const repeatObject = ({
  className,
  imageName,
  repeat = 1,
  path = "assets/",
  extension = "png",
}) => {
  const object = [...Array(repeat)].reduce((prev, _, i) => {
    prev[`${className}${i + 1}`] = `url(${path}${imageName}${
      i + 1
    }.${extension})`
    return prev
  }, {})

  return object
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        ...repeatObject({
          className: "checkbox-",
          imageName: "checkBox",
          repeat: 8,
        }),
        ...repeatObject({
          className: "checkbox-checked-",
          imageName: "checkBox_checked",
          repeat: 8,
        }),
        ...repeatObject({
          className: "line-",
          imageName: "line",
          repeat: 8,
        }),
        "choonsik-input": "url('assets/choonsik-input.png')",
        "choonsik-loading-1": "url('assets/choonsik-loading1.png')",
        "choonsik-loading-2": "url('assets/choonsik-loading2.png')",
      },
      boxShadow: {
        "animate-slide": "inset 10em 0 0 0 rgba(0, 0, 0, 0.2)",
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
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
}
