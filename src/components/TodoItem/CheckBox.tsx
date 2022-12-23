import { useMemo } from "react"
import { useRecoilValue } from "recoil"
import { betweenRandomNumber } from "@/utils/number"
import { atomFamilyTodo, useDispatchTodo } from "@/store/todo"

const CheckBox = ({ id }: { id: number }) => {
  const { dispatch } = useDispatchTodo()
  const todo = useRecoilValue(atomFamilyTodo(id))
  const { isCheck } = todo

  const handleToggleCheck = () => {
    dispatch(id, { type: "CHECK" })
  }

  const randomNumber = useMemo(() => {
    return betweenRandomNumber(1, 8)
  }, [])

  const checkboxStatus = isCheck
    ? `bg-checkbox-checked-${randomNumber}`
    : `bg-checkbox-${randomNumber}`

  return (
    <button
      className="aspect-square h-6 focus:rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400"
      onClick={handleToggleCheck}
      tabIndex={0}
      role="checkbox"
      aria-checked={isCheck}
    >
      <div
        className={`${checkboxStatus} h-full w-full cursor-pointer bg-cover hover:opacity-70`}
      />
    </button>
  )
}

export default CheckBox
