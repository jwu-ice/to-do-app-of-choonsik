import CheckBox from "@/components/TodoItem/CheckBox"
import Line from "@/components/TodoItem/Line"
import TextInput from "@/components/TodoItem/TextInput"
import { todoJSONType } from "@/components/TodoList"

const TodoItem = (todo: todoJSONType) => {
  // 여기에 business logic 놓는게 좋을듯
  console.log("todo :>> ", todo)

  return (
    <div className="flex gap-2 p-2">
      <CheckBox id={todo.id} />
      <div className="w-full">
        <TextInput id={todo.id} />
        <Line />
      </div>
    </div>
  )
}

export default TodoItem
