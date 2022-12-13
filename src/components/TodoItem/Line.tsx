import { memo } from "react"
import { betweenRandomNumber } from "@/utils/number"

const Line = () => {
  const randomLineName = `bg-line-${betweenRandomNumber(1, 8)}`
  return (
    <div className="w-full h-4">
      {<div className={`${randomLineName} w-full h-full bg-contain `} />}
    </div>
  )
}

export default Line
