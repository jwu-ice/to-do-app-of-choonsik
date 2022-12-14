import { memo } from "react"
import { betweenRandomNumber } from "@/utils/number"

const Line = () => {
  const randomLineName = `bg-line-${betweenRandomNumber(1, 8)}`
  return (
    <div className="relative bg-transparent ">
      {
        <div
          className={`${randomLineName} w-full h-8 bg-no-repeat absolute bottom-[0.5rem] opacity-80`}
        />
      }
    </div>
  )
}

export default Line
