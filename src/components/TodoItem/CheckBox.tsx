import { memo, useCallback, useMemo } from "react"
import { betweenRandomNumber } from "@/utils/number"
import { todoJSONType } from "@/components/TodoList"
import useLocalStorage from "@/hooks/useLocalStore"
import { todoListState } from "@/store"

const CheckBox = (props: Pick<todoJSONType, "id">) => {
  const { id } = props
  const { store: todos, updateData: updateTodos } = useLocalStorage("todos")
  const { isCheck } = todos.find((todo: todoJSONType) => todo.id === id)

  const randomNumber = useMemo(() => {
    return betweenRandomNumber(1, 8)
  }, [id])

  const checkboxUrl = isCheck
    ? `bg-checkbox-checked-${randomNumber}`
    : `bg-checkbox-${randomNumber}`

  const handleToggleCheck = useCallback(() => {
    updateTodos(id, { isCheck: !isCheck })
  }, [id])

  return (
    <div className="h-10 w-11" onClick={handleToggleCheck}>
      <div
        className={`${checkboxUrl} w-full h-full bg-cover cursor-pointer hover:opacity-70 `}
      />
    </div>
  )
}
export default CheckBox
