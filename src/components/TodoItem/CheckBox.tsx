import { memo, useMemo } from "react"
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
    <div className="h-10 w-11" onClick={handleToggleCheck}>
      <div
        className={`${checkboxStatus} w-full h-full bg-cover cursor-pointer hover:opacity-70 `}
      />
    </div>
  )
}
// export default memo(CheckBox, (prev, next) => {
//   return prev.isCheck === next.isCheck
// })

export default CheckBox
