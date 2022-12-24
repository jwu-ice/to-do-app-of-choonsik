import { memo } from "react"
import { betweenRandomNumber } from "@/utils/number"

const Line = () => {
  const randomLineName = `bg-line-${betweenRandomNumber(1, 8)}`

  return (
    <div className="relative bottom-3 -z-10 ml-3 bg-transparent opacity-80 ">
      {
        <div
          className={`${randomLineName} absolute aspect-square h-6 w-full bg-contain bg-no-repeat`}
        />
      }
    </div>
  )
}

export default memo(Line)
