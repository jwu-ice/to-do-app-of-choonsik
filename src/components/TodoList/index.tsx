import { useRecoilValue } from "recoil"
import { ReactNode, useMemo } from "react"
import TodoItem from "@/components/TodoItem"
import { atomTodoList } from "@/store/atoms"

export type todoJSONType = {
  id: number
  text: string
  isCheck: boolean
  date: string
}

const TodoList = () => {
  const todoList = useRecoilValue(atomTodoList)
  console.log("todoList :>> ", todoList)

  return (
    <div id="투두리스트" className="grid grid-cols-1 gap-3">
      {todoList.length ? (
        todoList.reduceRight((prev: ReactNode[], todo: todoJSONType, index) => {
          return [...prev, <TodoItem key={todo.id} {...todo} />]
        }, [])
      ) : (
        <div>todo 작성하세요</div>
      )}
    </div>
  )
}

export default TodoList
