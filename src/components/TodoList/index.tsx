import { useRecoilValue } from "recoil"
import { ReactNode } from "react"
import Loading from "../Loading/index"
import TodoItem from "@/components/TodoItem"
import { atomTodoIds } from "@/store/todoIds"

export type todoJSONType = {
  id: number
  text: string
  isCheck: boolean
  date: string
}

const TodoList = () => {
  const todoIds = useRecoilValue(atomTodoIds)

  const hasTodos = Array.isArray(todoIds) && todoIds.length

  return (
    <div className="scrollbar-thin scrollbar-track-transparent/5  scrollbar-thumb-transparent/10 scrollbar-track-rounded-2xl scrollbar-thumb-rounded-2xl hover:scrollbar-thumb-transparent/20 my-1 h-full ">
      {hasTodos ? (
        <div id="투두리스트" className="grid grid-cols-1 gap-1">
          {todoIds.reduceRight((prev: ReactNode[], todoId: number) => {
            return [...prev, <TodoItem key={todoId} todoId={todoId} />]
          }, [])}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default TodoList
