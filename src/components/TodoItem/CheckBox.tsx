import { KeyboardEvent, KeyboardEventHandler, memo, useMemo } from "react"
import { betweenRandomNumber } from "@/utils/number"

const CheckBox = (props: {
  isCheck: boolean
  handleToggleCheck: () => void
}) => {
  const { isCheck, handleToggleCheck } = props

  const randomNumber = useMemo(() => {
    return betweenRandomNumber(1, 8)
  }, [])

  const checkboxStatus = isCheck
    ? `bg-checkbox-checked-${randomNumber}`
    : `bg-checkbox-${randomNumber}`

  return (
    <button
      className="h-10 w-11 focus:ring-blue-400 focus:rounded-xl focus:ring-4 focus:outline-none"
      onClick={handleToggleCheck}
      tabIndex={0}
      role="checkbox"
      aria-checked={isCheck}
    >
      <div
        className={`${checkboxStatus} w-full h-full bg-cover cursor-pointer hover:opacity-70`}
      />
    </button>
  )
}
// export default memo(CheckBox, (prev, next) => {
//   return prev.isCheck === next.isCheck
// })

export default CheckBox
