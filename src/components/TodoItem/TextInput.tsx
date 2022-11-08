import { TodoItemType } from "@/components/TodoItem"

const TextInput = (props: Pick<TodoItemType, "text">) => {
  const { text } = props
  return <div>{text}</div>
}

export default TextInput
