import { useMemo } from "react"
import { useRecoilState } from "recoil"
import { betweenRandomNumber } from "@/utils/number"
import { atomFamilyTodo } from "@/store/atoms"

const CheckBox = ({ id }: { id: number }) => {
  const [todo, setTodo] = useRecoilState(atomFamilyTodo(id))
  const { isCheck } = todo

  const handleToggleCheck = () => {
    setTodo({ ...todo, isCheck: !isCheck })
  }

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
