import { memo } from "react"
import { betweenRandomNumber } from "@/utils/number"

const Line = () => {
  const randomLineName = `bg-line-${betweenRandomNumber(1, 8)}`

  return (
    <div className="relative ml-3 bg-transparent -z-10 opacity-80 bottom-4">
      {
        <div
          className={`${randomLineName} w-full h-6 bg-contain bg-no-repeat absolute aspect-square`}
        />
      }
    </div>
  )
}

export default memo(Line)
