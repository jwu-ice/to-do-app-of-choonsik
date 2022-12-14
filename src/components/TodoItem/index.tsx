import CheckBox from "@/components/TodoItem/CheckBox"
import Line from "@/components/TodoItem/Line"
import TextArea from "@/components/TodoItem/TextArea"

const TodoItem = (props: any) => {
  const { todoId } = props

  return (
    <div className="relative z-10">
      <div className="flex gap-2 p-2">
        <CheckBox id={todoId} />
        <TextArea id={todoId} />
      </div>
      <Line />
    </div>
  )
}

export default TodoItem
