import { useRecoilState, useRecoilValue } from "recoil"
import TodoItem from "@/components/TodoItem"
import useLocalStorage from "@/hooks/useLocalStore"
import { todoListState } from "@/store"

export type todoJSONType = {
  id: number
  text: string
  isCheck: boolean
  date: string
}

const TodoList = () => {
  const todoList = useRecoilValue(todoListState)

  return (
    <div id="투두리스트" className="grid grid-cols-1">
      {todoList?.reduceRight((prev: todoJSONType[], todo: todoJSONType) => {
        return [...prev, <TodoItem key={todo.id} {...todo} />]
      }, [])}
    </div>
  )
}
export default TodoList
