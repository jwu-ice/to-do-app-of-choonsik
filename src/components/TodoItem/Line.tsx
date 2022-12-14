import { memo } from "react"
import { betweenRandomNumber } from "@/utils/number"

const Line = () => {
  const randomLineName = `bg-line-${betweenRandomNumber(1, 8)}`
  return (
    <div className="relative ml-2 bg-transparent -z-10 opacity-80 bottom-6">
      {
        <div
          className={`${randomLineName} w-full h-8 bg-no-repeat absolute top-1`}
        />
      }
    </div>
  )
}

export default Line
