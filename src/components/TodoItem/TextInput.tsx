import useLocalStorage from "../../hooks/useLocalStore"
import { todoJSONType } from "@/components/TodoList"

const TextInput = (props: Pick<todoJSONType, "id">) => {
  const { id } = props
  const { store: todos } = useLocalStorage("todos")

  const { text } = todos.find((todo: todoJSONType) => todo.id === id)

  return <div className="w-full">{text}</div>
}

export default TextInput
