import { useMemo } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
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

export default CheckBox
