import { useRecoilValue } from "recoil"
import { ReactNode } from "react"
import TodoItem from "@/components/TodoItem"
import { atomTodoIds } from "@/store/atoms"

export type todoJSONType = {
  id: number
  text: string
  isCheck: boolean
  date: string
}

const TodoList = () => {
  const todoIds = useRecoilValue(atomTodoIds)

  return (
    <div id="투두리스트" className="grid grid-cols-1 gap-3">
      {todoIds.length ? (
        todoIds.reduceRight((prev: ReactNode[], todoId: number) => {
          return [...prev, <TodoItem key={todoId} todoId={todoId} />]
        }, [])
      ) : (
        <div>todo 작성하세요</div>
      )}
    </div>
  )
}

export default TodoList
