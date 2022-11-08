export const betweenRandomNumber = (to = 1, from: number) => {
  return (to + Math.random() * from) >> 0
}
