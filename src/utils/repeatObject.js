// eslint-disable-next-line no-undef
module.exports = {
  repeatObject: ({
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
  },
}
