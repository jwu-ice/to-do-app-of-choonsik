export const repeatObject = ({
  utilityName,
  imageName,
  repeat = 1,
  path = "assets/",
  extension = "png",
}: {
  utilityName: string
  imageName: string
  repeat: number
  path?: string
  extension?: "jpg" | "jpeg" | "png" | "svg"
}) => {
  const object = [...Array(repeat)].reduce((prev, _, i) => {
    prev[`${utilityName}${i + 1}`] = `url(${path}${imageName}${i + 1}.${extension})`
    return prev
  }, {})

  return object
}
