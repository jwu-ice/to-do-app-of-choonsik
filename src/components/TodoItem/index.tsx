import { useRecoilState, useSetRecoilState } from "recoil"
import { ChangeEvent, useMemo } from "react"
import CheckBox from "@/components/TodoItem/CheckBox"
import Line from "@/components/TodoItem/Line"
import TextInput from "@/components/TodoItem/TextInput"
import { todoJSONType } from "@/components/TodoList"
import { atomFamilyTodo, atomTodoList } from "@/store/atoms"

const TodoItem = (props: any) => {
  const { id, text, isCheck, date } = props

  const handleToggleCheck = () => {
    ;("")
  }
  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    ;("")
  }
  return (
    <div className="flex gap-2 p-2">
      <CheckBox isCheck={isCheck} handleToggleCheck={handleToggleCheck} />
      <div className="flex flex-col w-full">
        <TextInput text={"1"} handleChangeText={handleChangeText} />
        <Line />
      </div>
    </div>
  )
}

export default TodoItem
