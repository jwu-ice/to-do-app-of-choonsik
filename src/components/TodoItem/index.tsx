import CheckBox from "@/components/TodoItem/CheckBox"
import Line from "@/components/TodoItem/Line"
import TextInput from "@/components/TodoItem/TextInput"

const TodoItem = (props: any) => {
  const { todoId } = props

  return (
    <div className="flex gap-2 p-2">
      <CheckBox id={todoId} />
      <div className="flex flex-col w-full">
        <TextInput id={todoId} />
        <Line />
      </div>
    </div>
  )
}

export default TodoItem
